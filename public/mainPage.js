//THIS IS MY API BACKEND
const url = "https://efficacious-receptive-christmas.glitch.me/api"

const logo = document.querySelector('#logo')

const mainBtn = document.querySelector('#button')
mainBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let textbox = document.querySelector('.templateClick')
    if (textbox.style.display === "flex") {
        textbox.style.display = "none"
    } else {
        textbox.style.display = "flex"
    }
})

const clsBtn = document.querySelector('#closebtn')
clsBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let textbox = document.querySelector('.templateClick')
    if (textbox.style.display === "flex") {
        textbox.style.display = "none"
    } else {
        textbox.style.display = "flex"
    }
})

const secret = document.querySelector('#secret')
secret.addEventListener('dblclick', (e) => {
    e.preventDefault()
    
    fetch(url,{
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
    } )
    .then((res) => {
            if (!res.ok) throw new Error("INVALID")
            return res.json()
        })
    .catch(console.warn)

    setTimeout(() => {
        location.reload();
    },1000)
})





//Rendering all datas from database
fetch(url)
    .then((res) => {
        if (!res.ok) throw new Error('INVALID')
        return res.json()
    })
    .then((db) => {

        //ADDING NEW IN DATABASE
        const submitBtn = document.querySelector('#submitBtn')
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault()

            const newText = document.querySelector('#mainInput')
            console.log(newText.value)

            //Sending data from database
            const addNew = { "message": newText.value }

            fetch(url,{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(addNew)
            } )
                .then((res) => {
                    if (!res.ok) throw new Error("INVALID")
                    return res.json()
                })
                .catch(console.warn)


                setTimeout(() => {
                    location.reload();
                },1000)
        })


        //RENDERING
        const boxContainer = document.querySelector('.content-container')
        db.map((item) => {
            const box = document.createElement('div')
            box.classList.add('box')

            const boxDesign1 = document.createElement('div') //
            boxDesign1.classList.add('box-design1')

            const boxDesign1Pt = document.createElement('img')
            boxDesign1Pt.src = "./img/asset3.png"
            boxDesign1Pt.classList.add('box1-design-pt')

            boxDesign1.appendChild(boxDesign1Pt)

            const box2Text = document.createElement('div') //
            box2Text.classList.add('box2-text')
            box2Text.innerHTML = item.message

            box.appendChild(boxDesign1)
            box.appendChild(box2Text)

            boxContainer.appendChild(box)

        })
    })
    .catch(console.warn)


