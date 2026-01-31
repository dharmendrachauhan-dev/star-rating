import './StarRating.css';
import {useState} from 'react'


function StarRating({totalStars= 5, changeHoteHuaDekho}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
  return (
    <div className='star-rating'>
      {[...Array(totalStars)].map((_, index) => {
        const value = index + 1

        return (
             <span
            key={index}
            className={`star ${value <= (hover || rating) ? "active": ""}`}
            onClick={() => {
                setRating(value)
                changeHoteHuaDekho && changeHoteHuaDekho(value)
            }}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={()=> setHover(0)}
            >
                ★
            </span>  
        )
      })}
    </div>
  )
}

export default StarRating
