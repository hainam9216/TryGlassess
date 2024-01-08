function putGlassOn(id) {
    // <img src="./asset/glassesImage/v1.png" alt="">
    let content = ``
    document.getElementById("tryGlass").innerHTML=`
    <img src="./asset/glassesImage/v${id}.png" alt="">
    `
}