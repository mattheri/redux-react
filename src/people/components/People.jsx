import { useQuery } from "react-query";
import PeopleService from "../service/PeopleService";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePeople } from "../store/peopleSlice";
import FavoriteButton from "../../favorites/components/FavortieButton/FavoriteButton";

const peopleService = new PeopleService();

const People = () => {
  const { data } = useQuery({
    queryKey: ["people"],
    queryFn: () => peopleService.getPeople(),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePeople(data));
  }, [dispatch, data]);

  return (
    <div>
      <h1>I will get a list of people</h1>
      {data &&
        data.results.map((people) => (
          <div key={people.url}>
            <FavoriteButton people={people} />
            <h2>{people.name}</h2>
          </div>
        ))}
    </div>
  );
};

export default People;
