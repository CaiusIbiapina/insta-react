import Usuario from "./Usuario.js";
import Acoes from "./Acoes.js";

export default function Topo({foto}) {
    console.log(foto);
    return (
        <div class="topo">
            <Usuario nome="9gag" foto={foto} />

            <Acoes />
        </div>
    );
  }