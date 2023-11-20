import CharacterCard from "@/components/CharacterCard";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [];
}

type ComponentProps = {
  results: CharacterType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const slugs = ["1", "2", "3", "4", "5"];

  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const characters: CharacterType[] = await response.json();
  console.log("characters :>> ", characters);

  const paths = characters.results.map((character: CharacterType) => {
    return {
      params: {
        characterId: character.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ComponentProps> = async (
  context
) => {
  // console.log("context :>> ", context);

  const id = context.params?.characterId;

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  const result: CharacterType = await response.json();
  console.log("result in dynamic route :>> ", result);

  return {
    props: { character: result },
  };
};

function singleCharacter({ character }: ComponentProps) {
  const router = useRouter();

  console.log("character :>> ", character);

  return (
    <div>
      <button onClick={() => router.back()}>←</button>
      <h1>Charater #{router.query.characterId}</h1>
      <CharacterCard character={character} />
    </div>
  );
}

export default singleCharacter;
