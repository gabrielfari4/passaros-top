import { Route, Routes, useParams } from "react-router-dom";
import PostModelo from "src/components/PostModelo";
import posts from "src/json/posts.json";
import styles from "./Post.module.css";
import NaoEncontrada from "../NaoEncontrada";
import PaginaPadrao from "src/components/PaginaPadrao";

const Post = () => {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return <NaoEncontrada />;
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route
                    index
                    element={
                        <PostModelo
                            fotoCapa={`/assets/posts/${post.id}/capa.jpg`}
                            titulo={`${post.nome}`}
                        >
                            <h3>Nome científico: ({post.nomeCientifico})</h3>

                            {/* Minha lógica */}
                            {/* <p>Localização: {post.localizacao.map((loc) => {
                            return loc !== post.localizacao[post.localizacao.length-1] ? `${loc}, ` : `${loc}. `
                            })}</p> */}
                            <div className={styles.infos}>
                                <p>
                                    <b>Localização:</b>{" "}
                                    {post.localizacao.join(", ") + "."}
                                </p>
                                <p>
                                    <b>Altura máxima:</b> {post.altura}cm
                                </p>
                                <p>
                                    <b>Peso máximo:</b> {post.peso}kg
                                </p>
                            </div>
                            <p className={styles.resumo}>{post.resumo}</p>
                            <div className={styles.fotosContainer}>
                                <img
                                    src={`../public/assets/posts/${post.id}/1.jpg`}
                                    alt=""
                                    className={styles.fotos}
                                />
                                <img
                                    src={`../public/assets/posts/${post.id}/2.jpg`}
                                    alt=""
                                    className={styles.fotos}
                                />
                                <img
                                    src={`../public/assets/posts/${post.id}/3.jpg`}
                                    alt=""
                                    className={styles.fotos}
                                />
                                <img
                                    src={`../public/assets/posts/${post.id}/4.jpg`}
                                    alt=""
                                    className={styles.fotos}
                                />
                            </div>
                        </PostModelo>
                    }
                />
            </Route>
        </Routes>
    );
};

export default Post;
