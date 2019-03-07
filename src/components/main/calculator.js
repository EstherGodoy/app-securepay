import React, { Component } from 'react';
import splogo from './images/securepay_logo.png';
import {
  Link
} from 'react-router-dom';

class Calculator extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        mainInputValue: '',
        securePayValue: '',
        gatewayValue: '',
        placeholder: "Enter Value"
    };

    this.handleCalcInput = this.handleCalcInput.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  handleCalcInput(event) {
    let newValue = event.target.value;
    if(isNaN(newValue)){
      alert('please enter numeric values only');
    }
    else {
      this.setState({mainInputValue: newValue});
    }
  }
  
  handleCalculation(event) {
        //Get User Input Value
        let mainInputValue = this.state.mainInputValue;
        
        //If empty prompt user & set error state
        if (mainInputValue == '') {
          let target = document.getElementById('mainInput');
          target.classList.add('error');
          this.setState({placeholder: 'Please Enter A Value'});

        } 
        else {
            //Do Calculations / Comparisons
            let averagePrice = mainInputValue;
            let securePayValue = mainInputValue * 0.20 / 10;
            let gatewayValue = 0.175 * averagePrice / 10 + 0.30;
            
            this.setState({securePayValue: '$' + securePayValue.toFixed(2)});
            this.setState({gatewayValue: '$' + gatewayValue.toFixed(2)});
        }
  }

  render() {
    return (
     <div class="calculator">
        <figure>
          <img src={splogo} alt="Secure Pay Logo Small"/>
           <figcaption>Calculator</figcaption>
        </figure>
        <h2>Average transaction value</h2>
        <input id="mainInput" value={this.state.mainInputValue} name="atv" placeholder={this.state.placeholder} onChange={this.handleCalcInput}/>
        <button id="calculate" onClick={this.handleCalculation}>Calculate</button>
        <div className="calc-row">
        <table className="calcTableWrap" cellpadding="0" margin="0" border="0">
              <tbody>
                <tr>
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
                      <input readonly className="output sp" value={this.state.securePayValue}/>
                   </td>
                   <td className="rowFourColumnThree">
                      <input readonly className="competitor output" value={this.state.gatewayValue}/>
                   </td>
                </tr>
              </tbody>
           </table>
        </div>
      </div>  
    );
  }
}

export default Calculator;