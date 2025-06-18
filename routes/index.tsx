import { Handlers, PageProps } from "$fresh/server.ts";
import CharacterList from "../components/CharacterList.tsx";

type Character = {
  name: string;
  image: string;
  house: string;
};

export const handler:Handlers ={
    async GET(_req, ctx){
        const res = await fetch("https://hp-api.onrender.com/api/characters");
        const characters : Character [] = await res.json();
        return ctx.render({characters});
    },
};


export default function CharactersPage({ data }: PageProps<{ characters: Character[] }>) {
    return(
        <div>
            <h1> Harry potter</h1>
            <CharacterList characters={data.characters}/>
            
        </div>
    );



}