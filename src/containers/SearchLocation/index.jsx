import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const SearchLocation = () => {
    const handleOnClick = () => {
        console.log("clicked")
    }
  return (
    <div>
        <Input type='text' placeholder='Enter City..' />
        <Button onClick={handleOnClick} />
    </div>
  )
}

export default SearchLocation