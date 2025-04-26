import SideNavigation from "./SideNavigation/page";
import HeaderNavigation from "./HeaderNavigation/page";
import TopSection from "./MainSection/TopSection/page";
import BottomSection from "./MainSection/BottomSection/page";

export default function Home() {
  return (
    <div className="flex h-full ">  
      <SideNavigation />  

      <div className="flex flex-col flex-1">  
        <HeaderNavigation />
        <TopSection />
        <BottomSection />
      </div>
    </div>
  );
}
