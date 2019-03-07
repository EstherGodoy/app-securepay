import React, { Component } from 'react';
import splogo from './images/securepay_logo.png';
import Calculator from './calculator';
import CheckRow from './checkRow';
import CalcForm from './CalcForm';
import {
  Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <h1>Simple pricing for online payments</h1>
          <h2>Calculate how much you&#39;ll save on every transaction with our low rate of just 2% and no additional gateway fees.</h2>
          <section className="calculatorSection">
            <article className="sectionLeft">
              <Calculator/>
            </article>
            <article className="sectionRight">
               <CalcForm/>
            </article>
          </section>
          <CheckRow/>
        </div>
      </main>
    );
  }
}

export default Main;