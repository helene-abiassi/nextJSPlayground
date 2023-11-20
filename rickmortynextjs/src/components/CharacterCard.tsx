import { CharacterType } from "@/pages/characters";
import Image from "next/image";
import React from "react";

function CharacterCard({ character }: CharacterType) {
  return (
    <div>
      <Image
        src={character.image}
        alt={character.name}
        width={100}
        height={100}
      />
      <h1>{character.name}</h1>
      <p>Specie: {character.species}</p>
      <p>Status: {character.status}</p>
      <p>Lives on: {character.origin.name}</p>
    </div>
  );
}

export default CharacterCard;
