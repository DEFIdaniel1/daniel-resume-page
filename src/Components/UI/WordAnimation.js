import React from 'react'
import './WordAnimation.scss'

const WordAnimation = () => {
  return (
    <div class="content">
      <div class="content__container">
        <p class="content__container__text">I love </p>
        <ul class="content__container__list">
          <li class="content__container__list__item">blockchain !</li>
          <li class="content__container__list__item">react !</li>
          <li class="content__container__list__item">web apps !</li>
          <li class="content__container__list__item">everybody !</li>
        </ul>
        <p class="content__container__text">I'm a </p>
      </div>
    </div>
  );
}

export default WordAnimation