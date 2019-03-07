import React, { Component } from 'react';
import facebook from './icons/icon_facebook.png';
import linkedin from './icons/icon_linkedin.png';
import twitter from './icons/icon_twitter.png';
import googleplus from './icons/icon_google.png';

class Footer extends Component {
  render() {
    return (
    <footer>
       <section className="container">
          <div>
             <a href="https://www.facebook.com/SecurePayAus/" target="_blank">
                <img className="icon_facebook" src={facebook} alt="Facebook Icon"/>
             </a>
             <a href="https://twitter.com/SecurePayAus?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                <img className="icon_twitter" src={twitter} alt="Twitter Icon"/>
             </a>
             <a href="https://www.linkedin.com/company/securepay" target="_blank">
               <img className="icon_linkedin" src={linkedin} alt="Linkedin Icon"/>
             </a>  
             <a href="https://plus.google.com/+SecurepayAus/posts" target="_blank">
                <img className="icon_google" src={googleplus} alt="GooglePlus Icon"/> 
             </a>
             | &nbsp;&nbsp; <a className="txt-white" href="https://www.securepay.com.au/about/privacy-policy" target="_blank">Privacy Policy</a>
          </div>
          <article className="disclaimer">
             <p><b>Disclaimer:</b>
                AU residents 18+ only. Offer period: 12.01am (AEST) 29/09/16 to 11.59pm (AEST) 30/11/16. All valid applicants who apply for a SecurePay Online Payments Merchant Account during the Offer Period will receive discounted pricing of 2% per transaction on domestic Visa &amp; MasterCard payments (instead of SecurePays standard pricing of 2.4%). To take up this offer, merchants must visit www.securepay.com.au/compare during the Offer Period and fully complete the online SecurePay Online Payments Merchant Account application, using the offer code 'compare2%'. Offer only valid for one SecurePay Merchant Account per person. Discount not transferable or redeemable for cash. Promoter not liable for delay in receiving online applications or for incomplete applications. Discount not valid with any other offer. Claimants may be required to provide proof of age, residency &amp; identity. Standard SecurePay terms and conditions apply (including eligibility criteria).</p> <p>See&nbsp;<a href="www.securepay.com.au/compare" target="_blank">www.securepay.com.au/about/terms-and-conditions</a> for details. Discount may be subject to additional conditions (including expiry dates) as specified by the Promoter.  Promoter: SecurePay Pty Ltd (ABN 92 088 101 875) 222 Exhibition St, VIC 3000.
             </p>
          </article>
       </section>
    </footer>
    );
  }
}

export default Footer;