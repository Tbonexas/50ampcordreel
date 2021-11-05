import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import "./style.css";
function TermsofService() {

  return (
    <Container fluid className="termsofService-container">
      <Container>
        <h1 style={{ fontSize: '2.1em', color: 'rgba(245, 181, 27)' }}>
          Terms of Service
        </h1>
        <Row className='termsofService-description'>
          <Col style={{ color: 'white' }}>
            <div class="tos-text">
              <p>Please read these terms of service ("terms", "terms of service") carefully before using YouVend website (the "service") operated by Tbonexas-AEGcodes ("us", 'we", "our").</p>
              <p><strong>Conditions of Use</strong></p>
              <p>We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.</p>
              <p><strong>Privacy Policy</strong></p>
              <p>Before you continue using our website we advise you to read our privacy policy <a href="https://www.youvend.com/privacyPolicy/"><span class="s1">Privacy Policy</span></a> regarding our user data collection. It will help you better understand our practices.</p>
              <p><strong>Copyright</strong></p>
              <p>Content published on this website (digital downloads, images, texts, graphics, logos) is the property of YouVend and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of YouVend, with copyright authorship for this compilation by YouVend.</p>
              <p><strong>Communications</strong></p>
              <p>The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing.</p>
              <p><strong>Applicable Law</strong></p>
              <p>By visiting this website, you agree that the laws of the California, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between YouVend and you, or its business partners and associates.</p>
              <p><strong>Disputes</strong></p>
              <p>Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court California and you consent to exclusive jurisdiction and venue of such courts.</p>
              <p><strong>Comments, Reviews, and Emails</strong></p>
              <p>Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. Content has to be free of software viruses, political campaign, and commercial solicitation.</p>
              <p>We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant YouVend non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.</p>
              <p><strong>License and Site Access</strong></p>
              <p>We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.</p><p><strong>User Account</strong></p>
              <p>If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.</p>
              <p>We reserve all rights to terminate accounts, edit or remove content and cancel orders in their sole discretion.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TermsofService;