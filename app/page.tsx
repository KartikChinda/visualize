import Features from "./components/LandingPage/Features";
import Hero from "./components/LandingPage/Hero";
export default function Home() {
  return (
    <div className=" bg-black flex flex-col items-center justify-center px-6">
      <Hero />
      <div className="flex justify-center items-center w-full 2xl:w-[90%]">
        <Features />
      </div>
    </div>
  );
}
