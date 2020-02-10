import React, {Component} from 'react';
import './card.css';
import {Link} from 'react-router-dom' //sirve para enrutar nuestra aplicacion por medio de botones

export default class Card extends Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          {this.props.header}
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.paragraph}</p>
          {/*este es un boton: */}
          <Link className="btn btn-primary btn-block" to="/card-secundario" style={{marginTop: '115px'}}>
            Boton
          </Link>
        </div>
        <div className="card-footer text-muted">
          {this.props.footer}
        </div>
      </div>
    );
  }

}
