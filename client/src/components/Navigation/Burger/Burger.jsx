import s from './Burger.module.scss';
import {
  GiHamburgerMenu
} from '@react-icons/all-files/gi/GiHamburgerMenu';
const Burger = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.burger}>
      <GiHamburgerMenu className={s.icon}/>
    </button>
  );
};

export default Burger;
