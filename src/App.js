import "./App.css";
import Landing from "./components/landing";
import SideBar from "./components/sidebar";

function App() {
  return (
    <div className="App flex">
      <SideBar className="z-[99999]" />
      <div className="content-main z-[0]">
        <Landing className="z-[-99999]" />
      </div>
    </div>
  );
}

export default App;
