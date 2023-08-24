import { Component } from 'react';
import { Container } from './Container/Container';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import 'normalize.css';
import { nanoid } from 'nanoid';
import React from 'react';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = ({name, phone}) => {
    const newContact = {
      id: nanoid(),
      name: name,
      phone: phone,
    };

    const isContactExists = this.state.contacts.some(
      (contact) => contact.name === name || contact.phone === phone
    );
  
    if (isContactExists) {
      console.log('Контакт з таким ім\'ям або номером телефону вже існує.');
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id)
    }))
  }
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  }

  render() {
    const { contacts, filter } = this.state

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())

    );
    return (
      <Container>

        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.handleDeleteContact} />
      </Container>
    );

  }

};
