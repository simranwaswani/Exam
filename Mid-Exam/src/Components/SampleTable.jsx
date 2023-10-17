import React, { useState } from 'react'

const SampleTable = ({ data }) => {
  const [filterName, setFilterName] = useState('')
  const [filterAge, setFilterAge] = useState('')
  const [filterCity, setFilterCity] = useState('')
  const [filterOccupation, setFilterOccupation] = useState('')

  // State variables for managing data and filtered data
  const [originalData, setOriginalData] = useState(data)
  const [filteredData, setFilteredData] = useState(data)

  const handleFilterNameChange = (e) => {
    setFilterName(e.target.value)
    filterData(e.target.value, filterAge, filterCity, filterOccupation)
  }

  const handleFilterAgeChange = (e) => {
    setFilterAge(e.target.value)
    filterData(filterName, e.target.value, filterCity, filterOccupation)
  }

  const handleFilterCityChange = (e) => {
    setFilterCity(e.target.value)
    filterData(filterName, filterAge, e.target.value, filterOccupation)
  }

  const handleFilterOccupationChange = (e) => {
    setFilterOccupation(e.target.value)
    filterData(filterName, filterAge, filterCity, e.target.value)
  }

  const filterData = (name, age, city, occupation) => {
    const filtered = originalData.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(name.toLowerCase())
      const ageMatch = age === '' || item.age === parseInt(age)
      const cityMatch = city === '' || item.city === city
      const occupationMatch =
        occupation === '' || item.occupation === occupation

      return nameMatch && ageMatch && cityMatch && occupationMatch
    })

    setFilteredData(filtered)
  }

  const resetFilters = () => {
    setFilterName('')
    setFilterAge('')
    setFilterCity('')
    setFilterOccupation('')
    setFilteredData(originalData)
  }

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
          <option value='San Francisco'>San Francisco</option>
          <option value='Chicago'>Chicago</option>
          <option value='Houston'>Houston</option>
          <option value='Miami'>Miami</option>
          <option value='Seattle'>Seattle</option>
          <option value='Boston'>Boston</option>
          <option value='Denver'>Denver</option>
          <option value='Atlanta'>Atlanta</option>
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
          <option value='Designer'>Designer</option>
          <option value='Accountant'>Accountant</option>
          <option value='Doctor'>Doctor</option>
          <option value='Artist'>Artist</option>
          <option value='Software Engineer'>Software Engineer</option>
          <option value='Lawyer'>Lawyer</option>
          <option value='Marketing Manager'>Marketing Manager</option>
          <option value='Entrepreneur'>Entrepreneur</option>
        </select>
      </div>
      <button onClick={resetFilters}>Reset Filters</button>
      <table>
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
      </table>
    </div>
  )
}

export default SampleTable
