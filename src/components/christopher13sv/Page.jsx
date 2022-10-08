import React, { useState, useEffect } from "react";
import {
  BotonIncrementar,
  BotonDisminuir,
  BotonCheck,
  BotonGenerar,
} from "./componentes/botones";
import generarPassword from "./func/generarPassword.jsx";
import "./App.css";

const Page = () => {
  const [configuracion, cambiarConfiguracion] = useState({
    numeroDeCaracteres: 7,
    simbolos: true,
    numeros: true,
    mayusculas: true,
  });

  const copiarPassword = () => {
    const ap = document.getElementById("app");
    ap.elements.namedItem("input-password").select();
    document.execCommand("copy");
    document.getElementById("alerta-copiado").classList.add("active");

    setTimeout(function () {
      document.getElementById("alerta-copiado").classList.remove("active");
    }, 2000);
  };

  const activarModal = () => {
    const modalActive = document.getElementById("howToUseLabel");
    const elementMODAL = document.querySelector(".howToUse");

    modalActive.addEventListener("click", () => {
      elementMODAL.classList.add("modal");
      setTimeout(() => {
        elementMODAL.classList.remove("modal");
      }, 6000);
    });
  };

  const [passwordGenerada, cambiarPasswordGenerada] = useState("");

  useEffect(() => {
    cambiarPasswordGenerada(generarPassword(configuracion));
  }, [configuracion]);

  const incrementarNumeroCaracteres = () => {
    cambiarConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = { ...configuracionAnterior };
      nuevaConfiguracion.numeroDeCaracteres += 1;
      return nuevaConfiguracion;
    });
  };

  const disminuirNumeroCaracteres = () => {
    if (configuracion.numeroDeCaracteres > 1) {
      cambiarConfiguracion((configuracionAnterior) => {
        const nuevaConfiguracion = { ...configuracionAnterior };
        nuevaConfiguracion.numeroDeCaracteres -= 1;
        return nuevaConfiguracion;
      });
    }
  };

  const toggleSimbolos = () => {
    cambiarConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = { ...configuracionAnterior };
      nuevaConfiguracion.simbolos = !nuevaConfiguracion.simbolos;
      return nuevaConfiguracion;
    });
  };

  const toggleNumeros = () => {
    cambiarConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = { ...configuracionAnterior };
      nuevaConfiguracion.numeros = !nuevaConfiguracion.numeros;
      return nuevaConfiguracion;
    });
  };

  const toggleMayusculas = () => {
    cambiarConfiguracion((configuracionAnterior) => {
      const nuevaConfiguracion = { ...configuracionAnterior };
      nuevaConfiguracion.mayusculas = !nuevaConfiguracion.mayusculas;
      return nuevaConfiguracion;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    cambiarPasswordGenerada(generarPassword(configuracion));
  };
  return (
    <div className="contenedor">
      <h1 className="title">Generador de Contraseñas</h1>
      <form className="app" id="app" onSubmit={onSubmit}>
        <div className="fila numero-caracteres">
          <div className="col">
            <label>Numero de Caracteres:</label>
          </div>
          <div className="col botones">
            <BotonDisminuir click={disminuirNumeroCaracteres} />
            <input type="text" id="numero-caracteres" readOnly value={configuracion.numeroDeCaracteres}/>
            <BotonIncrementar click={incrementarNumeroCaracteres} />
          </div>
        </div>
        <div className="fila simbolos">
          <div className="col">
            <label>¿Incluir Simbolos?</label>
          </div>
          <div className="col">
            <BotonCheck
              seleccionado={configuracion.simbolos}
              click={toggleSimbolos}
            />
          </div>
        </div>
        <div className="fila numeros">
          <div className="col">
            <label>¿Incluir Numeros?</label>
          </div>
          <div className="col">
            <BotonCheck
              seleccionado={configuracion.numeros}
              click={toggleNumeros}
            />
          </div>
        </div>
        <div className="fila mayusculas">
          <div className="col">
            <label>¿Incluir Mayusculas?</label>
          </div>
          <div className="col">
            <BotonCheck
              seleccionado={configuracion.mayusculas}
              click={toggleMayusculas}
            />
          </div>
        </div>
        <div className="fila generar">
          <div className="col">
            <BotonGenerar />
          </div>
          <div className="col">
            <input
              className="input-password"
              id="input-password"
              onClick={copiarPassword}
              type="text"
              readOnly={true}
              value={passwordGenerada}
            />
          </div>
        </div>
        <div className="fila alerta">
          <div className="col">
            <div className="alerta-copiado" id="alerta-copiado">
              <p>
                <i className="fas fa-copy"></i> Texto Copiado!
              </p>
            </div>
          </div>
        </div>
      </form>
      <button id="howToUseLabel" onClick={activarModal}>
        ¿Como usarlo?
      </button>
      <div className="howToUse">
        <h1>¿Como funciona?</h1>
        <p>
          Selecciona las opciones que creas más convenientes, haz click en la
          contraseña para copiarla
        </p>
      </div>
    </div>
  );
};

export default Page;
