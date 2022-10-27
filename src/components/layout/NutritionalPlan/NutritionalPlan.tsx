import React, { LegacyRef, useEffect, useReducer } from "react";
import styles from "./nutritionalPlan.module.scss";
import Section from "src/components/common/Section";
import {
  EditWrapper,
  IFrameEditModal,
  ImageEditModal,
  Loader,
} from "@ccomponents";
import {
  nutritionalPlanInitialState,
  nutritionalPlanReducer,
} from "./context/reducer";
import {
  setNutritionalPlanInfo,
  setNutritionalPlanInfoAux,
  toggleIsEditingIFrame,
  toggleIsEditingImage,
  toggleNutritionalPlanEdit,
} from "./context/actions";
import {
  cancelNutritionalPlanEdit,
  onSaveIFrame,
  toggleIFrameEdit,
  toggleImageEdit,
} from "./utils";
import { IFrameBackgroundType } from "src/components/common/IFrame/types";
import { useNutritionalPlanService } from "src/api/api";

const NutritionalPlan = React.forwardRef(({}, ref) => {
  const Service = useNutritionalPlanService();
  const [state, dispatch] = useReducer(
    nutritionalPlanReducer,
    nutritionalPlanInitialState
  );

  useEffect(() => {
    (async () => {
      if (!state.nutritionalPlanInfo) {
        const data = await Service.get();
        dispatch(setNutritionalPlanInfoAux(data));
        dispatch(setNutritionalPlanInfo(data));
      }
    })();
  }, []);

  const handleNutritionalPlanSave = async () => {
    try {
      if (state && state.nutritionalPlanInfo) {
        await Service.update(
          state.nutritionalPlanInfo.id,
          state.nutritionalPlanInfo
        );
        dispatch(toggleNutritionalPlanEdit());
        dispatch(setNutritionalPlanInfoAux(state.nutritionalPlanInfo));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!state.nutritionalPlanInfo ? (
        <Loader height="415px" />
      ) : (
        <EditWrapper
          onEditSection={() => dispatch(toggleNutritionalPlanEdit())}
          onCancel={() => cancelNutritionalPlanEdit(dispatch)}
          onSave={() => handleNutritionalPlanSave()}
        >
          <div
            ref={ref as LegacyRef<HTMLDivElement> | undefined}
            className={styles.nutritionalPlanContainer}
          >
            <Section
              section={state.nutritionalPlanInfo.section1}
              index={0}
              enableScrollAnimation
              enableSectionEdit={state.enableNutritionalPlanEdit}
              onEditIFrame={() => toggleIFrameEdit(0, dispatch)}
              onEditImage={() => toggleImageEdit(0, dispatch)}
            />
            <Section
              section={state.nutritionalPlanInfo.section2}
              index={1}
              enableScrollAnimation
              enableSectionEdit={state.enableNutritionalPlanEdit}
              onEditIFrame={() => toggleIFrameEdit(1, dispatch)}
              onEditImage={() => toggleImageEdit(1, dispatch)}
            />
          </div>
        </EditWrapper>
      )}
      {state.isEditingIFrame && (
        <IFrameEditModal
          isActive={state.isEditingIFrame}
          onClose={() => dispatch(toggleIsEditingIFrame())}
          onSave={(url: string, background: IFrameBackgroundType) =>
            onSaveIFrame(url, background, state, dispatch)
          }
        />
      )}
      {state.isEditingImage && (
        <ImageEditModal
          isActive={state.isEditingImage}
          onClose={() => dispatch(toggleIsEditingImage())}
          onSave={() => {}}
          previewHeight={""}
          previewWidth={""}
        />
      )}
    </>
  );
});

export default NutritionalPlan;
