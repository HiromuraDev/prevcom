function FormFuncionalData() {

    return(
        <>
          <div>
            <h2 className="text-red-600 text-left font-bold">Dados Funcionais</h2>
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 grid gap-y-6 text-left">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Formação</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Nível:</label>
                <div className="flex items-center pl-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                    <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Superior</label>
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                    <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Médio</label>
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"></input>
                    <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fundamental</label>
                </div>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Cargo:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Função:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Orgão:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Poder:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Setor:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Data do Ingresso (DD/MM/AAAA):</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>    
            <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">CEP:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Logradouro:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="flex gap-6 mb-6 md:flex-cols-1">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Número:</label>
                <input id="cep" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Complemento:</label>
                <input id="cep" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 pl-60"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Bairro:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-80"></input>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="naturalidade">Cidade:</label>
                <input id="naturalidade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sexo">Estado:</label>
                <select id="sexo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>selecione</option>
                </select>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefone">Telefone (DDD + número):</label>
                <input id="telefone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="celular">Celular (DDD + número):</label>
                <input id="celular" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Email:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Fax:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            </form>
          </div>
        </>
    )
}

export default FormFuncionalData;