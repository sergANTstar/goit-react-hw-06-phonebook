import css from './App.module.css';
import { PhoneBoock } from './PhoneBoock/PhoneBoock';



export const App = () => {
  return (
    <section className={css.homework__block}>
      <h1 className={css.homework__feedback}>
        React homework phone boock
      </h1>
      <div className={css.phoneBoock__section}>
        <PhoneBoock/>
      </div>
     
    </section>
  );
};