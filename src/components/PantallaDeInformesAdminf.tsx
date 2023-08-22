import Rotate361 from "assets/Rotate361";
import Exit from "assets/Exit";
import User from "assets/User";
import Line6 from "assets/Line6";
import DocumentUser from "assets/DocumentUser";
import FolderOpened from "assets/FolderOpened";
import DocumentUser1 from "assets/DocumentUser1";
import ChevronRight from "assets/ChevronRight";
import FolderOpened1 from "assets/FolderOpened1";
import ArrowDown from "assets/ArrowDown";
import Eye from "assets/Eye";
import Eye3 from "assets/Eye3";
import { Link } from 'react-router-dom';
import "./PantallaDeInformesAdminf.css";
export default function PantallaDeInformesAdminf(props: PantallaDeInformesAdminfProps) {
  return <div className={`${props.className} pantalla-de-informes-adminf-pantalla-de-informes-adminf`} style={props.style}>
    <div className="pantalla-de-informes-adminf-horizontal-container">
      <div className="pantalla-de-informes-adminf-text-input">
        <div className="pantalla-de-informes-adminf-button-group-base">
          <Rotate361 className="pantalla-de-informes-adminf-rotate-360x-1" />
          <p className="pantalla-de-informes-adminf-button">2πRate</p>
          <Rotate361 className="pantalla-de-informes-adminf-rotate-360x-2" />
        </div>
      </div>
    </div>
    <div className="pantalla-de-informes-adminf-frame-10x">
      <div className="pantalla-de-informes-adminf-side-menu">
        <div className="pantalla-de-informes-adminf-header">
          <div className="pantalla-de-informes-adminf-paragraph-container">
            <p className="pantalla-de-informes-adminf-pedro-alcntara">
              Pedro Alcántara
            </p>
            <p className="pantalla-de-informes-adminf-pedral-192304outloo">
              pedral19-2304@outlook.com
            </p>
          </div>
          <div className="pantalla-de-informes-adminf-actions">
            <div className="pantalla-de-evaluaciones-adminf-button-1">
              <Exit className="pantalla-de-evaluaciones-adminf-exit-1" />
              <Link
                to="/inicio-sesion"
                className="pantalla-de-evaluaciones-adminf-text">
                Salir de la cuenta
              </Link>
            </div>
            <div className="pantalla-de-informes-adminf-side-menu-section">
              <User className="pantalla-de-informes-adminf-user-1" />
            </div>
          </div>
        </div>
        <Line6 className="pantalla-de-informes-adminf-line-6x-1" />
        <div className="pantalla-de-informes-adminf-bottom-section">
          <div className="pantalla-de-informes-adminf-sections">
            <div className="pantalla-de-informes-adminf-sections-1">
              <div className="pantalla-de-informes-adminf-layout-28">
                <div className="pantalla-de-informes-adminf-side-menu-section-1">
                  <DocumentUser className="pantalla-de-informes-adminf-document-user-2" />
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
              <div className="pantalla-de-informes-adminf-layout-29">
                <div className="pantalla-de-informes-adminf-side-menu-section-2">
                  <FolderOpened className="pantalla-de-informes-adminf-folder-opened-2" />
                  <p className="pantalla-de-informes-adminf-text-2">
                    Informes
                  </p>
                </div>
              </div>
              <div>
                <div className="pantalla-de-informes-adminf-rectangle-3x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pantalla-de-informes-adminf-container-1">
        <div className="pantalla-de-informes-adminf-container-2">
          <div className="pantalla-de-informes-adminf-section-header">
            <div className="pantalla-de-informes-adminf-breadcrumb">
              <div className="pantalla-de-informes-adminf-breadcrumb-base">
                <DocumentUser1 className="pantalla-de-informes-adminf-document-user-3" />
                <p className="pantalla-de-informes-adminf-text-3">
                  Evaluaciones
                </p>
                <ChevronRight className="pantalla-de-informes-adminf-chevron-right-1" />
              </div>
              <div className="pantalla-de-informes-adminf-breadcrumb-base-1">
                <FolderOpened1 className="pantalla-de-informes-adminf-folder-opened-3" />
                <p className="pantalla-de-informes-adminf-text-4">
                  Informes
                </p>
              </div>
            </div>
            <div className="pantalla-de-informes-adminf-up-content">
              <div className="pantalla-de-informes-adminf-container-3">
                <p className="pantalla-de-informes-adminf-informes-registrados">
                  Informes registrados
                </p>
                <p className="pantalla-de-informes-adminf-gestin-de-los-infor">
                  Gestión de los informes con los resultados de las evaluaciones
                </p>
              </div>
            </div>
          </div>
          <div className="pantalla-de-informes-adminf-table">
            <div className="pantalla-de-informes-adminf-layout-31">
              <div className="pantalla-de-informes-adminf-text-5">
                <p className="pantalla-de-informes-adminf-lista-de-informes-de">
                  Lista de informes del desempeño laboral
                </p>
              </div>
            </div>
            <div>
              <div className="pantalla-de-informes-adminf-tabel">
                <div className="pantalla-de-informes-adminf-column">
                  <div className="pantalla-de-informes-adminf-table-header">
                    <p className="pantalla-de-informes-adminf-iddel-informe">
                      ID del informe
                    </p>
                    <ArrowDown className="pantalla-de-informes-adminf-arrow-down-1" />
                  </div>
                  <div className="pantalla-de-informes-adminf-table-cell">
                    <div>
                      <p className="pantalla-de-informes-adminf-component">
                        1
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-informes-adminf-table-cell-1">
                    <div>
                      <p className="pantalla-de-informes-adminf-component-1">
                        2
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-informes-adminf-table-cell-2">
                    <div>
                      <p className="pantalla-de-informes-adminf-component-2">
                        3
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-informes-adminf-table-cell-3">
                    <div>
                      <p className="pantalla-de-informes-adminf-component-3">
                        4
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pantalla-de-informes-adminf-column-1">
                  <div className="pantalla-de-informes-adminf-table-header-cell-1">
                    <div className="pantalla-de-informes-adminf-table-header-1">
                      <p className="pantalla-de-informes-adminf-idde-la-evaluacin">
                        ID de la evaluación
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-informes-adminf-table-cell-4">
                    <div>
                      <p className="pantalla-de-informes-adminf-component-4">
                        1
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-informes-adminf-table-cell-5">
                    <div>
                      <p className="pantalla-de-informes-adminf-component-5">
                        2
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-informes-adminf-table-cell-6">
                    <div>
                      <p className="pantalla-de-informes-adminf-component-6">
                        3
                      </p>
                    </div>
                  </div>
                  <div className="pantalla-de-informes-adminf-table-cell-7">
                    <div>
                      <p className="pantalla-de-informes-adminf-component-7">
                        4
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pantalla-de-informes-adminf-column-2">
                  <div className="pantalla-de-informes-adminf-table-header-cell-2" />
                  <div className="pantalla-de-informes-adminf-button-2">
                    <Link
                      to="/visualizar-informe"
                      className="pantalla-de-evaluaciones-adminf-text">
                      <Eye className="pantalla-de-informes-adminf-eye-2" />
                    </Link>
                  </div>
                  <div className="pantalla-de-informes-adminf-button-3">
                  <Link
                      to="/visualizar-informe"
                      className="pantalla-de-evaluaciones-adminf-text">
                    <Eye className="pantalla-de-informes-adminf-eye-3" />
                    </Link>
                  </div>
                  <div className="pantalla-de-informes-adminf-button-4">
                  <Link
                      to="/visualizar-informe"
                      className="pantalla-de-evaluaciones-adminf-text">
                    <Eye3 className="pantalla-de-informes-adminf-eye-4" />
                    </Link>
                  </div>
                  <div className="pantalla-de-informes-adminf-button-5">
                  <Link
                      to="/visualizar-informe"
                      className="pantalla-de-evaluaciones-adminf-text">
                      <Eye3 className="pantalla-de-informes-adminf-eye-5" />
                    </Link>
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
PantallaDeInformesAdminf.defaultProps = {
  className: "",
  style: {}
};
interface PantallaDeInformesAdminfProps {
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