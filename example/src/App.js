import React, { useState } from 'react'
import {
  Box,
  Flex,
  Checkbox,
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/core'
import Collection from 'react-collections'
import 'react-collections/dist/index.css'
import mockData from './data.json'

const listItemTemplate = (item) => {
  return (
    <Box>
      <Flex>
        <Checkbox mr={2} />
        <Box mr={2}>{item.first_name}</Box>
        <Box flexGrow={1}>{item.last_name}</Box>
        <Badge alignSelf='center'>{item.gender}</Badge>
      </Flex>
    </Box>
  )
}

const App = () => {
  const [data, setData] = useState(mockData)
  const onReOrder = (from, to) => {
    const fromData = data[from]
    const toData = data[to]
    const updatedData = [...data]
    updatedData[from] = toData
    updatedData[to] = fromData
    setData(updatedData)
  }
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>List</Tab>
          <Tab>Table</Tab>
          <Tab>Board</Tab>
          <Tab>Calendar</Tab>
          <Tab>Gantt</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Collection
              data={data}
              config={{
                template: listItemTemplate,
                onReOrder
              }}
            />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default App
