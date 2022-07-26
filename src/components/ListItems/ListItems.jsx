import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { ListItem } from './ListItems.styled';

function getVisibleContacts(contacts, filter) {
  if (filter === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
}

export default function ListItems() {
  const contacts = useSelector(state =>
    getVisibleContacts(state.contacts.items, state.contacts.filter)
  );
  const dispatch = useDispatch();

  return (
    <>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <ListItem key={id}>
            {name} {number}
            <button id={id} onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </ListItem>
        );
      })}
    </>
  );
}
