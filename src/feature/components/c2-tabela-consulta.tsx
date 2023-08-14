function Tabela() {

    return(
        <>
          <table className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <thead className="text-white bg-red-700">
                <tr className="grid grid-cols-9 divide-x items-center">
                    <th>ÓRGÃO</th>
                    <th>NOME</th>
                    <th>CPF</th>
                    <th>PARTICPAANTE</th>
                    <th>%DESCONTO</th>
                    <th>TRIBUTAÇÃO</th>
                    <th className="whitespace-nowrap">DATA DA INSCRIÇÃO</th>
                    <th>STATUS</th>
                    <th>AÇÕES</th>
                </tr>
            </thead>
            <tbody className="text-white bg-gray-100">
                <tr className="grid grid-cols-9 divide-x items-center text-black">
                    <td>Alesp</td>
                    <td>Cristina</td>
                    <td>36729327871</td>
                    <td>Cristina</td>
                    <td>4%</td>
                    <td>privada</td>
                    <td>10/05/2022</td>
                    <td>ativo</td>
                    <td>2</td>
                </tr>
            </tbody>
          </table>
          <div className="items-center text-center mt-4 flex gap-x-4 justify-center">
            <button className="bg-red-600 text-white">Novo Cadastro</button>
            <button className="bg-red-600 text-white">Gerar Arquivo</button>
          </div>
        </>
    );
};

export default Tabela;