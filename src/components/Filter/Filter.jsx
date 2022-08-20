import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css'

export const Filter = ({ filter, changeInput}) => (
    <label>
        <input
        type="text"
        name={filter}
        onChange={changeInput}
        className={css.contact__input}
        placeholder="Find contacts by name"
        />
    </label>
);

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    changeInput: PropTypes.func.isRequired
  };