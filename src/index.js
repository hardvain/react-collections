import React from 'react'
import styles from './styles.module.css'
import Collection from './components/Collection'
import { ThemeProvider, CSSReset, Flex, Button, Box } from '@chakra-ui/core'

export default ({ data, config, view = 'list' }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box m={5} p={5}>
        <Flex my={3}>
          <Box flexGrow={1}></Box>
          <Button>Add</Button>
        </Flex>
        <Collection data={data} config={config} view={view} />
      </Box>
    </ThemeProvider>
  )
}
