import Footer from "../Footer/Footer";

export default function Picker({ onClick }) {
  const BUTTONS = [
    { title: "Cuisse grenouille", color: "bg-[#e3f6be]" },
    { title: "Tarte au sucre", color: "bg-[#ebfaff]" },
    { title: "Fondue savoyarde", color: "bg-[#e8e8e8]" },
    { title: "Bugnes", color: "bg-[#ebfff4]" },
    { title: "Tarte praline", color: "bg-[#fce5dd]" },
    { title: "Saucisson brioché", color: "bg-[#f7f7d1]" },
    { title: "Olympique lyonnais", color: "bg-[#fdfdf3]" },
  ];

  return (
    <section className="w-full overflow-x-hidden pt-6 relative">
      <section className="circle">
        {BUTTONS.map((button, index) => (
          <button
            onClick={() => onClick(button.title)}
            key={index}
            className={
              "bg-blue-100 text-black border border-black px-4 py-2 rounded-full " +
              button.color
            }
          >
            {button.title}
          </button>
        ))}
      </section>
      <img
        className="w-full bg-darkBrown scale-11O"
        src="/rounded.svg"
        alt="rounded image"
      />
      <Footer />
    </section>
  );
}
