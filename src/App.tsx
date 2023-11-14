import { useState } from "react";
import Feeds from "./components/Feeds";

function App() {
  const [searchText, setSearchText] = useState("");

  const onSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <input onChange={onSearchTextChange} value={searchText} />
        <button>Search</button>
      </header>
      <main>
        <Feeds query={searchText} />
      </main>
    </div>
  );
}

export default App;
