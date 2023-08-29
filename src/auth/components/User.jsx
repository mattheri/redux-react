import { useSelector } from "react-redux";
import { userEmailSelector, userNameSelector } from "../store/authSelectors";

const User = () => {
  const email = useSelector(userEmailSelector);
  const name = useSelector(userNameSelector);

  return (
    <section>
      <h3 className="name">{name}</h3>
      <h5 className="email">{email}</h5>
    </section>
  );
};

export default User;
