import css from '../ContactForm/ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setItems, setFilter } from '../../redux/contscts';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
    
      const inputChange = (e) => {
        const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
    
      const formSubmit = (e) => {
        e.preventDefault();
      const namecontacts = { name, number, id: nanoid() };

      contacts.some(contact => contact.name.toLowerCase() === namecontacts.name.toLocaleLowerCase()
      )
      ?(toast(`${name} is already in contacts`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        )
        :dispatch(setItems(namecontacts));
        

        setName('');
        setNumber('');
        dispatch(setFilter(''));

      };
    
        return(
            <form onSubmit={formSubmit} className={css.contact__form}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={inputChange}
              placeholder="Name"
              className={css.contact__input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <input
              type="tel"
              name="number"
              value={number}
              placeholder="Number"
              onChange={inputChange}
              className={css.contact__input}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button className={css.contact__button} type="submit">Add contact</button>
          </form>
        );
    }

