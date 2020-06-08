import React, { useState } from 'react'
import { Box, Icon, Flex, Badge } from '@chakra-ui/core'
import { GrDrag } from 'react-icons/gr'
export default ({ data, config }) => {
  const template = config.template
  return (
    <Box m={5} p={5}>
      {data.map((item) => (
        <Box key={item.id} borderWidth={1} borderRadius={3} p={2} py={4} mb={1}>
          <Flex>
            <Box as={GrDrag} alignSelf='center' mr={2} />
            <Box flexGrow={1}>{template(item)}</Box>
          </Flex>
        </Box>
      ))}
    </Box>
  )
}
