import { UPDATE_LISTING_STEP } from "./mutation-types"

export default {
  [UPDATE_LISTING_STEP]: (state, res) => {
    state.stepData[res.step] = res.data;
  }
}