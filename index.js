import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

import MyPage from './MyPage';

const Container = styled.div`
  display: flex;
`;

class HelloMessage extends React.Component {
  render() {
    return <Container>
      {this.props.name}
      <MyPage />
    </Container>;
  }
}

const rootNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Sakura" />, rootNode);
