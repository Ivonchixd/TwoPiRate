import React, { useState } from 'react';
import Rotate361 from "assets/Rotate361";
import "./PantallaDeRegistro.css";
import { useNavigate } from 'react-router-dom';

export default function PantallaDeRegistro(props: PantallaDeRegistroProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const adminCredentials = {
    email: 'dr21-1740@unphu.edu.do',
    password: 'admin123'
  };

  // Puedes agregar más credenciales de usuarios si lo deseas
  const userCredentials = {
    email: 'usuario@ejemplo.com',
    password: 'usuario123'
  };

  const handleLogin = () => {
    if (email === adminCredentials.email && password === adminCredentials.password) {
      navigate("/evaluaciones-admin");
    } else {
      navigate("/evaluaciones-usuario");
    }
  }  

  const handleRegister = () => {
    alert("Se ha registrado con exito su usuario!");
  }
  return (
    <div className={`${props.className} pantalla-de-registro-pantalla-de-registro`} style={props.style}>
      <div className="pantalla-de-registro-horizontal-container">
        <div className="pantalla-de-registro-text-input">
          <div className="pantalla-de-registro-button-group-base">
            <Rotate361 className="pantalla-de-registro-rotate-360x-1" />
            <p className="pantalla-de-registro-button">2πRate</p>
            <Rotate361 className="pantalla-de-registro-rotate-360x-2" />
          </div>
        </div>
        <div className="pantalla-de-registro-button-1">
          <div className="pantalla-de-registro-button-2" onClick={handleLogin}>
            <p className="pantalla-de-registro-text">Iniciar sesión</p>
          </div>
          <div className="pantalla-de-registro-button-3" onClick={handleRegister}>
            <p className="pantalla-de-registro-text-1">Registrarse</p>
          </div>
        </div>
      </div>
      <div className="pantalla-de-registro-frame-10x">
        <div className="pantalla-de-registro-web-modal">
          <p className="pantalla-de-registro-welcome-back">Regístrate</p>
          <div className="pantalla-de-registro-input-form">
            <div className="pantalla-de-registro-input-field">
              <p className="pantalla-de-registro-label">
                Correo electrónico
              </p>
              <div className="pantalla-de-registro-segmented-picker">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Ingrese su correo electrónico"
                  className="pantalla-de-registro-text-input-1"
                />
              </div>
            </div>
            <div className="pantalla-de-registro-input-field-1">
              <p className="pantalla-de-registro-label-1">Contraseña</p>
              <div className="pantalla-de-registro-segmented-picker-1">
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Ingrese su contraseña"
                  className="pantalla-de-registro-text-input-2"
                />
              </div>
            </div>
          </div>
          <div className="pantalla-de-registro-text-input-container">
            <div className="pantalla-de-registro-button-4" onClick={handleRegister}>
              <p className="pantalla-de-registro-text-4">Registrarse</p>
            </div>
            <div className="pantalla-de-registro-text-input-3">
              <p className="pantalla-de-registro-dont-have-an-accoun">
                ¿Ya tienes una cuenta?
              </p>
              <div className="pantalla-de-registro-button-5" onClick={handleLogin}>
                <p className="pantalla-de-registro-login">
                  Inicia sesión
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pantalla-de-registro-banner">
          <div className="pantalla-de-registro-image-2x">
            <div className="pantalla-de-registro-image-2bg-0x" />
            <div className="pantalla-de-registro-image-2bg-1x" />
          </div>
        </div>
      </div>
    </div>
  )
}

PantallaDeRegistro.defaultProps = {
  className: "",
  style: {}
};

interface PantallaDeRegistroProps {
  className: string;
  style: Object;
}
