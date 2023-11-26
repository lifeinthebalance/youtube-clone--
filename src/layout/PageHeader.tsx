import logo from "../assets/download1.png";
import { LuBell, LuMenu, LuUpload, LuUser } from "react-icons/lu";
import { MenuButton } from "../components/Buttons";

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between my-4 mx-6">
      <div className="flex gap-4 items-center flex-shrink-0">
        <MenuButton>
          <LuMenu />
        </MenuButton>
        <a href="/">
          <img src={logo} alt="memetube" className="h-6 bg-primary" />
        </a>
      </div>
      <div></div>
      <div className="flex gap-6 mr-8 items-center flex-shrink-0">
        <button>
          <LuBell></LuBell>
        </button>
        <button>
          <LuUpload></LuUpload>
        </button>
        <button>
          <LuUser></LuUser>
        </button>
      </div>
    </div>
  );
}
