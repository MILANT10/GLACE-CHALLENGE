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
    <main className="w-full font-recoleta">
      <Header />
      <section className="py-5 px-40 size-full mt-16 flex items-center">
        <Title />
        <section className="w-1/2 flex items-center justify-center relative">
          <motion.img
            key={key}
            initial={iceCreamAnimation.initial}
            animate={iceCreamAnimation.animate}
            transition={iceCreamAnimation.transition}
            className="size-[36rem] object-contain z-10"
            src={iceCream}
            alt="ice-cream photo"
          />
          <img
            className="size-[30rem] object-contain absolute -bottom-28 left-[15%]"
            src="/10008.svg"
            alt="ice-cream photo"
          />
        </section>
      </section>
      <Picker onClick={changeIceCream} />
    </main>
  );
}
