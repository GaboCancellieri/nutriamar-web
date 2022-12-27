import { Component, useContext } from "react";
import { IHomeBannerInfo } from "src/components/layout/HomeBanner/context/types";
import { handleAlert } from "../api";
import { ROUTES } from "./constants";

import http from "../http-common";
import { ITestimony } from "src/components/layout/Testimonies/context/types";
const rootURL = ROUTES.TESTIMONIES_ROUTE;

class TestimoniesService extends Component<{}, { dispatch: any }> {
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

  async add(payload: ITestimony) {
    const data = await handleAlert(
      () =>
        http.post(rootURL, {
          payload,
        }),
      this.state.dispatch
    );
    return data;
  }

  async update(id: string, payload: ITestimony) {
    const data = await handleAlert(
      () =>
        http.patch(`${rootURL}/${id}`, {
          payload,
        }),
      this.state.dispatch
    );
    return data;
  }

  async delete(id: string) {
    const data = await handleAlert(
      () => http.delete(`${rootURL}/${id}`),
      this.state.dispatch
    );
    return data;
  }
}

export default TestimoniesService;
