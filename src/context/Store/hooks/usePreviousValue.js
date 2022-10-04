import { useEffect, useRef } from 'react';

const usePreviousValue = (value) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePreviousValue;
