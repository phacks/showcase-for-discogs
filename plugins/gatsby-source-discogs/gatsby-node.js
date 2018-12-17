const queryString = require('query-string')
const fetch = require('node-fetch')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  // Helper function that processes a photo to match Gatsby's node structure
  const processItem = item => {
    const nodeId = createNodeId(`node-${item.id}`)
    const nodeContent = JSON.stringify(item)
    const nodeData = Object.assign({}, item, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `MyItem`,
        content: nodeContent,
        contentDigest: createContentDigest(item),
      },
    })

    return nodeData
  }

  // Convert the options object into a query string
  const apiOptions = queryString.stringify(configOptions)
  // Join apiOptions with the Pixabay API URL
  const apiUrl = `https://api.discogs.com/users/phacks/collection/folders/0/releases?${apiOptions}`
}
