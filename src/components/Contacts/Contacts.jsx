import css from '../Contacts/Contacts.module.css';
import { deleteItems } from '../../redux/contscts';
import { useDispatch, useSelector } from 'react-redux';



const Contacts = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);
    const contacts = useSelector(state => state.contacts.items);
  
    const contactFilter = contacts.filter( contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  



   return   (
                <ul className={css.contacts__list}>
                    {contactFilter.map(({id, name, number}) => {
                        return(
                            <li className={css.contacts__items} key={id}>
                                <p>
                                    {name}: {number}
                                </p>
                                <button className={css.contact__button} type="button" onClick={() => dispatch(deleteItems(id))}>
                                    Delete
                                </button>
                            </li>
                        )
                    })}
                </ul>
            );
        
};

export default Contacts