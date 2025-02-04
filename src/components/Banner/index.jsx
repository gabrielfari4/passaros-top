import styles from './Banner.module.css';
import circuloColorido from 'src/assets/circulo_colorido.png';
import fotoPassaros from 'src/assets/foto_passaros.jpg'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Pássaros Top
                </h1>
                <p className={styles.paragrafo}>
                    Bem vindos ao espaço dos pássaros. Aqui estão listados os pássaros mais brabos de todo o reino passaral. Obviamente isso é minha opinião pessoal, que é a única que importa neste espaço.
                </p>
            </div>
            <div className={styles.imagens}>
                <img src={circuloColorido} aria-hidden={true} className={styles.circuloColorido}/>
                <img src={fotoPassaros} alt="Imagem de aves" className={styles.minhaFoto}/>
            </div>
        </div>
    )
}

export default Banner;