import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contscts';



const Filter = () => {
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    return (<label>
                <input
                type="text"
                value={filter}
                onChange={e => dispatch(setFilter(e.target.value))}
                className={css.contact__input}
                placeholder="Find contacts by name"
                />
            </label>);
};

export default Filter