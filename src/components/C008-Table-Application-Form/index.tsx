function TableApplicationForm() {

    return(
        <>
          <h2 className="text-red-600 text-left font-bold">Ficha de Inscrição</h2>
          <table className="shadow-md rounded px-8 pt-6 pb-8 mb-4 grid gap-y-6">
            <thead className="text-white bg-red-700">
                <tr className="grid grid-cols-4 divide-x items-center">
                    <th>DOCUMENTO</th>
                    <th>USUÁRIO</th>
                    <th>DATA/HORA</th>
                    <th>ARQUIVO</th>
                </tr>
            </thead>
            <tbody className="text-white bg-gray-100">
                <tr className="grid grid-cols-4 divide-x items-center text-black">
                    <td>Alesp</td>
                    <td>Cristina</td>
                    <td>36729327871</td>
                    <td>Cristina</td>
                </tr>
            </tbody>
          </table>
          <div className="items-center text-center mt-4 flex gap-x-4 justify-center">
            <button className="bg-gray-500 text-white">Limpar</button>
            <button className="bg-red-600 text-white">Salvar</button>
          </div>
        </>
    );
};

export default TableApplicationForm;