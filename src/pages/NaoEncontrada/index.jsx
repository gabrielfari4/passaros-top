import BotaoPrincipal from "src/components/BotaoPrincipal";
import styles from "./NaoEncontrada.module.css";
import erro404 from "src/assets/erro_404.jpg";

const NaoEncontrada = () => {
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a
                    página inicial.
                </p>

                <div className={styles.botaoContainer}>
                    <BotaoPrincipal
                        tamanho="lg"
                    >
                        Voltar
                    </BotaoPrincipal>
                </div>

                <img
                    src={erro404}
                    alt="Desenho de pássaro com o número 404"
                    className={styles.imagemAnimal}
                />
            </div>
            <div className={styles.espacoEmBranco}>
            </div>
        </>
    );
};

export default NaoEncontrada;
