import DealList from "@/lib/components/Deals/DealList/DealList";
import Header from "@/lib/components/ui/Header/Header";

export default function Deals() {
  return (
    <main>
      <Header title="Steam Deals" />
      <DealList />
    </main>
  );
}
