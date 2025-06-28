import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
function App() {

  // return (
  //   <React.Fragment>
  //     <h2>Healthy Food</h2>
  //     <ul class="list-group">
  //       <li class="list-group-item">Green Vegetables</li>
  //       <li class="list-group-item">Dal</li>
  //       <li class="list-group-item">Roti</li>
  //       <li class="list-group-item">Fruit</li>
  //       <li class="list-group-item">Sabji</li>
  //     </ul>
  //   </React.Fragment>
  // )




  // let footItems = []
  let foodItems = ["Green Vegetables",'Dal','roti','milk',"ghee",'sabji']


  // if (foodItems.lenght === 0) {
  //   return <h3>I am still Hungry</h3>
  // } 
// if-else statments


  return (
    <>
      <h2>Healthy Food</h2>
      // ternary operator 
      {foodItems.length === 0 ? <h3>I am still Hungry</h3> : null}
      <ul className="list-group">
        {foodItems.map((item) =>
        (<li key={item} className="list-group-item">{item}</li>)
        )}
      </ul>
    </>
  )
}

export default App
