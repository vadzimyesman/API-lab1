//const { default: axios } = require("axios")

//const { default: axios } = require("axios")
const h2Container = document.querySelector("div")
const button = document.querySelector("button")

const buttonClicked = ()=>{
    console.log("button clicked")
    axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res)=>{
        let residentsArray = res.data.results[0].residents
        for (resident=0; resident<residentsArray.length; resident++){
            axios.get(residentsArray[resident]).then((res)=>{
            let child=document.createElement('h2')
            child.textContent=res.data.name
            h2Container.appendChild(child)
            })
        }
    })
    
}

button.addEventListener("click", buttonClicked)



