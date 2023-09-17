import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterUser } from 'redux/contacts/contscts-actions';
import { filterSelector } from 'redux/contacts/contacts-selectors';

export default function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <label className={css.lable}>
      Find contacts by name or phone-number
      <input
        className={css.input}
        type="text"
        name="name"
        value={filter}
        onChange={e => dispatch(filterUser(e.target.value))}
      />
    </label>
  );
}
