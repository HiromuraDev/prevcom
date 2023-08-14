function FormHomeAddress() {

    return(
        <>
          <div>
            <h2 className="text-red-600 text-left font-bold">Endereço Residencial</h2>
            <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 grid gap-y-6 text-left">
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
            <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep">Email:</label>
                <input id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            </form>
          </div>
        </>
    )
}

export default FormHomeAddress;