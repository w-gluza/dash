export const getItem = (key, initialValue) => {
  const valueFromStorage = window.localStorage.getItem(key);

  return valueFromStorage ? JSON.parse(valueFromStorage) : initialValue;
};

export const setItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
