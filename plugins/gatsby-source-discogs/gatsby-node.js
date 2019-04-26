const queryString = require('query-string')
const fetch = require('node-fetch')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  // Helper function that processes a release to match Gatsby's node structure
  const processRelease = release => {
    const nodeId = createNodeId(`node-${release.id}`)
    const nodeContent = JSON.stringify(release)
    const nodeData = Object.assign({}, release, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `DiscogsRelease`,
        content: nodeContent,
        contentDigest: createContentDigest(release),
      },
    })

    return nodeData
  }

  // Convert the options object into a query string
  const apiOptions = queryString.stringify(configOptions)
  // Join apiOptions with the Discogs API URL
  const apiUrl = `https://api.discogs.com/users/phacks/collection/folders/0/releases?${apiOptions}`
  return fetch(apiUrl)
    .then(response => response.json())
    .then(allReleasesData => {
      // We have to return an array of promises
      return Promise.all(
        allReleasesData.releases.slice(0, 30).map(release => {
          var singleReleaseApiUrl = `https://api.discogs.com/releases/${release.id}?${apiOptions}`

          return fetch(singleReleaseApiUrl)
            .then(response => response.json())
            .then(singleReleasesData => {
              var nodeData = processRelease(singleReleasesData)

              return createNode(nodeData)
            })
        }
        )
      )
    })
}
