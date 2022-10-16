import styles from "../styles/components/Alert.module.css"
import { useSelector, useDispatch } from "react-redux"
import { clearAlertInfo, getAlertInfo } from "../store/slices/EnvironmentSlice";
import { useEffect } from "react";

export default function Alert() {
  const alert = useSelector(getAlertInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    let timeout;
    if (alert && alert?.type !== 'processing') {
      timeout = setTimeout(() => {
        dispatch(clearAlertInfo())
      }, 2000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return (
    <div className={`${styles.alert__container} ${alert ? styles.show : ''}`}>
      {alert?.type === 'processing' && (
        <div className={styles.alert__loading}>
          <span></span>
        </div>
      )}

      <div className={styles.alert__message}>
        {alert?.icon && (
          <div className={`${styles.alert__icon} 
          ${alert?.type === 'success' ? styles.alert__icon__success : styles.alert__icon__error}`}>
            <i className={alert?.icon}></i>
          </div>
        )}
        {alert?.message && (
          <div className={styles.alert__message}>
            <p>{alert?.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
