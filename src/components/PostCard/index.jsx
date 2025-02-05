import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";

const PostCard = (props) => {
    return (
        <Link to={`/posts/${props.post.id}`}>
            <div className={styles.post}>
                <img
                    src={`/assets/posts/${props.post.id}/capa.jpg`}
                    alt="Imagem de capa do post"
                    title={`${props.post.nome}`}
                    className={styles.capa}
                />
                <h2 className={styles.titulo}>{props.post.nome}</h2>

                <button className={styles.botaoLer}>Ler mais</button>
            </div>
        </Link>
    );
};

export default PostCard;
