import React, {Component} from 'react';
import './card-secundario.css';
import { Link } from 'react-router-dom' //sirve para enrutar nuestra aplicacion por medio de botones


export default class CardSecundario extends Component {

  //INICIO - METODOS PARA NUESTRO COMPONENTE

  //funcion prueba 
  contenidoTitulo = () => {
    console.log("esto funciona!");
  }

  //metodo invocado en el evento onChange de los inputs
  detectarCambios = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name] : e.target.value //asignamos un cambio de estado (nvo valor) a tal elemento detectado en el onchange
    });
  }

  //objeto para manipulacion del estado de los elementos del componente (debe llamarse como tal state si no no refleja cambios en el DOM)
  state = {
    resumen:'',
    descripcion:''
  }

  //FIN - METODOS PARA NUESTRO COMPONENTE


  render() {
    return (
      <div>
        <div className="alert alert-primary text-center" role="alert">
        Añade elementos desde un formulario
        </div>
        <div className="container">
          {/*INICIO GRID*/}
          <div className="row">
            {/*seccion 1*/}
            <div className="col-md-6">
              <div className="card" style={{width:'auto'}}>
                <div className="card-header text-muted" style={{textAlign:'center'}}>
                  Formulario
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Resumen</label>
                      <input name="resumen" type="text" className="form-control" onChange={this.detectarCambios} value={this.state.resumen}/>
                    </div>
                    <div className="form-group">
                      <label>Descripción</label>
                      <textarea name="descripcion" type="text" className="form-control" id="idInputDescripcion" onChange={this.detectarCambios} value={this.state.descripcion}/>
                    </div>
                  </form>
                  <button type="button" className="btn btn-primary btn-block" style={{marginTop:'70px'}} onClick={this.contenidoTitulo}>Agregar</button>
                </div>
                <div className="card-footer ">
                </div>
              </div>
            </div>
            {/*seccion 2*/}
            <div className="col-md-6">
              <div className="card" style={{width:'100%'}}>
                <div className="card-header text-muted" style={{textAlign:'center'}}>
                  Elementos
                </div>
                <div className="card-body">
                </div>
                <div className="card-footer text-muted">
                </div>
              </div>
            </div>
          </div>
          {/*FIN GRID*/}
        </div>
      </div>
    );
  }

}
