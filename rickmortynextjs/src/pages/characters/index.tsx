import Head from "next/head";
import React from "react";
import styles from "@/styles/Characters.module.css";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

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
  results: CharacterType[];
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
      <div className="grid grid-cols-4 gap-4">
        {characters.results.map(
          (character: CharacterType, charIndex: number) => {
            return (
              <div key={character.id}>
                <Image
                  src={character.image}
                  alt={character.name}
                  width={100}
                  height={100}
                />
                <p>{character.name}</p>
                <Link href={`/characters/${character.id}`}>View More</Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default characters;
