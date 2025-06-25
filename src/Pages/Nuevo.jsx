import { FaUser, FaBirthdayCake, FaAllergies, FaNotesMedical, FaFileMedicalAlt, FaWeight, FaRulerVertical, FaVenusMars, FaTint, FaSave } from "react-icons/fa";

const Nuevo = () => {
    return (
        <div className="max-w-6xl mx-auto px-3 py-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaUser className="mr-2" />
                Registro de Nuevo Paciente
            </h2>

            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <form className="space-y-6">
                    {/* Sección de Información Básica */}
                    <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
                            <FaUser className="mr-2 text-blue-500" />
                            Información Personal
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo*</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    placeholder="Ej: María González Pérez"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento*</label>
                                <div className="relative">
                                    <FaBirthdayCake className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="date"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Sexo*</label>
                                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                    <option value="">Seleccionar</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo Sanguíneo</label>
                                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                                    <option value="">Desconocido</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Sección de Datos Médicos */}
                    <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
                            <FaFileMedicalAlt className="mr-2 text-green-500" />
                            Datos Médicos
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Peso (kg)</label>
                                <div className="relative">
                                    <FaWeight className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="number"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="Ej: 68.5"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Talla (cm)</label>
                                <div className="relative">
                                    <FaRulerVertical className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="number"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="Ej: 175"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sección de Historial Médico */}
                    <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
                            <FaNotesMedical className="mr-2 text-red-500" />
                            Historial Médico
                        </h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Alergias Conocidas</label>
                                <div className="relative">
                                    <FaAllergies className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                        placeholder="Ej: Penicilina, Mariscos"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Separar con comas si hay múltiples alergias</p>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Antecedentes Familiares Relevantes</label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[80px]"
                                    placeholder="Ej: Diabetes en familiares directos, cáncer de mama en madre"
                                ></textarea>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Enfermedades Pre-existentes</label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[80px]"
                                    placeholder="Ej: Hipertensión arterial, diabetes tipo 2"
                                ></textarea>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Medicamentos Actuales</label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[80px]"
                                    placeholder="Ej: Losartan 50mg 1x día, Metformina 850mg 2x día"
                                ></textarea>
                                <p className="text-xs text-gray-500 mt-1">Incluir dosis y frecuencia</p>
                            </div>
                        </div>
                    </div>

                    {/* Sección de Observaciones */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-700 mb-4">Observaciones Adicionales</h3>
                        <textarea
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[100px]"
                            placeholder="Otras observaciones relevantes sobre el paciente..."
                        ></textarea>
                    </div>

                    {/* Botones de Acción */}
                    <div className="flex justify-end space-x-4 pt-4">
                        <button
                            type="button"
                            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
                        >
                            <FaSave className="mr-2" />
                            Guardar Paciente
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Nuevo;