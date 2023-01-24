import { useState } from "react";
import data from "./Data.js";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="contanier">
        <h3>{people.length} Birthdays Today</h3>

        <List people={people} />

        <button onClick={() => console.log("cliked")}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
