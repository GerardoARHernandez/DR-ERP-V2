import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return ( 
        <div>
            <h2 className="text-xl mb-4">Home</h2>

            <div className="bg-white rounded-xl p-5 overflow-auto min-h-[85vh]">
                <form>
                    <div>
                        <label className="block mb-1">Paciente</label>
                        <div className="flex gap-3">
                            <input 
                                type="text" 
                                className="border-2 border-[#ededed] rounded-lg px-2 py-1 transition-all focus:border-[#c8c8c8] focus:outline-none focus:shadow-[0_0_0_3.2px_#d8d8d885]" 
                            />
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/nuevo');
                                }}
                                className="px-4 py-1 rounded-lg bg-[#4a8aa2] text-white border-2 border-transparent"
                            >
                                <i className="bi bi-plus-circle mr-2"></i>
                                Nuevo
                            </button>
                        </div>
                    </div>

                    <div className="mt-5">
                        <label className="block mb-1">Datos Generales:</label>
                        <hr className="my-2"/>
                        <div>
                            <ul className="list-disc pl-5">
                                <li className="mb-1">Talla: 15</li>
                                <li className="mb-1">Peso: 85</li>
                                <li className="mb-1">Antecedentes: Lorem, ipsum dolor.</li>
                                <li className="mb-1">Alergias: Lorem ipsum dolor sit.</li>
                                <li className="mb-1">Enf. Importantes: Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                            <div className="flex justify-between mt-3">
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate('/consulta-actual');
                                    }}
                                    className="px-4 py-1 rounded-lg bg-[#4a8aa2] text-white border-2 border-transparent"
                                >
                                    Abrir consulta
                                    <i className="bi bi-arrow-up-right-circle-fill ml-2"></i>
                                </button>
                                <button className="px-4 py-1 rounded-lg bg-[#4a8aa2] text-white border-2 border-transparent">
                                    <i className="bi bi-pencil-square mr-2"></i>
                                    Editar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <label className="block mb-1">Historia Clínica</label>
                        <div className="overflow-x-auto">
                            <table className="w-full text-center">
                                <thead className="border-b border-gray-400">
                                    <tr>
                                        <th className="py-2">Fecha</th>
                                        <th className="py-2">Dx</th>
                                        <th className="py-2">Diagnóstico</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3].map((item) => (
                                        <tr key={item}>
                                            <td className="py-2 font-normal">14/04/2021</td>
                                            <td className="py-2 font-normal">Dx</td>
                                            <td className="py-2 font-normal">DIAGNÓSTICO DE ESA FECHA</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;