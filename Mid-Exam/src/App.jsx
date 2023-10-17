import React from 'react'
//import SampleTable from './SampleTable'
import SampleTable from './Components/SampleTable'
import sampleData from './Components/SampleData'

function App() {
  return (
    <div>
      <SampleTable data={sampleData} />
    </div>
  )
}

export default App
