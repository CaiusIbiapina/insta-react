import Topo from "./Topo.js";
import Conteudo from "./Conteudo.js";
import Fundo from "./Fundo.js";
// import fotodopost from "./img/instagram_logo_thin_icon_171701.png"
// import fotodoperfil from "./img/instagram_logo_thin_icon_171701.png"

export default function Post() {
  const fotodoperfil = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuEVqoF-ELLxrLJ4FSO3LCbFUl_XAVnASIlBowgzadREn34yWXn9rPfa7e-f_tA5fF_g&usqp=CAU"
  const fotodopost = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuEVqoF-ELLxrLJ4FSO3LCbFUl_XAVnASIlBowgzadREn34yWXn9rPfa7e-f_tA5fF_g&usqp=CAU"
    return (
      <div class="post">
        <Topo foto={fotodoperfil}/>

        <Conteudo foto={fotodopost}/>

        <Fundo />
      </div>
    );
  }