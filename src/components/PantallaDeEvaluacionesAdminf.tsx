import Rotate361 from "assets/Rotate361";
import Exit from "assets/Exit";
import User from "assets/User";
import Line6 from "assets/Line6";
import DocumentUser from "assets/DocumentUser";
import FolderOpened from "assets/FolderOpened";
import Home5 from "assets/Home5";
import ChevronRight from "assets/ChevronRight";
import DocumentUser1 from "assets/DocumentUser1";
import ArrowLeft from "assets/ArrowLeft";
import { Link } from 'react-router-dom';
import ArrowRight from "assets/ArrowRight";
import "./PantallaDeEvaluacionesAdminf.css";
export default function PantallaDeEvaluacionesAdminf(props: PantallaDeEvaluacionesAdminfProps) {
  return <div className={`${props.className} pantalla-de-evaluaciones-adminf-pantalla-de-evaluaciones-adminf`} style={props.style}>
    <div className="pantalla-de-evaluaciones-adminf-horizontal-container">
      <div className="pantalla-de-evaluaciones-adminf-text-input">
        <div className="pantalla-de-evaluaciones-adminf-button-group-base">
          <Rotate361 className="pantalla-de-evaluaciones-adminf-rotate-360x-1" />
          <p className="pantalla-de-evaluaciones-adminf-button">
            2πRate
          </p>
          <Rotate361 className="pantalla-de-evaluaciones-adminf-rotate-360x-2" />
        </div>
      </div>
    </div>
    <div className="pantalla-de-evaluaciones-adminf-frame-10x">
      <div className="pantalla-de-evaluaciones-adminf-side-menu">
        <div className="pantalla-de-evaluaciones-adminf-header">
          <div className="pantalla-de-evaluaciones-adminf-paragraph-container">
            <p className="pantalla-de-evaluaciones-adminf-pedro-alcntara">
              Dalbiery Rodriguez
            </p>
            <p className="pantalla-de-evaluaciones-adminf-pedral-192304outloo">
              dr21-1740@unphu.edu.do
            </p>
          </div>
          <div className="pantalla-de-evaluaciones-adminf-actions">
            <div className="pantalla-de-evaluaciones-adminf-button-1">
              <Exit className="pantalla-de-evaluaciones-adminf-exit-1" />
              <Link
                to="/inicio-sesion"
                className="pantalla-de-evaluaciones-adminf-text">
                Salir de la cuenta
              </Link>
            </div>
            <div className="pantalla-de-evaluaciones-adminf-side-menu-section">
              <User className="pantalla-de-evaluaciones-adminf-user-1" />
            </div>
          </div>
        </div>
        <Line6 className="pantalla-de-evaluaciones-adminf-line-6x-1" />
        <div className="pantalla-de-evaluaciones-adminf-bottom-section">
          <div className="pantalla-de-evaluaciones-adminf-sections">
            <div className="pantalla-de-evaluaciones-adminf-sections-1">
              <div className="pantalla-de-evaluaciones-adminf-side-menu-section-1">
                <DocumentUser />
                <div>
                  <p className="pantalla-de-evaluaciones-adminf-text-1">
                    Evaluaciones
                  </p>
                </div>
                <div className="pantalla-de-evaluaciones-adminf-layout-26">
                  <div className="pantalla-de-evaluaciones-adminf-rectangle-3x" />
                </div>
              </div>
              <div className="pantalla-de-evaluaciones-adminf-side-menu-section-2">
                <div className="pantalla-de-crear-evaluaciones-adminf-side-menu-section-2">
                  <FolderOpened className="pantalla-de-crear-evaluaciones-adminf-folder-opened-1" />
                  <Link
                    to="/informes-admin"
                    className="pantalla-de-crear-evaluaciones-adminf-text-2"
                  >
                    Informes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pantalla-de-evaluaciones-adminf-container-1">
        <div className="pantalla-de-evaluaciones-adminf-container-2">
          <div className="pantalla-de-evaluaciones-adminf-breadcrumb">
            <div className="pantalla-de-evaluaciones-adminf-breadcrumb-base">
              <Home5 className="pantalla-de-evaluaciones-adminf-home-5x-1" />
              <p className="pantalla-de-evaluaciones-adminf-text-3">
                Inicio
              </p>
              <ChevronRight className="pantalla-de-evaluaciones-adminf-chevron-right-1" />
            </div>
            <div className="pantalla-de-evaluaciones-adminf-breadcrumb-base-1">
              <DocumentUser1 className="pantalla-de-evaluaciones-adminf-document-user-3" />
              <p className="pantalla-de-evaluaciones-adminf-text-4">
                Evaluaciones
              </p>
            </div>
          </div>
          <div className="pantalla-de-evaluaciones-adminf-header-1">
            <p className="pantalla-de-evaluaciones-adminf-evaluaciones">
              Evaluaciones
            </p>
            <div className="pantalla-de-evaluaciones-adminf-container-3">
              <div className="pantalla-de-evaluaciones-adminf-container-4">
                <div className="pantalla-de-evaluaciones-adminf-button-2">
                <Link
                to="/crear-evaluaciones-admin"
                  className="pantalla-de-evaluaciones-adminf-text-5">
                    Crear evaluación
                    </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pantalla-de-evaluaciones-adminf-message">
            <div className="pantalla-de-evaluaciones-adminf-row">
              <div className="pantalla-de-evaluaciones-adminf-component-rating">
                <div>
                  <div className="pantalla-de-evaluaciones-adminf-label" />
                </div>
                <div className="pantalla-de-evaluaciones-adminf-layout-28">
                  <div className="pantalla-de-evaluaciones-adminf-label-1">
                    <p className="pantalla-de-evaluaciones-adminf-component">
                      1
                    </p>
                  </div>
                </div>
                <div>
                  <div className="pantalla-de-evaluaciones-adminf-label-2" />
                </div>
                <div className="pantalla-de-evaluaciones-adminf-layout-30">
                  <div className="pantalla-de-evaluaciones-adminf-label-3">
                    <p className="pantalla-de-evaluaciones-adminf-component-1">
                      2
                    </p>
                  </div>
                </div>
              </div>
              <div className="pantalla-de-evaluaciones-adminf-event">
                <div className="pantalla-de-evaluaciones-adminf-details">
                  <div className="pantalla-de-evaluaciones-adminf-frame-427319312x">
                    <div className="pantalla-de-evaluaciones-adminf-evaluacin-360x">
                      <p className="pantalla-de-evaluaciones-adminf-evaluacin-360text-0x">
                        Evaluación 360
                      </p>
                      <p className="pantalla-de-evaluaciones-adminf-component-text-1x">
                        °
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-evaluaciones-adminf-button-3">
                    <p className="pantalla-de-evaluaciones-adminf-text-6">
                      Finalizada
                    </p>
                  </div>
                </div>
              </div>
              <div className="pantalla-de-evaluaciones-adminf-event-1">
                <div className="pantalla-de-evaluaciones-adminf-details-1">
                  <div className="pantalla-de-evaluaciones-adminf-frame-427319312x-1">
                    <div className="pantalla-de-evaluaciones-adminf-evaluacin-360x-1">
                      <p className="pantalla-de-evaluaciones-adminf-evaluacin-360text-0x-1">
                        Evaluación 360
                      </p>
                      <p className="pantalla-de-evaluaciones-adminf-component-text-1x-1">
                        °
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-evaluaciones-adminf-button-4">
                    <p className="pantalla-de-evaluaciones-adminf-text-7">
                      Finalizada
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pantalla-de-evaluaciones-adminf-row-1">
              <div className="pantalla-de-evaluaciones-adminf-component-rating-1">
                <div>
                  <div className="pantalla-de-evaluaciones-adminf-label-4" />
                </div>
                <div>
                  <div className="pantalla-de-evaluaciones-adminf-label-5">
                    <p className="pantalla-de-evaluaciones-adminf-component-2">
                      4
                    </p>
                  </div>
                </div>
                <div>
                  <div className="pantalla-de-evaluaciones-adminf-label-6" />
                </div>
                <div>
                  <div className="pantalla-de-evaluaciones-adminf-label-7">
                    <p className="pantalla-de-evaluaciones-adminf-component-3">
                      3
                    </p>
                  </div>
                </div>
              </div>
              <div className="pantalla-de-evaluaciones-adminf-event-2">
                <div className="pantalla-de-evaluaciones-adminf-details-2">
                  <div className="pantalla-de-evaluaciones-adminf-frame-427319312x-2">
                    <div className="pantalla-de-evaluaciones-adminf-evaluacin-360x-2">
                      <p className="pantalla-de-evaluaciones-adminf-evaluacin-360text-0x-2">
                        Evaluación 360
                      </p>
                      <p className="pantalla-de-evaluaciones-adminf-component-text-1x-2">
                        °
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-evaluaciones-adminf-button-5">
                    <p className="pantalla-de-evaluaciones-adminf-text-8">
                      Finalizada
                    </p>
                  </div>
                </div>
              </div>
              <div className="pantalla-de-evaluaciones-adminf-event-3">
                <div className="pantalla-de-evaluaciones-adminf-details-3">
                  <div className="pantalla-de-evaluaciones-adminf-frame-427319312x-3">
                    <div className="pantalla-de-evaluaciones-adminf-evaluacin-360x-3">
                      <p className="pantalla-de-evaluaciones-adminf-evaluacin-360text-0x-3">
                        Evaluación 360
                      </p>
                      <p className="pantalla-de-evaluaciones-adminf-component-text-1x-3">
                        °
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-evaluaciones-adminf-button-6">
                    <p className="pantalla-de-evaluaciones-adminf-text-9">
                      Finalizada
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pantalla-de-evaluaciones-adminf-pagination">
              <div className="pantalla-de-evaluaciones-adminf-pagination-base">
                <ArrowLeft className="pantalla-de-evaluaciones-adminf-arrow-left-1" />
                <p className="pantalla-de-evaluaciones-adminf-prev">
                  Anterior
                </p>
              </div>
              <div className="pantalla-de-evaluaciones-adminf-pagination-base-1">
                <p className="pantalla-de-evaluaciones-adminf-next">
                  Siguiente
                </p>
                <ArrowRight className="pantalla-de-evaluaciones-adminf-arrow-right-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
PantallaDeEvaluacionesAdminf.defaultProps = {
  className: "",
  style: {}
};
interface PantallaDeEvaluacionesAdminfProps {
  className: string;
  style: Object;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */