function FormPersonalData() {
    
    return(
    <>
      <div>
        <h1 className="text-red-600 text-left">FICHA DE INSCRIÇÃO</h1>
        <h2 className="text-red-600 text-left font-bold">Dados Pessoais</h2>
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 grid gap-y-6 text-left">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">Nome:</label>
                <input id="nome" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpf">CPF:</label>
                <input id="cpf" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="naturalidade">Naturalidade:</label>
                <input id="naturalidade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sexo">Sexo:</label>
                <select id="sexo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>selecione</option>
                </select>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estadoCivil">Estado Civil:</label>
                <select id="estadoCivil" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Selecione</option>
                </select>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identidade">Identidade:</label>
                <input id="identidade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataEmissao">Data da Emissão:</label>
                <input type="date" id="dataEmissao" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
        </form>
      </div>
    </>
    )
}

export default FormPersonalData;