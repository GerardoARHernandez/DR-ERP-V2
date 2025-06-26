import { CiCirclePlus } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import HistoriaClinica from "../components/HistoriaClinica";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
            <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold text-center text-gray-800">Panel del Paciente</h2>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                {/* Sección de Búsqueda/Nuevo Paciente */}
                <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">Buscar Paciente</h3>
                    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                        <input
                            type="text"
                            placeholder="Nombre o ID del paciente"
                            className="flex-1 border-2 border-gray-300 rounded-lg px-3 sm:px-4 py-2 transition-all 
                                      focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/nuevo');
                            }}
                            className="flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-lg bg-[#4a8aa2] text-white hover:bg-[#3f7a8c] transition-colors duration-200 shadow-md hover:shadow-lg hover:cursor-pointer"
                        >
                            <CiCirclePlus className="text-xl" />
                            <span className="whitespace-nowrap">Nuevo Paciente</span>
                        </button>
                    </div>
                </div>

                {/* Sección de Datos del Paciente */}
                <div className="mb-6 sm:mb-8 bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2 sm:gap-0">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700">Datos Generales</h3>
                        <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#4a8aa2] text-white hover:bg-[#3f7a8c] transition-colors">
                            <PiNotePencil />
                            <span>Editar</span>
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                            <h4 className="font-medium text-gray-500">Información Básica</h4>
                            <ul className="mt-2 space-y-1">
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Edad:</span>
                                    <span className="font-medium">35 años</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Sexo:</span>
                                    <span className="font-medium">Masculino</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Tipo Sanguíneo:</span>
                                    <span className="font-medium">O+</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                            <h4 className="font-medium text-gray-500">Medidas</h4>
                            <ul className="mt-2 space-y-1">
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Talla:</span>
                                    <span className="font-medium">1.75 m</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Peso:</span>
                                    <span className="font-medium">85 kg</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">IMC:</span>
                                    <span className="font-medium">27.8 (Sobrepeso)</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                            <h4 className="font-medium text-gray-500">Historial Médico</h4>
                            <ul className="mt-2 space-y-1">
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Antecedentes:</span>
                                    <span className="font-medium text-right">Hipertensión familiar</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Alergias:</span>
                                    <span className="font-medium">Penicilina</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Enf. Importantes:</span>
                                    <span className="font-medium">Ninguna</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-3 sm:mt-4 flex justify-end">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/consulta-actual');
                            }}
                            className="flex items-center gap-2 px-4 py-2 font-medium rounded-lg bg-green-600 text-white 
                                      hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            <span>Nueva Consulta</span>
                            <MdArrowOutward />
                        </button>
                    </div>
                </div>

                {/* Sección de Historia Clínica */}
                <HistoriaClinica />
            </div>
        </div>
    );
}

export default Home;