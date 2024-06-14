function suma() {
    let n = document.getElementById("x1").value
    let m = document.getElementById("x2").value
    n = parseInt(n)
    m = parseInt(m)
    let a = n + m
    let aux = document.getElementById("res1")
    aux.innerText = a
}
function resta() {
    let n = document.getElementById("x1").value
    let m = document.getElementById("x2").value
    n = parseInt(n)
    m = parseInt(m)
    let a = n - m
    let aux = document.getElementById("res1")
    aux.innerText = a
}
function multi() {
    let n = document.getElementById("x1").value
    let m = document.getElementById("x2").value
    n = parseInt(n)
    m = parseInt(m)
    let a = n * m
    let aux = document.getElementById("res1")
    aux.innerText = a
}
function divid() {
    let n = document.getElementById("x1").value
    let m = document.getElementById("x2").value
    n = parseFloat(n)
    m = parseFloat(m)
    let a = n / m
    let aux = document.getElementById("res1")
    aux.innerText = a
}
function mod() {
    let n = document.getElementById("x1").value
    let m = document.getElementById("x2").value
    n = parseFloat(n)
    m = parseFloat(m)
    let a = n % m
    let aux = document.getElementById("res1")
    aux.innerText = a
}
function facto(){
    let a = 1
    let n = document.getElementById("x1").value
    n = parseInt(n)
    for (var i = 1; i < n+1; i++) {
        a = a*i
    }
    let aux = document.getElementById("res1")
    aux.innerText = a
}
function borrar(){
    let vac=""
    document.getElementById("x1").value = vac
    document.getElementById("x2").value = vac
}