import React from 'react'

import sampleData from './Components/SampleData'

const SampleTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
            <td>{item.occupation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function App() {
  return (
    <div>
      <h1>Sample Data Table</h1>
      <SampleTable data={sampleData} />
    </div>
  )
}

export default App
