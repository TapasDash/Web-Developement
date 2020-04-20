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
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} id={counter.id}>
            {/* we won't mess with key attribute as this is reserved to identify our counters also we can't use key attr in props */}
            {/* here h4 is a children attribute */}
            {/* we use childern prop like h4 while making any chat app where we have to show the name of sender or receiver */}
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
