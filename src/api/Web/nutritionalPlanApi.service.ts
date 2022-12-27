import { Component } from "react";
import { IHomeBannerInfo } from "src/components/layout/HomeBanner/context/types";
import { handleAlert } from "../api";
import { ROUTES } from "./constants";

import http from "../http-common";
const rootURL = ROUTES.NUTRITIONAL_PLAN_ROUTE;
class NutritionalPlanService extends Component<{}, { dispatch: any }> {
  constructor(dispatch: any) {
    super({});
    this.state = {
      dispatch,
    };
  }

  async get() {
    try {
      const { data } = await http.get(rootURL);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, payload: IHomeBannerInfo) {
    const data = await handleAlert(
      () =>
        http.patch(`${rootURL}/${id}`, {
          payload,
        }),
      this.state.dispatch
    );
    return data;
  }
}

export default NutritionalPlanService;
