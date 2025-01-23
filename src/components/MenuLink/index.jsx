// import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = (props) => {
    // const localizacao = useLocation();

    return (
        /* <Link className={`
            ${styles.link}
            ${localizacao.pathname === props.to ? styles.linkDestacado : ""}
        `} to={props.to}>
            {props.children}
        </Link> */
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={props.to}
            end
        >
            {props.children}
        </NavLink>
    )
}

export default MenuLink;