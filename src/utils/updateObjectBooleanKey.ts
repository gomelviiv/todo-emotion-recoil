export const updateObjectBooleanKey = (array, key, id) =>
  array.map((item) =>
    item.id === id
      ? {
          ...item,
          [key]: !item[key],
        }
      : item,
  );
