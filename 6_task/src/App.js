import React, {Component} from 'react';
import Lecture from './Lecture/Lecture';
import Mapmethod from './Lecture/Mapmethod';

class App extends Component {
  render() {
    return <div>Hello World
    <hr />
    
    <Lecture />
    <hr />
    <Mapmethod />
    </div>
  }
}
export default App;