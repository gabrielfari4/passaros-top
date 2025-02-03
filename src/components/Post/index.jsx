import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src={`/assets/posts/${props.post.id}/capa.jpg`} alt="Imagem de capa do post" title={`${props.post.nome}`} className={styles.capa}/>
            <h2 className={styles.titulo}>{props.post.nome}</h2>

            <button className={styles.botaoLer}>Ler mais</button>
        </div>
    )
}

export default Post;