import { Routes, Route } from 'react-router-dom';


import Home from './Pages/Home';
import ConsultaActual from './Pages/ConsultaActual';
import Nuevo from './Pages/Nuevo';

const Vista = () => {
    return ( 
        <div className="bg-[#e9edf0] p-5 rounded-3xl w-full h-full">
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/nuevo' element={<Nuevo />}/>
                <Route path='/consulta-actual' element={<ConsultaActual />}/>
            </Routes>
        </div>
    );
}

export default Vista;