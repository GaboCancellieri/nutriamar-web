import React from "react";
import {
  useRef,
  useMemo,
  ComponentType,
  MutableRefObject,
  ReactElement,
  ComponentProps,
} from "react";
import isFunction from "lodash/isFunction";
import usePreviousValue from "./usePreviousValue";
import { EqualityFunctionType } from "../connect/types";

export interface useMemoComponentOptions<T = any> {
  Component: ComponentType<T>;
  props: ComponentProps<any>;
  ref: MutableRefObject<T>;
  isEqual?: EqualityFunctionType;
}

export type useMemoComponentType = (
  options: useMemoComponentOptions
) => ReactElement | null;

/**
 * Hook that controls the reference of a component to only update when it's previous and next props differ
 */
const useMemoComponent: useMemoComponentType = ({
  Component,
  props,
  ref,
  isEqual,
}) => {
  const previousProps = usePreviousValue(props);

  // Component ref instance
  const ComponentRef = useRef(<Component {...props} ref={ref} />);

  const PureComponent = useMemo(() => {
    // Check if props have stayed the same
    const arePropsEqual = isFunction(isEqual)
      ? isEqual(previousProps, props)
      : false;

    // If the props differ update the reference of the component instance
    if (!arePropsEqual) {
      ComponentRef.current = <Component {...props} ref={ref} />;
    }
    return ComponentRef.current;
  }, [props, Component]);

  return PureComponent;
};

export default useMemoComponent;
