import React, { ComponentProps, useEffect, useRef } from "react";
import { ScreenStateContext } from "src/context/ScreenContext/ScreenContext";
import connect from "src/context/Store/connect";
import { ScrollAnimationWrapperProps } from "./types";
import styles from "./scrollAnimationWrapper.module.scss";
import classNames from "classnames";
import { SCROLL_EFFECT_VARIANTS } from "./constants";

const ScrollAnimationWrapper = ({
  effectDirection = "vertical",
  effectValue = 30,
  disabled = false,
  children,
}: ScrollAnimationWrapperProps) => {
  if (disabled) {
    return <>{children}</>;
  }
  const [isVisible, setVisible] = React.useState(false);
  const domRef: any = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  });
  return (
    <div
      ref={domRef}
      className={classNames(styles.scrollAnimationContainer, {
        [styles.isVisible]: isVisible,
      })}
      style={{
        transform: `${SCROLL_EFFECT_VARIANTS[effectDirection]}(${effectValue}vh)`,
      }}
    >
      {children}
    </div>
  );
};

const mapStateToProps = [
  {
    context: ScreenStateContext,
    mapStateToProps: ({ isEditMode }: { isEditMode: boolean }) => ({
      isEditMode,
    }),
  },
];

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  const { isEditMode } = stateProps;
  const { effectDirection, effectValue, disabled, children } = ownProps;
  const isDisabled = disabled ? true : isEditMode;
  return {
    ...{ ...ownProps, disabled: isDisabled },
    ...dispatchProps,
  };
};

export default connect({ mapStateToProps, mergeProps })(ScrollAnimationWrapper);
