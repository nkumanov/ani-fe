import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Login.module.scss";

import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/features/authSlice";
import { useLoginUserMutation } from "../../store/api/auth.api";
import { useNavigate } from "react-router-dom";
type User = {
  username: string;
  password: string;
};
function Login() {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (isAdmin) {
      navigate("/admin/guests");
    }
  }, [navigate]);
  const { register, handleSubmit } = useForm<User>();
  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      dispatch(setCredentials(response));
      if (response) {
        navigate("/admin/guests");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={styles.wrapper}>
      <h3>Login</h3>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className={styles.userForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formElement}>
              <label htmlFor="">Username</label>
              <input type="text" {...register("username")} />
            </div>
            <div className={styles.formElement}>
              <label htmlFor="">Password</label>
              <input type="password" {...register("password")} />
            </div>

            <button className={styles.submitBtn} type="submit">
              Login
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Login;
