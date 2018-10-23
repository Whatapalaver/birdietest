import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './app';

describe("App", () => {
  const app = shallow(
    <App />
  );
  it("renders the heading 'Birdie Tech Test", () => {
    expect(app.find("h2").text()).toEqual("Birdie Tech Test")
  });

  describe("rendered `Navbar`", () => {
    it("does not receive any props", () => {
      const navbar = app.find("Navbar");
      expect(Object.keys(navbar.props()).length).toBe(0);
    });
  });


});
