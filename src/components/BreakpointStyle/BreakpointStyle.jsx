export default function BreakpointStyle() {
  return (
    <div className="absolute bottom-3 right-3 bg-slate-400 p-2 rounded-lg min-w-14 text-center z-50">
      <span className="sm:hidden">base</span>
      <span className="hidden sm:block lg:hidden">sm</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="hidden 2xl:block 3xl:hidden">2xl</span>
      <span className="hidden 3xl:block 4xl:hidden">3xl</span>
    </div>
  );
}
