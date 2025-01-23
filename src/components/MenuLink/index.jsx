import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = (props) => {
    const localizacao = useLocation();

    return (
        <Link className={`
                            ${styles.link}
                            ${localizacao.pathname === props.to ? styles.linkDestacado : ""}
                        `} to={props.to}>
                            {props.children}
        </Link>
    )
}

export default MenuLink;