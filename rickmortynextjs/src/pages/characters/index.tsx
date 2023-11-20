import Head from "next/head";
import React from "react";
import styles from "@/styles/Characters.module.css";
import { GetServerSideProps } from "next";
import Image from "next/image";

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
  characters: CharacterType[];
};

export const getServerSideProps: GetServerSideProps<
  ComponentProps
> = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const result: CharacterType = await response.json();
  return {
    props: { characters: result },
  };
};

function characters({ characters }: ComponentProps) {
  console.log("character :>> ", characters);

  return (
    <div>
      <Head>
        <title key="characters">Characters</title>
        <meta
          name="characters"
          content="character page for rick and morty project using NextJS"
        />
      </Head>
      <h1 className={styles.myH1}>Characters</h1>

      <div>
        {characters.results.map((character) => {
          return (
            <div key={character.id}>
              <Image src={character.imae} alt={character.name} />

              {character.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default characters;
