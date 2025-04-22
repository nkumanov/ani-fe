import { useGetAllGuestsQuery } from "../../store/api/guests.api";
import styles from "./Guests.module.scss";
enum Attend {
  comming = "Ще присъства",
  notComming = "Няма, да присъства",
}
enum Meal {
  meat = "Месно",
  vegie = "Вегетарианско",
}
function Guests() {
  const { data, isLoading, error } = useGetAllGuestsQuery();
  if (isLoading) return <p>Loading...</p>;
  return (
    <section className={styles.wrapper}>
      <h1>List of all guests</h1>
      {isLoading && <p>Loading...</p>}
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
          <tbody>
            {data &&
              data?.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>
                    {user.attend ? Attend[user.attend] : "Няма информация"}
                  </td>
                  <td>{user.meal ? Meal[user.meal] : "Няма информация"}</td>
                  <td>{user.alergy ? user.alergy : ""}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Guests;
