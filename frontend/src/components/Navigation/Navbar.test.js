import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Navbar from './Navbar';

describe("Navbar", () => {
  const navbar = shallow(
    <Navbar />
  );
  it("renders the heading 'Census Statistics", () => {
    expect(navbar.find("h1").text()).toEqual("Census Statistics")
  });
});

