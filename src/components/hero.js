import React from 'react'
import Img from 'gatsby-image'

const Hero = ({ data }) => (
  <div className="section is-paddingless">
    <div style={{ position: 'relative' }}>
      <Img
        fluid={data.image.childImageSharp.fluid}
        className="tint-overlay"
        alt={data.title}
      />
    <h1 className="title is-size-3-touch has-text-centered has-text-white" style={{ width: '100%', fontSize: '6rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{data.title}</h1>
    </div>
  </div>
);

export default Hero;