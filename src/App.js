import React, {Component} from 'react';
import './App.css';
import Card from './components/card-principal/card'
import CardSecundario from './components/card-secundario/card-secundario'
import {BrowserRouter, Route} from 'react-router-dom' //sirve para enrutar nuestra aplicacion

export default class App extends Component {
  /* esto es una funcion que pasa como props, invocada en nuestro componente 2 (cardSecundario) */
  recopilarDatos = () => {
    console.log("recopilando datos...");
  }
  render() {
    /* hacemos uso de los enrutadores para nuestra app */
    /* indicamos que es enrutador para navegador (recuerda que tambien existe react native) */
    return <BrowserRouter>
      {/* enrutamos nota: podemos usar component={Card} en lugar de render pero en este caso no aplica ya que ese componente contiene props */}
      <Route exact path="/" render={() => {
          return <Card header="Ejemplo practico React" title="Redireccion de componentes" paragraph="Es un simple cambio de componente a componente presionando el boton de abajo" anchor="boton" footer=""/>
        }}></Route>

      {/* segundo componente card */}
      <Route path="/card-secundario" render={() => {
          return <CardSecundario recopilarDatos={this.recopilarDatos}/>
        }}></Route>

    </BrowserRouter>
  }
}
