import React, { useState } from 'react';
import Rotate361 from "assets/Rotate361";
import "./PantallaDeInicioDeSesion2.css";
import { useNavigate } from 'react-router-dom';

interface PantallaDeInicioDeSesion2Props {
  className: string;
  style: React.CSSProperties;
}

export default function PantallaDeInicioDeSesion2(props: PantallaDeInicioDeSesion2Props) {
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
    navigate("/");
  }

  return (
    <div className={`${props.className} pantalla-de-inicio-de-sesion-2-pantalla-de-inicio-de-sesion-2x`} style={props.style}>
      <div className="pantalla-de-inicio-de-sesion-2-horizontal-container">
        <div className="pantalla-de-inicio-de-sesion-2-text-input">
          <div className="pantalla-de-inicio-de-sesion-2-button-group-base">
            <Rotate361 className="pantalla-de-inicio-de-sesion-2-rotate-360x-1" />
            <p className="pantalla-de-inicio-de-sesion-2-rate">2πRate</p>
            <Rotate361 className="pantalla-de-inicio-de-sesion-2-rotate-360x-2" />
          </div>
        </div>
        <div className="pantalla-de-inicio-de-sesion-2-button">
          <div className="pantalla-de-inicio-de-sesion-2-button-1" onClick={handleRegister}>
            <p className="pantalla-de-inicio-de-sesion-2-text">
              Registrarse
            </p>
          </div>
          <div className="pantalla-de-inicio-de-sesion-2-button-2" onClick={handleLogin}>
            <p className="pantalla-de-inicio-de-sesion-2-text-1">
              Iniciar sesión
            </p>
          </div>
        </div>
      </div>
      <div className="pantalla-de-inicio-de-sesion-2-frame-10x">
        <div className="pantalla-de-inicio-de-sesion-2-web-modal">
          <p className="pantalla-de-inicio-de-sesion-2-bienvenido">
            ¡Bienvenido!
          </p>
          <div className="pantalla-de-inicio-de-sesion-2-input-form">
            <div className="pantalla-de-inicio-de-sesion-2-input-field">
              <p className="pantalla-de-inicio-de-sesion-2-correo-electrnico">
                Correo electrónico
              </p>
              <div className="pantalla-de-inicio-de-sesion-2-segmented-picker">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Ingrese su correo electrónico"
                  className="pantalla-de-inicio-de-sesion-2-text-input-1"
                />
              </div>
            </div>
            <div className="pantalla-de-inicio-de-sesion-2-input-field-1">
              <p className="pantalla-de-inicio-de-sesion-2-contrasea">
                Contraseña
              </p>
              <div className="pantalla-de-inicio-de-sesion-2-segmented-picker-1">
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Ingrese su contraseña"
                  className="pantalla-de-inicio-de-sesion-2-text-input-2"
                />
              </div>
            </div>
          </div>
          <div className="pantalla-de-inicio-de-sesion-2-text-input-container">
            <div className="pantalla-de-inicio-de-sesion-2-button-3" onClick={handleLogin}>
              <p className="pantalla-de-inicio-de-sesion-2-text-4">
                Iniciar sesión
              </p>
            </div>
            <div className="pantalla-de-inicio-de-sesion-2-text-input-3">
              <p className="pantalla-de-inicio-de-sesion-2-no-tienes-una-cuent">
                ¿No tienes una cuenta?
              </p>
              <div className="pantalla-de-inicio-de-sesion-2-button-4" onClick={handleRegister}>
                <p className="pantalla-de-inicio-de-sesion-2-login">
                  Regístrate
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pantalla-de-inicio-de-sesion-2-banner">
          <div className="pantalla-de-inicio-de-sesion-2-image-2x">
            <div className="pantalla-de-inicio-de-sesion-2-image-2bg-0x" />
            <div className="pantalla-de-inicio-de-sesion-2-image-2bg-1x" />
          </div>
        </div>
      </div>
    </div>
  );
}

PantallaDeInicioDeSesion2.defaultProps = {
  className: "",
  style: {}
};
