import { useEffect } from 'react';
import useIsMounted from './useIsMounted';

const useEffectAfterMount = (callback, dependencies) => {
  const mounted = useIsMounted();

  useEffect(() => {
    if (mounted) {
      return callback();
    }
  }, dependencies);
};

export default useEffectAfterMount;
