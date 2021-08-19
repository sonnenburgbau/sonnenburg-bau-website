import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'

const Malern = ({ data }) => (
  <>
  <Helmet>
    <title>{data.malernJson.hero.title} – Sonnenburg Bau</title>
  </Helmet>
  <Layout>
    <Hero data={data.malernJson.hero} />
    <div className="container">
      <section className="section is-medium">
        <p className="is-size-4 is-size-5-mobile" dangerouslySetInnerHTML={{ __html: data.malernJson.intro.text }} />
      </section>
    </div>
  </Layout>
  </>
)

Malern.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Malern

export const query = graphql`
    query MalernQuery {
      malernJson {
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
