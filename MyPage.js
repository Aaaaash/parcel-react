import React, { PureComponent } from 'react';

class MyPage extends PureComponent {
  render() {
    const { info } = this.props;
    console.log('render');
    return (
      <div>
        my name is {info.name}, i am {info.age} years old!
      </div>
    );
  }
}

export default MyPage;
