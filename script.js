/* 
  SCRIPTS CSS E JS PRO
*/

  async function CadastraLivro(){

    // Entradas
    const input_titulo = document.querySelector("#titulo")
    const input_descricao = document.querySelector("#descricao")
    const aviso = document.querySelector("#aviso")


    if ( (input_descricao.value === "") || (input_titulo.value === "")) {
        /* TEM CAMPO EM BRANCO */
        aviso.style.display = "inline-block"
        aviso.style.backgroundColor = '#ac6363'
        aviso.innerText = "Formulário inválido"
    } else {


        const url = "https://target-api-simples.cyclic.app/livros"
        const body = {
            title: input_titulo.value,
            description: input_descricao.value                 
        }
    
        //chamando a função criada para encapsular o fetch
        const retorno = await PostComAPI(url,body)

        //debug
        console.log(retorno)

        /* NÃO TEM CAMPO EM BRANCO PODE SEGUIR */
         aviso.style.display = "inline-block"
         aviso.style.backgroundColor = '#207868'
         aviso.innerText = retorno
    }

}


async function PostComAPI(url,body) {
    const fetchResposta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json"}
    })
    const respostaEmJSON = await fetchResposta.json()
    return respostaEmJSON
}
  



  