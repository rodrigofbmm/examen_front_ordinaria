import { useEffect, useState } from "preact/hooks";

type Props = {
  characterId: string;
  characterName: string;
  characterImage: string;
};

export default function FavoriteButton({ characterId, characterName, characterImage }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const cookie = document.cookie.match(/favorites=([^;]*)/);
    if(cookie){
      const favs = JSON.parse(decodeURIComponent(cookie[1]));
      setIsFavorite(favs.some((f: {id:string})=> f.id === characterId));
    }
  }, [characterId]);

  const togglefavorites = () => {
    const cookie = document.cookie.match(/favorites=([^;]*)/);
    let favs = cookie? JSON.parse(decodeURIComponent(cookie[1])) : [];
    if(isFavorite){
      favs = favs.filter((f: {id:string})=> f.id !== characterId);
    }else{
      favs.push({id: characterId, name:characterName, image: characterImage});
    }

    document.cookie = `favorites = ${encodeURIComponent(JSON.stringify(favs))}; Path=/`;
    setIsFavorite(!isFavorite);
  };
  return (
    <button onClick={togglefavorites}>{isFavorite ? "🌟" : "☆" }</button>
  );

}