import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'

const Tapezieren = ({ data }) => (
  <>
  <Helmet>
    <title>{data.tapezierenJson.hero.title} – Sonnenburg Bau</title>
  </Helmet>
  <Layout>
    <Hero data={data.tapezierenJson.hero} />
    <div className="container">
      <section className="section is-medium">
        <p className="is-size-4 is-size-5-mobile" dangerouslySetInnerHTML={{ __html: data.tapezierenJson.intro.text }} />
      </section>
    </div>
  </Layout>
  </>
)

Tapezieren.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Tapezieren

export const query = graphql`
    query TapezierenQuery {
      tapezierenJson {
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
      }
    }
`;
