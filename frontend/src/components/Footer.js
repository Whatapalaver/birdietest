import React from 'react'
var { SocialIcon } = require('react-social-icons');

const Footer = (props) => (
  <div>
    <footer className="bg-light-gray bt b--moon-gray tc center mt4 pv1 ph5-ns tc">
        <div className="pa2 dib"><SocialIcon className="pa2" url="http://linkedin.com/in/angelawolff" /></div>
        <div className="pa2 dib"><SocialIcon className="pa2" url="https://github.com/Whatapalaver" /></div>
        <div className="pa2 dib"><SocialIcon className="pa2" url="https://www.instagram.com/whatapalaver_codes/" /></div>
    </footer>
  </div>

)

export default Footer