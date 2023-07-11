import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetGreeting from "../../redux/middleware/GetGreeting";

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetGreeting());
  }, []);
  const { greetings, state, loading } = useSelector((store) => store.greeting);

  return <div>{loading ? "Loading" : <h1>{greetings.content}</h1>}</div>;
};

export default Greeting;
