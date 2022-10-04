import { renderHook } from '@testing-library/react-hooks';
import usePropsThatChanged from '../hooks/usePropsThatChanged';

const MOCK_VALUE = 'MOCK_VALUE';
const NEXT_MOCK_VALUE = 'NEXT_MOCK_VALUE';

describe('usePropsThatChanged', () => {
  it('should return the props that changed', () => {
    const props = { key1: MOCK_VALUE, key2: { value: MOCK_VALUE }, key3: MOCK_VALUE, key4: [MOCK_VALUE] };
    const { result, rerender: rerenderHook } = renderHook((nextProps) => usePropsThatChanged(nextProps), {
      initialProps: props,
    });

    const propsThatChanged = { key3: NEXT_MOCK_VALUE, key4: [NEXT_MOCK_VALUE] };
    const newComponentProps = { ...props, ...propsThatChanged };

    rerenderHook(newComponentProps);

    expect(result.current).toStrictEqual(propsThatChanged);
  });

  it('should return an empty object if no props changed', () => {
    const props = { key1: MOCK_VALUE, key2: { value: MOCK_VALUE }, key3: MOCK_VALUE, key4: [MOCK_VALUE] };
    const { result, rerender: rerenderHook } = renderHook((nextProps) => usePropsThatChanged(nextProps), {
      initialProps: props,
    });

    const newComponentProps = { ...props };

    rerenderHook(newComponentProps);

    expect(result.current).toStrictEqual({});
  });
});
