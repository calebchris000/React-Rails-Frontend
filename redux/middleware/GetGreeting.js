import axios from "axios";
import { fetchFailure, fetchSuccess } from "../GreetingSlice";

const GetGreeting = () => (dispatch) => {
  dispatch({ type: "greeting/FETCH_LOADING" });
  axios
    .get("http://127.0.0.1:3000/api/greetings")
    .then((result) => dispatch(fetchSuccess(result.data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default GetGreeting;
