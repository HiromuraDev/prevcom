import { useForm } from "react-hook-form"

function FormPersonalData() {

    const {setValue, handleSubmit, register} = useForm()

    const onSubmit = (e: any) => {
        console.log(e)
     }
 
     const apiTeste = (e) => {
         fetch('http://localhost:8084/atlprevcomp/v1/tl1/pesquisa-participantes')
         .then(res => res.json()).then(data => {
             console.log(data[0].orgao);
             setValue('naturalidade', data[0].orgao)
             setValue('nome', data[0].nome)
             setValue('cpf', data[0].numcpf)
             setValue('identidade', data[0].datainscricao)
         })
     };
    
    return(
    <>
      <div>
        <h1 className="text-red-600 text-left">FICHA DE INSCRIÇÃO</h1>
        <h2 className="text-red-600 text-left font-bold">Dados Pessoais</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 grid gap-y-6 text-left">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">Nome:</label>
                <input {...register('nome')} onBlur={apiTeste}  id="nome" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpf">CPF:</label>
                <input {...register('cpf')} id="cpf" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="naturalidade">Naturalidade:</label>
                <input {...register('naturalidade')} id="naturalidade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
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
                <input  {...register('dataEmissao')} id="identidade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
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