import React from 'react'

const URL = 'http://localhost:8082/api/fields'

class FieldSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'education',
      fields: []
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
      <select className="hot-pink bg-washed-yellow fw6"
        value={this.state.value}
        
        onChange={this.handleChange}>
        {options.map((field, index) =>
          <option key={index} value={field.Column_name}>{field.Column_name}</option>
          )};
      </select>
    );
  }
}

export default FieldSelector