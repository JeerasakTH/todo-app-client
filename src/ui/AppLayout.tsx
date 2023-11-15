import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

type Props = {};

const AppLayout = (props: Props) => {
  return (
    <div className="h-screen w-full overflow-hidden bg-LightBlue p-8">
      <div className="grid h-full w-full grid-cols-4 overflow-hidden rounded-lg shadow-lg">
        <div className="bg-stone-200 col-span-1">
          <SideBar />
        </div>
        <div className="bg-LavenderBlush col-span-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
