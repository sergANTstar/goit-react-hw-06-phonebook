import css from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      };
    
      inputChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
      };
    
      formSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;
        const nameToLowerCase = name.toLowerCase();
        this.props.onSubmit({ ...this.state, name: nameToLowerCase });
        this.setState({ name: '', number: '' });
      };
    
    render() {
        const {name, number} = this.state;
        return(
            <form onSubmit={this.formSubmit} className={css.contact__form}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.inputChange}
              placeholder="Name"
              className={css.contact__input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <input
              type="tel"
              name="number"
              value={number}
              placeholder="Number"
              onChange={this.inputChange}
              className={css.contact__input}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button className={css.contact__button} type="submit">Add contact</button>
          </form>
        );
    }
}

ContactForm.propTypes = {
    stats: PropTypes.shape({
        name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
   
}
