import React from 'react'
import "./Footer.css"

const SimilarItem = () => {
  return (
      <div className='item__list'>
          <div className='parent-similar__div'>
              <a href="/" className='similar-link'><img src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg" alt="" /></a>
              <br />
              <p className='similar__price'><i>Laziz Pizza</i> <strong>: ₹ 100</strong></p>
          </div>
          <div className='parent-similar__div'>
              <a href="/" className='similar-link'><img src="https://uploads-ssl.webflow.com/5c481361c604e53624138c2f/60f2ea67b471327a1d82959b_chicken%20roll_1500%20x%201200.jpg" alt="" /></a>
              <br />
              <p className='similar__price'><i>Paneer Roll</i> <strong>: ₹ 140</strong></p>
          </div>
          <div className='parent-similar__div'>
              <a href="/" className='similar-link'><img src="https://media-cdn.tripadvisor.com/media/photo-s/1d/a2/d9/dd/tres-faim-vous-dites.jpg" alt="" /></a>
              <br />
              <p className='similar__price'><i>Paneer Burger</i> <strong>: ₹ 80</strong></p>
          </div>
    </div>
  )
}

export default SimilarItem