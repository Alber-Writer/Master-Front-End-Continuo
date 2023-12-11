export const localDataManager = <T>(key: string) => {
  const getLocalData = () => JSON.parse(localStorage.getItem(key));
  const setLocalData = (value: T) =>
    localStorage.setItem(key, `${JSON.stringify(value)}`);

  return {getLocalData, setLocalData};
};


