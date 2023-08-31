import { useSelector } from "react-redux";
import { favoritesSelector } from "../../favorites/store/favoriteSelectors";

const PeopleNames = () => {
  const favorites = useSelector(favoritesSelector);

  return (
    <div>
      <h1>I have access to this list of people</h1>
      {favorites.map((people) => (
        <div key={people}>{people.name}</div>
      ))}
    </div>
  );
};

export default PeopleNames;
