import React, { useState } from 'react'

function Button({count , setcount}) {
 const [add , setadd] = useState(true)
 
    return (
    <div>
         {/* Function To Change Button */}
         <button  className='btn btn-outline-dark'  onClick={()=> {
          setadd(!add)
          if(add){
            setcount(count+1)
          }else{
            setcount(count-1)
          }
         }} >{add ? 'Add cart' : 'Remove Cart'}</button>


    </div>
  )
}


export default Button