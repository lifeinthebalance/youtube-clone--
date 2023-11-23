import logo from "../assets/download1.png";
import { LuMenu } from "react-icons/lu";
import { LightButton } from "../components/Buttons";

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <LightButton>
          <LuMenu />
        </LightButton>
        <a href="/">
          <img src={logo} alt="memetube" className="h-6 bg-primary" />
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
