import { useEffect, useState } from "preact/hooks";
import FavoriteButton from "./FavoriteButton.tsx";

type Favorite = {
  id: string;
  name: string;
  image: string;
};

export default function FavoritesList() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  useEffect(() =>{
    const cookie = document.cookie.match(/favorites=([^;]*)/);
    const favs = cookie? JSON.parse(decodeURIComponent(cookie[1])) : [];
    setFavorites(favs);
  },[])

  if(favorites.length === 0){return <p>no hay</p>}

  return(
    <ul>
      {favorites.map(({id, image, name})=>
      <div>
        <a href={`/characters/${id}`}>
      {image ? <img src={image} alt={name} width={100}/> : <div>no hay</div>}
      <h3>{name}</h3>
      </a>
      <FavoriteButton characterId={id} characterName={name} characterImage={image}/>
      </div>
      )}      
      <a href={"/"}> -volver- </a>
    </ul>
    
  );

}
