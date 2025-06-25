

const HistoriaClinica = () => {
  return (
    <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Historia Clínica</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Médico</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diagnóstico</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tratamiento</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {[1, 2, 3].map((item) => (
                        <tr key={item} className="hover:bg-gray-50">
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">14/04/2021</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Dr. Juan Pérez</td>
                            <td className="px-4 py-3 text-sm text-gray-500">Hipertensión arterial</td>
                            <td className="px-4 py-3 text-sm text-gray-500">Losartan 50mg 1x día</td>
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900 mr-3">Ver</button>
                                <button className="text-green-600 hover:text-green-900">Imprimir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">
                Mostrando 1 al 3 de 3 registros
            </div>
            <div className="flex space-x-2">
                <button className="px-3 py-1 rounded border bg-white text-gray-700 disabled:opacity-50" disabled>
                    Anterior
                </button>
                <button className="px-3 py-1 rounded border bg-white text-gray-700 disabled:opacity-50">
                    Siguiente
                </button>
            </div>
        </div>
    </div>
  )
}

export default HistoriaClinica