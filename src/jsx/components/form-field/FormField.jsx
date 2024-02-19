import { Field, ErrorMessage } from 'formik';
import styles from './FromField.module.css';

const FormField = ({ children, id, name, ...props }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
      <Field className={styles.input} id={id} name={name} {...props} />
      <span className={styles.error}>
        <ErrorMessage name={name} as="span" />
      </span>
    </div>
  );
};

export default FormField;
