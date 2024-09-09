import "./App.css";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";

export default function App() {
  return (
    <main className="w-full h-fit py-5 px-40 font-recoleta">
      <Header />
      <section className="size-full mt-16">
        <Title />
      </section>
    </main>
  );
}
