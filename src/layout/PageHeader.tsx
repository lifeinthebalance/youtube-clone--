import logo from "../assets/download1.png";
import { LuBell, LuMenu, LuUpload, LuUser, LuVoicemail } from "react-icons/lu";
import { Button } from "../components/Buttons";

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between my-4 mx-6">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button>
          <LuMenu />
        </Button>
        <a href="/">
          <img src={logo} alt="memetube" className="h-6 bg-primary" />
        </a>
      </div>
      <form action="/" className="flex flex-grow border-neutral-400">
        <input
          type="search"
          placeholder="Search"
          className="border-primary-hover border rounded-l-full shadow-inner shadow-neutral-200 px-4 outline-none text-lg"
        />
        <button className="border px-4 py-2 rounded-r-full bg-neutral-100 flex-shrink-0">
          <LuVoicemail />
        </button>
      </form>
      <div className="flex md:gap-4 mr-8 flex-shrink-0">
        <Button>
          <LuBell></LuBell>
        </Button>
        <Button>
          <LuUpload></LuUpload>
        </Button>
        <Button>
          <LuUser></LuUser>
        </Button>
      </div>
    </div>
  );
}
