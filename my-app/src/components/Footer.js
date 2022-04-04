import React from "react";
import {Tabs, Tab} from 'react-bootstrap/';

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

export default Footer;