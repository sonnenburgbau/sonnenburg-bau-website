import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Tiles = ({ data }) => (
    <div className="columns is-multiline">
        {data.map((e, i) =>
            <div className="column is-one-third" key={i}>
                <Link to={e.link}>
                    <div className="box is-hoverable is-clipped is-paddingless" style={{position: 'relative' }}>
                        <Img
                            fluid={e.image.childImageSharp.fluid}
                            alt={e.title}
                            className="gradient-overlay"
                        />
                    <h1 className="title is-size-3-widescreen is-size-4-desktop is-size-4-touch has-text-centered has-text-white" style={{ position: 'absolute', bottom: '20px', zIndex: '2', width: '100%' }}>{e.title}</h1>
                    </div>
                </Link>
            </div>
        )}
    </div>
);

const IndexPage = ({ data }) => (
    <>
    <Helmet>
      <title>Sonnenburg Bau</title>
    </Helmet>
    <Layout>
        <section className="section is-paddingless">
            <Img
                fluid={data.homepageJson.hero.image.childImageSharp.fluid}
                alt="Sonnenburg Bau"
            />
        </section>
        <section className="section is-medium">
                <h2 className="title is-1 is-size-3-mobile has-text-centered mb-6">{data.homepageJson.intro.title}</h2>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <p className="is-size-4 is-size-5-mobile" dangerouslySetInnerHTML={{ __html: data.homepageJson.intro.text }} />
                    </div>
                    <div className="column is-one-third">
                        <div className="box is-shadowless" style={{backgroundColor: '#023B5B', borderRadius: '16px'}}>
                        <h2 className="title is-2 is-size-4-mobile has-text-white">{data.homepageJson.intro.listTitle}</h2>
                            <ul className="list is-size-4 is-size-5-touch has-text-white">
                                {data.homepageJson.intro.list.map((e, i) => <li key={i}>{e}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section is-medium">
            <h2 className="title is-2 has-text-centered mb-6">Unsere Leistungen</h2>
            <div className="container">
                <Tiles data={data.leistungenJson.leistungen} />
            </div>
	    </section>
    </Layout>
    </>
);

IndexPage.propTypes = {
	data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
    query HomepageQuery {
        homepageJson {
            hero {
                image {
                  childImageSharp {
                    fluid(maxHeight: 500, maxWidth: 1600, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                    
                  }
                }
            }
            intro {
                title
                text
                listTitle
                list
            }
        }
        leistungenJson {
            leistungen {
                title
                image {
                    childImageSharp {
                        fluid(maxHeight: 400, maxWidth: 400, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                link
            }
        }
    }
`;
