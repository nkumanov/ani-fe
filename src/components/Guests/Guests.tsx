import { useState } from "react";
import { Attend } from "../../shared/guest.model";
import { useGetAllGuestsQuery } from "../../store/api/guests.api";
import styles from "./Guests.module.scss";
enum UserAttend {
  comming = "Ще присъства",
  notComming = "Няма, да присъства",
}

enum Meal {
  meat = "Месно",
  vegie = "Вегетарианско",
}
function Guests() {
  const { data, isLoading, error } = useGetAllGuestsQuery();
  const [filter, setFilter] = useState<"all" | Attend>("all");
  if (isLoading) return <p>Loading...</p>;
  const showGuests = (filter: "all" | Attend) => {
    switch (filter) {
      case "all": {
        return data?.map((user, index) => (
          <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.attend ? UserAttend[user.attend] : "Няма информация"}</td>
            <td>{user.meal ? Meal[user.meal] : ""}</td>
            <td>{user.alergy ? user.alergy : ""}</td>
          </tr>
        ));
      }
      case Attend.Comming: {
        return data
          ?.filter((guest) => guest.attend === Attend.Comming)
          .map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>
                {user.attend ? UserAttend[user.attend] : "Няма информация"}
              </td>
              <td>{user.meal ? Meal[user.meal] : ""}</td>
              <td>{user.alergy ? user.alergy : ""}</td>
            </tr>
          ));
      }
      case Attend.NotComming: {
        return data
          ?.filter((guest) => guest.attend === Attend.NotComming)
          .map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>
                {user.attend ? UserAttend[user.attend] : "Няма информация"}
              </td>
              <td>{user.meal ? Meal[user.meal] : ""}</td>
              <td>{user.alergy ? user.alergy : ""}</td>
            </tr>
          ));
      }
    }
  };
  return (
    <section className={styles.wrapper}>
      <h1>List of all guests</h1>
      {isLoading && <p>Loading...</p>}
      {data && (
        <p className={styles.numberOfGuests}>
          Брой присъстващи гости:{" "}
          {data.filter((guest) => guest.attend === Attend.Comming).length}
        </p>
      )}
      {data && (
        <p className={styles.numberOfGuests}>
          Брой НЕ присъстващи гости:{" "}
          {data.filter((guest) => guest.attend === Attend.NotComming).length}
        </p>
      )}
      <div className={styles.formElementSelect}>
        <label htmlFor="">Присъствие:</label>
        <select
          name="guestCount"
          id=""
          onChange={(e) => setFilter(e.currentTarget.value as any)}
        >
          <option value="all">Всички</option>
          <option value={Attend.Comming}>Присъстващи</option>
          <option value={Attend.NotComming}>Неприсъстващи</option>
        </select>
      </div>
      {error && <p>Възникна някаква грешка. Моля опитайте по-късно.</p>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Има</th>
              <th>Присъствие</th>
              <th>Избор на меню</th>
              <th>Алергия</th>
            </tr>
          </thead>
          <tbody>{data && showGuests(filter)}</tbody>
        </table>
      )}
    </section>
  );
}

export default Guests;
