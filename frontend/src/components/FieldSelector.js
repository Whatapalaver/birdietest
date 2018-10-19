import React from 'react'
import ResultsTable from './ResultsTable';

const URL = 'http://localhost:8082/api/fields'

class FieldSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'education',
      fields: [{
        "Column_name": "education"
        }]
    };
    this.handleChange = this.handleChange.bind(this);
    this.populateFields = this.populateFields.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  populateFields(fields) {
    this.setState({ fields })
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(fields => this.populateFields(fields))
    .catch(error => error);
  }

  render() {
    const options = this.state.fields
    return (
      <div>
        <select className="hot-pink bg-washed-yellow fw6 tc"
          value={this.state.value}
          onChange={this.handleChange}>
          {options.map((field, index) =>
            <option key={index} value={field.Column_name}>{field.Column_name}</option>
            )};
        </select>
        <ResultsTable fieldName={this.state.value}/>
      </div>
    );
  }
}

export default FieldSelector