export const useLocalStorage = (key) => {

  const getLocalStorage = () => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : '';
  };

  const saveLocalStorage = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  return { getLocalStorage, saveLocalStorage };

};