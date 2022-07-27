import React, { MouseEventHandler } from "react";

interface ISquareProps {
  value: string|null;
  onClick: MouseEventHandler<HTMLButtonElement>
}
/*class Square extends React.Component<ISquareProps> {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}*/

function Square(props: ISquareProps){
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square;
