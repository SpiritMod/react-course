import { useSelector } from "react-redux";

export const useLoading = () => {
  const isDataLoading = useSelector(
    (state) => state.starships.isFetching && state.planets.isFetching
  );

  return {
    isDataLoading
  }
};