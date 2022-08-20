import css from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

export function ContactForm ({contactFormSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    
      const inputChange = (e) => {
        const { name, value } = evt.target;
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
        contactFormSubmit(name, number);
        setName('');
        setNumber('');
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
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
