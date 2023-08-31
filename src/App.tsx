import { useState } from "react";
import "./App.css";
import ListTour from "./ListTour";
import Title from "./Title";
import { Ttour, data } from "./types/data";

function App() {
  const ourTour = "Our Tour";

  const [listTour, setListTour] = useState(data);
  const handleDeleteTour = (id: Ttour["id"]) => {
    // console.log("id-con", id);
    console.log(
      setListTour((draft) => draft.filter((listTour) => listTour.id !== id))
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-xl">
      <Title ourTour={ourTour} />
      <ListTour listTour={listTour} onDeleteTour={handleDeleteTour} />
    </div>
  );
}

export default App;
