function render(){
    let c = document.querySelector('canvas')
    if(c.getContext){
        let ctx = c.getContext('2d')
        ctx.clearRext(0, 0, 500, 300)
        ctx.fillStyle = document.getElementById('c').value
        ctx.fillRect(50, 100, 60, 30)

        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(document.getElementById('x').value, 150, 75, 0, 2 * Math.PI)
        ctx.fill()



    }
}

document.body.onload = render
document.getElementById('x').onchange = render
document.getElementById('c').onchange = render