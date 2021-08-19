import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'

const Boden = ({ data }) => (
  <>
  <Helmet>
    <title>{data.bodenJson.hero.title} – Sonnenburg Bau</title>
  </Helmet>
  <Layout>
    <Hero data={data.bodenJson.hero} />
    <div className="container">
      <section className="section is-medium">
        <p className="is-size-4 is-size-5-mobile" dangerouslySetInnerHTML={{ __html: data.bodenJson.intro.text }} />
      </section>
    </div>
  </Layout>
  </>
)

Boden.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Boden

export const query = graphql`
    query BodenQuery {
        bodenJson {
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
