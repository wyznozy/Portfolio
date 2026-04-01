export default function MyNextPage() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex flex-col gap-8 w-full max-w-3xl px-16 py-32">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white">
          About Me
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Hi, I&apos;m an artist based out of my studio. I create work that explores
          color, form, and emotion — spanning digital illustration, painting, and mixed media.
        </p>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This portfolio is a collection of pieces I&apos;ve created over the years.
          I&apos;m always working on something new, so check back often.
        </p>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-black dark:text-white">Mediums</h2>
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 text-lg leading-8">
            <li>Digital Illustration</li>
            <li>Oil Painting</li>
            <li>Watercolour</li>
            <li>Mixed Media</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
