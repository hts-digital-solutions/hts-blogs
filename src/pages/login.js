import Head from "next/head";
import React, { useState } from "react";
import AppContainer from "../components/AppContainer";
import { _config } from "../utils/helper_functions";

import styles from "../styles/Login.module.css";
import Form from "../components/Form";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const loginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <AppContainer>
      <Head>
        <title>Login - {_config("website-name")}</title>
        <meta
          name="description"
          content="Start your journey with millions of thoughts."
        />
      </Head>

      <div className={styles.login__wrapper}>
        <div className={styles.login__form}>
          <h1>Login</h1>
          <p>Start your journey with millions of thoughts.</p>

          <Form
            controls={[
              {
                label: "Email",
                type: "text",
                name: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
              },
              {
                label: "Password",
                type: "password",
                name: "password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
              },
            ]}
            actionControl={{
              label: "Login",
              onSubmit: loginHandler,
            }}
            forgetPassword={{
              label: "Forgot Password?",
              onClick: () => {},
            }}
            googleLogin={{
              label: <i className="la la-google-plus"></i>,
              onClick: () => {},
            }}
            facebookLogin={{
              label: <i className="lab la-facebook"></i>,
              onClick: () => {},
            }}
            githubLogin={{
              label: <i className="la la-github"></i>,
              onClick: () => {},
            }}
          />
        </div>
      </div>
    </AppContainer>
  );
}
