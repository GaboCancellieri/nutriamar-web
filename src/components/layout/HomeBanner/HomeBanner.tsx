import React, { FC, LegacyRef, useEffect, useReducer } from "react";
import classNames from "classnames";
import {
  Loader,
  Image,
  Button,
  Typography,
  EditWrapper,
  ScrollAnimationWrapper,
  ImageEditModal,
} from "@ccomponents";
import styles from "./homeBanner.module.scss";
import { COLOR_PRIMARY } from "@constants/colors";
import { MT_2 } from "@constants/margins";
import { homeBannerInitialState, homeBannerReducer } from "./context/reducer";
import {
  setHomeBannerInfo,
  setHomeBannerInfoAux,
  toggleEdit,
  toggleEditingImage,
} from "./context/actions";
import {
  handleCancelEdit,
  handleChangeButtonText,
  handleChangeImage,
  handleChangeSubtitle,
  handleChangeTitle,
  handleEditSection,
} from "./utils";
import { HomeBannerProps } from "./types";
import { useHomeBannerService } from "src/api/api";

const HomeBanner: FC<HomeBannerProps> = React.forwardRef(({}, ref) => {
  const Service = useHomeBannerService();
  const [state, dispatch] = useReducer(
    homeBannerReducer,
    homeBannerInitialState
  );

  useEffect(() => {
    (async () => {
      if (!state.homeBannerInfo) {
        const data = await Service.get();
        dispatch(setHomeBannerInfoAux(data));
        dispatch(setHomeBannerInfo(data));
      }
    })();
  }, []);

  const toggleEditImage = () => {
    dispatch(toggleEditingImage());
  };

  const handleSaveImage = (url: string, altText: string) => {
    handleChangeImage({ url, altText }, dispatch);
    toggleEditImage();
  };

  const handleSave = () => {
    try {
      if (state && state.homeBannerInfo) {
        Service.update(state.homeBannerInfo.id, state.homeBannerInfo);
        dispatch(toggleEdit());
        dispatch(setHomeBannerInfoAux(state.homeBannerInfo));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <EditWrapper
        className={styles.editContainer}
        onEditSection={() => handleEditSection(dispatch)}
        onCancel={() => handleCancelEdit(dispatch)}
        onSave={handleSave}
      >
        <div
          ref={ref as LegacyRef<HTMLDivElement> | undefined}
          className={classNames(styles.homeBannerContainer, {
            [styles.isLoading]: !state.homeBannerInfo,
          })}
        >
          {!state.homeBannerInfo ? (
            <Loader height="415px" />
          ) : (
            <div className={styles.homeBannerContent}>
              <Image
                className={styles.homeBannerPlate}
                height="550px"
                width="580px"
                url={"./public/img/homebanner/white-plate.webp"}
                altText={state.homeBannerInfo.imageURL}
              />
              <Image
                className={styles.homeBannerImage}
                height="100%"
                width="100%"
                url={state.homeBannerInfo.image.url}
                altText={state.homeBannerInfo.altText}
                isFixed
                enableEdit={state.isEdit}
                onEdit={toggleEditImage}
              />
              <Image
                className={styles.homeBannerWave}
                height="220px"
                width="100%"
                url={"./public/img/homebanner/wave.webp"}
                altText={state.homeBannerInfo.imageURL}
              />
              <div className={styles.homeBannerTextContainer}>
                <ScrollAnimationWrapper>
                  <Typography
                    lineHeight="50px"
                    color={COLOR_PRIMARY}
                    enableEdit={state.isEdit}
                    onChange={(event: any) =>
                      handleChangeTitle(event, dispatch)
                    }
                    size={30}
                    variant="bold"
                    maxHeight="200px"
                  >
                    {state.homeBannerInfo.title}
                  </Typography>
                  <Typography
                    className={MT_2}
                    lineHeight="30px"
                    size={16}
                    enableEdit={state.isEdit}
                    onChange={(event: any) =>
                      handleChangeSubtitle(event, dispatch)
                    }
                    maxHeight="200px"
                  >
                    {state.homeBannerInfo.subtitle}
                  </Typography>
                  <div className={MT_2}>
                    <Button size="fit" variant="secondaryLight">
                      <Typography
                        size={21}
                        variant="bold"
                        color={COLOR_PRIMARY}
                        enableEdit={state.isEdit}
                        onChange={(event: any) =>
                          handleChangeButtonText(event, dispatch)
                        }
                        maxHeight="30px"
                      >
                        {state.homeBannerInfo.buttonText}
                      </Typography>
                    </Button>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          )}
        </div>
      </EditWrapper>
      {state.isEditingImage && (
        <ImageEditModal
          isActive={state.isEditingImage}
          onClose={toggleEditImage}
          onSave={handleSaveImage}
          previewHeight={"295px"}
          previewWidth={"524px"}
        />
      )}
    </>
  );
});

export default HomeBanner;
