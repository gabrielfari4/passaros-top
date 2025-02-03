import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src={`/assets/posts/${props.post.id}/capa.jpg`} alt="Imagem de capa do post" className={styles.capa}/>
        </div>
    )
}

export default Post;