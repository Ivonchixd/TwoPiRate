import Rotate361 from "assets/Rotate361";
import Exit from "assets/Exit";
import User from "assets/User";
import Line6 from "assets/Line6";
import DocumentUser from "assets/DocumentUser";
import DocumentUser1 from "assets/DocumentUser1";
import ArrowLeft from "assets/ArrowLeft";
import ArrowRight from "assets/ArrowRight";
import { Link } from 'react-router-dom';
import "./PantallaDeEvaluacionesUsuario.css";
export default function PantallaDeEvaluacionesUsuario(props: PantallaDeEvaluacionesUsuarioProps) {
  return <div className={`${props.className} pantalla-de-evaluaciones-usuario-pantalla-de-evaluaciones-usuario`} style={props.style}>
    <div className="pantalla-de-evaluaciones-usuario-horizontal-container">
      <div className="pantalla-de-evaluaciones-usuario-text-input">
        <div className="pantalla-de-evaluaciones-usuario-button-group-base">
          <Rotate361 className="pantalla-de-evaluaciones-usuario-rotate-360x-1" />
          <p className="pantalla-de-evaluaciones-usuario-button">
            2πRate
          </p>
          <Rotate361 className="pantalla-de-evaluaciones-usuario-rotate-360x-2" />
        </div>
      </div>
    </div>
    <div className="pantalla-de-evaluaciones-usuario-frame-10x">
      <div className="pantalla-de-evaluaciones-usuario-side-menu">
        <div className="pantalla-de-evaluaciones-usuario-header">
          <div className="pantalla-de-evaluaciones-usuario-paragraph-container">
            <p className="pantalla-de-evaluaciones-usuario-brian-ford">
              UsuarioP
            </p>
            <p className="pantalla-de-evaluaciones-usuario-briant_ford-lookscou">
              ******@gmail.com
            </p>
          </div>
          <div className="pantalla-de-evaluaciones-usuario-actions">
            <div className="pantalla-de-evaluaciones-usuario-button-1">
              <Exit className="pantalla-de-evaluaciones-usuario-exit-1" />
              <Link
                to="/inicio-sesion"
                className="pantalla-de-evaluaciones-usuario-text">
                Salir de la cuenta
              </Link>
            </div>
            <div className="pantalla-de-evaluaciones-usuario-side-menu-section">
              <User className="pantalla-de-evaluaciones-usuario-user-1" />
            </div>
          </div>
        </div>
        <Line6 className="pantalla-de-evaluaciones-usuario-line-6x-1" />
        <div className="pantalla-de-evaluaciones-usuario-bottom-section">
          <div className="pantalla-de-evaluaciones-usuario-sections">
            <div className="pantalla-de-evaluaciones-usuario-up-part">
              <div className="pantalla-de-evaluaciones-usuario-sections-1">
                <div className="pantalla-de-evaluaciones-usuario-side-menu-section-1">
                  <DocumentUser />
                  <div>
                    <p className="pantalla-de-evaluaciones-usuario-text-1">
                      Evaluaciones
                    </p>
                  </div>
                  <div className="pantalla-de-evaluaciones-usuario-layout-20">
                    <div className="pantalla-de-evaluaciones-usuario-rectangle-3x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pantalla-de-evaluaciones-usuario-container-1">
        <div className="pantalla-de-evaluaciones-usuario-breadcrumb-base">
          <DocumentUser1 className="pantalla-de-evaluaciones-usuario-document-user-3" />
          <p className="pantalla-de-evaluaciones-usuario-text-2">
            Evaluaciones
          </p>
        </div>
        <div className="pantalla-de-evaluaciones-usuario-header-1">
          <p className="pantalla-de-evaluaciones-usuario-evaluaciones">
            Evaluaciones
          </p>
        </div>
        <div className="pantalla-de-evaluaciones-usuario-message">
          <div className="pantalla-de-evaluaciones-usuario-row">
            <div className="pantalla-de-evaluaciones-usuario-component-rating">
              <div>
                <div className="pantalla-de-evaluaciones-usuario-label" />
              </div>
              <div className="pantalla-de-evaluaciones-usuario-layout-22">
                <div className="pantalla-de-evaluaciones-usuario-label-1">
                  <p className="pantalla-de-evaluaciones-usuario-component">
                    1
                  </p>
                </div>
              </div>
              <div>
                <div className="pantalla-de-evaluaciones-usuario-label-2" />
              </div>
              <div className="pantalla-de-evaluaciones-usuario-layout-24">
                <div className="pantalla-de-evaluaciones-usuario-label-3">
                  <p className="pantalla-de-evaluaciones-usuario-component-1">
                    2
                  </p>
                </div>
              </div>
            </div>
            <div className="pantalla-de-evaluaciones-usuario-event">
              <div className="pantalla-de-evaluaciones-usuario-details">
                <div className="pantalla-de-evaluaciones-usuario-frame-427319312x">
                  <div className="pantalla-de-evaluaciones-usuario-evaluacin-360x">
                    <p className="pantalla-de-evaluaciones-usuario-evaluacin-360text-0x">
                      Evaluación 360
                    </p>
                    <p className="pantalla-de-evaluaciones-usuario-component-text-1x">
                      °
                    </p>
                  </div>
                </div>
                <div className="pantalla-de-evaluaciones-usuario-button-2">
                  <Link
                    to="/completar-evaluacion"
                    className="pantalla-de-evaluaciones-usuario-text-3">
                    Iniciar
                  </Link>
              </div>
            </div>
          </div>
          <div className="pantalla-de-evaluaciones-usuario-event-1">
            <div className="pantalla-de-evaluaciones-usuario-details-1">
              <div className="pantalla-de-evaluaciones-usuario-frame-427319312x-1">
                <div className="pantalla-de-evaluaciones-usuario-evaluacin-360x-1">
                  <p className="pantalla-de-evaluaciones-usuario-evaluacin-360text-0x-1">
                    Evaluación 360
                  </p>
                  <p className="pantalla-de-evaluaciones-usuario-component-text-1x-1">
                    °
                  </p>
                </div>
              </div>
              <div className="pantalla-de-evaluaciones-usuario-button-3">
                <p className="pantalla-de-evaluaciones-usuario-text-4">
                  Finalizada
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pantalla-de-evaluaciones-usuario-row-1">
          <div className="pantalla-de-evaluaciones-usuario-component-rating-1">
            <div>
              <div className="pantalla-de-evaluaciones-usuario-label-4" />
            </div>
            <div>
              <div className="pantalla-de-evaluaciones-usuario-label-5">
                <p className="pantalla-de-evaluaciones-usuario-component-2">
                  4
                </p>
              </div>
            </div>
            <div>
              <div className="pantalla-de-evaluaciones-usuario-label-6" />
            </div>
            <div>
              <div className="pantalla-de-evaluaciones-usuario-label-7">
                <p className="pantalla-de-evaluaciones-usuario-component-3">
                  3
                </p>
              </div>
            </div>
          </div>
          <div className="pantalla-de-evaluaciones-usuario-event-2">
            <div className="pantalla-de-evaluaciones-usuario-details-2">
              <div className="pantalla-de-evaluaciones-usuario-frame-427319312x-2">
                <div className="pantalla-de-evaluaciones-usuario-evaluacin-360x-2">
                  <p className="pantalla-de-evaluaciones-usuario-evaluacin-360text-0x-2">
                    Evaluación 360
                  </p>
                  <p className="pantalla-de-evaluaciones-usuario-component-text-1x-2">
                    °
                  </p>
                </div>
              </div>
              <div className="pantalla-de-evaluaciones-usuario-button-4">
                <p className="pantalla-de-evaluaciones-usuario-text-5">
                  Finalizada
                </p>
              </div>
            </div>
          </div>
          <div className="pantalla-de-evaluaciones-usuario-event-3">
            <div className="pantalla-de-evaluaciones-usuario-details-3">
              <div className="pantalla-de-evaluaciones-usuario-frame-427319312x-3">
                <div className="pantalla-de-evaluaciones-usuario-evaluacin-360x-3">
                  <p className="pantalla-de-evaluaciones-usuario-evaluacin-360text-0x-3">
                    Evaluación 360
                  </p>
                  <p className="pantalla-de-evaluaciones-usuario-component-text-1x-3">
                    °
                  </p>
                </div>
              </div>
              <div className="pantalla-de-evaluaciones-usuario-button-5">
                <p className="pantalla-de-evaluaciones-usuario-text-6">
                  Finalizada
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pantalla-de-evaluaciones-usuario-pagination">
          <div className="pantalla-de-evaluaciones-usuario-pagination-base">
            <ArrowLeft className="pantalla-de-evaluaciones-usuario-arrow-left-1" />
            <p className="pantalla-de-evaluaciones-usuario-anterior">
              Anterior
            </p>
          </div>
          <div className="pantalla-de-evaluaciones-usuario-pagination-base-1">
            <p className="pantalla-de-evaluaciones-usuario-siguiente">
              Siguiente
            </p>
            <ArrowRight className="pantalla-de-evaluaciones-usuario-arrow-right-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div >;
}
PantallaDeEvaluacionesUsuario.defaultProps = {
  className: "",
  style: {}
};
interface PantallaDeEvaluacionesUsuarioProps {
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