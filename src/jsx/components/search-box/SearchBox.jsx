import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/filter/selector';
import { setFilter } from '../../redux/filter/actions';
import { useId } from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ children }) => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const searchId = useId();

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <form className={styles.searchbox}>
      <label className={styles.label} htmlFor={searchId}>
        {children}
      </label>
      <input
        className={styles.input}
        id={searchId}
        type="text"
        value={value}
        onChange={handleChangeFilter}
      />
    </form>
  );
};

export default SearchBox;
