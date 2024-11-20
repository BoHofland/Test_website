import "./header.css";

export default function Header() {
  return (
    <header className="mt-4 flex flex-col items-center justify-center gap-4">
      <div className="gradient-border p-4"> 
        <h1 className="text-4xl font-bold">Test website met <span className="text-blue-500">Next.js</span> with Tailwind CSS</h1>
      </div>
    </header>
  );
}
