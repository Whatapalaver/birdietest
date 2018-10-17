import React from 'react'
import Navbar from './Navigation/Navbar'
import Header from './Header'
import Footer from './Footer'
import FieldSelector from './FieldSelector'
import ResultsTable from './ResultsTable'

class App extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>
        <h2>Can you see this?</h2>
        <Navbar />
        <Header />
        <FieldSelector />
        <ResultsTable />
        <Footer />
      </div>
    )
  }
}

export default App;