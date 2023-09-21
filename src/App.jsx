import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './Cards'
import Header from './Header'
import MainContent from './MainContent'
import data from './data'
import './App.css'







function Page() {  

  const cards = data.map((item) => {
    return (
      < Cards key = {item.key} 
               {...item}
                  />
          
    )
  })
 


  return (
      <div>
          <Header />
          <MainContent/>
          <section className='cards-list'>
            {cards}

          </section>
          
      </div>
  )
} 





export default Page



/*img={item.coverImg}
             
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.stats.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots} */
