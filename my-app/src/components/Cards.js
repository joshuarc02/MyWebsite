import React from "react";
import {Card, NavLink} from "react-bootstrap";
export {TictactoeCard};


function TictactoeCard(){
    return (
        <Card bg="secondary" className="text-white">
            <Card.Header className="text-center"><NavLink className="text-white" href="\tictactoe"><h1>Tictactoe</h1></NavLink></Card.Header>
            <Card.Body>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </Card.Text>
                </Card.Body>
        </Card>
    )
}
