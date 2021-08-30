export default function Header() {
  return (
    <>
      <div
        id="Nav"
        className="z-[9999] w-24 flex flex-col justify-between border-r bg-white border-purple-500 h-full fixed top-0 left-0"
      >
        <div
          id="logo"
          className="h-24 w-full flex justify-center content-center border-b border-purple-500"
        >
          <img src="svg/talo logo.svg" className="w-8" />
        </div>
        <div
          id="menu"
          className="h-auto w-full flex flex-col content-center gap-4 justify-center items-center"
        >
          <img src="svg/home.svg" className="w-10" />
          <img src="svg/paper.svg" className="w-10" />
          <img src="svg/book.svg" className="w-10" />
        </div>
        <div
          id="socials"
          className="h-auto w-full flex flex-col content-center gap-4 justify-center items-center py-8 border-t border-purple-500"
        >
          <img src="svg/twitter.svg" className="w-10" />
          <img src="svg/linkedin.svg" className="w-10" />
        </div>
      </div>
    </>
  );
}
