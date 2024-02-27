import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchCources = ({handleSearch}) => {
  return (
    <div className="searchBox">
      <span className="searchBlock">
        <input type="text" placeholder='search courses...' 
        onInput={e=> handleSearch(e.target.value)}/>
</span>
<span className="searchIcon">
         <FaSearch />
</span>
    </div>
  )
}

export default SearchCources