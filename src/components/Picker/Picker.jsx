export default function Picker({ onClick }) {
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
      <footer className="py-5 px-40 flex w-full justify-between bg-honey">
        <aside className="flex flex-col gap-6">
          <h3 className="text-4xl">Everyone Can be cremos</h3>
          <p className="text-xl">Get the scoops</p>
          <button className="flex justify-between items-center h-12 w-64 bg-white  rounded-full border border-black after:content-['>'] after:rounded-full after:w-14 after:h-full after:bg-pink after:flex after:items-center after:justify-center after:text-white">
            <a
              className="m-4 size-fit"
              target="_blank"
              href="https://youtu.be/dQw4w9WgXcQ?si=33kz_IHpNK_-zhYu"
            >
              Watch our story
            </a>
          </button>
        </aside>
        <aside className="bg-darkBrown rounded-t-full p-2">
          <img
            className="size-[15rem] object-contain p-6 h-full border border-white rounded-t-full"
            src="/ice-cream.webp"
            alt="photo de ice cream lol"
          />
        </aside>

        <aside className="w-1/3 flex flex-col gap-6">
          <p className="text-4xl leading-relaxed">
            Everyone loves ice cream <br />
            But nobody screams with joy at the cost complexity
          </p>
          <p className="text-4xl"></p>
        </aside>
      </footer>
    </section>
  );
}
