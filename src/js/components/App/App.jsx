import React, {PropTypes} from 'react';
import Radium from 'radium';

var styles = {
    main: {
        color: 'hotpink'
    }
}

export default Radium(
  React.createClass({
      render() {
          console.log('App: ', this);
          return (
            <div className="App" style={[styles.main]}>
                <h1>Hi, I'm the App</h1>
            </div>
          );
      }
  })
)
