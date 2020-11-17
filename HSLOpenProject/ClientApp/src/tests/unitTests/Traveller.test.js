import React from "react";
import { shallow } from "enzyme";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { MockedProvider } from '@apollo/client/testing';
import { Traveller } from "../../components/Traveller";
import { RecoilRoot } from "recoil";
import { ALL_HELSINKI_STOPS, Stops } from '../../helpers/GraphQLQueries';

const mocks = [
    {
        request: {
            query: ALL_HELSINKI_STOPS,
        },
        result: {
            data: {
                stops: { gtfsId: "HSL:6150219", name: "Louhosmäki", lat: 60.202282, lon: 24.358088, zoneId: "D" }
            },
        },
    }
];

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
            <MockedProvider mocks={mocks} addTypename={false}>
                <Traveller />
            </MockedProvider>
      </RecoilRoot>,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    ``
  );
});

it("renders without crashing", () => {
    const wrapper = shallow(<RecoilRoot><Traveller /></RecoilRoot>);
  expect(wrapper.exists()).toBe(true);
});
