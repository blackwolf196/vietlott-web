import { useState, useEffect } from 'react';

function UseLocalStorageState(key: string, defaultValue: any) {
  // Get initial value from localStorage, if available
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  // Update localStorage when value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default UseLocalStorageState;
