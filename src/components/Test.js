import React from 'react'
import { HashRouter as Router,Link } from 'react-router-dom'
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      list:1
    }
    this.linkUrl = this.linkUrl.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  componentWillUpdate (props,state){
    console.log(state)
    alert(1)
  }
  linkUrl(){
    console.log('this is:', this);
    this.setState({
      list:2
    })
    this.props.history.push('/news')
  }

  render() {
    return (
      <div className='test'>
        test 路由页面
        <Router>
          <div>
            <p className="link"><Link to="/news">news</Link></p>
            <p className="link"><Link to="/test">test</Link></p>
            <p onClick={this.linkUrl} className="link">事件路由跳转</p>
          </div >
        </Router>

      </div>
    );
  }
}

export default News


