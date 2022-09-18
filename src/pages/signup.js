import Head from "next/head";
import React, { useState } from "react";
import AppContainer from "../components/AppContainer";
import { _config } from "../utils/helper_functions";

import "hts-react-form/styles/default.css";
import styles from "../styles/Login.module.css";
import btnStyles from "../styles/components/Button.module.css";
import { HTSReactForm } from "hts-react-form";

export default function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signupHandler = (e) => {
    e.preventDefault();
  };

  return (
    <AppContainer>
      <Head>
        <title>Singup - {_config("website-name")}</title>
        <meta
          name="description"
          content="Start your journey with millions of thoughts."
        />
      </Head>

      <div className={styles.login__wrapper}>
        <div className={styles.login__form}>
          <h1>Singup</h1>
          <p>Start your journey with millions of thoughts.</p>

          <HTSReactForm
            controls={[
              {
                label: "Full Name",
                type: "text",
                name: "name",
                value: name,
                onChange: (e) => setName(e.target.value),
                required: true,
              },
              {
                label: "Email",
                type: "text",
                name: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
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
                value: password,
                onChange: (e) => setPassword(e.target.value),
                required: true,
              },
              {
                label: "Confirm Password",
                type: "password",
                name: "cnf_password",
                value: confirmPassword,
                onChange: (e) => setConfirmPassword(e.target.value),
                required: true,
              },
            ]}
            actionControl={{
              label: "Singup",
              onSubmit: signupHandler,
              className: `${btnStyles.button} ${btnStyles.primary}`,
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
