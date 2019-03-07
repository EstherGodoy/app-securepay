import React, { Component } from 'react';
import check from './images/check.png';
class CheckRow extends Component {
  render() {
    return (
     <section className="checkRow">
       <article className="checkColOne">
          <img src={check} alt="Tick Icon"/> Trusted by over 80,000 merchants
       </article>
       <article className="checkColTwo txtCenter">
          <img src={check} alt="Tick Icon"/> A business of Australia Post
       </article>
       <article className="checkColThree txtCenter">
           <img src={check} alt="Tick Icon"/> Real-time reporting on all transactions
       </article>
      </section>
    );
  }
}

export default CheckRow;