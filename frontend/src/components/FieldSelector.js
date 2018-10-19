import React from 'react'

const options = [
  { value: 'education', label: 'Education' },
  { value: 'sex', label: 'Sex' },
  { value: 'employment', label: 'Employment'},
];

class FieldSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'education',
      fields: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <select className="hot-pink bg-washed-yellow fw6"
        value={this.state.value}
        onChange={this.handleChange}>
        {options.map(field =>
          <option key={field.key} value={field.value}>{field.value}</option>
          )};
      </select>
    );
  }
}

export default FieldSelector