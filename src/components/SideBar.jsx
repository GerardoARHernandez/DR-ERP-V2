import { NavLink } from 'react-router-dom';
import FotoPerfil from '/Perfil.png';
import { AiOutlineHome } from 'react-icons/ai';
import { HiMiniUsers } from 'react-icons/hi2';
import { MdChecklist } from 'react-icons/md';
import { BsCalendar3 } from 'react-icons/bs';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <>
            {/* Botón de menú para móviles */}
            <button 
                className="lg:hidden fixed top-4 left-4 z-50 bg-blue-100 p-2 rounded-lg shadow-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Sidebar - Oculto en móvil a menos que isOpen sea true */}
            <div className={`bg-white shadow-gray-700 shadow-md p-3 sm:p-5 rounded-3xl h-full w-full lg:w-72 transition-all duration-300 fixed lg:static z-40 ${isOpen ? 'left-0' : '-left-full'} lg:left-0`}>
                {/* Sección de perfil */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                    <div className="p-1 bg-gray-100 rounded-full">
                        <img src={FotoPerfil} className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover' alt="Foto de perfil"/>
                    </div>
                    <div>
                        <h1 className="text-md sm:text-lg font-semibold m-0 text-gray-800">Doctor</h1>
                        <p className="m-0 text-sm text-gray-500">
                            Dr. Standart
                        </p>
                    </div>
                </div>

                <hr className="border-gray-800 mt-0 mb-4 sm:mb-8"/>

                {/* Menú de navegación */}
                <nav className='space-y-1 sm:space-y-2'>
                    <NavLink 
                        className={({isActive}) => 
                            `flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg font-medium no-underline transition-colors duration-200 text-sm sm:text-base
                            ${isActive ? 'bg-[#4a8aa2] text-white shadow-md font-semibold border-2 border-blue-950' : 'text-gray-600 hover:bg-gray-700 hover:text-white'}`
                        } 
                        to={'/'}
                        onClick={() => setIsOpen(false)}
                    >
                        <AiOutlineHome className="text-lg" />
                        <span>Home</span>
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => 
                            `flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg font-medium no-underline transition-colors duration-200 text-sm sm:text-base
                            ${isActive ? 'bg-[#4a8aa2] text-white shadow-md font-semibold border-2 border-blue-950' : 'text-gray-600 hover:bg-gray-700 hover:text-white'}`
                        } 
                        to={'/pacientes'}
                    >
                        <HiMiniUsers className="text-lg" />
                        <span>Pacientes</span>
                    </NavLink>
                    
                    <NavLink 
                        className={({isActive}) => 
                            `flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg font-medium no-underline transition-colors duration-200 text-sm sm:text-base
                            ${isActive ? 'bg-[#4a8aa2] text-white shadow-md font-semibold border-2 border-blue-950' : 'text-gray-600 hover:bg-gray-700 hover:text-white'}`
                        } 
                        to={'/consultas'}
                    >
                    <MdChecklist />
                        Consultas
                    </NavLink>
                    
                    <NavLink 
                        className={({isActive}) => 
                            `flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg font-medium no-underline transition-colors duration-200 text-sm sm:text-base
                            ${isActive ? 'bg-[#4a8aa2] text-white shadow-md font-semibold border-2 border-blue-950' : 'text-gray-600 hover:bg-gray-700 hover:text-white'}`
                        } 
                        to={'/citas'}
                    >
                        <BsCalendar3 />
                        Citas
                    </NavLink>
                </nav>
            </div>
        </>
    );
}

export default SideBar;