import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <section className="section is-medium has-text-centered">
      <h1 className="title is-2 has-text-centered mb-6">Seite nicht gefunden</h1>
      <Link className="button is-primary is-rounded has-text-weight-semibold" to="/">
        Zur Startseite
      </Link>
    </section>
    
  </Layout>
)

export default NotFoundPage
