import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Contacts } from 'components/Contacts/Contacts'; 
import { Filter } from 'components/Filter/Filter'; 
import { ContactForm } from 'components/ContactForm/ContactForm'; 
import css from '../PhoneBoock/PhoneBoock.module.css'

export class PhoneBoock extends Component {
    state = {
        contacts: [],
        filter: '',
      };
    
      formSubmit = ({ name, number }) => {
        const contact = {
          id: nanoid(),
          name,
          number,
        };
        this.state.contacts.some(
          i =>
            (i.name.toLowerCase() === contact.name.toLowerCase() &&
              i.number === contact.number) ||
            i.number === contact.number
        )
          ? alert(`${name} is already in contacts`)
          : this.setState(({ contacts }) => ({
              contacts: [contact, ...contacts],
            }));
      };
    
    
      findContacts = () => {
        const { filter, contacts } = this.state;
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      };

      changeInput = e => {
        this.setState({ filter: e.target.value });
      };
    
      deleteContacts = id => {
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(contact => contact.id !== id),
        }));
      };

      componentDidUpdate(prevState) {
        this.state.contacts !== prevState.contacts &&
          localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      };

      componentDidMount() {
        const contacts = JSON.parse(localStorage.getItem('contacts'));
        contacts && this.setState({ contacts: contacts});
      }

    render() {
        return (
            <div>
              <h1 className={css.phoneBoock__h} >Phonebook</h1>
              <ContactForm onSubmit={this.formSubmit} />
              <h2>Contacts</h2>
              <Filter filter={this.state.filter} changeInput={this.changeInput}/>
              <Contacts
                contacts={this.findContacts()}
                deleteContacts={this.deleteContacts}
              />
            </div>
        );
      }

}



   

