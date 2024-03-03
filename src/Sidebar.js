import MeuUsuario from "./MeuUsuario.js";
import Sugestoes from "./Sugestoes.js";
import Links from "./Links.js";
import Copyright from "./Copyright.js";

export default function Sidebar() {
    return (
      <div class="sidebar">
            <MeuUsuario />
  
            <Sugestoes />
  
            <Links />
  
            <Copyright />
      </div>
    );
  }