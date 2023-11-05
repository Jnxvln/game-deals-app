import Spinner from "@/lib/components/ui/Spinner/Spinner";

export default function LoadingPage() {
  return (
    <div
      style={{
        position: "absolute",
        top: "48vh",
        left: "48vw",
      }}
    >
      <div className="text-gray-600 text-center p-4 font-bold">Loading...</div>
      <Spinner />
    </div>
  );
}
