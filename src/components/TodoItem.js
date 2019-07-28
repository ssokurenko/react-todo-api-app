import React from 'react';

export class TodoItem extends React.Component {
  render() {
    const iconClass = this.props.completed ? 'far fa-check-square fa-lg' : 'far fa-square fa-lg';
    return (
      <li className='list-group-item'>
        <i className={iconClass}></i>
        &nbsp;
        {this.props.title}
      </li>
    )
  };
}
