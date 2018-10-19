import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="black-80 tc pv4 avenir dark-red">
        <h1 className="mt2 mb0 baskerville i fw1 f1">Census Statistics</h1>
        <nav className="bg-light-gray bt b--moon-gray bb tc center mt4">
          <p className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa1 ph4-l">Angela Wolff ---></p>
          <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="https://github.com/Whatapalaver/CV/blob/master/README.md">CV</a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar