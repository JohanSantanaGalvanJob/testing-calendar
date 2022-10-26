import React, { Component } from "react";
import axios from "axios";

class TdlistsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          eventList: [],
        };
      }
    
      loadEventList() {
        axios
          .get("/event_types")
          .then((res) => {
            this.setState({ eventList: res.data });
          })
          .catch((error) => console.log(error));
      }

      componentDidMount() {
        this.loadEventList();
      }
    
  render() {
    return (
        <div>
        <div className="taskContainer">
          <input
            className="newTask"
            type="text"
            placeholder="Input a New Task and Press Enter"
            maxLength="75"
            onKeyPress={this.createTodo}
          />
        </div>
        <div className="wrapItems">
          <ul className="listItems">
            {this.state.eventList.map((eventList) => {
              return (
                <li className="item" eventList={eventList} key={eventList.id}>
                  <input className="itemCheckbox" type="checkbox" />
                  <label className="itemDisplay">{eventList.name}</label>
                  <span className="removeItemButton">x</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TdlistsContainer;