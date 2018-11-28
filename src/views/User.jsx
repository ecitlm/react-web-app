import React from 'react'
class News extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: 1
    }
    this.linkUrl = this.linkUrl.bind(this)
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  componentWillUpdate (props, state) {
    console.log(state)
    window.alert(1)
  }
  linkUrl () {
    console.log('this is:', this)
    this.setState({
      list: 2
    })
    this.props.history.push('/news')
  }

  render () {
    return <div className='user'>JSX 路由页面</div>
  }
}

export default News
