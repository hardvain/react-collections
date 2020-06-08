import './index.css'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
