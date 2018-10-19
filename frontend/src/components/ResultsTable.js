import React from 'react'

const ResultsTable = () => {
  return (
    <div>
      <table className='collapse ba br2 bg-near-white b--moon-gray pv3 ph3 dib mt2 avenir hot-pink bg-washed-yellow'>
        <tbody>
          <tr className='striped--light-gray bb b-moon-gray'>
            <th className='pv2 ph3 tl f6 fw6 ttu'>Variable Type</th>
            <th className='pv2 ph3 tl f6 fw6 ttu'>Record Count</th>
            <th className='pv2 ph3 tl f6 fw6 ttu'>Average Age</th>
          </tr>
          <tr className='striped--light-gray'>
            <td className='pv2 ph3'>Degree Level</td>
            <td className='pv2 ph3'>4567</td>
            <td className='pv2 ph3'>33</td>
          </tr>
          <tr className='striped--light-gray'>
            <td className='pv2 ph3'>Postgraduate Level</td>
            <td className='pv2 ph3'>1267</td>
            <td className='pv2 ph3'>44</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default ResultsTable