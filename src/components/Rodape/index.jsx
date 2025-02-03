import styles from './Rodape.module.css';
import MarcaRegistrada from 'src/assets/marca_registrada.svg?react';

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />

            Desenvolvido por Alura.
        </footer>
    )
}

export default Rodape;