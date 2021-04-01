import React, {useState} from 'react';

const ChocolateList = (props) => {

  const chocolateData = [
    "Cadbury Chocolate Bar",
    "Lindt 90% Dark Chocolate",
    "Hershey's Special Dark",
    "Lily's Sugar Free Chocolate",
    "Crunch",
    "Toblerone"
  ]

  const [chocolateVisibility, setChocolateVisibility] = useState(true)

  let chocolateListItems = chocolateData.map((chocolate) => {
    return(
      <li>
        {chocolate}
      </li>
    )
  })

  const chocolateClick = () => {
    setChocolateVisibility(!chocolateVisibility)
  }

  if(!chocolateVisibility) {
    chocolateListItems = null
  }

  return(
    <div id="chocolate-app">
      <h1 onClick={chocolateClick}>CHOCOLATE ONLY CABINET</h1>
      <ul>
        {chocolateListItems}
      </ul>
    </div>
  )
}

export default ChocolateList;
