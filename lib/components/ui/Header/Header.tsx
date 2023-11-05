export default function Header({ title }: { title: string }) {
  return (
    <header className="px-12 py-24 bg-slate-700">
      <h1 className="font-bold text-white text-center text-5xl">{title}</h1>
    </header>
  );
}
