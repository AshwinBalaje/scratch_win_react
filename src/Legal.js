import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

function Legal(props){
    
    return (
        <div className="grid-container legalContainer hideDiv">
            <div className="grid-x grid-padding-x">

                <div className="large-10 small-10 small-offset-1 cell">
                    <h1>Legal and Consent</h1>
                    <p>Last updated: February 12th 2021</p>
                </div>

                <div className="large-10 large-offset-1 small-10 small-offset-1 cell legalBox">
                    <h2>Terms and Conditions</h2>
                    <p>
                        Please read these terms and conditions carefully before using our Service.
                        These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                        By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions, then You may not access the Service.
                        You represent that you are over the age of 16. The Company does not permit those under 16 to use the Service.
                    </p>
                    <h3>Cookies</h3>
                    <p>
                        Like any other website, our website also uses 'cookies'. Cookies means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
                        This Cookies Policy explains what Cookies are and how we use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. 
                        We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies 
                    </p>
                    <h4>Necessary / Essential Cookies</h4>
                    <p>
                        Type: Session Cookies<br/>
                        Administered by: Square<br/>
                        Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                    </p>
                    <h4>Functionality Cookies</h4>
                    <p>
                        Type: Persistent Cookies<br/>
                        Administered by: Square<br/>
                        Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                    </p>

                    <h2>Privacy</h2>
                    <p>
                        One of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by our Website and how we use it.<br/>
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. <br/>
                        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. <br/>
                        Our Website does not knowingly collect any Personal Identifiable Information from children under the age of 18. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.<br/>
                        Your personal Information may include:
                        <ul>
                        <li>First name</li>
                        <li>Last name</li>
                        <li>Email</li>
                        <li>Phone Number</li>
                        <li>Address</li>
                        <li>Postal Code</li>
                        <li>Date of Birth</li>
                        <li>Usage Data</li>
                    </ul>

                    <h3>Usage Data</h3>
                    <p>
                        Usage Data is collected automatically when using the Service. Usage Data may include information such as device's Internet Protocol address, 
                        browser type, browser version, the pages of our Service visited, the time and date of visit, the time spent on those pages, unique device identifiers 
                        and other diagnostic data.
                    </p>

                    <h3>Use of your personal data</h3>
                    <p>
                        The Company may use Personal Data for the following purposes:<br/><br/>
                        To provide and maintain our Service, including to monitor the usage of our service.<br/><br/>
                        To Contact you, To contact you by email, telephone calls, SMS or other equivalent form of communication, regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary and reasonable for their implementation.<br/><br/>
                        To provide, you with news, special offers and general information about other goods,services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.<br/><br/>
                        To manage your requests, To attend and manage Your requests to Square.<br/><br/>
                        For business transfers, We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Square about our Service users is among the assets transferred.<br/><br/>
                        For other purposes, We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our services, products and your experience.<br/><br/>
                        We may share your personal information:<br/><br/>
                        <ul>
                        <li>With Service Providers: We may share your personal information with service providers to monitor and analyze the use of our service.</li>
                        <li>For business transfers: We may share your personal information with or during negotiation of any merger, sale of Company assets, financing or acquisition of all or a portion of our business to another company.</li>
                        <li>With Affiliates: We may share your personal information with our affiliates, in which case we will require those affiliates this Privacy Policy. Affiliates include our parent company and any other subsidiaries, joint venture partners or other companies that we control or that are under control with Square.</li>
                        <li>With Business Partner: We may share your personal information with our business partners to offer you with certain products, services and promotions.</li>
                        <li>With your Consent: We may share your personal information for any other purpose with your consent.	</li>
            
                        </ul>
                    </p>

                    <h2>Translation Interpretation</h2>
                    <p>These Terms and Conditions may have been translated if we have made them available to you on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>

                    <h2>Changes to These Terms and Conditions</h2>
                    <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
                        By continuing to access or use Our Service after those revisions become effective, you agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                    </p>

                    <h2>Contact Us</h2>
                    <p>If you have any questions about these Terms and Conditions, you can contact us:<br/>By e-mail – admin.square@gmail.com</p>
                </p></div>
            </div>
        </div>
    )
}
export default Legal;