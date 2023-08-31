import Tour from "./Tour";
import { Ttour } from "./types/data";

type Props = {
  listTour: Ttour[];
  onDeleteTour(id: Ttour["id"]): void;
};
const ListTour = ({ listTour, onDeleteTour }: Props) => {
  console.log(listTour);

  const handleButtonDelete = (id: Ttour["id"]) => () => {
    console.log("id", id);
    onDeleteTour(id);
  };

  return (
    <div>
      {/* <h1 className="m-8 font-serif text-2xl font-bold underline">Our Tour</h1> */}
      <div className="grid grid-cols-3 p-3 space-x-2">
        {listTour.map((tour) => (
          <div key={tour.id}>
            <Tour tour={tour} />
            <button
              className="w-full mt-2 text-white bg-red-500 border rounded"
              onClick={handleButtonDelete(tour.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTour;
