import React, { useState } from 'react'

const SampleTable = ({ data }) => {
  const [filterName, setFilterName] = useState('')
  const [filterAge, setFilterAge] = useState('')

  const filteredData = data.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(filterName.toLowerCase())
    const ageMatch = filterAge === '' || item.age === parseInt(filterAge)
    const cityMatch = filterCity === '' || item.city === filterCity
    const occupationMatch =
      filterOccupation === '' || item.occupation === filterOccupation

    return nameMatch && ageMatch && cityMatch && occupationMatch
  })

  return (
    <div>
      <div>
        <label>Name: </label>
        <input
          type='text'
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type='number'
          value={filterAge}
          onChange={(e) => setFilterAge(e.target.value)}
        />
      </div>

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
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SampleTable
