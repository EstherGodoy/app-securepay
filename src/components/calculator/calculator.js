import React, { Component } from 'react';
import splogo from './images/securepay_logo.png';
import check from './images/check.png';
import {
  Link
} from 'react-router-dom';

class Calculator extends Component {
  render() {
    return (
     <div class="calculator">
        <figure>
          <img src={splogo} alt="Secure Pay Logo Small"/>
           <figcaption>Calculator</figcaption>
        </figure>
        <h2>Average transaction value</h2>
        <input className="atv" value="" name="atv" placeholder="ENTER VALUE"/>
        <button id="calculate">Calculate</button>
        <div className="calc-row">
           <table className="calcTableWrap" cellpadding="0" margin="0" border="0">
              <tbody><tr>
                 <td className="rowOnecolumnOne"></td>
                 <td className="rowOnecolumnTwo txtYellow" valign="middle">SecurePay</td>
                 <td className="rowOnecolumnThree txtCenter">Other<br/>gateways</td>
              </tr>
              <tr>
                 <td className="rowTwoColumnOne">Merchant fee</td>
                 <td className="rowTwoColumnTwo txtCenter txtYellow">2%</td>
                 <td className="rowTwoColumnThree txtCenter">1.75%</td>
              </tr>
              <tr>
                 <td className="rowThreeColumnOne">Gateway fee</td>
                 <td className="rowThreeColumnTwo txtCenter txtYellow">Free</td>
                 <td className="rowThreeColumnThree txtCenter">30c</td>
              </tr>
              <tr>
                 <td className="rowFourColumnOne" valign="bottom">Cost per<br/>transaction</td>
                 <td className="rowFourColumnTwo">
                    <input className="output sp"/>
                 </td>
                 <td className="rowFourColumnThree">
                    <input className="competitor output"/>
                 </td>
              </tr>
           </tbody></table>
        </div>
    );
  }
}

export default Calculator;