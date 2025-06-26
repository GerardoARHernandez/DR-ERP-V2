import { Routes, Route } from 'react-router-dom';


import Home from './Pages/Home';
import ConsultaActual from './Pages/ConsultaActual';
import Nuevo from './Pages/Nuevo';
import Pacientes from './Pages/Pacientes';

const Vista = () => {
    return ( 
        <div className="bg-[#e9edf0] p-5 rounded-3xl w-full h-full">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/nuevo' element={<Nuevo />}/>
                <Route path='/consulta-actual' element={<ConsultaActual />}/>
                <Route path='/pacientes' element={<Pacientes />}/>
            </Routes>
        </div>
    );
}

export default Vista;