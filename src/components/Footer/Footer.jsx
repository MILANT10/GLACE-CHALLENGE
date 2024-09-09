export default function Footer() {
  return (
    <footer className="w-full px-40 flex justify-between items-center bg-honey overflow-hidden">
      <aside className="flex flex-col gap-6">
        <h3 className="text-4xl font-bold">Everyone Can be cremos</h3>
        <p className="text-xl">Get the scoops</p>
        <button className="flex justify-between items-center h-12 w-64 bg-white rounded-full border border-black after:content-['>'] after:rounded-full after:w-14 after:h-full after:bg-pink after:flex after:items-center after:justify-center after:text-white">
          <a
            className="m-4 size-fit"
            target="_blank"
            href="https://youtu.be/dQw4w9WgXcQ?si=33kz_IHpNK_-zhYu"
          >
            Watch our story
          </a>
        </button>
      </aside>

      <aside className="bg-darkBrown rounded-t-full w-fit h-full flex justify-center items-center p-2 translate-y-12">
        <img
          className="w-64 object-contain p-6 border border-white rounded-t-full "
          src="/ice-cream.webp"
          alt="photo de ice cream lol"
        />
      </aside>

      <aside className="w-1/3">
        <p className="text-3xl leading-relaxed text-balance">
          Everyone loves ice cream but nobody screams with joy at the cost of
          complexity.
        </p>
      </aside>
    </footer>
  );
}
