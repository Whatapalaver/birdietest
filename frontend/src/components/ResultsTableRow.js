import React from 'react'

class ResultsTableRow extends React.Component {

  render() {
    const { data } = this.props;
    const row = data.map((data, index) =>
    <tr className='striped--light-gray tl' key={index}>
      <td className='pv2 ph3' key={data.name}>{data.name}</td>
      <td className='pv2 ph3' key={data.countOf}>{data.countOf}</td>
      <td className='pv2 ph3' key={data.avAge}>{data.avAge}</td>
    </tr>
    );

    return (row);
  }
}


export default ResultsTableRow