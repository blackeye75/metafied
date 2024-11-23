import "./App.css";
import CardConatiner from "./component/CardConatiner";
import HalfVisibleSpot from "./component/IncreasingBlurCircle";
import Header from "./component/Header";

function App() {
  return (
    <main className="w-full  h-full">
      <Header />
      <HalfVisibleSpot />
      <div className="p-5 pt-2 w-full h-screen ">
        <CardConatiner />
      </div>
      <div className="absolute  right-60  bottom-40" >
      <HalfVisibleSpot/>
      </div>
    </main>
  );
}

export default App;
