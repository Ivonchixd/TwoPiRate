import Rotate361 from "assets/Rotate361";
import Exit from "assets/Exit";
import User from "assets/User";
import Line6 from "assets/Line6";
import DocumentUser from "assets/DocumentUser";
import FolderOpened from "assets/FolderOpened";
import DocumentUser1 from "assets/DocumentUser1";
import ChevronRight from "assets/ChevronRight";
import DocumentUser2 from "assets/DocumentUser2";
import PlusCircle from "assets/PlusCircle";
import { Link } from 'react-router-dom';
import "./PantallaDeCrearEvaluacionesAdminf.css";
export default function PantallaDeCrearEvaluacionesAdminf(props: PantallaDeCrearEvaluacionesAdminfProps) {
  const handleRegister = () => {
    alert("Su evaluacion fue creada con exito!");
  }
  return <div className={`${props.className} pantalla-de-crear-evaluaciones-adminf-pantalla-de-crear-evaluaciones-adminf`} style={props.style}>
    <div className="pantalla-de-crear-evaluaciones-adminf-horizontal-container">
      <div className="pantalla-de-crear-evaluaciones-adminf-text-input">
        <div className="pantalla-de-crear-evaluaciones-adminf-button-group-base">
          <Rotate361 className="pantalla-de-crear-evaluaciones-adminf-rotate-360x-1" />
          <p className="pantalla-de-crear-evaluaciones-adminf-button">
            2πRate
          </p>
          <Rotate361 className="pantalla-de-crear-evaluaciones-adminf-rotate-360x-2" />
        </div>
      </div>
    </div>
    <div className="pantalla-de-crear-evaluaciones-adminf-frame-10x">
      <div className="pantalla-de-crear-evaluaciones-adminf-side-menu">
        <div className="pantalla-de-crear-evaluaciones-adminf-header">
          <div className="pantalla-de-crear-evaluaciones-adminf-paragraph-container">
            <p className="pantalla-de-crear-evaluaciones-adminf-pedro-alcntara">
              Dalbiery Rodriguez
            </p>
            <p className="pantalla-de-crear-evaluaciones-adminf-pedral-192304outloo">
              dr21-1740@unphu.edu.do
            </p>
          </div>
          <div className="pantalla-de-crear-evaluaciones-adminf-actions">
          <div className="pantalla-de-evaluaciones-adminf-button-1">
              <Exit className="pantalla-de-evaluaciones-adminf-exit-1" />
              <Link
                to="/inicio-sesion"
                className="pantalla-de-evaluaciones-adminf-text">
                Salir de la cuenta
              </Link>
            </div>
            <div className="pantalla-de-crear-evaluaciones-adminf-side-menu-section">
              <User className="pantalla-de-crear-evaluaciones-adminf-user-1" />
            </div>
          </div>
        </div>
        <Line6 className="pantalla-de-crear-evaluaciones-adminf-line-6x-1" />
        <div className="pantalla-de-crear-evaluaciones-adminf-bottom-section">
          <div className="pantalla-de-crear-evaluaciones-adminf-sections">
            <div className="pantalla-de-crear-evaluaciones-adminf-sections-1">
              <div className="pantalla-de-crear-evaluaciones-adminf-side-menu-section-1">
                <DocumentUser />
                <div>
                  <p className="pantalla-de-crear-evaluaciones-adminf-text-1">
                    Evaluaciones
                  </p>
                </div>
                <div className="pantalla-de-crear-evaluaciones-adminf-layout-28">
                  <div className="pantalla-de-crear-evaluaciones-adminf-rectangle-3x" />
                </div>
              </div>
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
      <div className="pantalla-de-crear-evaluaciones-adminf-container-1">
        <div className="pantalla-de-crear-evaluaciones-adminf-container-2">
          <div className="pantalla-de-crear-evaluaciones-adminf-breadcrumb">
            <div className="pantalla-de-crear-evaluaciones-adminf-breadcrumb-base">
              <DocumentUser1 className="pantalla-de-crear-evaluaciones-adminf-document-user-4" />
              <p className="pantalla-de-crear-evaluaciones-adminf-text-3">
                Evaluaciones
              </p>
              <ChevronRight className="pantalla-de-crear-evaluaciones-adminf-chevron-right-1" />
            </div>
            <div className="pantalla-de-crear-evaluaciones-adminf-breadcrumb-base-1">
              <DocumentUser2 className="pantalla-de-crear-evaluaciones-adminf-document-user-5" />
              <p className="pantalla-de-crear-evaluaciones-adminf-text-4">
                Crear evaluación
              </p>
            </div>
          </div>
          <div className="pantalla-de-crear-evaluaciones-adminf-frame-427319315x">
            <div className="pantalla-de-crear-evaluaciones-adminf-text-5">
              <div className="pantalla-de-crear-evaluaciones-adminf-evaluacin-360x">
                <p className="pantalla-de-crear-evaluaciones-adminf-evaluacin-360text-0x">
                  Evaluación 360
                </p>
                <p className="pantalla-de-crear-evaluaciones-adminf-component-text-1x">
                  °
                </p>
              </div>
              <p className="pantalla-de-crear-evaluaciones-adminf-evala-el-desempeo">
                Evalúa el desempeño y habilidades del personal desde múltiples perspectivas.
              </p>
              <p className="pantalla-de-crear-evaluaciones-adminf-esta-evaluacin-360x">
                Esta evaluación 360 está diseñada para medir el desempeño y habilidades del personal general desde una variedad de perspectivas, incluyendo a los supervisores directos, gerentes y empleados. Los resultados de esta evaluación pueden proporcionar una visión más completa del rendimiento de los empleados, lo que permite a los administradores tomar decisiones más informadas sobre la asignación de responsabilidades, la promoción y el desarrollo profesional. Además, esta evaluación es altamente personalizable y se puede adaptar a las necesidades específicas de tu organización.
              </p>
            </div>
          </div>
        </div>
        <div className="pantalla-de-crear-evaluaciones-adminf-frame-427319316x">
          <div className="pantalla-de-crear-evaluaciones-adminf-table">
            <div>
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
          <div className="pantalla-de-crear-evaluaciones-adminf-actions-1">
            <div className="pantalla-de-crear-evaluaciones-adminf-button-2" onClick={handleRegister}>
              <PlusCircle className="pantalla-de-crear-evaluaciones-adminf-plus-circle-1" />
              <p className="pantalla-de-crear-evaluaciones-adminf-text-7">
                Crear
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
PantallaDeCrearEvaluacionesAdminf.defaultProps = {
  className: "",
  style: {}
};
interface PantallaDeCrearEvaluacionesAdminfProps {
  className: string;
  style: Object;
}

