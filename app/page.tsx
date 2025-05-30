import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

export default function Home() {
  return (
    <div className="w-[100%] md:px-20 md:py-9 xs:p-3">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>

  );
}
