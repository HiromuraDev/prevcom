import { useForm } from "react-hook-form"
/* import { PostJSON } from "../../services/AccessionServices"; */

function FormPersonalData() {

    const {handleSubmit, register} = useForm()
 
/*      const apiTeste = () => {
         fetch('http://localhost:8084/atlprevcomp/v1/tl1/pesquisa-participantes')
         .then(res => res.json()).then(data => {
             console.log(data[0].orgao);
             setValue('naturalidade', data[0].orgao)
             setValue('nome', data[0].nome)
             setValue('cpf', data[0].numcpf)
             setValue('identidade', data[0].datainscricao)
         })
     }; */

/*      <script src="../path/to/flowbite/dist/datepicker.js"></script> */

/*      const newUser = {
        nome            : getValues('nome'),
        numCpf          : getValues('cpf'),
        numMatricula    : getValues('matricula'),
        datNascimento   : getValues('dataNascimento'),
        desNaturalidade : getValues('naturalidade'),
        codSexo         : getValues('sexo'),
        codEstCivil     : getValues('estadoCivil'),
        nomPai          : getValues('pai'),
        nomMae          : getValues('mae'),
        nomConjuge      : getValues('conjuge'),

     }

     console.log(newUser); */

    const onSubmit = (e: any) => {
       e.preventDefault();

       console.log(e)
    }

    const postJSON = data =>  {
        return fetch("http://localhost:8084/atlprevcomp/v1/tl2/gravar-ficha", 
             {method: "POST",
             headers: {
                "Content-Type": 
                "application/json",
            },
            body: JSON.stringify(data),
        })
        
        .then((response) => response.json())
            .then((data) => {
                console.log("Create Success: ", data);
            })
            .catch((error) => {
                console.error("ERROR: ", error);
            })
}
     



     
/*      const data = { username: "example" };
     postJSON(data); */


/*      console.log(postJSON) */
    
    return(
    <>
      <div>
        <h1 className="text-red-600 text-left">FICHA DE INSCRIÇÃO</h1>
        <h2 className="text-red-600 text-left font-bold">Dados Pessoais</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 grid gap-y-6 text-left">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">Nome:</label>
                <input {...register('nome')} /* onChange={newUser} */name="nome"  id="nome" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpf">CPF:</label>
                <input {...register('numCpf')} /* onChange={postJSON} */ id="numCpf" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-3">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="naturalidade">Naturalidade:</label>
                <input {...register('desNaturalidade')}/*  onChange={postJSON} */ id="desNaturalidade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sexo">Sexo:</label>
                <select id="sexo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>selecione</option>
                </select>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estadoCivil">Estado Civil:</label>
                <select {...register('codEstCivil')} /* onChange={postJSON} */ id="codEstCivil" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option>Selecione</option>
                </select>
                </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identidade">Identidade:</label>
                <input  {...register('identidade')} /* onChange={postJSON} */ id="identidade" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                <div className="grid grid-cols-1">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataEmissao">Data da Emissão:</label>
                <input {...register('datEmissao')} /* onChange={postJSON} */ type="date" id="dataEmissao" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
            </div>
            <div className="items-center text-center mt-4 flex gap-x-4 justify-center">
            <button /* onClick={postJSON} */ className="bg-gray-500 text-white">Limpar</button>
            <button type="submit" /* onClick={PostJSON(...register(e))} */ className="bg-red-600 text-white">Salvar</button>
          </div>
        </form>

      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
    
    
    )
}

export default FormPersonalData;