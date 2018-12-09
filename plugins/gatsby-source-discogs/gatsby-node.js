const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  const processRelease = release => {
    const nodeId = createNodeId(`discogs-release-${release.id}`)
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
  // Join apiOptions with the Pixabay API URL
  const apiUrl = `https://api.discogs.com/users/phacks/collection/folders/0/releases?${apiOptions}`
  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the JSON data into a node
      .then(data => {
        // For each query result (or 'hit')
        data.releases.forEach(release => {
          const nodeData = processRelease(release)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )
}
