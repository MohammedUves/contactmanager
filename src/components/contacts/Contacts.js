import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  /*deleteContact = id => {
    const { contacts } = this.state;

    //Use filter function here
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };
*/

  render() {
    return (
      <Consumer>
        {value => {
          //const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-4">
                <span className="text-danger">Contact</span> List
              </h1>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  // name={contact.name} email={contact.email} phone={contact.phone} />
                  // instead of passing the values individually we pass 'contact' object
                  contact={contact}
                  //deleteClickHandler={this.deleteContact.bind(this, 1)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
