function Consulta () {

     return(
        <>
        <h1 className="text-left text-red-600">Partcipantes</h1>
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-left text-red-600">Filtro</h2>
            <form className="bg-white grid gap-y-6 grid-cols-4 text-left ml-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plano">Plano</label>
            <select id="plano" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>Selecione</option>
            </select>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpf">CPF</label>
            <input id="plano" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataIncricao">Data de Inscrição</label>
            <input id="plano" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orgao">Orgão</label>
            <select id="plano" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>Selecione</option>
            </select>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="participante">Participante</label>
            <input id="plano" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">Status</label>
            <input id="plano" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            </form>
            <div className="flex gap-x-4 mt-4 justify-center">
                <button value={"Limpar"} className="bg-gray-400 text-white">Limpar</button>
                <button value={"Consultar"} className="bg-red-700 text-white">Consulta</button>
            </div>
        </div>
        </>
     );
};

export default Consulta;