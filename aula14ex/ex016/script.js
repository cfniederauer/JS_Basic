function contar(){
    var ini = document.querySelector('div#txtini')
    var fim = document.querySelector('div#txtfim')
    var passo = document.querySelector('div#passo')
    var res = document.querySelector('div#res')

    for (ini;ini<=fim;ini+passo){
        console.log(ini)
    }
    res.innerHTML(`Contando ${ini}`)
}