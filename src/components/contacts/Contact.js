import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";
class Contact extends Component {
  /* Using With a constructor 
  constructor() {
    super();
    this.state = { a: "ABCD" };
    this.onShowClick = this.onShowClick.bind(this);
  }
*/
  /* Using without a constructor  
state = { a: "ABCD" };

  onShowClick() {     //Function
    console.log(this.state);
  }
  
  */

  /* Use the following function when not using arrow function in the <i> tag
  onShowClick = id => {
    //Updating State here
    // this.setState({ showContactInfo: false }); //This sets the state of showContactInfo to false just once
    //In order to apply toggle operation on this we use following
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
*/
  state = { showContactInfo: false };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id }); //Dont do this in real life when you have access to a real database
    }
  };

  render() {
    // const { contact } = this.props;
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                &nbsp;
                <i
                  // onClick={this.onShowClick.bind(this)} //If using without a constructor below statement
                  //onClick={this.onShowClick} //If using with a constructor comment above statement

                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                />
                <i
                  className="fas fa-times"
                  style={{ float: "right", cursor: "pointer", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    class="fas fa-pencil-alt"
                    style={{
                      float: "right",
                      cursor: "pointer",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>

              {showContactInfo ? (
                <ul className="list-group lead">
                  <li className="list-group-item bold">
                    <strong>Email: </strong>
                    {email}
                  </li>
                  <li className="list-group-item">
                    <strong>Phone:&nbsp;</strong>
                    {phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
