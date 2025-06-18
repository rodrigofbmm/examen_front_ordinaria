import FavoriteButton from "../islands/FavoriteButton.tsx";

export type Character = {
    id: string;
    name: string;
    image: string;
  };
  
  type Props = {
    characters: Character[];
  };
  
  export default function CharacterList({ characters }: Props) {
    return (
      <div>
        <h2>Personajes</h2>
        {characters.map(({id,name,image}) => ( 
        <div className="container" key={id}>
          <a href={`/characters/${id}`}>
          {image ? <img src={image} alt={name} width={100}/> : <div>no hay</div>}
          <h3>{name}</h3>
          </a>
          <p>
          <FavoriteButton characterId={id} characterName={name} characterImage={image}/>

          </p>
        </div>
        ))}
      </div>

    );  
  }