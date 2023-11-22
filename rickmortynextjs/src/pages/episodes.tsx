import React, { useEffect } from "react";

export interface EpisodeType {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string | string[];
  url: string;
  created: string;
}

function episodes() {
  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/episode");

    try {
      if (response.ok) {
        const results: EpisodeType = await response.json();
        console.log("results :>> ", results);
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>List of episodes</h1>
    </div>
  );
}

export default episodes;
