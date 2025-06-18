import { Handlers, PageProps } from "$fresh/server.ts";
import FavoriteButton from "../../islands/FavoriteButton.tsx";

export type Character = {
  id: string;
  name: string;
  image: string;
  house: string;
  alive: boolean;
};


export const handler:Handlers <Character> = { 
  async GET(_req,ctx){
    const characterId = ctx.params.id;
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    const characters = await res.json();
    const match = characters.find((char:any) => char.id === characterId);
    
    if(!match)return new Response("Character not found", { status: 404 });

    return ctx.render(match);

  },
};

export default function CharactersDetailPage({data}: PageProps<Character>){
  const {id,image,name,house,alive} = data;


if(alive == true){


  return(
    <div className="container">
      {image ? <img src={image} alt={name} width={100}/> : <div>no hay </div>}
      <h1>{name}</h1>
      <p>
        <strong>casa:</strong>{house}
      </p>
      <p>
        vivo
      </p>
      <FavoriteButton characterId={id} characterName={name} characterImage={image}/>
      <a href={"/"}> -volver- </a>
    </div>


  );


}else{return(
    <div className="container">
      {image ? <img src={image} alt={name} width={100}/> : <div>no hay </div>}
      <h1>{name}</h1>
      <p>
        <strong>casa:</strong>{house}
      </p>
      <p>
        muerto
      </p>
      <FavoriteButton characterId={id} characterName={name} characterImage={image}/>
      <a href={"/"}> -volver- </a>
    </div>


  );
}
  

}


