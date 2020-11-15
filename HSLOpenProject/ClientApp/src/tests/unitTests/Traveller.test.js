import React from "react";
import { shallow } from "enzyme";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { Traveller } from "../../components/Traveller";
import { RecoilRoot } from "recoil";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render a traveller", () => {
  act(() => {
    render(
      <RecoilRoot>
        <Traveller />
      </RecoilRoot>,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<label for=\\"origin\\" id=\\"1\\">Start point:</label><input type=\\"text\\" name=\\"origin\\" value=\\"\\"><label for=\\"destination\\" id=\\"2\\">End point:</label><input type=\\"text\\" name=\\"destination\\" value=\\"\\">"`
  );
});

it("renders without crashing", () => {
    const wrapper = shallow(<RecoilRoot><Traveller /></RecoilRoot>);
  expect(wrapper.exists()).toBe(true);
});
