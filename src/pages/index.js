import React from 'react'

import fixtures from '../utils/__fixtures__'

import Discography from '../components/Discography'
import Layout from '../components/layout'
import Release from '../components/Release'

const IndexPage = () => (
  <Layout>
    <Discography>
      {fixtures.allIds.map(releaseId => <Release release={fixtures.byId[releaseId]} />)}
    </Discography>
  </Layout>
)

export default IndexPage
