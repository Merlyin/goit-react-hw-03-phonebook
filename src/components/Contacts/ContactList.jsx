import { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import css from './ContactList.module.css';


class ContactList extends Component {
    render() {
    const { contacts, onDeleteContact } = this.props;
    return (
        <div>
            <ul>
            {contacts.map(contact => (
                <li key={nanoid()}>
                {contact.name}: {contact.number}
                <button
                    className={css.button__list}
                    onClick={() => onDeleteContact(contact.id)}
                >
                    Delete
                </button>
                </li>
            ))}
            </ul>
        </div>
        );
    }
}

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteContact: propTypes.func.isRequired,
};

export default ContactList;
