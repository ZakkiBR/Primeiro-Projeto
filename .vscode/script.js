function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // PEGA A TAG IMG
    const img = document.querySelector("#profile img")

    // SUSBSTITUIR A IMAGEM 
    if(html.classList.contains('light')) {

        // SE TIVER LIGHT MODE, ADICIONAR A IMAGEM LIGHT
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Nicole Berling, que está com um vestido verde, e oculos escudos, com seus cachinhos dourados")
    }
     else {
        // SE TIVER SEM LIGHT MODE, MANTER A IMAGEM NORMAL 
        img.setAttribute("src", "./assets/avatar.png")
     }  

}
