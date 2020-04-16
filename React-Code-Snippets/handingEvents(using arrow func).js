import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    // imageUrl: "https://picsum.photos/200",
  };
  //state is a special property in the react component to pass down data to render in the react component
  renderTags() {
    if (this.state.tag.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

 

  //we can use here arrow functions as they don't remind that this keywowrd the y inherited
  handleIncrement = () => {
    console.log("Increment clicked!", this);
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" />  */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement} //while calling
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //we are picking up the count property of obj state and storing into the sepate const called count
    return count === 0 ? "Zero" : count; //count insted of this.state.count
  }
}

export default Counter;
