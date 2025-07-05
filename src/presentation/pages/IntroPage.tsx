import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Aurora from "../../blocks/Backgrounds/Aurora/Aurora";

const IntroPage = () => {
  return (
    <div className="min-h-screen bg-background font-cormorant flex flex-col overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 z-0">
        <Aurora
          colorStops={["#A5D6A7", "#3B7A57", "#1B4D3E"]}
          blend={0.2}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Header />

        <div className="flex-1 flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default IntroPage;
