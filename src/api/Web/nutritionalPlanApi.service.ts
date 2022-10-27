import { Component } from "react";
import { IHomeBannerInfo } from "src/components/layout/HomeBanner/context/types";
import { handleAlert } from "../api";

import http from "../http-common";

class NutritionalPlanService extends Component<{}, { dispatch: any }> {
  constructor(dispatch: any) {
    super({});
    this.state = {
      dispatch,
    };
  }

  async get() {
    try {
      const { data } = await http.get("/web/nutritionalPlan");
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, payload: IHomeBannerInfo) {
    const data = await handleAlert(
      () =>
        http.patch(`/web/nutritionalPlan/${id}`, {
          payload,
        }),
      this.state.dispatch
    );
    return data;
  }
}

export default NutritionalPlanService;
