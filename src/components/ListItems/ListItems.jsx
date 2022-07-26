import { connect } from 'react-redux';
import { deleteContact } from 'redux/actions';
import PropTypes from 'prop-types';
import { ListItem } from './ListItems.styled';

const ListItems = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <ListItem key={id}>
            {name} {number}
            <button id={id} onClick={() => onDelete(id)}>
              Delete
            </button>
          </ListItem>
        );
      })}
    </>
  );
};

ListItems.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

function getVisibleContacts(contacts, filter) {
  if (filter === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
}

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
