import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  <div className="w-full h-screen flex flex-col background overflow-x-hidden items-center">

    <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 
    text-4xl font-bold">
      RANDOM GIFS
    </h1>

    <div className="flex flex-col items-center w-full mt-[30px] gap-y-10">
      <Random/>
      <Tag/>
    </div>
    
  </div>
  );
}


