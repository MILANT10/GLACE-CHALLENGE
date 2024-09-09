import "./App.css";
import Header from "./components/Header/Header";
import Picker from "./components/Picker/Picker";
import Title from "./components/Title/Title";

export default function App() {
  return (
    <main className="w-full font-recoleta">
      <Header />
      <section className="py-5 px-40 size-full mt-16 flex items-center">
        <Title />
        <section className="w-1/2 flex items-center justify-center relative">
          <img
            className="size-[36rem] object-contain z-10"
            src="/ice-cream.webp"
            alt="ice-cream photo"
          />
          <img
            className="size-[30rem] object-contain absolute -bottom-28 left-[15%]"
            src="/10008.svg"
            alt="ice-cream photo"
          />
        </section>
      </section>
      <Picker onClick={() => console.log("salope")} />
    </main>
  );
}
