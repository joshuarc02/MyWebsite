import React from "react";
import {Tabs, Tab} from 'react-bootstrap/';

function Footer() {
  return (
      <footer style={{position: 'absolute', bottom:0}}>   
        <Tabs>
            <Tab eventKey="contact" title="Contact">
            </Tab>
        </Tabs>
      </footer>
  );
}

export default Footer;