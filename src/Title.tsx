type Props = {
  ourTour: string;
};

const Title = ({ ourTour }: Props) => {
  console.log(ourTour);

  return (
    <div>
      {/* <h1>{ourTour}</h1> */}
      <h1 className="m-8 font-serif text-2xl font-bold underline">{ourTour}</h1>
    </div>
  );
};

export default Title;
