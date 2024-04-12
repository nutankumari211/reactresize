import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 2px #007BFF",
  borderRadius: "8px",
  background: "#f0f0f0",
  backgroundColor:"cyan",
  boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
  overflow: "hidden",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      boxes: [
        { id: '1', width: '33%', height: '50vh', x: 10, y: 10 },
        { id: '2', width: '67%', height: '50vh', x: 530, y: 10 },
        { id: '3', width: '100%', height: '100vh', x: 10, y: 430 },
      ],
    };
  }

  handleDragStop = (index, d) => {
    const updatedBoxes = [...this.state.boxes];
    updatedBoxes[index].x = d.x;
    updatedBoxes[index].y = d.y;
    this.setState({ boxes: updatedBoxes });
  };

  handleResizeStop = (index, ref, delta, position) => {
    const updatedBoxes = [...this.state.boxes];
    updatedBoxes[index].width = ref.style.width;
    updatedBoxes[index].height = ref.style.height;
    updatedBoxes[index] = { ...updatedBoxes[index], ...position };

    if (index === 0) {
      const remainingWidth = 100 - parseFloat(updatedBoxes[0].width);
      updatedBoxes[1].width = `${remainingWidth}%`;
      updatedBoxes[1].x = this.state.boxes[0].x + parseFloat(updatedBoxes[0].width) * window.innerWidth / 100;
    } else if (index === 1) {
      const remainingWidth = 100 - parseFloat(updatedBoxes[1].width);
      updatedBoxes[0].width = `${remainingWidth}%`;
    }

    this.setState({ boxes: updatedBoxes });
  };

  render() {
    return (
      <div>
        <Rnd
          key={this.state.boxes[0].id}
          style={style}
          size={{ width: this.state.boxes[0].width, height: this.state.boxes[0].height }}
          position={{ x: this.state.boxes[0].x, y: this.state.boxes[0].y }}
          onDragStop={(e, d) => this.handleDragStop(0, d)}
          onResizeStop={(e, direction, ref, delta, position) => this.handleResizeStop(0, ref, delta, position)}
        >
           Hi I am box {this.state.boxes[0].id}
        </Rnd>
        <Rnd
          key={this.state.boxes[1].id}
          style={style}
          size={{ width: this.state.boxes[1].width, height: this.state.boxes[1].height }}
          position={{ x: this.state.boxes[1].x, y: this.state.boxes[1].y }}
          onDragStop={(e, d) => this.handleDragStop(1, d)}
          onResizeStop={(e, direction, ref, delta, position) => this.handleResizeStop(1, ref, delta, position)}
        >
           Hi I am box {this.state.boxes[1].id}
        </Rnd>
        <div style={{ height: '50vh' }}>
          <Rnd
            key={this.state.boxes[2].id}
            style={style}
            size={{ width: this.state.boxes[2].width, height: this.state.boxes[2].height }}
            position={{ x: this.state.boxes[2].x, y: this.state.boxes[2].y }}
            onDragStop={(e, d) => this.handleDragStop(2, d)}
            onResizeStop={(e, direction, ref, delta, position) => this.handleResizeStop(2, ref, delta, position)}
          >
            Hi I am box {this.state.boxes[2].id}
          </Rnd>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
