import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filmsActions } from "../actions";

export const useFilmsFetch = () => {
  const { data, isFetching, error } = useSelector((state) => state.films);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length) {
      dispatch(filmsActions.fill(data));
    } else {
      dispatch(filmsActions.fetchAsync());
    }
  }, [dispatch, data]);

  return {
    data,
    isFetching,
    error
  }

};