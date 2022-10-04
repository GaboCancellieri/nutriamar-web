/* eslint-disable lodash/prefer-constant */
/* eslint-disable react/prop-types */
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import useMemoComponent from '../hooks/useMemoComponent';

const DATA_TEST_ID = 'MockComponent';
const MOCK_VALUE = 'MOCK_VALUE';
const NEXT_MOCK_VALUE = 'NEXT_MOCK_VALUE';

const MockComponent = ({ value }) => <div data-testid={DATA_TEST_ID}>{value}</div>;
const shouldRerenderIsEqual = (prevProps, nextProps) => prevProps.value === nextProps.value;
const shouldNotRerenderIsEqual = () => true;

describe('useMemoComponent', () => {
  it('should return the latest instance of the component', () => {
    const componentProps = { value: MOCK_VALUE };
    const hookOptions = { Component: MockComponent, props: componentProps, isEqual: shouldRerenderIsEqual };
    const { result, rerender: rerenderHook } = renderHook((options) => useMemoComponent(options), {
      initialProps: hookOptions,
    });

    const { getByTestId, rerender: rerenderComponent } = render(result.current);

    expect(getByTestId(DATA_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(componentProps.value)).toBeInTheDocument();

    const newComponentProps = { ...componentProps, value: NEXT_MOCK_VALUE };
    const newHookOptions = { ...hookOptions, props: newComponentProps };
    rerenderHook(newHookOptions);
    rerenderComponent(result.current);

    expect(screen.queryByText(newComponentProps.value)).toBeInTheDocument();
  });

  it('should not return the latest instance of the component when the props are the same', () => {
    const componentProps = { value: MOCK_VALUE };
    const hookOptions = { Component: MockComponent, props: componentProps, isEqual: shouldNotRerenderIsEqual };
    const { result, rerender: rerenderHook } = renderHook((options) => useMemoComponent(options), {
      initialProps: hookOptions,
    });

    const { getByTestId, rerender: rerenderComponent } = render(result.current);

    expect(getByTestId(DATA_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(componentProps.value)).toBeInTheDocument();

    const newComponentProps = { ...componentProps, value: NEXT_MOCK_VALUE };
    const newHookOptions = { ...hookOptions, props: newComponentProps };
    rerenderHook(newHookOptions);
    rerenderComponent(result.current);

    expect(screen.queryByText(newComponentProps.value)).not.toBeInTheDocument();
  });
});
