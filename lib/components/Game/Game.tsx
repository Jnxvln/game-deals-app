import { TGame } from "@/lib/types/TGame";
import Image from "next/image";

export default function Game({ game }: { game: TGame }) {
  console.log("Img: " + game.thumb);
  return (
    <div>
      <div>{game.title}</div>
      <div>Rating: {game.steamRatingText}</div>
      <div>
        <Image src={game.thumb} alt={game.title} width={150} height={150} />
      </div>
    </div>
  );
}
