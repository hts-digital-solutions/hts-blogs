import Head from "next/head";
import React, { useState } from "react";
import AppContainer from "../components/AppContainer";
import { _config } from "../utils/helper_functions";

import "hts-react-form/styles/default.css";
import styles from "../styles/Login.module.css";
import btnStyles from "../styles/components/Button.module.css";
import { HTSReactForm } from "hts-react-form";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const setValue = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

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
          <p>Start your journey with million of thoughts.</p>

          <HTSReactForm
            controls={[
              {
                label: "Email",
                type: "text",
                name: "email",
                value: data.email,
                onChange: setValue,
                required: true,
                validation: {
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email.",
                },
              },
              {
                label: "Password",
                type: "password",
                name: "password",
                value: data.password,
                onChange: setValue,
                required: true,
              },
            ]}
            actionControl={{
              label: "Login",
              onSubmit: loginHandler,
              className: `${btnStyles.button} ${btnStyles.primary}`,
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
