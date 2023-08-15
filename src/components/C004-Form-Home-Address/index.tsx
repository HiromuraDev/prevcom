import { useForm } from "react-hook-form"

function FormHomeAddress() {

    
    const {register, handleSubmit, setValue} = useForm()

    const onSubmit = (e: any) => {
       console.log(e)
    }

    const checkCEP = (e: any) => {
        const cep: number = e.target.value.replace(/\D/g, "");
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data => {
            console.log(data);
            setValue('logradouro', data.logradouro)
            setValue('bairro', data.bairro)
            setValue('cidade', data.localidade)
            setValue('uf', data.uf)
        })
    };

    return(
        <>
          <div>
            <h2 className="text-red-600 text-left font-bold">Endereço Residencial</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 grid gap-y-6 text-left">
            <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cep" >CEP:</label>
                <input type="text" {...register("cep")} onBlur={checkCEP} id="cep" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logradouro">Logradouro:</label>
                <input type="text" {...register("logradouro")} id="logradouro" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="flex gap-6 mb-6 md:flex-cols-1">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numero">Número:</label>
                <input id="numero" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="complemento">Complemento:</label>
                <input id="complemento" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 pl-60"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bairro">Bairro:</label>
                <input {...register("bairro")} id="bairro" className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cidade">Cidade:</label>
                <input {...register("cidade")} id="cidade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="uf">Estado:</label>
                <select {...register("uf")}  id="uf" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>selecione</option>
                    <option ></option>
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emial">Email:</label>
                <input id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            </form>
          </div>
        </>
    )
}

export default FormHomeAddress;