import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Typing from '../dist';

const App = () => {
  return (
    <div>
        <Typing>
            Simple typing effect component
        </Typing>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
