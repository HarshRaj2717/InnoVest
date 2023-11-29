import React from 'react'
import market from "./images/market.jpg"
import "./card.css"

const Four = () => {
  return (
    <div>
      <div class="skill-card">
                    <header class="skill-card__header"><img class="skill-card__icon" src={market} alt="HTML5 Logo" /></header>
                    <section class="skill-card__body">
                        <h2 class="skill-card__title">BizzGPT</h2><span class="skill-card__duration">letsgo boyy</span>
                        <ul class="skill-card__knowledge">
                            <li>hello startup bhai</li>
                            <li>kaise ho bhai</li>
                        </ul>
                    </section>
                </div>
    </div>
  )
}

export default Four
