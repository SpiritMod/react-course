import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { peopleActions } from "../actions";

export const usePersonFetch = (id) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(peopleActions.fetchAsyncPerson(id));
  }, [dispatch, id]);

  const { person, isFetching, error } = useSelector((state) => state.people);

  return {
    person,
    isFetching,
    error
  }

};