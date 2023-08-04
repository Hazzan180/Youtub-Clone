import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Paper, Box } from '@mui/material'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = () => {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')

  const handleSumbit = (e) => {
    e.preventDefault()

    if(searchTerm) {
      navigate(`/search/${searchTerm}`)
      
      setSearchTerm('')
    }
  }
  return (
    <Box
    component='form'
    onSubmit={handleSumbit}
    sx={{ 
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: {sm: 5},
        backgroundColor: '#fff',
        p: 1
     }}
    >
        <input className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AiOutlineSearch style={{color: 'red', fontSize: '20px'}} />
    </Box>
  )
}

export default SearchBar