const Nuevo = () => {
    return ( 
        <div>
            <h2 className="text-xl mb-4">Nuevo Paciente</h2>

            <div className="bg-white rounded-xl p-5 overflow-auto min-h-[85vh]">
                <form>
                    <label className="block mb-1">Nombre del Paciente:</label>
                    <input 
                        type="text" 
                        className="w-full border-2 border-[#ededed] rounded-lg px-2 py-1 transition-all focus:border-[#c8c8c8] focus:outline-none focus:shadow-[0_0_0_3.2px_#d8d8d885] mb-4"
                    />

                    <div className="flex mt-5 gap-12">
                        <div className="flex-1">
                            <label className="block mb-1">Fecha de Nacimiento</label>
                            <input 
                                type="date" 
                                className="w-full border-2 border-[#ededed] rounded-lg px-2 py-1 transition-all focus:border-[#c8c8c8] focus:outline-none focus:shadow-[0_0_0_3.2px_#d8d8d885]"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1">Alergias</label>
                            <input 
                                type="text" 
                                className="w-full border-2 border-[#ededed] rounded-lg px-2 py-1 transition-all focus:border-[#c8c8c8] focus:outline-none focus:shadow-[0_0_0_3.2px_#d8d8d885]"
                            />
                        </div>
                    </div>

                    <div className="mt-5">
                        <label className="block mb-1">Antecedentes</label>
                        <input 
                            type="text" 
                            className="w-full border-2 border-[#ededed] rounded-lg px-2 py-1 transition-all focus:border-[#c8c8c8] focus:outline-none focus:shadow-[0_0_0_3.2px_#d8d8d885]"
                        />
                    </div>

                    <div className="mt-5">
                        <label className="block mb-1">Enfermedades Pre Existentes</label>
                        <input 
                            type="text" 
                            className="w-full border-2 border-[#ededed] rounded-lg px-2 py-1 transition-all focus:border-[#c8c8c8] focus:outline-none focus:shadow-[0_0_0_3.2px_#d8d8d885]"
                        />
                    </div>

                    <div className="mt-5">
                        <label className="block mb-1">Observaciones</label>
                        <textarea
                            className="w-full border-2 border-[#ededed] rounded-lg px-2 py-1 transition-all focus:border-[#c8c8c8] focus:outline-none focus:shadow-[0_0_0_3.2px_#d8d8d885] min-h-[100px]"
                        ></textarea>
                    </div>

                    <div className="mt-5 flex justify-end">
                        <button className="px-4 py-2 rounded-lg bg-[#4a8aa2] text-white border-2 border-transparent">
                            Guardar Paciente
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Nuevo;