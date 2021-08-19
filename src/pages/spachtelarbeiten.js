import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tiles from '../components/tiles'

const Spachtelarbeiten = ({ data }) => (
  <>
  <Helmet>
    <title>Spachtelarbeiten – Sonnenburg Bau</title>
  </Helmet>
  <Layout>
    <Hero data={data.spachtelarbeitenJson.hero} />
    <div className="container">
      <section className="section is-medium">
        <p className="is-size-4 is-size-5-mobile" dangerouslySetInnerHTML={{ __html: data.spachtelarbeitenJson.intro.text }} />
      </section>
      <section className="section is-medium">
        <Tiles data={data.spachtelarbeitenJson.quality.level} />
      </section>
    </div>
  </Layout>
  </>
)

Spachtelarbeiten.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Spachtelarbeiten

export const query = graphql`
    query SpachtelarbeitenQuery {
      spachtelarbeitenJson {
            hero {
                title
                image {
                  childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 1600, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            intro {
              text
            }
            quality {
              headline
              level {
                title
                subtitle
                text
                case
              }
            }
        }
    }
`;
