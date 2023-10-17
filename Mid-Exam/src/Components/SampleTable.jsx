import React, { useState } from 'react'

const SampleTable = ({ data }) => {
  const [filterName, setFilterName] = useState('')
  const [filterAge, setFilterAge] = useState('')
  const [filterCity, setFilterCity] = useState('')
  const [filterOccupation, setFilterOccupation] = useState('')

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
      <div>
        <label>City: </label>
        <select
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
        >
          <option value=''>All</option>
          <option value='New York'>New York</option>
          <option value='Los Angeles'>Los Angeles</option>
          <option value='Chicago'>Chicago</option>
          <option value='San Francisco'>San Francisco</option>
          <option value='Houston'>Houston</option>
          <option value='Seattle'>Seattle</option>
          <option value='Boston'>Boston</option>
          <option value='Denver'>Denver</option>
          <option value='Atlanta'>Atlanta</option>
          <option value='Miami'>Miami</option>
        </select>
      </div>
      <div>
        <label>Occupation: </label>
        <select
          value={filterOccupation}
          onChange={(e) => setFilterOccupation(e.target.value)}
        >
          <option value=''>All</option>
          <option value='Engineer'>Engineer</option>
          <option value='Teacher'>Teacher</option>
          <option value='Designer'>Designer</option>
          <option value='Accountant'>Accountant</option>
          <option value='Doctor'>Doctor</option>
          <option value='Software Engineer'>Software Engineer</option>
          <option value='Lawyer'>Lawyer</option>
          <option value='Marketing Manager'>Marketing Manager</option>
          <option value='Entrepreneur'>Entrepreneur</option>
        </select>
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
              <td>{item.city}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SampleTable
