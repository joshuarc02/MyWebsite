import React from "react";
import {Tabs, Tab} from 'react-bootstrap/';
export default Footer;

function Footer() {
  return (
      <footer>   
        <Tabs defaultActiveKey="copyright" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="copyright" title="Copyright &copy; Your Website 2020">
            </Tab>
            <Tab eventKey="contact" title="Contact">
            </Tab>
        </Tabs>
      </footer>
  );
}