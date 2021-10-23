import { useCallback, useState } from 'react';

export const useInputArray = () => {
  const [text, setText] = useState('');
  const [array, setArray] = useState([]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('5文字以内にしてください');
      return;
    }
    setText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert('同じ値が既に存在します');
        return prevArray;
      }
      return [...prevArray, text];
    });
  });
  return { text, array, handleChange, handleAdd };
};
