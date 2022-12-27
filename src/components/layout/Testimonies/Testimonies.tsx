import { Button, Card, Icon, Image, Typography } from "@ccomponents";
import { DOSIS, JUSTIFY, LEFT, RIGHT } from "@constants/fonts";
import { MB_1, MB_2, MR_1, MT_1 } from "@constants/margins";
import React, { LegacyRef, useEffect, useReducer } from "react";
import styles from "./testimonies.module.scss";
import "./testimonies.module.scss";
import { Carousel } from "react-responsive-carousel";
import connect from "src/context/Store/connect";
import { WindowSizeStateContext } from "src/context/WindowSizeProvider/WindowSizeProvider";
import { IWindowSizeState } from "src/context/WindowSizeProvider/types";
import { useTestimoniesService } from "src/api/api";
import { testimoniesInitialState, testimoniesReducer } from "./context/reducer";
import {
  setTestimoniesInfo,
  setTestimoniesInfoAux,
  toggleEditingTestimony,
} from "./context/actions";
import { UserStateContext } from "src/context/UserContext/UserContext";
import { IUserState } from "src/context/UserContext/types";
import { IScreenState } from "src/context/ScreenContext/types";
import { ScreenStateContext } from "src/context/ScreenContext/ScreenContext";
import { ComponentPropsType } from "src/context/Store/connect/types";
import { FONT_AWESOME } from "@constants/icons";
import { FIT } from "@constants/buttons";
import { WHITE } from "@constants/colors";
import TestimonyModal from "./TestimonyModal/TestimonyModal";
import { ITestimony } from "./context/types";
import classnames from "classnames";

interface TestimoniesProps {
  isMobileOrTablet: boolean;
  showEditWrapper: boolean;
}

const Testimonies = React.forwardRef(
  ({ isMobileOrTablet, showEditWrapper }: TestimoniesProps, ref) => {
    const Service = useTestimoniesService();
    const [state, dispatch] = useReducer(
      testimoniesReducer,
      testimoniesInitialState
    );
    const hasTestimonies = state.testimoniesInfo?.length > 0;

    useEffect(() => {
      (async () => {
        if (!state.testimoniesInfo) {
          const data = await Service.get();
          dispatch(setTestimoniesInfoAux(data));
          dispatch(setTestimoniesInfo(data));
        }
      })();
    }, []);

    const handleAdd = () => {
      dispatch(toggleEditingTestimony());
    };

    const handleEdit = (item: ITestimony) => {
      dispatch(toggleEditingTestimony(item));
    };

    const handleDelete = (testimony: ITestimony) => {
      if (testimony.id) {
        Service.delete(testimony.id);
        const testimonies = Object.assign(state.testimoniesInfo);
        const index = testimonies.findIndex(
          (item: ITestimony) => item.id === testimony.id
        );
        testimonies.splice(index, 1);
        dispatch(setTestimoniesInfo([...testimonies]));
        dispatch(setTestimoniesInfoAux([...testimonies]));
      }
    };

    const handleSave = (testimony: ITestimony) => {
      if (testimony.id) {
        Service.update(testimony.id, testimony);
        const testimonies = Object.assign(state.testimoniesInfo);
        const index = testimonies.findIndex(
          (item: ITestimony) => item.id === testimony.id
        );
        testimonies.splice(index, 1, testimony);
        dispatch(setTestimoniesInfo([...testimonies]));
        dispatch(setTestimoniesInfoAux([...testimonies]));
      } else {
        Service.add(testimony);
        dispatch(setTestimoniesInfo([...state.testimoniesInfo, testimony]));
        dispatch(
          setTestimoniesInfoAux([...state.testimoniesInfoAux, testimony])
        );
      }
      dispatch(toggleEditingTestimony(undefined));
    };

    if (!showEditWrapper) {
      return (
        <div>
          {hasTestimonies && (
            <div
              ref={ref as LegacyRef<HTMLDivElement> | undefined}
              className={styles.testimoniesContainer}
            >
              <Carousel
                width={isMobileOrTablet ? "370px" : "1281px"}
                centerMode
                centerSlidePercentage={isMobileOrTablet ? 100 : 30}
                swipeable
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
              >
                {state.testimoniesInfo.map(
                  (item: ITestimony, index: number) => {
                    return (
                      <Card
                        key={index}
                        className={styles.cardClass}
                        contentClassName={styles.cardContentClass}
                        containerLimit={isMobileOrTablet ? 340 : 365}
                        contentLimit={isMobileOrTablet ? 340 : 365}
                        height="205px"
                        cardsPerRow={3}
                      >
                        <div className={styles.textSection}>
                          <Typography size={21} fontFamily={DOSIS}>
                            {item.name}, {item.age}
                          </Typography>
                          <Typography
                            className={MT_1}
                            size={14}
                            align={JUSTIFY}
                          >
                            {item.comment}
                          </Typography>
                        </div>
                        <div className={styles.profilePicSection}>
                          <Image
                            className={styles.profilePic}
                            width={"93px"}
                            height={"93px"}
                            altText={"profile_pic"}
                            url={
                              item.imageURL ??
                              "https://cdn-icons-png.flaticon.com/512/219/219969.png"
                            }
                          />
                        </div>
                      </Card>
                    );
                  }
                )}
              </Carousel>
            </div>
          )}
        </div>
      );
    }

    return (
      <>
        {showEditWrapper && (
          <div className={styles.editTestimoniesContainer}>
            <Button
              size={FIT}
              variant="secondary"
              align={LEFT}
              onClick={handleAdd}
            >
              <Icon
                iconId={"FaPlus"}
                iconDesign={FONT_AWESOME}
                color={WHITE}
                size="2x"
              />
            </Button>
            {hasTestimonies && (
              <div
                ref={ref as LegacyRef<HTMLDivElement> | undefined}
                className={styles.testimoniesEditContainer}
              >
                <div className={styles.testimoniesContent}>
                  {state.testimoniesInfo.map(
                    (item: ITestimony, index: number) => {
                      return (
                        <Card
                          key={index}
                          className={styles.cardClass}
                          contentClassName={styles.cardEditingContainer}
                          containerLimit={isMobileOrTablet ? 340 : 365}
                          contentLimit={isMobileOrTablet ? 340 : 365}
                          height="205px"
                          cardsPerRow={3}
                        >
                          <div className={styles.buttonGroup}>
                            <Button
                              className={classnames(MB_1, MR_1)}
                              variant="warning"
                              size={FIT}
                              onClick={() => handleEdit(item)}
                            >
                              <Icon
                                size={"2x"}
                                color={WHITE}
                                iconId={"FaPencilAlt"}
                                iconDesign={FONT_AWESOME}
                              />
                            </Button>
                            <Button
                              className={MB_1}
                              variant="danger"
                              size={FIT}
                              onClick={() => handleDelete(item)}
                            >
                              <Icon
                                size={"2x"}
                                color={WHITE}
                                iconId={"FaTrashAlt"}
                                iconDesign={FONT_AWESOME}
                              />
                            </Button>
                          </div>
                          <div className={styles.cardContentClass}>
                            <div className={styles.textSection}>
                              <Typography size={21} fontFamily={DOSIS}>
                                {item.name}, {item.age}
                              </Typography>
                              <Typography
                                className={MT_1}
                                size={14}
                                align={JUSTIFY}
                              >
                                {item.comment}
                              </Typography>
                            </div>
                            <div className={styles.profilePicSection}>
                              <Image
                                className={styles.profilePic}
                                width={"93px"}
                                height={"93px"}
                                altText={"profile_pic"}
                                url={
                                  item.imageURL ??
                                  "https://cdn-icons-png.flaticon.com/512/219/219969.png"
                                }
                              />
                            </div>
                          </div>
                        </Card>
                      );
                    }
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {state.isEditingTestimony && (
          <TestimonyModal
            isActive={state.isEditingTestimony}
            selectedTestimony={state.selectedTestimony}
            onClose={() => dispatch(toggleEditingTestimony())}
            onSave={handleSave}
          />
        )}
      </>
    );
  }
);

const mapStateToProps: any = [
  {
    context: WindowSizeStateContext,
    mapStateToProps: ({ isMobileOrTablet }: IWindowSizeState) => ({
      isMobileOrTablet,
    }),
  },
  {
    context: UserStateContext,
    mapStateToProps: ({ currentUser }: IUserState) => ({
      currentUser,
    }),
  },
  {
    context: ScreenStateContext,
    mapStateToProps: ({ isEditMode }: IScreenState) => ({
      isEditMode,
    }),
  },
];

const mergeProps = (
  stateProps: ComponentPropsType,
  dispatchProps: ComponentPropsType,
  ownProps: ComponentPropsType
) => {
  const { currentUser, isEditMode } = stateProps;
  const showEditWrapper = isEditMode && currentUser && currentUser.isAdmin;

  return {
    showEditWrapper,
    ...ownProps,
    ...dispatchProps,
  };
};

export default connect({ mapStateToProps, mergeProps })(Testimonies);
