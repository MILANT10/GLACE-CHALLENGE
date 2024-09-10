import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

export default function Picker({ onClick }) {
  const BUTTONS = [
    {
      title: "Cuisse grenouille",
      color: "bg-[#e3f6be]",
      src: "/grenouille.jpg ",
    },
    { title: "Tarte au sucre", color: "bg-[#ebfaff]", src: "/sucres.jpg" },
    { title: "Fondue savoyarde", color: "bg-[#e8e8e8]", src: "/fondue.webp" },
    { title: "Bugnes", color: "bg-[#ebfff4]", src: "/bugnes.jpg" },
    { title: "Tarte praline", color: "bg-[#fce5dd]", src: "/praline.jpg" },
    {
      title: "Saucisson brioché",
      color: "bg-[#f7f7d1]",
      src: "/saucisson.jpg",
    },
    { title: "Olympique lyonnais", color: "bg-[#fdfdf3]", src: "/ol.jpg" },
  ];

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
    <section className="w-full overflow-x-hidden pt-6 relative">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={list}
        className="circle"
      >
        {BUTTONS.map((button, index) => (
          <motion.button
            onClick={() => onClick(button.src)}
            key={index}
            variants={listItem}
            className={
              "text-black border border-black px-4 py-2 rounded-full hover:scale-110 transition-all duration-300 ease-in-out hover:saturate-200 " +
              button.color
            }
          >
            {button.title}
          </motion.button>
        ))}
      </motion.section>
      <img
        className="w-full bg-darkBrown scale-11O"
        src="/rounded.svg"
        alt="rounded image"
      />
      <Footer />
    </section>
  );
}
