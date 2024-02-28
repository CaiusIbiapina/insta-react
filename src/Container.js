import Logo from "./Logo.js";
import LogoMobile from "./LogoMobile.js";
import InstagramMobile from "./InstagramMobile.js";
import Pesquisa from "./Pesquisa.js";
import Icones from "./Icones.js";
import IconesMobile from "./IconesMobile.js";

export default function Container() {
    return (
        <div>
            <Logo />
  
            <LogoMobile />
  
            <InstagramMobile />
  
            <Pesquisa />
  
            <Icones />
  
            <IconesMobile />
        </div>
    )
  }
  /*o fato de ter criado essa div geral para o componente container abrigar todo seu conteudo irá quebrar a estrutura/css?*/