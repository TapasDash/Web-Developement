import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      //counters is an array here
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = () => {
    console.log("Event handler called");
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            // we are passing refernece of the handleDelete so that in counter compoment using props we can use onDelete attribute
            //as we know the component can handle their state data...but if we try to change data throgh its child class..it won't happen i.e through props
            //we can't change data of the parent state..coz its read only..so the child component have to raise the event..and parent compont
            //have to handle i.e handleDelete
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
//In counter component
//onClick={this.props.onDelete}
          //its the reference of handleDelete of parent component which is being passed down to its child
          //through props
