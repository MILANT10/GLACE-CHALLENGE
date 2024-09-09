import "./App.css";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";

export default function App() {
  return (
    <main className="w-full py-5 px-40 font-recoleta">
      <Header />
      <section className="size-full mt-16 flex items-center">
        <Title />
        <section className="w-1/2 flex items-center justify-center">
          <img
            className="size-[36rem] object-contain"
            src="/ice-cream.webp"
            alt="ice-cream photo"
          />
        </section>
      </section>
    </main>
  );
}
