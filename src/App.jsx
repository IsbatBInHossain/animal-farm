import { useEffect, useState } from "react";
import Animal from "./Animal";

function useAnimals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    search(lastQuery);
  }, []);
  const search = async (query) => {
    const response = await fetch(`http://localhost:5000?q=${query}`);
    const data = await response.json();
    localStorage.setItem("lastQuery", query);
    setAnimals(data);
  };
  return [animals, search];
}

function App() {
  const [animals, search] = useAnimals();

  return (
    <main>
      <h1>Animal farm</h1>
      <input
        type="text"
        placeholder="Search animal"
        onChange={(e) => search(e.target.value)}
      />
      <ul>
        {animals.map((animal) => (
          <Animal key={animal.id} {...animal} />
        ))}
        {animals.length === 0 && "No animal found"}
      </ul>
    </main>
  );
}

export default App;
