import { useEffect, useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import styles from "./Attendance.module.scss";
import { useAddNewGuestMutation } from "../../store/api/guests.api";
import { FormValues, Attend } from "../../shared/guest.model";
import { useLocation, useNavigate } from "react-router-dom";

function Attendance() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
    setValue,
    control,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      attend: null,
      guestCount: "1",
      guests: [{ name: "", meal: null, alergy: "" }],
    },
  });
  const [addNewGuest, { isSuccess }] = useAddNewGuestMutation();
  const { append, remove, fields } = useFieldArray({
    name: "guests",
    control,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPath = location.pathname.includes("admin") ? "admin" : "";
  const guestCountWatch = parseInt(watch("guestCount") || "1");
  const attend = watch("attend");
  const onSubmitHandler: SubmitHandler<FormValues> = async (data) => {
    if (data.attend === Attend.NotComming) {
      const formDataToSend = {
        attend: data.attend,
        name: data.notComingAttendee,
      };
      try {
        await addNewGuest({
          userData: formDataToSend,
          location: isAdminPath,
        }).unwrap();
      } catch (error) {
        console.log(error);
      }
    } else {
      const formDataToSend = {
        attend: data.attend as Attend,
        guests: data.guests,
      };
      try {
        await addNewGuest({
          userData: formDataToSend,
          location: isAdminPath,
        }).unwrap();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    if (isAdminPath === "admin" && isSuccess) {
      navigate("/admin/guests");
    }
  }, [isSuccess, isAdminPath]);
  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      const currentGuests = fields.length;

      if (guestCountWatch > currentGuests) {
        for (let i = currentGuests; i < guestCountWatch; i++) {
          append({ name: "", meal: null, alergy: "" }, { shouldFocus: false });
        }
      } else if (guestCountWatch < currentGuests) {
        // Remove extra guests
        for (let i = currentGuests; i > guestCountWatch; i--) {
          remove(i - 1);
        }
      }
    }
  }, [guestCountWatch, fields.length, append, remove]);
  return (
    <section className={styles.attendanceForm}>
      <h2>Присъствие</h2>
      {localStorage.getItem("userAnswer") && (
        <p className={styles.answer}>
          Благодарим Ви, за отговора! Вие попълнихте нашия въпросник. В случай,
          че искате да промените вашия отговор, бихме помолили да се свържете с
          нас!
        </p>
      )}
      {!localStorage.getItem("userAnswer") && (
        <>
          <h3>Моля, попълнете следните въпроси</h3>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className={`${styles.formElement} ${styles.flexCol}`}>
              <h5>Ще присъствате ли на нашено тържество?</h5>
              <div>
                <input
                  {...register("attend", { required: "Задължително поле." })}
                  type="radio"
                  id="coming"
                  value={Attend.Comming}
                />
                <label className={styles.bulletOption} htmlFor="coming">
                  Да, ще присъствам
                </label>
              </div>
              <div>
                <input
                  {...register("attend", { required: "Задължително поле." })}
                  type="radio"
                  id="notComing"
                  value={Attend.NotComming}
                />
                <label className={styles.bulletOption} htmlFor="notComing">
                  Не, няма да присъствам
                </label>
              </div>

              {attend === Attend.NotComming && (
                <div className={`${styles.formElement} ${styles.flexCol}`}>
                  <label htmlFor="name">Име и фамилия</label>
                  <input
                    type="text"
                    id="name"
                    {...register(`notComingAttendee`, {
                      required: "Задължително поле",
                      pattern: {
                        value: /^[\p{L}\s]+$/u,
                        message: "Моля въведете валидно име.",
                      },
                    })}
                    onBlur={(e) => {
                      const trimmed = e.target.value.trim();
                      setValue("notComingAttendee", trimmed, {
                        shouldValidate: true,
                      });
                    }}
                  />
                  {errors.notComingAttendee?.message && (
                    <p className={styles.errorMessage}>
                      {errors.notComingAttendee?.message}
                    </p>
                  )}
                </div>
              )}
              {attend === Attend.Comming && (
                <div
                  className={styles.formElementSelect}
                  style={{ marginTop: "1.4rem" }}
                >
                  <label htmlFor="">Колко човека ще присъствате?</label>
                  <select
                    {...register("guestCount")}
                    name="guestCount"
                    id="guestCount"
                    value={'1'}
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n.toString()} value={n.toString()}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {attend === Attend.Comming &&
                fields.map((field, i) => (
                  <section className={styles.delimeter} key={field.id}>
                    <h2>Гост {i + 1}</h2>
                    <div className={`${styles.formElement} ${styles.flexCol}`}>
                      <label htmlFor="name">Име и фамилия</label>
                      <input
                        type="text"
                        id="name"
                        {...register(`guests.${i}.name`, {
                          required: "Задължително поле",
                          pattern: {
                            value: /^[\p{L}\s]+$/u,
                            message: "Моля въведете валидно име.",
                          },
                        })}
                        onBlur={(e) => {
                          const trimmed = e.target.value.trim();
                          setValue(`guests.${i}.name`, trimmed, {
                            shouldValidate: true,
                          });
                        }}
                      />
                      {errors.guests?.[i]?.name?.message && (
                        <p className={styles.errorMessage}>
                          {errors.guests[i]?.name?.message}
                        </p>
                      )}
                    </div>

                    <h5>Какво меню предпочитате?</h5>
                    <div className={styles.formElement}>
                      <input
                        type="radio"
                        id={`guests.${i}.meal.meat`}
                        value="meat"
                        {...register(`guests.${i}.meal`, {
                          required: "Задължително поле",
                        })}
                      />
                      <label
                        className={styles.bulletOption}
                        htmlFor={`guests.${i}.meal.meat`}
                      >
                        Месно
                      </label>
                    </div>
                    <div className={styles.formElement}>
                      <input
                        type="radio"
                        value="vegie"
                        id={`guests.${i}.meal.vegie`}
                        {...register(`guests.${i}.meal`, {
                          required: "Задължително поле",
                        })}
                      />
                      <label
                        className={styles.bulletOption}
                        htmlFor={`guests.${i}.meal.vegie`}
                      >
                        Вегетарианско
                      </label>
                    </div>
                    <div className={`${styles.formElement} ${styles.flexCol}`}>
                      <label htmlFor="alergy">
                        Имате ли някакви хранителни алергии и ако да - какви?
                      </label>
                      <input
                        type="text"
                        id="alergy"
                        {...register(`guests.${i}.alergy`)}
                      />
                    </div>
                  </section>
                ))}
            </div>
            <button type="submit" disabled={!isValid}>
              Изпрати
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default Attendance;
