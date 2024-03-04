import Story from "./Story";
import Setinha from "./Setinha";
import fotodoinsta from "./img/instagram_logo_thin_icon_171701.png"

export default function Stories() {
    return (
      <div class="stories">
              <Story nome="9gag" foto={fotodoinsta}  />
  
              <Story nome="9gag" foto={fotodoinsta}/> 

              <Story nome="9gag" foto={fotodoinsta}/>
              
              <Story nome="9gag" foto={fotodoinsta}/>

              <Story nome="9gag" foto={fotodoinsta}/>

              <Story nome="9gag" foto={fotodoinsta}/>

              <Story nome="9gag" foto={fotodoinsta}/>

              <Story nome="9gag" foto={fotodoinsta}/>
              
              <Setinha />
      </div>
    );
  }

  /*cada item será um componente como pede no projeto ou apenas cria um componente chamado story e deixa ele dinâmico?*/