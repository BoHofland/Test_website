export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-4">
      {/* <Image
        src="/logo.svg"
        alt="Logo"
        width={64}
        height={64}
      /> */}
      <h1 className="text-4xl font-bold">Welcome to <span className="text-blue-500">Next.js</span> with Tailwind CSS</h1>
    </header>
  );
}