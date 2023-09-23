function Cards(props) {

  console.log(props.openSpots)

  let badgeText

  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"

  }

  else if (props.item.stats.location === "Online") {
    badgeText = "ONLINE"
  }
    return (
  
      
  
      <div className="card">
      {badgeText && <div className="card--badge"> {badgeText} </div>} 
      <img src={props.item.coverImg} className="card--image" />
      <div className="card--stats">
          <img src="../images/star.png" className="card--star" />
          <span>{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount}) • </span>
          <span className="gray">{props.item.stats.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price"><span className="bold">From ${props.item.stats.price}</span> / person</p>
  </div>
      
        
        
          
        
    )
  }
  
export default Cards  