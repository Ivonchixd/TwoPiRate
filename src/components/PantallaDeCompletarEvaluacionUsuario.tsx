import Rotate361 from "assets/Rotate361";
import Exit from "assets/Exit";
import User from "assets/User";
import { Link } from 'react-router-dom';
import Line6 from "assets/Line6";
import DocumentUser from "assets/DocumentUser";
import DocumentUser1 from "assets/DocumentUser1";
import ChevronRight from "assets/ChevronRight";
import DocumentUser2 from "assets/DocumentUser2";
import React, { useState } from 'react';
import "./PantallaDeCompletarEvaluacionUsuario.css";
export default function PantallaDeCompletarEvaluacionUsuario(props: PantallaDeCompletarEvaluacionUsuarioProps) {
  const [respuestaTexto, setRespuestaTexto] = useState('');

  const handleEnviarRespuestas = () => {
    const respuestas = respuestaTexto;
    setRespuestaTexto('');
    window.localStorage.setItem('respuestas', respuestas); // Almacena en el almacenamiento local
  };

  return <div className={`${props.className} pantalla-de-completar-evaluacion-usuario-pantalla-de-completar-evaluacion-usuario`} style={props.style}>
    <div className="pantalla-de-completar-evaluacion-usuario-horizontal-container">
      <div className="pantalla-de-completar-evaluacion-usuario-text-input">
        <div className="pantalla-de-completar-evaluacion-usuario-button-group-base">
          <Rotate361 className="pantalla-de-completar-evaluacion-usuario-rotate-360x-1" />
          <p className="pantalla-de-completar-evaluacion-usuario-rate">
            2πRate
          </p>
          <Rotate361 className="pantalla-de-completar-evaluacion-usuario-rotate-360x-2" />
        </div>
      </div>
    </div>
    <div className="pantalla-de-completar-evaluacion-usuario-frame-10x">
      <div className="pantalla-de-completar-evaluacion-usuario-side-menu">
        <div className="pantalla-de-completar-evaluacion-usuario-header">
          <div className="pantalla-de-completar-evaluacion-usuario-paragraph-container">
            <p className="pantalla-de-completar-evaluacion-usuario-rei-ayanami">
              UsuarioP
            </p>
            <p className="pantalla-de-completar-evaluacion-usuario-reya-211980outlook">
              ******@gmail.com
            </p>
          </div>
          <div className="pantalla-de-completar-evaluacion-usuario-actions">
            <div className="pantalla-de-evaluaciones-adminf-button-1">
              <Exit className="pantalla-de-evaluaciones-adminf-exit-1" />
              <Link
                to="/inicio-sesion"
                className="pantalla-de-evaluaciones-adminf-text">
                Salir de la cuenta
              </Link>
            </div>
            <div className="pantalla-de-completar-evaluacion-usuario-side-menu-section">
              <User className="pantalla-de-completar-evaluacion-usuario-user-1" />
            </div>
          </div>
        </div>
        <Line6 className="pantalla-de-completar-evaluacion-usuario-line-6x-1" />
        <div className="pantalla-de-completar-evaluacion-usuario-bottom-section">
          <div className="pantalla-de-completar-evaluacion-usuario-sections">
            <div className="pantalla-de-completar-evaluacion-usuario-up-part">
              <div className="pantalla-de-completar-evaluacion-usuario-sections-1">
                <div className="pantalla-de-completar-evaluacion-usuario-side-menu-section-1">
                  <DocumentUser />
                  <div>
                    <p className="pantalla-de-completar-evaluacion-usuario-text-1">
                      Evaluaciones
                    </p>
                  </div>
                  <div className="pantalla-de-completar-evaluacion-usuario-layout-20">
                    <div className="pantalla-de-completar-evaluacion-usuario-rectangle-3x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pantalla-de-completar-evaluacion-usuario-container-1">
        <div className="pantalla-de-completar-evaluacion-usuario-layout-21">
          <div className="pantalla-de-completar-evaluacion-usuario-breadcrumb">
            <div className="pantalla-de-completar-evaluacion-usuario-breadcrumb-base">
              <DocumentUser1 className="pantalla-de-completar-evaluacion-usuario-document-user-4" />
              <p className="pantalla-de-completar-evaluacion-usuario-text-2">
                Evaluaciones
              </p>
              <ChevronRight className="pantalla-de-completar-evaluacion-usuario-chevron-right-1" />
            </div>
            <div className="pantalla-de-completar-evaluacion-usuario-breadcrumb-base-1">
              <DocumentUser2 className="pantalla-de-completar-evaluacion-usuario-document-user-5" />
              <p className="pantalla-de-completar-evaluacion-usuario-text-3">
                Iniciar evaluación
              </p>
            </div>
          </div>
        </div>
        <div className="pantalla-de-completar-evaluacion-usuario-layout-22">
          <div className="pantalla-de-completar-evaluacion-usuario-header-1">
            <p className="pantalla-de-completar-evaluacion-usuario-completar-evaluacin">
              Completar evaluación
            </p>
            <div className="pantalla-de-completar-evaluacion-usuario-container-2">
              <div className="pantalla-de-completar-evaluacion-usuario-container-3">
                <div className="pantalla-de-completar-evaluacion-usuario-button-1" onClick={handleEnviarRespuestas}>
                  <p className="pantalla-de-completar-evaluacion-usuario-text-4">
                    Enviar respuestas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pantalla-de-completar-evaluacion-usuario-layout-23">
          <div className="pantalla-de-completar-evaluacion-usuario-table">
            <div className="pantalla-de-crear-evaluaciones-adminf-card-header">
              <div className="pantalla-de-crear-evaluaciones-adminf-text-6">
                <p className="pantalla-de-crear-evaluaciones-adminf-escriba-sus-pregunta">
                  Preguntas predeterminadas.
                </p>
              </div>
              <div className="pantalla-de-crear-evaluaciones-adminf-input-field">
                <textarea
                  placeholder="Escriba aquí..."
                  className="pantalla-de-crear-evaluaciones-adminf-input"
                  style={{
                    gap: '8px',
                    height: '356px',
                    width: '400%',
                    marginLeft: '-25px',
                    resize: 'none'  // Para evitar que los usuarios cambien el tamaño manualmente
                  }}
                  readOnly  // Esto hace que el contenido no pueda ser editado
                  value={
                    "1-¿Qué aspecto del servicio le impresionó más positivamente?\n\n" +
                    "2-¿Hubo algún momento en el que sintió que podríamos haber mejorado su experiencia con nosotros?\n\n" +
                    "3-En una escala del 1 al 5, ¿cómo calificaría en general el servicio que recibió? (1: Muy insatisfactorio, 5: Muy satisfactorio)\n\n" +
                    "4-¿Hay algún aspecto en particular que quisiera que mejoráramos?\n\n" +
                    "5-¿Cómo describiría su nivel de satisfacción con la comunicación y la atención recibida?"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pantalla-de-completar-evaluacion-usuario-layout-24">
          <div className="pantalla-de-completar-evaluacion-usuario-frame-427319316x">
            <div className="pantalla-de-completar-evaluacion-usuario-table-1">
              <div>
                <div className="pantalla-de-crear-evaluaciones-adminf-card-header">
                  <div className="pantalla-de-crear-evaluaciones-adminf-text-6">
                    <p className="pantalla-de-crear-evaluaciones-adminf-escriba-sus-pregunta">
                      Escriba sus respuestas.
                    </p>
                  </div>
                  <div className="pantalla-de-crear-evaluaciones-adminf-input-field">
                    <textarea
                      placeholder="Escriba aquí..."
                      className="pantalla-de-crear-evaluaciones-adminf-input"
                      style={{
                        gap: '8px',
                        height: '356px',
                        width: '400%',
                        marginLeft: '-25px',
                        resize: 'none'
                      }}
                      value={respuestaTexto}
                      onChange={(e) => setRespuestaTexto(e.target.value)}
                    />
                  </div>

                </div>
              </div>
            </div>
            <div className="pantalla-de-completar-evaluacion-usuario-actions-1" />
          </div>
        </div>
        <div>
          <div className="pantalla-de-completar-evaluacion-usuario-table-2" />
        </div>
      </div>
    </div>
  </div>;
}
PantallaDeCompletarEvaluacionUsuario.defaultProps = {
  className: "",
  style: {}
};
interface PantallaDeCompletarEvaluacionUsuarioProps {
  className: string;
  style: Object;
}

