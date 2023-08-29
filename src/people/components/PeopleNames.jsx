import { useSelector } from "react-redux";
import { peopleSelector } from "../store/peopleSelectors";

const PeopleNames = () => {
  const peoples = useSelector(peopleSelector);

  return (
    <div>
      <h1>I have access to this list of people</h1>
      {peoples.map((people) => (
        <div key={people}>{people.name}</div>
      ))}
    </div>
  );
};

export default PeopleNames;
