export default function Story({nome, foto}) {
    return (
      <div class="story">
        <div class="imagem">
           <img src={foto} />               
        </div>

        <div class="usuario">
           {nome}
        </div>
      </div>
    );
  }

  /*<img src="assets/img/9gag.svg" />*/
