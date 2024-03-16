import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import SideBar from './Components/SideBar/SideBar'

function App() {
  const [remove, setRemove] = useState([])
  const [toCook, setToCook] = useState([])
  const [count, setcount] = useState(0)
  console.log(toCook)
  const handleRemove = (id) => {
    const filteredRemove = toCook.filter(cook => cook.recipe_id !== id)
    const removedRecipe = toCook.filter(cook => cook.recipe_id === id)
    const newRemovedList = [...remove, removedRecipe]
    setToCook(filteredRemove)
    setRemove(newRemovedList)
  }

  const handleToCook = (card) => {
    if (card.recipe_id !== toCook.recipe_id) {
      const newToCook = [...toCook, card]
      setToCook(newToCook)
    }
    alert("This Item has been already selected")
    const newToCook2 = [toCook]
      setToCook(newToCook2)
  }
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-7 gap-2  mx-2 lg:mx-[75px] items-start'>
        <Cards
          handleToCook={handleToCook}

        ></Cards>

        <SideBar
          toCook={toCook}
          count={count}
          handleRemove={handleRemove}
          remove={remove}
        ></SideBar>
      </div>
    </>
  )
}

export default App
