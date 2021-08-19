import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'

const Elektro = ({ data }) => (
  <>
  <Helmet>
    <title>{data.elektroJson.hero.title} – Sonnenburg Bau</title>
  </Helmet>
  <Layout>
    <Hero data={data.elektroJson.hero} />
    <div className="container">
      <section className="section is-medium">
        <p className="is-size-4 is-size-5-mobile" dangerouslySetInnerHTML={{ __html: data.elektroJson.intro.text }} />
      </section>
    </div>
  </Layout>
  </>
)

Elektro.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Elektro

export const query = graphql`
    query ElektroQuery {
      elektroJson {
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
