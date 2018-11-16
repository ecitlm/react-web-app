import React from 'react';
import { HashRouter as Router,Link } from 'react-router-dom'
const App = () => (
  <Router>
    <div>
      <h3 className="welcome">Welcome use</h3>
      <h3 className="welcome">React Web  APP</h3>
      <p className="link"><Link to="/news">Page-1</Link></p>
      <p className="link"><Link to="/test">Page-2</Link></p>
    </div>
  </Router>
)
class Home extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

export default Home


