import PostModelo from "src/components/PostModelo";
import fotoCapa from 'src/assets/sobre_mim_capa.png';

const SobreMim = () => {
    return (
    
            <PostModelo
                fotoCapa={fotoCapa}
                titulo="Sobre mim"
            >
                conteúdo...
            </PostModelo>

    )
}

export default SobreMim;