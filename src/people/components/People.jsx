import { useQuery } from "react-query";
import PeopleService from "../service/PeopleService";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePeople } from "../store/peopleSlice";

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
      <pre style={{ textAlign: "left" }}>
        {data && JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default People;
