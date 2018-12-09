import React from 'react'
import { graphql } from "gatsby"

import Discography from '../components/Discography'
import Layout from '../components/layout'
import Release from '../components/Release'

const IndexPage = ({data}) => (
  <Layout>
    <Discography>
      {data.allDiscogsRelease.edges.map(release => <Release release={{
        artist: release.node.artists[0].name,
        imageUrl: release.node.images.find(image => image.type === 'primary')
          ? release.node.images.find(image => image.type === 'primary').uri
          : release.node.images.find(image => image.type === 'secondary').uri,
        title: release.node.title,
        tracklist: release.node.tracklist.map(track => ({
          duration: track.duration,
          title: track.title,
          position: track.position
        })),
        year: release.node.year
      }} />)}
    </Discography>
  </Layout>
)

export const query = graphql`
  query {
    allDiscogsRelease{
      edges {
        node {
          title
          artists {
            name
          }
          tracklist {
            title
            duration
            position
          }
          year
          images {
            uri
            type
          }
        }
      }
    }
  }
`

export default IndexPage
