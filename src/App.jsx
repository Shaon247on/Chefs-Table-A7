import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import SideBar from './Components/SideBar/SideBar'
import {ShowingAlert, HideAlert} from './Alert.mjs'

function App() {
  const [remove, setRemove] = useState([])
  const [toCook, setToCook] = useState([])

  const handleRemove = (id) => {
    const filteredRemove = toCook.filter(cook => cook.recipe_id !== id)
    const removedRecipe = toCook.filter(cook => cook.recipe_id === id)
    const newRemovedList = [...remove, removedRecipe]
    setToCook(filteredRemove)
    setRemove(newRemovedList)
  }

  const handleToCook = (card) => {
    const isExist = toCook.find(item => item.recipe_id == card.recipe_id)
    if (!isExist) {
      const newToCook = [...toCook, card]
      setToCook(newToCook)
    }
    else {
      ShowingAlert()  
      setTimeout(HideAlert,5000)
    }
  }


  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-7 gap-2  mx-2 lg:mx-[75px] items-start'>
        <Cards
          handleToCook={handleToCook}

        ></Cards>

        <SideBar
          toCook={toCook}
          handleRemove={handleRemove}
          remove={remove}
        ></SideBar>
      </div>
    </>
  )
}

export default App
