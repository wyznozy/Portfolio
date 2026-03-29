export default function MyNextPage() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex flex-col gap-8 w-full max-w-3xl px-16 py-32">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white">
          About Me
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Hi, I&apos;m a .NET developer with experience building applications across
          desktop, mobile, and web. I&apos;m currently expanding my skills into
          modern frontend development with React and Next.js.
        </p>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I enjoy solving complex problems and building clean, maintainable
          software. When I'm not coding, you can find me exploring new
          technologies and sharpening my craft.
        </p>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-black dark:text-white">Skills</h2>
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 text-lg leading-8">
            <li>.NET / C#</li>
            <li>.NET MAUI</li>
            <li>React / Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
