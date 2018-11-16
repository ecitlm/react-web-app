import React,{Component,Fragment} from 'react'
import { HashRouter as Router,Route } from 'react-router-dom'
import Home from '@/components/Home.js'
import '../assets/css/App.css'
import Test from '@/components/Test'
import News from '@/components/News'
class App extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      list: ['React', 'App'],
      type:2
    }
  }
  componentDidMount() {
    console.log(this)
  }
  render() {
    return (
      <Fragment>
        {/*<Home />*/}
        <Router>
          <div className="router-list">
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/test" component={Test} />
          </div>
        </Router>
      </Fragment>
    )
  }
}
export default App
