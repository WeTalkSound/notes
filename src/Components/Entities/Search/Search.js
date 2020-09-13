import React, { useEffect, useContext, useState } from 'react'
import BlogContext from 'Components/Contexts/BlogContext'

export default function Search({for: searchTerm, renderAs}) {
  const [results, setResults] = useState([])
  const context = useContext(BlogContext)
  const SearchResults = renderAs

  useEffect(() => {
    let getSearch = async () => {
      let results = await context.search(searchTerm)
      setResults(results)
    }
    getSearch()
  }, [context, searchTerm])

  return (
    <SearchResults results={results} />
  )
}