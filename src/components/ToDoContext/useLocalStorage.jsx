import {useState, useEffect} from 'react'

const useLocalStorage = (itemName, initialValue) => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      }, 2000);
    }, [itemName, initialValue]);
  
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item, saveItem, loading};
  };

export default useLocalStorage;