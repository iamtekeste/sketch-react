import React from 'react'
import classnames from 'classnames'
import Artboard from "./Artboard";

export default class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {model, children, ...props} = this.props;
    
    return (
      <div style={{
        position: 'relative',
      }} {...props}>
        
        {children}
        {model.layers.map(artboard => <div
          key={'title-' + artboard['do_objectID']}
          style={{
            position: 'absolute',
            top: artboard.frame.y - 20,
            left: artboard.frame.x,
            color: '#999',
            fontSize: 12,
          }}>{artboard.name}</div>)}
      </div>);
  }
}
