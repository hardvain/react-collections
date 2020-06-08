import React from 'react'
import styles from './styles.module.css'
import Collection from './components/Collection'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

export default ({ data, config, view = 'list' }) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Collection data={data} config={config} view={view} />
    </ThemeProvider>
  )
}
