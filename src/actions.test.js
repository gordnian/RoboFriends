import configureStore from "redux-mock-store";
import thunkMiddleWare from "redux-thunk";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as actions from "./actions";

const mockStore = configureStore([thunkMiddleWare]);

describe("testing setSearchField", () => {
  it("should creat an action to search robots", () => {
    const text = "wooo";
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("testing requestRobots", () => {
  it("handles requesting robots api", () => {
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[0]).toEqual(expectedAction);
  });
});
