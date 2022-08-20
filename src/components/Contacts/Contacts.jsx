import PropTypes from 'prop-types';
import css from '../Contacts/Contacts.module.css';

export const Contacts = ({contacts, deleteContacts}) => (
    <ul className={css.contacts__list}>
        {contacts.map(({id, name, number}) => {
            return(
                <li className={css.contacts__items} key={id}>
                    <p>
                        {name}: {number}
                    </p>
                    <button className={css.contact__button} type="button" onClick={() => deleteContacts(id)}>
                        Delete
                    </button>
                </li>
            )
        })}
    </ul>
)

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    deleteContacts: PropTypes.func.isRequired,
  };