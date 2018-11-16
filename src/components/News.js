import React from 'react';
import api from '@/service/http.js'
import { HashRouter as Router,Link } from 'react-router-dom'
class News extends React.Component {
  constructor (prop){
    super(prop)
    this.state ={
      list:[]
    }
  }
  componentDidMount() {
    api.articleList().then((res)=>{
      console.log(res.results)
      this.setState({
        list:res.results
      })
    })
  }
  render() {
    return (
      <div>
        <h3 className="welcome">React Web  APP</h3>
        {
          this.state.list.map(function (item,index) {
            console.log(item)
            return <Router key={index}>
                  <p className="news-item"><Link to={item.url}>{item.desc}</Link></p>
              </Router>
          })
        }
      </div>
    );
  }
}

export default News


