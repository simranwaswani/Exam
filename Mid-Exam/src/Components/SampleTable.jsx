import React, { useState } from 'react'

const SampleTable = ({ data }) => {
  const [filterName, setFilterName] = useState('')
  const [filterAge, setFilterAge] = useState('')
  const [filterCity, setFilterCity] = useState('')
  const [filterOccupation, setFilterOccupation] = useState('')

  const handleFilterNameChange = (e) => {
    setFilterName(e.target.value)
  }

  const handleFilterAgeChange = (e) => {
    setFilterAge(e.target.value)
  }

  const handleFilterCityChange = (e) => {
    setFilterCity(e.target.value)
  }

  const handleFilterOccupationChange = (e) => {
    setFilterOccupation(e.target.value)
  }

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
          onChange={handleFilterNameChange}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type='number'
          value={filterAge}
          onChange={handleFilterAgeChange}
        />
      </div>
      <div>
        <label>City: </label>
        <select value={filterCity} onChange={handleFilterCityChange}>
          <option value=''>All</option>
          <option value='New York'>New York</option>
          <option value='Los Angeles'>Los Angeles</option>
        </select>
      </div>
      <div>
        <label>Occupation: </label>
        <select
          value={filterOccupation}
          onChange={handleFilterOccupationChange}
        >
          <option value=''>All</option>
          <option value='Engineer'>Engineer</option>
          <option value='Teacher'>Teacher</option>
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
