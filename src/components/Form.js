import React from "react";

import styles from "../styles/components/Form.module.css";
import Button from "./Button";

function Form({
  controls,
  actionControl,
  forgetPassword = false,
  googleLogin = false,
  githubLogin = false,
  facebookLogin = false,
}) {
  const renderControl = (control) => {
    const labelTag = (
      <label className={styles.form__label}>{control.label}</label>
    );
    const InputTag = (
      <input
        type={control.type}
        name={control.name}
        placeholder={control?.placeholder}
        value={control?.value}
        onChange={control?.onChange}
        className={styles.form__control}
      />
    );

    const SelectTag = (
      <select
        name={control.name}
        value={control?.value}
        onChange={control?.onChange}
        className={styles.form__control}
      ></select>
    );

    const TextareaTag = (
      <textara
        name={control.name}
        placeholder={control?.placeholder}
        value={control?.value}
        onChange={control?.onChange}
        className={styles.form__control}
      ></textara>
    );

    switch (control.type) {
      case "text":
        return (
          <div className={styles.form__control__group}>
            {labelTag}
            {InputTag}
          </div>
        );
      case "select":
        return (
          <div className={styles.form__control__group}>
            {labelTag}
            {SelectTag}
          </div>
        );
      case "textarea":
        return (
          <div className={styles.form__control__group}>
            {labelTag}
            {TextareaTag}
          </div>
        );
      default:
        return (
          <div className={styles.form__control__group}>
            {labelTag}
            {InputTag}
          </div>
        );
    }
  };
  return (
    <form onSubmit={actionControl?.onSubmit} className={styles.form__container}>
      {controls?.map((control) => renderControl(control))}

      {actionControl && (
        <div className={styles.form__control__button}>
          <div className={styles.form__social}>
            {googleLogin && (
              <button onClick={googleLogin?.onClick} type="button">
                {googleLogin?.label}
              </button>
            )}

            {facebookLogin && (
              <button onClick={facebookLogin?.onClick} type="button">
                {facebookLogin?.label}
              </button>
            )}

            {githubLogin && (
              <button onClick={githubLogin?.onClick} type="button">
                {githubLogin?.label}
              </button>
            )}
          </div>
          <Button title={actionControl?.label} spacingX={0} spacingY={0.5} />
        </div>
      )}

      {forgetPassword && (
        <button
          className={styles.form__forgot}
          type="button"
          onClick={forgetPassword?.onClick}
        >
          {forgetPassword?.label}
        </button>
      )}
    </form>
  );
}

export default Form;
