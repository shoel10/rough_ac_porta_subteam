import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function MenuContent() {
  return (
    <div>
      <ListGroup>
        <ListGroupItem tag="a" href='/' action>
            Home
        </ListGroupItem>
        <ListGroupItem tag="a" href='request-Form' action>
            Request Form
        </ListGroupItem>
        <ListGroupItem tag="a" href='Complaint-Form' action>
            Complaint Form
        </ListGroupItem>
        <ListGroupItem tag="a" href='Contact' action>
            Contact
        </ListGroupItem>
        <ListGroupItem tag="a" href='About' action>
            About
        </ListGroupItem>
      </ListGroup>
    </div> 
  )
}
