const alert = document.getElementById("alert")
export const ShowingAlert = () => {    
    alert.classList.remove('hidden')
}

export const HideAlert = ()=> {
    const alert = document.getElementById("alert")
    alert.classList.add('hidden')
}