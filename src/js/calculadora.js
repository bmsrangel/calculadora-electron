function inserir(num){
    document.form.textview.value = document.form.textview.value + num
}

function igual(){
    var exp =  document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}

function limpar(){
    document.form.textview.value = "";
}

function voltar(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}