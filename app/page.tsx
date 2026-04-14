"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"
import { motion, useScroll } from "framer-motion"
import { useState } from "react"

function ProfileCircle() {
  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 18, restSpeed: 0.5, restDelta: 0.01, delay: 0.1 }}
    >
      <div className="w-75 h-75 rounded-full overflow-hidden shadow-xl ring-4 ring-white dark:ring-zinc-800">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/profile.jpg`} alt="Profile" width={300} height={300} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col items-center mt-1">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">Michael Chau</h1>
        <h2 className="text-3xl">Full Stack Software Engineer</h2>
      </div>
    </motion.div>
  );
}



function ContentSquare() {
  return (
    <motion.div
      className="flex mt-auto flex-col items-center gap-4"
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 18, restSpeed: 0.5, restDelta: 0.01, delay: 0.1 }}
    >
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          To get started, edit the page.tsx file.
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Looking for a starting point or more instructions? Head over to{" "}
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            Templates
          </a>{" "}
          or the{" "}
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            Learning
          </a>{" "}
          center.
        </p>
      </div>
    </motion.div>
  );
}

// function Content() {
//   return (
//     <>
//       <article
//         style={{
//           maxWidth: 500,
//           padding: "150px 20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: 20,
//         }}
//       >
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           Aliquam ac rhoncus quam.
//         </p>
//         <p>
//           Fringilla quam urna. Cras turpis elit, euismod eget ligula
//           quis, imperdiet sagittis justo. In viverra fermentum ex ac
//           vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
//           laoreet augue ut felis blandit, at iaculis odio ultrices.
//           Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
//           neque tincidunt a.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           In eget sodales arcu, consectetur efficitur metus. Duis
//           efficitur tincidunt odio, sit amet laoreet massa fringilla
//           eu.
//         </p>
//         <p>
//           Pellentesque id lacus pulvinar elit pulvinar pretium ac non
//           urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
//           eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
//           rutrum mi.
//         </p>
//         <p>
//           Sed sem nisi, luctus consequat ligula in, congue sodales
//           nisl.
//         </p>
//         <p>
//           Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
//           pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
//           ut suscipit leo.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
//           fringilla aliquet. Pellentesque auctor vehicula malesuada.
//           Aliquam id feugiat sem, sit amet tempor nulla. Quisque
//           fermentum felis faucibus, vehicula metus ac, interdum nibh.
//           Curabitur vitae convallis ligula. Integer ac enim vel felis
//           pharetra laoreet. Interdum et malesuada fames ac ante ipsum
//           primis in faucibus. Pellentesque hendrerit ac augue quis
//           pretium.
//         </p>
//         <p>
//           Morbi ut scelerisque nibh. Integer auctor, massa non dictum
//           tristique, elit metus efficitur elit, ac pretium sapien nisl
//           nec ante. In et ex ultricies, mollis mi in, euismod dolor.
//         </p>
//         <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
//         <p>
//           Pellentesque id lacus pulvinar elit pulvinar pretium ac non
//           urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
//           eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
//           rutrum mi.
//         </p>
//         <p>
//           Sed sem nisi, luctus consequat ligula in, congue sodales
//           nisl.
//         </p>
//         <p>
//           Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
//           pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
//           ut suscipit leo.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
//           fringilla aliquet. Pellentesque auctor vehicula malesuada.
//           Aliquam id feugiat sem, sit amet tempor nulla. Quisque
//           fermentum felis faucibus, vehicula metus ac, interdum nibh.
//           Curabitur vitae convallis ligula. Integer ac enim vel felis
//           pharetra laoreet. Interdum et malesuada fames ac ante ipsum
//           primis in faucibus. Pellentesque hendrerit ac augue quis
//           pretium.
//         </p>
//         <p>
//           Morbi ut scelerisque nibh. Integer auctor, massa non dictum
//           tristique, elit metus efficitur elit, ac pretium sapien nisl
//           nec ante. In et ex ultricies, mollis mi in, euismod dolor.
//         </p>
//         <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           Aliquam ac rhoncus quam.
//         </p>
//         <p>
//           Fringilla quam urna. Cras turpis elit, euismod eget ligula
//           quis, imperdiet sagittis justo. In viverra fermentum ex ac
//           vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
//           laoreet augue ut felis blandit, at iaculis odio ultrices.
//           Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
//           neque tincidunt a.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           In eget sodales arcu, consectetur efficitur metus. Duis
//           efficitur tincidunt odio, sit amet laoreet massa fringilla
//           eu.
//         </p>
//         <p>
//           Pellentesque id lacus pulvinar elit pulvinar pretium ac non
//           urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
//           eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
//           rutrum mi.
//         </p>
//         <p>
//           Sed sem nisi, luctus consequat ligula in, congue sodales
//           nisl.
//         </p>
//         <p>
//           Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
//           pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
//           ut suscipit leo.
//         </p>
//         <h2>Sub-header</h2>
//         <p>
//           Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
//           fringilla aliquet. Pellentesque auctor vehicula malesuada.
//           Aliquam id feugiat sem, sit amet tempor nulla. Quisque
//           fermentum felis faucibus, vehicula metus ac, interdum nibh.
//           Curabitur vitae convallis ligula. Integer ac enim vel felis
//           pharetra laoreet. Interdum et malesuada fames ac ante ipsum
//           primis in faucibus. Pellentesque hendrerit ac augue quis
//           pretium.
//         </p>
//         <p>
//           Morbi ut scelerisque nibh. Integer auctor, massa non dictum
//           tristique, elit metus efficitur elit, ac pretium sapien nisl
//           nec ante. In et ex ultricies, mollis mi in, euismod dolor.
//         </p>
//         <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
//       </article>
//     </>
//   );
// }

// function Button() {
//   return (
//     <motion.button
//       className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//     >
//       Click Me!
//     </motion.button>
//   );
// }

const navItems = [
  { number: "01", label: "HOME" },
  { number: "02", label: "PHOTOS" },
  { number: "03", label: "CONTACT" },
]

function NavMenu() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="hidden sm:flex flex-col gap-2 w-full" onMouseLeave={() => setHovered(null)}>
      {navItems.map((item) => (
        <motion.div
          key={item.label}
          onMouseEnter={() => setHovered(item.label)}
          animate={{ opacity: hovered === null || hovered === item.label ? 1 : 0.3 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-4 cursor-pointer overflow-hidden py-1"
        >
          <div className="overflow-hidden">
            <motion.span
              className="block text-4xl font-bold text-black dark:text-white tracking-tight"
              initial={{ y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {item.label}
            </motion.span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Home() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  function homeBtnClicked() {
    router.push("/mynextpage");
  }

  return (
    <>
      <div className="fixed left-25 top-0 h-screen flex items-center pl-8 z-50">
        <NavMenu />
      </div>

      
      <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex w-full min-h-screen max-w-3xl flex-col items-center gap-8 py-32 px-16 bg-white dark:bg-black sm:items-start">
          <ProfileCircle />

          <motion.p
            className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
          >
            Welcome to my personal website! :)
          </motion.p>

            <ContentSquare />
        </main>
      </div>


      <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-blue-950">
      </div>
      
    </>
  );
}
