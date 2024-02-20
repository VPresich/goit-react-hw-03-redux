import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/items/actions';
import { useId } from 'react';
import { Formik, Form } from 'formik';
import { INITIAL_CONTACT } from '../../auxiliary/constants';
import { FeedbackSchema } from '../../auxiliary/feedback-schema';

import {
  LABEL_NAME,
  LABEL_PHONE,
  CAPTION_ADD,
} from '../../auxiliary/constants';

import CustomButton from '../custom-button/CustomButton';
import FormField from '../form-field/FormField';

import styles from './ContactForm.module.css';

const ContactForm = () => {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addItem(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_CONTACT}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.contactform}>
        <div className={styles.info}>
          <FormField id={nameId} type="text" name="name">
            {LABEL_NAME}
          </FormField>
          <FormField id={phoneId} type="tel" name="number">
            {LABEL_PHONE}
          </FormField>
        </div>
        <CustomButton type="submit">{CAPTION_ADD}</CustomButton>
      </Form>
    </Formik>
  );
};

export default ContactForm;
