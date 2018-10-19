import React from 'react'

class ResultsTableRow extends React.Component {

  render() {
    const { data } = this.props;
    const row = data.map((data) =>
    <tr className='striped--light-gray tl' key={data.name}>
      <td className='pv2 ph3' key={data.name + '_td'} value={data.name}>{data.name}</td>
      <td className='pv2 ph3 tr' key={data.countOf + '_td'} value={data.countOf}>{data.countOf}</td>
      <td className='pv2 ph3 tr' key={data.avAge + '_td'} value={data.avAge}>{data.avAge}</td>
    </tr>
    );

    return (row);
  }
}


export default ResultsTableRow