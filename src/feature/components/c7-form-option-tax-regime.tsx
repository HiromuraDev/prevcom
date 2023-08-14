function FormOptionTaxRegime() {

    return(
        <>
          <div>
             <h2 className="text-red-600 text-left font-bold">Opção pelo Regime de Tributação do Imposto de Renda</h2>
             <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 grid gap-y-6 text-left">
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoParticipante">Tipo de Regime:</label>
                <select id="tipoParticipante" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>selecione</option>
                </select>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="desconto">Data da Inscrição:</label>
                <input type="date" id="desconto" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                </div>
             </form>
          </div>
        </>
    )
}

export default FormOptionTaxRegime;