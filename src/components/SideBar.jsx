import { NavLink } from 'react-router-dom';
import FotoPerfil from '/Perfil.png';

const SideBar = () => {
    return ( 
        <div className="shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] p-5 rounded-3xl h-full">
            <div className="flex items-center gap-4">
                <div>
                    <img src={FotoPerfil} className='w-12' alt="Foto de perfil"/>
                </div>
                <div>
                    <h1 className="text-sm font-bold m-0">Doctor</h1>
                    <p className="m-0 text-xs">
                        Dr. Standart
                    </p>
                </div>
            </div>

            <hr className="border-[#dfdfdf6e] my-4"/>

            <div className='py-3'>
                <NavLink 
                    className={({isActive}) => 
                        `w-full text-left py-2 px-3 rounded-xl flex gap-3 border-2 mb-3 font-medium no-underline 
                        ${isActive ? 'bg-[#4a8aa2] border-[#366576] text-white' : 'bg-transparent text-[#3f3f3f]'}`
                    } 
                    to={'/'}
                >
                    <i className="bi bi-house"></i>
                    Home
                </NavLink>

                <NavLink 
                    className={({isActive}) => 
                        `w-full text-left py-2 px-3 rounded-xl flex gap-3 border-2 mb-3 font-medium no-underline 
                        ${isActive ? 'bg-[#4a8aa2] border-[#366576] text-white' : 'bg-transparent text-[#3f3f3f]'}`
                    } 
                    to={'/pacientes'}
                >
                    <i className="bi bi-people-fill"></i>
                    Pacientes
                </NavLink>
                
                <NavLink 
                    className={({isActive}) => 
                        `w-full text-left py-2 px-3 rounded-xl flex gap-3 border-2 mb-3 font-medium no-underline 
                        ${isActive ? 'bg-[#4a8aa2] border-[#366576] text-white' : 'bg-transparent text-[#3f3f3f]'}`
                    } 
                    to={'/consultas'}
                >
                    <i className="bi bi-card-checklist"></i>
                    Consultas
                </NavLink>
                
                <NavLink 
                    className={({isActive}) => 
                        `w-full text-left py-2 px-3 rounded-xl flex gap-3 border-2 mb-3 font-medium no-underline 
                        ${isActive ? 'bg-[#4a8aa2] border-[#366576] text-white' : 'bg-transparent text-[#3f3f3f]'}`
                    } 
                    to={'/citas'}
                >
                    <i className="bi bi-calendar3"></i>
                    Citas
                </NavLink>
            </div>
        </div>
    );
}

export default SideBar;