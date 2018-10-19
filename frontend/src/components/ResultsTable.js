import React from 'react'
import ResultsTableRow from './ResultsTableRow';

const BASE_PATH = 'http://localhost:8082/api/data/'

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // {
        // "name": "Loading......",
        // "countOf": 0,
        // "avAge": 0
        // }
      ]
    };
    
    this.populateData = this.populateData.bind(this);
  }

  populateData(data) {
    this.setState({ data })
  }

  componentDidUpdate() {
    let URL = `${BASE_PATH}\`${this.props.fieldName}\``
    fetch(URL)
    .then(response => response.json())
    .then(data => this.populateData(data))
    .catch(error => error);
  }
  render() {
    // const options = this.state.data
    return (
      <div>
        <table className='collapse ba br2 bg-near-white b--moon-gray pv3 ph3 dib mt2 avenir hot-pink bg-washed-yellow'>
          <tbody>
            <tr className='stripe-dark bb b-moon-gray' key='header'>
              <th className='pv2 ph3 tl f6 fw6 ttu'>Variable Type</th>
              <th className='pv2 ph3 tl f6 fw6 ttu'>Record Count</th>
              <th className='pv2 ph3 tl f6 fw6 ttu'>Average Age</th>
            </tr>
            <ResultsTableRow data={this.state.data} />
          </tbody>
        </table>
      </div>
    )
  }
}


export default ResultsTable