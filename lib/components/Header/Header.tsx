export default function Header({ title }: { title: string }) {
  return (
    <header className="p-8 bg-slate-700">
      <h1 className="font-bold text-white text-center text-3xl">{title}</h1>
    </header>
  );
}
