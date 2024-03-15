import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import SideBar from './Components/SideBar/SideBar'

function App() {
  const [remove, setRemove] = useState([])
  const [toCook, setToCook] = useState([])
  const [count, setcount] = useState(0) 
  const handleRemove = (id)=>{
    console.log(id)
    const filteredRemove = toCook.filter(cook => cook.recipe_id !== id)
    console.log(toCook)   
    setToCook(filteredRemove)
    console.log(toCook)   
  }
  
  const handleToCook = (card)=>{    
    const newCount = count + 1
    setcount(newCount)
    const newToCook = [...toCook,card]    
    setToCook(newToCook)
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
