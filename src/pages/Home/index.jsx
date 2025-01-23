import Banner from "src/components/Banner";
import styles from './Home.module.css';
import posts from 'src/json/posts.json';


const Home = () => {
    return (
        <main>
            <Banner />

            <ul className={styles.posts}>

            </ul>
        </main>
    )
}

export default Home;