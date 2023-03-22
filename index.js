//Limpando os modais assim que a pagina carregar
const modals = document.getElementsByClassName('modal-wrap')

const body = document.getElementById('body')


//Criação de componentes
const createParagraphCompontent = (text, classe = 'container05 paragraph newParagraph') => {
    const p = document.createElement('p')
    p.innerText = text
    p.className = classe
    return p 
}

const createUlComponent = (classe = "firstUl") => {
    const ul = document.createElement('ul')
    ul.className = `ul ${classe}`
    return ul
}

const createLicomponent = (text, classe = 'firstLi') => {
    const li = document.createElement('li')
    li.innerText = text
    li.className = `li ${classe}`
    return li
}

//Mudar o estilo da borda 
const changeBorderColor = (...local) =>{ 
    local.forEach(element => {
        element.style.border = '1px solid red'
    })
}

const changeBorderColorWhite = (...local) =>{ 
    local.forEach(element => {
        element.style.border = 'none'
    })
}

//Remover elementos inseridos atraves do DOM
const removeElements = (div) => {
    let first = div.firstElementChild
    while (first){
        first.remove()
        first = div.firstElementChild
    }
}

//Função para checar email
const checkEmail = (emailInput,radioInput, checkBox, divForRespost) => {
    const emailRegex = /\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/
    const emailValue = emailInput.value
    const container = document.getElementById('comunidade')
    const width = window.screen.width


    if (emailValue == ""  && checkBox == false){
        removeElements(divForRespost)
        const p = createParagraphCompontent('Por favor, preencha os seguintes campos:')
        
        const list = createUlComponent()
        const ol1 = createLicomponent('E-mail')
        const ol2 = createLicomponent('Termo de aceitação')

        if (width < 750) {
            container.style.height = '96vh'
        }

        list.append(ol1,ol2)
        divForRespost.append(p,list)

        changeBorderColor(emailInput)
        radioInput.style.color = 'red'

    } else if (emailValue == "" && checkBox == true){
        removeElements(divForRespost)
        const p = createParagraphCompontent('Por favor, preencha os seguintes campos:')
        
        const list = createUlComponent()
        const ol1 = createLicomponent('E-mail')

        list.append(ol1)
        divForRespost.append(p,list)

        changeBorderColor(emailInput)
        radioInput.style.color = 'white'

    } else if (emailValue.match(emailRegex) == null && checkBox == true && emailValue !== "") {
        removeElements(divForRespost)
        const list = document.createElement('ul')

        const ol1 = document.createElement('li')
        ol1.innerText = 'E-mail invalido'

        list.append(ol1)
        divForRespost.appendChild(list)

        changeBorderColor(emailInput)
        radioInput.style.color = 'white'
    } else if (emailValue.match(emailRegex) == null && checkBox == false && emailValue !== "") {

        if (width > 750){
            container.style.height = '120vh'
        } else {
            container.style.height = '100vh'
        }
        removeElements(divForRespost)

        const p = createParagraphCompontent('Por favor, preencha os seguintes campos:')
        const list1 = createUlComponent()
        const ol1 = createLicomponent('Termo de aceitação')
        list1.append(ol1)

        const p2 = createParagraphCompontent('Por favor, corrija os seguintes erros:')
        const list2 = createUlComponent()
        const ol2 = createLicomponent('E-mail inválido')
        list2.append(ol2)

        divForRespost.append(p,list1, p2,list2)

        changeBorderColor(emailInput)
        radioInput.style.color = 'red'

    } else if (emailValue.match(emailRegex) !== null && checkBox == false){
        removeElements(divForRespost)

        const p = createParagraphCompontent('Por favor, preencha os seguintes campos:')
        const list = createUlComponent()
        const ol = createLicomponent('Termo de aceitação')
        list.append(ol)

        divForRespost.append(p,list)
        changeBorderColorWhite(emailInput)
        radioInput.style.color = 'red'
    } else {
        let form = document.getElementById('form')
        if (width > 750){
            container.style.height = '90vh'
        } else {
            container.style.height = '80vh'
        }
        form.innerText = "Obrigado por se inscrever :)"
    }
}

//Inserindo a função de verificar email no botão
const buttonSubmit = document.getElementById('btnSubmit')
buttonSubmit.addEventListener('click', (ev) => {
    ev.preventDefault()
    const emailInput = document.getElementById('emailInput')
    const divList = document.getElementById('emailListError')
    const checkBox = document.getElementById('emailRadio').checked
    const radioValue = document.getElementById('radioParagraph')

    checkEmail(emailInput,radioValue,checkBox,divList)
})

//Função para checar mensagem
const checkModal = (nameInput, emailInput, messageInput, divForRespost) => {
    const emailRegex = /\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/
    const nameValue = nameInput.value
    const emailValue = emailInput.value
    const messageValue = messageInput.value 
    const width = window.screen.width
    const heightModal = document.getElementById('modal1Form')

    if (width < 750){
        heightModal.style.height = '60vh'
    } else {
        heightModal.style.height = '87vh'
    }

    if (nameValue == "" && emailValue == "" && messageValue == ""){
        removeElements(divForRespost)
        const p = createParagraphCompontent("Por favor preencha os seguintes campos: ",'modalError paragraph')

        const list = createUlComponent('secondUl')

        const ol1 = createLicomponent('Nome completo', 'secondOl')
        const ol2 = createLicomponent('E-mail', 'secondOl')
        const ol3 = createLicomponent('Mensagem', 'secondOl')

        list.append(ol1,ol2,ol3)
        divForRespost.append(p,list)
        changeBorderColor(nameInput,emailInput,messageInput)

    } else if (nameValue == "" && emailValue == ""){
        removeElements(divForRespost)
        const p = createParagraphCompontent("Por favor preencha os seguintes campos: ",'modalError paragraph')

        const list = createUlComponent('secondUl')
        const ol1 = createLicomponent('Nome completo','secondOl')
        const ol2 = createLicomponent('E-mail','secondOl')

        list.append(ol1,ol2)
        divForRespost.append(p,list)

        changeBorderColor(nameInput,emailInput)
        changeBorderColorWhite(messageInput)

    } else if (nameValue == "" && messageValue == ""){
        removeElements(divForRespost)
        if (emailValue.match(emailRegex) == null && emailValue !== ""){
            if (width < 750){
                heightModal.style.height = '65vh'
            } 
            const p = createParagraphCompontent("Por favor preencha os seguintes campos: ",'modalError paragraph')
            const list = createUlComponent('secondUl')
            const ol1 = createLicomponent('Nome completo','secondOl')
            const ol2 = createLicomponent('Mensagem','secondOl')

            const p2 = createParagraphCompontent("Por favor corrija os seguintes campos: ",'modalError paragraph')
            const list2 = createUlComponent('secondUl')
            const ol3 = createLicomponent('E-mail','secondOl')

            list.append(ol1,ol2)
            list2.append(ol3)
            divForRespost.append(p,list,p2,list2)
            changeBorderColor(nameInput,emailInput,messageInput)
            return
        }
        const p = createParagraphCompontent("Por favor preencha os seguintes campos: ",'modalError paragraph')

        const list = createUlComponent('secondUl')
        const ol1 = createLicomponent('Nome completo','secondOl')
        const ol2 = createLicomponent('Mensagem','secondOl')

        list.append(ol1,ol2)
        divForRespost.append(p,list)

        changeBorderColor(nameInput,messageInput)
        changeBorderColorWhite(emailInput)

    } else if (emailValue == "" && messageValue == ""){
        removeElements(divForRespost)

        const p = createParagraphCompontent("Por favor preencha os seguintes campos: ",'modalError paragraph')

        const list = createUlComponent('secondUl')
        const ol1 = createLicomponent('E-mail','secondOl')
        const ol2 = createLicomponent('Mensagem','secondOl')

        list.append(ol1,ol2)
        divForRespost.append(p,list)

        changeBorderColor(emailInput,messageInput)
        changeBorderColorWhite(nameInput)

    } else if (nameValue == "" && messageValue !== "" && emailValue !== ""){
        removeElements(divForRespost)

        if (emailValue.match(emailRegex) == null){
            const p = createParagraphCompontent("Por favor preencha os seguintes campos: ",'modalError paragraph')
            const list = createUlComponent('secondUl')
            const ol1 = createLicomponent('Nome completo','secondOl')

            const p2 = createParagraphCompontent("Por favor corrija os seguintes campos: ",'modalError paragraph')
            const list2 = createUlComponent('secondUl')
            const ol2 = createLicomponent('E-mail','secondOl')

            list.append(ol1)
            list2.append(ol2)
            divForRespost.append(p,list)
            divForRespost.append(p2,list2)

            changeBorderColor(nameInput,emailInput)
            changeBorderColorWhite(messageInput)
            return
        }

        const p = createParagraphCompontent("Por favor preencha os seguintes campos: ",'modalError paragraph')

        const list = createUlComponent()
        const ol1 = createLicomponent('Nome completo')

        list.append(ol1)
        divForRespost.append(p, list)

        changeBorderColor(nameInput)
        changeBorderColorWhite(emailInput,messageInput)
    } else if (emailValue == ""){
        removeElements(divForRespost)
        const p = createParagraphCompontent("Por favor preencha os seguintes campos: ",'modalError paragraph')

        const list = createUlComponent('secondUl')
        const ol1 = createLicomponent('E-mail','secondOl')

        list.append(ol1)
        divForRespost.append(p, list)


        changeBorderColor(emailInput)
        changeBorderColorWhite(nameInput,messageInput)
    } else if (messageValue == "" && nameValue !== ""){
        removeElements(divForRespost)

        if (emailValue.match(emailRegex) == null){
            const p = createParagraphCompontent("Por favor preencha os seguintes campos: ",'modalError paragraph')
            const list = createUlComponent('secondUl')
            const ol1 = createLicomponent('Mensagem','secondOl')

            const p2 = createParagraphCompontent("Por favor corrija os seguintes campos: ",'modalError paragraph')
            const list2 = createUlComponent('secondUl')
            const ol2 = createLicomponent('E-mail','secondOl')

            list.append(ol1)
            list2.append(ol2)
            divForRespost.append(p,list, p2,list2)

            changeBorderColor(messageInput,emailInput)
            changeBorderColorWhite(nameInput)
            return
        }
        const p = createParagraphCompontent("Por favor preencha os seguintes campos: ",'modalError paragraph')

        const list = createUlComponent()
        const ol1 = createLicomponent('Mensagem')

        list.append(ol1)
        divForRespost.append(p, list)

        changeBorderColor(messageInput)
        changeBorderColorWhite(nameInput,emailInput)
    } else if (emailValue.match(emailRegex) == null ){
        removeElements(divForRespost)

        const p = createParagraphCompontent("Por favor corrija os seguintes campos: ",'modalError paragraph')
        const list = createUlComponent('secondUl')
        const ol1 = createLicomponent('E-mail','secondOl')

        list.append(ol1)
        divForRespost.append(p,list)

        changeBorderColor(emailInput)
        changeBorderColorWhite(nameInput,messageInput)
    } else {
        removeElements(divForRespost)
        divForRespost.innerText = "Obrigado por nos enviar uma mensagem :)"
        changeBorderColorWhite(nameInput,emailInput,messageInput)
    }
}

//Inserindo a função de checar mensagem no botão 
const buttonMsgSubmit = document.getElementById('modalBtnSubmit')
buttonMsgSubmit.addEventListener('click', (ev) => {
    ev.preventDefault()

    const nameInput = document.getElementById('modalNameInput')
    const emailInput = document.getElementById('modalEmailInput')
    const divList = document.getElementById('modalMessagesError')
    const messageInput = document.getElementById('modalMessageInput')

    checkModal(nameInput,emailInput,messageInput,divList)
})


//Capturar a quantidade de pixels do scrollbar e mudar o background do color
const header = document.getElementById("header");
const pixels = "600";
window.addEventListener("scroll", function () {
  if (window.scrollY > pixels) {
    header.style.transition = 'all 1s'
   header.style.backgroundColor = 'black' 
  } else {
    header.style.backgroundColor = 'transparent' 
}
});


//Primeiro modal
const modal1 = document.getElementById('modal1')
const openModal1 = document.getElementById('openModal1')
const closeBtn1 = document.getElementById("closeBtn1")
const modalArea1 = document.getElementById('modal1 modalContent')


//Segundo modal
const modal2 = document.getElementById('modal2')
const openModal2 = document.getElementById('openModal2')
const closeBtn2 = document.getElementById("closeBtn2")
const modalArea2 = document.getElementById('modal2 modalContent1')

//Terceiro modal
const modal3 = document.getElementById('modal3')
const openModal3 = document.getElementById('openModal3')
const closeBtn3 = document.getElementById("closeBtn3")
const modalArea3 = document.getElementById('modal2 modalContent2')

//Quarto modal
const modal4 = document.getElementById('modal4')
const openModal4 = document.getElementById('openModal4')
const closeBtn4 = document.getElementById("closeBtn4")
const modalArea4 = document.getElementById('videoVimeo')

//Quinto modal
const modal5 = document.getElementById('modal5')
const openModal5 = document.getElementById('openModal5')
const closeBtn5 = document.getElementById("closeBtn5")
const modalArea5 = document.getElementById('videoVimeo2')

//Sexto modal
const modal6 = document.getElementById('modal6')
const openModal6 = document.getElementById('openModal6')
const closeBtn6 = document.getElementById("closeBtn6")
const modalArea6 = document.getElementById('videoVimeo3')

//Setimo modal
const modal7 = document.getElementById('modal7')
const openModal7 = document.getElementById('openModal7')
const closeBtn7 = document.getElementById("closeBtn7")
const modalArea7 = document.getElementById('videoVimeo4')

//Arrays
const openModalsBtn = [openModal1,openModal2,openModal3,openModal4,openModal5,openModal6,openModal7]
const closeModalsBtn = [closeBtn1,closeBtn2,closeBtn3,closeBtn4,closeBtn5,closeBtn6,closeBtn7]
const modalAreas = [modalArea1,modalArea2,modalArea3,modalArea4,modalArea5,modalArea6,modalArea7]

//Adicionando as funções de abrir e fechar para todos os modais
for (let i = 0; i <= openModalsBtn.length; i++){

    if(openModalsBtn[i] !== undefined || closeModalsBtn[i] != undefined){
        openModalsBtn[i].addEventListener('click', () => {
            openModal(modals[i])

        })
        closeModalsBtn[i].addEventListener('click', () => {
            if (closeModal[i] === closeModal[1]){
                const nameInput = document.getElementById('modalNameInput')
                const emailInput = document.getElementById('modalEmailInput')
                const divList = document.getElementById('modalMessagesError')
                const messageInput = document.getElementById('modalMessageInput') 
                const heightModal = document.getElementById('modal1Form')
                heightModal.style.height = '400px'           
                changeBorderColorWhite(nameInput,emailInput,messageInput)
                removeElements(divList)
            }
            closeModal(modals[i])
        })
    }

    if(modals[i] !== undefined){
        modals[i].addEventListener('click', (e) => {
            if (modalAreas[i].contains(e.target)){
            } else{
                modals[i].style.display = 'none'
                body.style.overflow = 'auto'
                body.style.transform = 'blur(2px)'
            }
        })
    }
}

//Funções para abrir e fechar modal
function openModal(modal){
    modal.style.display = 'flex'
    modal.style.opacity = 1
    body.style.overflow = 'hidden'
    
}

function closeModal(modal){
    modal.style.display = 'none'
    modal.style.opacity = 0
    body.style.overflow = 'auto'
}

