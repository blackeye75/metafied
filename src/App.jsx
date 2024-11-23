import "./App.css";
import CardConatiner from "./component/CardConatiner";
import HalfVisibleSpot from "./component/HalfVisibleSpot";
import Header from "./component/Header";

function App() {
  return (
    <main className="w-full h-full">
      <Header />
      <div className="p-5 pt-2 w-full h-screen ">
        <CardConatiner />
      </div>
    </main>
  );
}

export default App;
