import Head from "next/head";
import React from "react";
import styles from "@/styles/Characters.module.css";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
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
  results: CharacterType[];
};

export const getServerSideProps: GetServerSideProps<ComponentProps> = async ({
  query,
}) => {
  const page = query.page || 1;

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );

  const result: CharacterType = await response.json();
  return {
    props: { characters: result, page },
  };
};

function characters({ characters, page }: ComponentProps) {
  const router = useRouter();

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
      <br />
      <h1 className={styles.myH1}>Characters</h1>
      <br />
      <div className="grid grid-cols-4 gap-4">
        {characters.results.map(
          (character: CharacterType, charIndex: number) => {
            return (
              <div key={character.id}>
                <Image
                  src={character.image}
                  alt={character.name}
                  width={200}
                  height={200}
                />
                <p>{character.name}</p>
                <Link
                  className={styles.linkButton}
                  href={`/characters/${character.id}`}
                >
                  View More
                </Link>
              </div>
            );
          }
        )}
        <button
          onClick={() => {
            router.push(`/?page=${page + 1}`, undefined, { shallow: true });
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default characters;
