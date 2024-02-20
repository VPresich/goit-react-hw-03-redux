import { useSelector } from 'react-redux';
import { getItems } from '../../redux/items/selectors';
import { getFilter } from '../../redux/filter/selector';

import ContactItem from './ContactItem';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(getItems);
  const strFilter = useSelector(getFilter);
  console.log('strFilter', strFilter);

  const filteredContacts =
    strFilter?.length === 0
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(strFilter.toLowerCase())
        );

  return (
    <ul className={styles.contacts}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li className={styles.item} key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))
      ) : (
        <div>No elements</div>
      )}
    </ul>
  );
};

export default ContactsList;
