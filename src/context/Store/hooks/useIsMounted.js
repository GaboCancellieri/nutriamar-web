import { useRef, useEffect } from 'react';
/**
 * Returns whether a component has mounted to the DOM yet
 * @param {boolean=} initialValue
 * @returns {boolean}
 */
const useIsMounted = (initialValue = false) => {
  const mounted = useRef(initialValue);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  });

  return mounted.current;
};

export default useIsMounted;
