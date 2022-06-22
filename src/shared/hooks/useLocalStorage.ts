import React from 'react';

const useLocalStorage = () => {
  const setValue = (key: string, value) => localStorage.setItem(`${key}`, JSON.stringify(value));

  const getValue = (key: string) => JSON.parse(localStorage.getItem(`${key}`));

  const removeValue = (key: string) => localStorage.removeItem(`${key}`);

  return { setValue, getValue, removeValue };
};

export default useLocalStorage;
