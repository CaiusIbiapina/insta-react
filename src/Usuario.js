 export default function Usuario(props) {
    console.log(props.nome);
    return (
        <div class="usuario">
            <img src={props.foto} />
            {props.nome}
        </div>
    );
  }