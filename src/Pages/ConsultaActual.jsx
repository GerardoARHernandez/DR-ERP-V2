const ConsultaActual = () => {
    return ( 
        <div className="container p-4">
            <h2 className="text-center mb-4 text-2xl">Consulta Actual</h2>

            <div className="bg-white p-4 border rounded-lg">
                <form>
                    <div className="flex justify-center mb-4 gap-5">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded flex items-center">
                            <i className="bi bi-download mr-2"></i>
                            Guardar 
                        </button>
                        <button className="px-4 py-2 bg-gray-600 text-white rounded flex items-center">
                            <i className="bi bi-printer mr-2"></i>
                            Imprimir
                        </button>
                    </div>

                    <div className="flex justify-around mb-4 gap-4">
                        <div className="flex-1">
                            <label className="block mb-1">Talla</label>
                            <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1">Peso</label>
                            <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1">Presión</label>
                            <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1">Temp</label>
                            <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Descripción</label>
                        <textarea className="w-full border border-gray-300 rounded px-2 py-1" rows={3}></textarea>
                    </div>

                    <div className="mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1">Dx</label>
                                <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
                            </div>
                            <div>
                                <label className="block mb-1">Sugerencia por IA</label>
                                <textarea 
                                    className="w-full border border-gray-300 rounded px-2 py-1" 
                                    rows={4}
                                    placeholder="Sugerencia generada por IA para apoyo en la toma de decisiones clínicas. Favor de revisar y validar según criterio médico." 
                                />
                            </div>
                        </div>
                    </div>
                    
                    <hr className="my-4 border-gray-300"/>

                    <div className="text-center mb-4">
                        <h6 className="text-lg">Receta</h6>
                    </div>

                    <div className="flex items-center mb-4 gap-8">
                        <div className="flex-1">
                            <div className="mb-3">
                                <label className="block mb-1">Medicamento</label>
                                <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
                            </div>
                            <div className="mb-3">
                                <label className="block mb-1">Dosis</label>
                                <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
                            </div>
                        </div>
                        <div>
                            <button className="px-4 py-2 bg-green-600 text-white rounded flex items-center">
                                <i className="bi bi-plus-circle mr-2"></i>
                                Agregar
                            </button>
                        </div>
                    </div>

                    <hr className="my-4 border-gray-300"/>

                    <div className="mb-4">
                        <ol className="space-y-3">
                            <li className="flex justify-between items-center py-2 px-3 border-b border-gray-200">
                                <div>
                                    <strong className="block">Nombre del Medicamento</strong>
                                    <span className="text-gray-500 text-sm">Tomar 6 ml c/ 8 hrs x 6 días</span>
                                </div>
                                <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded text-sm flex items-center">
                                    <i className="bi bi-pen mr-1"></i> Editar
                                </button>
                            </li>
                            <li className="flex justify-between items-center py-2 px-3 border-b border-gray-200">
                                <div>
                                    <strong className="block">Nombre del Medicamento</strong>
                                    <span className="text-gray-500 text-sm">Tomar 6 ml c/ 8 hrs x 6 días</span>
                                </div>
                                <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded text-sm flex items-center">
                                    <i className="bi bi-pen mr-1"></i> Editar
                                </button>
                            </li>
                        </ol>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ConsultaActual;