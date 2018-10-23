import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ResultsTable from './ResultsTable';

describe("ResultsTable", () => {
  const resultsTable = shallow(
    <ResultsTable />
  );

  it("renders a table heading 'Variable Type", () => {
    expect(resultsTable
      .find("th")
      .at(0)
      .text()
      ).toEqual("Variable Type")
  });

  describe("rendered `ResultsTableRow`", () => {
    it("receives initial props of length one", () => {
      const resultsTableRow = resultsTable.find("ResultsTableRow");
      expect(Object.keys(resultsTableRow.props()).length).toBe(1);
    });
  });
});