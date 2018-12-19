export const getItem = (key, initialValue) => {
  const valueFromStorage = window.localStorage.getItem(key);

  return valueFromStorage ? JSON.parse(valueFromStorage) : initialValue;
};

export const setItem = (key, value) => {
  subscribed.forEach(component => {
    component.setState({});
  });

  window.localStorage.setItem(key, JSON.stringify(value));
};

const subscribed = [];

export const subscribe = component => {
  subscribed.push(component);
};

export const unsubscribe = component => {
  subscribed.splice(subscribed.indexOf(component), 1);
};
