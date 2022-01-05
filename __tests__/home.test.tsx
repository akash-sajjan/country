import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { mount } from "enzyme";
import Home from "../screens/home";
import { View } from "react-native";

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn(),
  },
});

describe("Users screen", () => {
  describe("rendering", () => {
    const props = createTestProps();
    const wrapper = mount(
      <Provider store={store}>
        <Home {...props} />
      </Provider>
    );

    it("should render a view", () => {
      expect(wrapper.find(View)).toHaveLength(1);
    });
  });
});
