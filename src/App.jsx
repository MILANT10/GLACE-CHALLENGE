import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Picker from "./components/Picker/Picker";
import Title from "./components/Title/Title";
import { motion } from "framer-motion";

export default function App() {
  const [iceCream, setIceCream] = useState("/bugnes.jpg");
  const [key, setKey] = useState(0);

  function changeIceCream(target) {
    setIceCream(target);
  }

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [iceCream]);

  const iceCreamAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <main className="w-full font-recoleta overflow-hidden">
      <Header />
      <section className="py-5 px-40 size-full mt-16 flex items-center overflow-hidden relative">
        <Title />
        <section className="w-1/2 flex items-center justify-center relative overflow-hidden">
          <motion.img
            key={key}
            initial={iceCreamAnimation.initial}
            animate={iceCreamAnimation.animate}
            transition={iceCreamAnimation.transition}
            className="size-[36rem] object-contain z-10"
            src={iceCream}
            alt="ice-cream photo"
          />
        </section>
        <motion.img
          initial={{ opacity: 0, rotate: 10, x: "100%" }}
          animate={{ opacity: 1, rotate: -10, x: "20%" }}
          transition={{ duration: 0.5, delay: 2.8 }}
          className="size-[20rem] object-contain absolute right-0"
          src="/10001.png"
          alt="ice-cream photo"
        />
      </section>
      <Picker onClick={changeIceCream} />
    </main>
  );
}
