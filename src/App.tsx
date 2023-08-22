import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import PantallaDeCompletarEvaluacionUsuario from 'components/PantallaDeCompletarEvaluacionUsuario';
import PantallaDeInicioDeSesion2 from './components/PantallaDeInicioDeSesion2';
import PantallaDeRegistro from './components/PantallaDeRegistro';
import PantallaDeCrearEvaluacionesAdminf from './components/PantallaDeCrearEvaluacionesAdminf';
import PantallaDeEvaluacionesAdminf from 'components/PantallaDeEvaluacionesAdminf';
import PantallaDeInformesAdminf from 'components/PantallaDeInformesAdminf';
import PantallaDeVisualizarInformeAdminf from 'components/PantallaDeVisualizarInformeAdminf';
import PantallaDeEvaluacionesUsuario from 'components/PantallaDeEvaluacionesUsuario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/evaluaciones-usuario" element={<PantallaDeEvaluacionesUsuario />} />
        <Route path="/visualizar-informe" element={<PantallaDeVisualizarInformeAdminf />} />
        <Route path="/informes-admin" element={<PantallaDeInformesAdminf />} />
        <Route path="/evaluaciones-admin" element={<PantallaDeEvaluacionesAdminf />} />
        <Route path="/completar-evaluacion" element={<PantallaDeCompletarEvaluacionUsuario />} />
        <Route path="/inicio-sesion" element={<PantallaDeInicioDeSesion2 />} />
        <Route path="/crear-evaluaciones-admin" element={<PantallaDeCrearEvaluacionesAdminf />} />
        <Route path="/" element={<PantallaDeRegistro />} />
      </Routes>
    </Router>
  );
}

export default App;