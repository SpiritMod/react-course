import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { starshipsActions } from "../actions";

export const useStarshipsFetch = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(starshipsActions.fetchAsync());
  }, [dispatch]);

  const { data, isFetching, error } = useSelector((state) => state.starships);

  return {
    data,
    isFetching,
    error
  }

};