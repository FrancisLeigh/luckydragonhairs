import PropTypes from "prop-types"
import React from "react"

import img from '../../images/action_shot.jpeg'

import './styles.hero-image.css'
const HeroImage = ({children}) => (
  <div className="hero-image" style={{
    // background: '#FFB300',
    background: `url(${img}) no-repeat center center`,
    backgroundSize: `cover`
  }}>
    <div className="hero-image__heading-container">
      {children}
    </div>
  </div>
)

HeroImage.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeroImage
