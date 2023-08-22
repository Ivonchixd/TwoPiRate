import Rotate361 from "assets/Rotate361";
import Exit from "assets/Exit";
import User from "assets/User";
import Line6 from "assets/Line6";
import DocumentUser from "assets/DocumentUser";
import FolderOpened from "assets/FolderOpened";
import FolderOpened1 from "assets/FolderOpened1";
import ChevronRight from "assets/ChevronRight";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import FolderOpened2 from "assets/FolderOpened2";
import "./PantallaDeVisualizarInformeAdminf.css";
export default function PantallaDeVisualizarInformeAdminf(props: PantallaDeVisualizarInformeAdminfProps) {
  const [respuestas, setRespuestas] = useState('');

  useEffect(() => {
    const storedRespuestas = window.localStorage.getItem('respuestas');
    if (storedRespuestas !== null) {
      setRespuestas(storedRespuestas);
    }
  }, []);

  return <div className={`${props.className} pantalla-de-visualizar-informe-adminf-pantalla-de-visualizar-informe-adminf`} style={props.style}>
    <div className="pantalla-de-visualizar-informe-adminf-horizontal-container">
      <div className="pantalla-de-visualizar-informe-adminf-text-input">
        <div className="pantalla-de-visualizar-informe-adminf-button-group-base">
          <Rotate361 className="pantalla-de-visualizar-informe-adminf-rotate-360x-1" />
          <p className="pantalla-de-visualizar-informe-adminf-button">
            2πRate
          </p>
          <Rotate361 className="pantalla-de-visualizar-informe-adminf-rotate-360x-2" />
        </div>
      </div>
    </div>
    <div className="pantalla-de-visualizar-informe-adminf-frame-10x">
      <div className="pantalla-de-visualizar-informe-adminf-side-menu">
        <div className="pantalla-de-visualizar-informe-adminf-header">
          <div className="pantalla-de-visualizar-informe-adminf-paragraph-container">
            <p className="pantalla-de-visualizar-informe-adminf-pedro-alcntara">
              Dalbiery Rodriguez
            </p>
            <p className="pantalla-de-visualizar-informe-adminf-pedral-192304outloo">
              dr21-1740@gmail.com
            </p>
          </div>
          <div className="pantalla-de-visualizar-informe-adminf-actions">
            <div className="pantalla-de-evaluaciones-adminf-button-1">
              <Exit className="pantalla-de-evaluaciones-adminf-exit-1" />
              <Link
                to="/inicio-sesion"
                className="pantalla-de-evaluaciones-adminf-text">
                Salir de la cuenta
              </Link>
            </div>
            <div className="pantalla-de-visualizar-informe-adminf-side-menu-section">
              <User className="pantalla-de-visualizar-informe-adminf-user-1" />
            </div>
          </div>
        </div>
        <Line6 className="pantalla-de-visualizar-informe-adminf-line-6x-1" />
        <div className="pantalla-de-visualizar-informe-adminf-bottom-section">
          <div className="pantalla-de-visualizar-informe-adminf-sections">
            <div className="pantalla-de-visualizar-informe-adminf-sections-1">
              <div className="pantalla-de-visualizar-informe-adminf-layout-20">
                <div className="pantalla-de-visualizar-informe-adminf-side-menu-section-1">
                  <DocumentUser className="pantalla-de-visualizar-informe-adminf-document-user-1" />
                  <div>
                    <Link
                      to="/evaluaciones-admin"
                      className="pantalla-de-crear-evaluaciones-adminf-text-1"
                    >
                      Evaluaciones
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pantalla-de-visualizar-informe-adminf-layout-21">
                <div className="pantalla-de-visualizar-informe-adminf-side-menu-section-2">
                  <FolderOpened className="pantalla-de-visualizar-informe-adminf-folder-opened-3" />
                  <p className="pantalla-de-visualizar-informe-adminf-text-2">
                    Informes
                  </p>
                </div>
              </div>
              <div>
                <div className="pantalla-de-visualizar-informe-adminf-rectangle-3x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pantalla-de-visualizar-informe-adminf-container-1">
        <div className="pantalla-de-visualizar-informe-adminf-container-2">
          <div className="pantalla-de-visualizar-informe-adminf-section-header">
            <div className="pantalla-de-visualizar-informe-adminf-breadcrumb">
              <div className="pantalla-de-visualizar-informe-adminf-breadcrumb-base">
                <FolderOpened1 className="pantalla-de-visualizar-informe-adminf-folder-opened-4" />
                <p className="pantalla-de-visualizar-informe-adminf-text-3">
                  Informes
                </p>
                <ChevronRight className="pantalla-de-visualizar-informe-adminf-chevron-right-1" />
              </div>
              <div className="pantalla-de-visualizar-informe-adminf-breadcrumb-base-1">
                <FolderOpened2 className="pantalla-de-visualizar-informe-adminf-folder-opened-5" />
                <p className="pantalla-de-visualizar-informe-adminf-text-4">
                  #1
                </p>
              </div>
            </div>
            <div className="pantalla-de-visualizar-informe-adminf-up-content">
              <div className="pantalla-de-visualizar-informe-adminf-container-3">
                <p className="pantalla-de-visualizar-informe-adminf-informe-1525x">
                  Informe #1525
                </p>
                <p className="pantalla-de-visualizar-informe-adminf-resultados-de-la-eva">
                  Resultados de la evaluación correspondiente
                </p>
              </div>
              <div className="pantalla-de-visualizar-informe-adminf-container-4">
                <div className="pantalla-de-visualizar-informe-adminf-container-5" />
              </div>
            </div>
            <div className="pantalla-de-visualizar-informe-adminf-table">
            <div className="pantalla-de-visualizar-informe-adminf-input-field">
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
            <div className="pantalla-de-visualizar-informe-adminf-table-1">
              <div>
                <div className="pantalla-de-visualizar-informe-adminf-card-header-1">
                  <div className="pantalla-de-visualizar-informe-adminf-text-6">
                    <div className="pantalla-de-visualizar-informe-adminf-input-field-1">
                      <div className="pantalla-de-visualizar-informe-adminf-segmented-picker-1">
                        <p>{respuestas}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
PantallaDeVisualizarInformeAdminf.defaultProps = {
  className: "",
  style: {}
};
interface PantallaDeVisualizarInformeAdminfProps {
  className: string;
  style: Object;
}
