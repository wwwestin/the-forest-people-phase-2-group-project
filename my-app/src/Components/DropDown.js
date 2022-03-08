import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'


export default class DropDown extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions: [],
      id: "",
      name: ''
    }
  }

 async getOptions(){
    const res = await axios.get('https://developer.nps.gov/api/v1/parks?api_key=3nGt9ZQTH0fW8byyMhNt9bA1avBgXX7gbGuT7Rt4')
    const data = res.data['data']

    const options = data.map(park => ({
      "value" : park.fullName,
      "label" : park.states,
    }))
    
    this.setState({selectOptions: options})
  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
  }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
        <p>You have selected <strong>{this.state.id}</strong></p>
      </div>
    )
  }
}

