import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { peopleActions } from "../actions";

export const usePeopleFetch = () => {
  const { data, isFetching, error } = useSelector((state) => state.people);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length) {
      dispatch(peopleActions.fill(data));
    } else {
      dispatch(peopleActions.fetchAsync());
    }
  }, [dispatch, data]);

  return {
    data,
    isFetching,
    error
  }

};