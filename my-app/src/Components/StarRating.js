import React, {useState} from 'react'

function StarRating({rating, onReview, id}) {


  const [stars, setStars] = useState(["☆", "☆", "☆", "☆", "☆"]);

  function handleClick(index) {
    let review = [];
    for (let i = 0; i <= 4; i++) {
        i <= index ? review.push("★") : review.push("☆")
    }
    setStars(review)
    onReview(review, id);
  }
  
  
  return (
      <ul className="star-container">
        {rating ?
        rating.map((star) => {
            return <li className="star">{star}</li>
        })
        :
        stars.map((star, index) => {
            return <li onClick={() => handleClick(index)} className="star">{star}</li>
        })}
      </ul>
    )
}

export default StarRating