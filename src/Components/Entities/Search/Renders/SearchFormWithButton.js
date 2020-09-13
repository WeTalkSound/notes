import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export default function SearchFormWithButton({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState("")

  const history = useHistory()

  const goToSearch = () => {
    console.log('Search')
    if (!searchTerm.length) {
      setError("Please type a search term")
      return
    }
    history.push(`/search?q=${searchTerm}`)
    onSearch()
  }

  const updateSearch = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
    <input
      placeholder="What would you like to find?"
      onChange={updateSearch}
      value={searchTerm}
      id="search"
      name="search"
      type="text"
      className="form-control text-center mb-3"
    />
    <div className="text-center">
      <button onClick={goToSearch} className="btn btn-primary">Search</button>
      <p>{error}</p>
    </div>
    </>
  )
}