"use client";
import { useState, useEffect, ChangeEvent } from "react";
import { FormEvent } from "react";
import { TDeal, TGame } from "@/lib/AppTypes";
import GameList from "../GameList/GameList";

export default function GameSearch() {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState<TGame[]>([]);

  const API_ENDPOINT = "https://www.cheapshark.com/api/1.0/games";

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const result = await fetch(`${API_ENDPOINT}?title=${query}`);
      const data: TGame[] = await result.json();
      setGames(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="flex items-center justify-center p-4 m-auto bg-gray-900 "
      >
        <div>
          <label htmlFor="query" className="mr-2 text-xl text-white">
            Search Game:{" "}
          </label>
          <input
            id="query"
            type="text"
            name="query"
            placeholder="Search for game"
            onChange={onChange}
            className="focus:outline-none focus:bg-orange-50 p-2 rounded-md w-80"
          />
        </div>
        <div>
          <button
            type="submit"
            className="focus:outline-none focus:bg-gray-300 bg-gray-200 px-4 py-2 rounded-md ml-4 hover:bg-gray-300 active:bg-gray-400"
          >
            Search
          </button>
        </div>
      </form>

      <section className=" p-4">
        <GameList games={games} />
      </section>
    </div>
  );
}
