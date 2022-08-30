
import React from 'react'
import ItemCount from './contador/ItemCount'


const ItemListContainer = () => {
    function onAdd(count){
        console.log(`Se han seleccionado ${count} productos`)
    }
  return (
    <div>
 
        <ItemCount stock={5} onAdd={onAdd} initial={1} sum={1} res={1}/>
   
    </div>
  )
}

export default ItemListContainer;