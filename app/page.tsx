
import Header from "./components/header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

export default function Home() {
  return (
    <div className="w-[100%] md:px-20 md:py-9 xs:p-2">
      <Header />
      <Section1 />
      <Section2 />
    </div>

  );
}
