import { motion } from "framer-motion";

export default function Header() {
  const LINKS = ["About", "Products", "Moods", "Flavors", "Ingredients"];

  const list = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const listItem = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.header
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 2,
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      className="py-5 px-40 w-full h-20 text-white border-b border-gray-300 border-opacity-30"
    >
      <nav className="size-full flex justify-between items-center">
        <motion.h1
          animate={{
            scale: 1,
            opacity: 1,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 400,
            damping: 20,
            delay: 0.5,
          }}
          className="font-recoleta text-3xl"
        >
          Creamy
        </motion.h1>
        <motion.ul
          className="flex justify-center gap-12 font-sans font-medium"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          {LINKS.map((link, index) => (
            <motion.li
              className="hover:cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out"
              key={index}
              variants={listItem}
            >
              {link}
            </motion.li>
          ))}
        </motion.ul>
        <div className="flex justify-center items-center gap-8">
          <motion.img
            animate={{
              scale: 1,
              opacity: 1,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 400,
              damping: 20,
              delay: 1.9,
            }}
            className="size-8 rounded-full object-cover"
            src="/me.jpg"
            alt="photo de moi"
          />
          <motion.svg
            animate={{
              scale: 1,
              opacity: 1,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 400,
              damping: 20,
              delay: 2.1,
            }}
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            color="white"
            height="28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16"></path>
            <path d="M4 12h13"></path>
            <path d="M4 18h10"></path>
          </motion.svg>
        </div>
      </nav>
    </motion.header>
  );
}
