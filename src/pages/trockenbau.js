import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tiles from '../components/tiles'

const Trockenbau = ({ data }) => (
  <>
  <Helmet>
    <title>Trockenbau – Sonnenburg Bau</title>
  </Helmet>
  <Layout>
    <Hero data={data.trockenbauJson.hero} />
    <div className="container">
      <section className="section is-medium">
        <p className="is-size-4 is-size-5-mobile" dangerouslySetInnerHTML={{ __html: data.trockenbauJson.intro.text }} />
      </section>
      <section className="section mb-6">
          <h2 className="title is-2 is-size-3-mobile has-text-centered mb-6">{data.trockenbauJson.cases.headline}</h2>
          <Tiles data={data.trockenbauJson.cases.case} />
      </section>
    </div>
  </Layout>
  </>
)

Trockenbau.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Trockenbau

export const query = graphql`
    query TrockenbauQuery {
      trockenbauJson {
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
            cases {
              headline
              case {
                title
                text
              }
            }
        }
    }
`;
