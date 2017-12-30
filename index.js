import React from "react";
import ReactDOM from "react-dom/umd/react-dom.development";
import styled from 'styled-components';
import { fromJS } from 'immutable';

import MyPage from './MyPage';

const Container = styled.div`
`;

class HelloMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        count: 10,
        info: {
          name: 'sakura',
          age: 10,
        }
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { data } = this.state;
    const count = data.count;
    this.setState({
      data: Object.assign({}, data, { count: count + 1 })
    });
  }

  render() {
    const { data } = this.state;
    return <Container>
      <MyPage info={data.info} />
      <p>{data.count}</p>
      <button onClick={this.handleClick}>change</button>
    </Container>;
  }
}

const rootNode = document.getElementById("app");
ReactDOM.render(<HelloMessage />, rootNode);
