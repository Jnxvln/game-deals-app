import GameList from "@/lib/components/DealList/DealList";
import Header from "@/lib/components/Header/Header";

export default function Deals() {
  return (
    <main>
      <Header title="Steam Deals" />
      <GameList />
    </main>
  );
}
