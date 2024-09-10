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
          src="/10012.png"
          alt="photo de ice cream lol"
        />
      </aside>

      <aside className="w-1/3">
        <p className="text-3xl leading-relaxed text-balance">
          Everyone loves <ChildImage src="/child.webp" color="bg-purple-500" />
          ice cream but nobody screams with joy at the cost of
          <ChildImage src="/child.webp" color="bg-blue-500" />
          complexity.
        </p>
      </aside>
    </footer>
  );
}

const ChildImage = ({ src, color }) => {
  return (
    <div className="relative w-16 h-16 inline-block mx-2">
      <img
        className="w-full h-full rounded-full object-cover relative z-10"
        src={src}
        alt="photo de ice cream lol"
      />
      <span className={"absolute bottom-0 rounded-full w-16 h-6 " + color} />
    </div>
  );
};
