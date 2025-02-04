import PostModelo from "src/components/PostModelo";
import fotoCapa from 'src/assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css';
import fotoSobreMim from 'src/assets/sobre_mim_foto.jpg';

const SobreMim = () => {
    return (
    
            <PostModelo
                fotoCapa={fotoCapa}
                titulo="Sobre mim"
            >
                <h3 className={styles.subtitulo}>
                    Olá, eu sou o Gabriel!
                </h3>

                <img src={fotoSobreMim} alt="Foto do Gabriel" className={styles.fotoSobreMim} />
                <p className={styles.paragrafo}>
                    Desde pequeno, sempre fui fascinado pelo mundo das aves. A diversidade de cores, cantos e comportamentos me encanta e me faz querer aprender cada vez mais sobre essas incríveis criaturas. Observar pássaros na natureza é uma experiência única, pois permite enxergar detalhes que muitas vezes passam despercebidos no dia a dia. Cada espécie tem suas peculiaridades, e essa variedade torna o estudo das aves algo infinito e apaixonante.  
                </p>
                <p className={styles.paragrafo}>
                    Com o tempo, comecei a me aprofundar mais nesse universo, aprendendo sobre hábitos alimentares, padrões de migração e características distintas de diferentes espécies. A fotografia de aves também se tornou um interesse, pois registrar esses momentos me permite apreciar a beleza e a singularidade de cada ave. Além disso, estudar a influência das aves nos ecossistemas reforça a importância de sua preservação e do cuidado com o meio ambiente.  
                </p>
                <p className={styles.paragrafo}>
                    Uma das partes mais gratificantes desse interesse é poder compartilhar conhecimento com outras pessoas. Sempre que tenho a oportunidade, gosto de conversar sobre aves, trocar informações e incentivar a observação da fauna local. Muitas vezes, basta um pouco de atenção para perceber que estamos cercados por aves incríveis, mesmo em ambientes urbanos. Esse contato com a natureza traz uma sensação de paz e conexão com o mundo ao nosso redor.  
                </p>
                <p className={styles.paragrafo}>
                    Por fim, acredito que o interesse por aves é algo que sempre fará parte da minha vida. Há sempre algo novo para aprender, novas espécies para observar e experiências a vivenciar. A observação de aves não é apenas um hobby, mas uma forma de valorizar e compreender melhor a biodiversidade do planeta. Cada encontro com uma ave rara ou um comportamento inusitado reforça ainda mais essa paixão, tornando-a uma jornada contínua de descobertas.
                </p>
            </PostModelo>

    )
}

export default SobreMim;