import { nanoid } from 'nanoid';
import { useState } from 'react';
import useLocalStorage from "use-local-storage";
import { Contacts } from 'components/Contacts/Contacts'; 
import { Filter } from 'components/Filter/Filter'; 
import { ContactForm } from 'components/ContactForm/ContactForm'; 
import css from '../PhoneBoock/PhoneBoock.module.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function  PhoneBoock () {

  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

    
      const formSubmit = (name, number) => {
        contacts.some(contact => contact.name === name || contact.number === number)
          ? Notify.warning(`${name} is already in contacts`)
          : setContacts([
              ...contacts,
              {
                id: nanoid(),
                name: name,
                number: number,
              },
            ]);
      };
    
      const findContacts = [];
      contacts.forEach(contact => {
        contact.name.toLowerCase().includes(filter.toLowerCase()) &&
        findContacts.push(contact);
      });

      const changeInput = e => {
        setFilter(e.target.value);
      };
    
     const  deleteContacts = id => {
      setContacts(contacts.filter(contact => contact.id !== id));
    };


        return (
            <div>
              <h1 className={css.phoneBoock__h} >Phonebook</h1>
              <ContactForm contactFormSubmit={formSubmit} />
              <h2>Contacts</h2>
              <Filter filter={filter} changeInput={changeInput}/>
              <Contacts
                contacts={findContacts}
                deleteContacts={deleteContacts}
              />
            </div>
        );
      }





   

