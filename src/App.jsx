import React from 'react'
import StarRating from './components/StarRating'

function App() {

  const handleRating = (rating) => {
    console.log("Selected Rating:", rating)
  }

  return (
    <div>
      <StarRating changeHoteHuaDekho={handleRating}/>
    </div>
  )
}

export default App
