import React, { useState } from 'react';
import css from './ContactForm.module.css';
import propTypes from 'prop-types';

const ContactForm = ({ contacts, onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddContact = ev => {
    ev.preventDefault();
    if (name.trim() !== '') {
      const existingContact = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (existingContact) {
        alert(`${name} is already in contacts.`);
      } else {
        onAddContact({ name: name.trim(), number });
        setName('');
        setNumber('');
      }
    }
  };

  return (
    <div className={css.contactForm}>
      <form className={css.containerForm} onSubmit={handleAddContact}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          placeholder="Type name here..."
          value={name}
          onChange={handleNameChange}
          className={css.input}
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Type number here..."
          value={number}
          onChange={handleNumberChange}
          className={css.input}
        />
        <button className={css.button__form} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  contacts: propTypes.array.isRequired,
  onAddContact: propTypes.func.isRequired,
};

export default ContactForm;