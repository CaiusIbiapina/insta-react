import Topo from "./Topo.js";
import Conteudo from "./Conteudo.js";
import Fundo from "./Fundo.js";

export default function Post() {
    return (
      <div class="post">
        <Topo />

        <Conteudo />

        <Fundo />
      </div>
    );
  }