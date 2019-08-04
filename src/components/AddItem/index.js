import React from 'react';

export default class AddItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  reset = () => {
    this.setState({
      title: ''
    });
  }

  updateText = event => {
    this.setState({
      title: event.target.value
    });
  }

  addItem() {
    if (this.state.title) {
      this.props.onAdditem(this.state.title);
      this.reset();
    }
  }

  render() {
    return (
      <div className='input-group input-group-lg mb-4'>
        <input onChange={this.updateText} value={this.state.title} className='form-control' type='text' />
        <div className='input-group-append'>
          <div onClick={this.addItem.bind(this)} className='btn btn-outline-secondary'>
            Add
          </div>
        </div>
      </div>
    )
  };
}
