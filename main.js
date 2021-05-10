'use strich'

//CRUD = create read update delete

//const db = [
//    {
//        nome: 'gustavo',
//        email: 'gusta@gamil',
//        celular: '999378903',
//        cidade: 'São Paulo'
//    },
//    {
//        nome: 'milena',
//        email: 'mielna@gamil',
//        celular: '998774638',
//        cidade: 'São Paulo'
//    }
//]

const openModal = () => document.querySelectot('#modal')
    .classList.add('active')

const closeModal = () => document.querySelector('#modal')
    .classList.remove('active')

const clearInput = () => {
    const inputs = Array.from(document.querySelectorAll('.modal input'))
    inputs.forEach( input => input.value = "")
}

const loadTable = () => {
    const tabelaClientes = document.querySelector("#tabelaClientes tbody")
    const newTr = document.createElement('tr');

    newTr.innerHTML = ` 
            <td>Maria da Silva</td>
            <td>maria@gmail.com</td>
            <td>11971657461</td>
            <td>São Roque</td>
            <td>
                <button class="btn blue">Editar</button>
                <button class="btn red">Excluir</button>
            </td>

    tabelaClientes.appendChild(newTr)
}

const saveClient = () => {
    const dataBase = JSON.parse(localStorage.getItem('dataBase')) ?? [];
    const novoCliente = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        celular: document.querySelector('#celular').value,
        cidade: document.querySelector('#cidade').value
    }
    dataBase.push (novoCliente)

    localStorage.setItem('dataBase', JSON.stringify(dataBase))
    closeModal()
    clearInput()
}

document.querySelector('#cadastrarCliente')
    .addEventListener('click', openModal)

document.querySelector('#close')
    .addEventListener('click', () => { closeModal(); clearInput() })

document.querySelector('#cancelar')
    .addEventListener('click', () => { closeModal(); clearInput() })

document.querySelector('#salvar')
    .addEventListener('click', saveClient)

loadTable