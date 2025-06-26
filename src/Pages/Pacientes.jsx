import { useState } from 'react';
import { FiSearch, FiFilter, FiPlus, FiEdit2, FiTrash2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Pacientes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 8;

  // Datos de ejemplo para pacientes
  const pacientes = [
    { id: 1, nombre: 'María González', edad: 35, sexo: 'F', ultimaVisita: '2023-05-15', telefono: '555-1233-4567' },
    { id: 2, nombre: 'Ana López', edad: 28, sexo: 'F', ultimaVisita: '2023-04-10', telefono: '555-3455-6789' },
    { id: 3, nombre: 'Juan Pérez', edad: 42, sexo: 'M', ultimaVisita: '2023-06-20', telefono: '555-2364-5678' },
    { id: 4, nombre: 'Carlos Sánchez', edad: 50, sexo: 'M', ultimaVisita: '2023-07-05', telefono: '555-4956-7890' },
    { id: 5, nombre: 'Laura Martínez', edad: 31, sexo: 'F', ultimaVisita: '2023-06-30', telefono: '555-5167-8901' },
    { id: 6, nombre: 'Pedro Ramírez', edad: 45, sexo: 'M', ultimaVisita: '2023-05-22', telefono: '555-6478-9012' },
    { id: 7, nombre: 'Sofía Díaz', edad: 38, sexo: 'F', ultimaVisita: '2023-07-12', telefono: '555-7895-0123' },
    { id: 8, nombre: 'Jorge Ruiz', edad: 52, sexo: 'M', ultimaVisita: '2023-04-28', telefono: '555-8906-1234' },
    { id: 9, nombre: 'Elena Castro', edad: 29, sexo: 'F', ultimaVisita: '2023-07-18', telefono: '555-9031-2345' },
    { id: 10, nombre: 'Miguel Ángel Vargas', edad: 47, sexo: 'M', ultimaVisita: '2023-06-15', telefono: '555-0812-3456' },
  ];

  // Filtrar pacientes según término de búsqueda
  const filteredPacientes = pacientes.filter(paciente =>
    paciente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paciente.telefono.includes(searchTerm)
  );

  // Paginación
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPacientes.slice(indexOfFirstPatient, indexOfLastPatient);
  const totalPages = Math.ceil(filteredPacientes.length / patientsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold text-gray-800">Gestión de Pacientes</h2>

      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
        {/* Barra de búsqueda y acciones */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative w-full sm:w-96">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar paciente por nombre o teléfono"
              className="w-full border-2 border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
              <FiFilter />
              <span className="hidden sm:inline">Filtrar</span>
            </button>
            
            <NavLink
              to="/nuevo"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4a8aa2] text-white hover:bg-[#3f7a8c] transition shadow-md hover:shadow-lg"
            >
              <FiPlus />
              <span>Nuevo Paciente</span>
            </NavLink>
          </div>
        </div>

        {/* Lista de pacientes */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sexo</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Teléfono</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Última Visita</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentPatients.length > 0 ? (
                currentPatients.map((paciente) => (
                  <tr key={paciente.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{paciente.nombre}</div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{paciente.edad} años</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`px-2 py-1 rounded-full text-xs ${paciente.sexo === 'M' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'}`}>
                        {paciente.sexo === 'M' ? 'Masculino' : 'Femenino'}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{paciente.telefono}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                      {new Date(paciente.ultimaVisita).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <NavLink
                          to={`/pacientes/${paciente.id}`}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                          title="Editar"
                        >
                          <FiEdit2 />
                        </NavLink>
                        <button
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                          title="Eliminar"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                    No se encontraron pacientes
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        {filteredPacientes.length > 0 && (
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Mostrando {indexOfFirstPatient + 1} a {Math.min(indexOfLastPatient, filteredPacientes.length)} de {filteredPacientes.length} pacientes
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className="p-2 rounded border bg-white text-gray-700 disabled:opacity-50 hover:bg-gray-50"
              >
                <FiChevronLeft />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 rounded border ${currentPage === number ? 'bg-[#4a8aa2] text-white border-[#4a8aa2]' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                >
                  {number}
                </button>
              ))}
              
              <button
                onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className="p-2 rounded border bg-white text-gray-700 disabled:opacity-50 hover:bg-gray-50"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pacientes;