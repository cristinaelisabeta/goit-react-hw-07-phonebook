import ContactItem from './ContactItem';
import css from './ContactList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from 'redux/contacts/contscts-actions';
import {
  filterSelector,
  itemsSelector,
} from 'redux/contacts/contacts-selectors';

export default function ContactList() {
  const items = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  const contacts = items?.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(deleteUser(id));
  };
  return (
    <ul className={css.list}>
      {contacts?.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={number}
            onDelete={deleteContact}
          />
        );
      })}
    </ul>
  );
}
