import React from 'react'
import { Box } from '@chakra-ui/core'
import List from './List'
const CollectionViewMapping = {
  "list":List
}

export default ({ data, config, view }) => {
  const Component = CollectionViewMapping[view]
  return (
    <Box>
      <Component data={data} config={config} />
    </Box>
  )
}
