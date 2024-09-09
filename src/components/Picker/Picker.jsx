export default function Picker() {
  const BUTTONS = [
    { title: "Chocolate gelato", color: "bg-amber-100" },
    { title: "Strawberry gelato", color: "bg-red-100" },
    { title: "Mint gelato", color: "bg-green-100" },
    { title: "Vanilla gelato", color: "bg-blue-100" },
    { title: "Pistachio gelato", color: "bg-green-400" },
    { title: "Lemon gelato", color: "bg-yellow-100" },
    { title: "Coffee gelato", color: "bg-amber-400" },
  ];

  return (
    <section className="w-full h-full overflow-x-hidden pt-6 relative bg-">
      <section className="circle">
        {BUTTONS.map((button, index) => (
          <button
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
      <section className="h-screen bg-honey"></section>
    </section>
  );
}
