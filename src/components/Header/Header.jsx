export default function Header() {
  const LINKS = ["About", "Products", "Moods", "Flavors", "Ingredients"];

  return (
    <header className="py-5 px-40 w-full h-20 text-white border-b border-gray-300 border-opacity-30">
      <nav className="size-full flex justify-between items-center">
        <h1 className="font-recoleta text-3xl">Creamy</h1>
        <ul className="flex justify-center gap-12 font-sans font-medium">
          {LINKS.map((link, index) => (
            <li
              className="hover:cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out"
              key={index}
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-8">
          <img
            className="size-8 rounded-full object-cover"
            src="/me.jpg"
            alt="photo de moi"
          />
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            color="white"
            height="28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16"></path>
            <path d="M4 12h13"></path>
            <path d="M4 18h10"></path>
          </svg>
        </div>
      </nav>
    </header>
  );
}
