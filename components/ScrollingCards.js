import React from 'react';
import Slider from 'react-slick';
import styles from "./ScrollingCards.module.css";

const ScrollingCards = React.forwardRef((props, ref) => (
  <Slider ref={ref} {...props.settings}>
    {props.children}
  </Slider>
));

ScrollingCards.displayName = 'ScrollingCards';

export default ScrollingCards;