import React from 'react'

class ResultsTableRow extends React.Component {

  render() {
    const { data } = this.props;
    const row = data.map((data) =>
    <tr className='striped--light-gray tl' key={data.name}>
      <td className='pv2 ph3' key={data.name + data.countOf} value={data.name}>{data.name}</td>
      <td className='pv2 ph3 tr' key={data.countOf + data.name} value={data.countOf}>{data.countOf}</td>
      <td className='pv2 ph3 tr' key={data.avAge + data.name} value={data.avAge}>{data.avAge}</td>
    </tr>
    );
    const loading =
    <tr className='striped--light-gray tl' key="loading">
      <td className='pv2 ph3' key="loading0" value="loading">Loading.....</td>
      <td className='pv2 ph3 tr' key="loading000" value="0">0</td>
      <td className='pv2 ph3 tr' key="loading001" value="0">0</td>
    </tr>

    if (data.length === 0) {
      return (loading); 
    } else {
      return (row);
    }
  }
}


export default ResultsTableRow