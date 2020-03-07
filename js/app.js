
let numero=0;
let p=0;
let f=0;




function shuffle(z){
    for(var j, x, i = z.length; i; j = Math.floor(Math.random() * i), x = z[--i], z[i] = z[j], z[j] = x);
    console.log(z);
    return z;
}

function aleatorio(){
    return shuffle( "123456789".split('') ).join('').substring(0,4);
}

function repetidos(number) {
    return (/([0-9]).*?\1/).test(number)
}

//document ready
$(function() {
    numero = aleatorio();
    console.log(numero);
});

//Métodos botones
$("#new").on('click',function(){
    p=0;
    f=0;

    //Generar nuevo numero
    numero = aleatorio();
    console.log(numero);

    //Reinicializar
    $('table tbody').html('');
    $("#modal").modal('hide');
    $("#number").val('');
});

$("#number").on('keypress', function(event) {
    //Valida solo cuando enter
    if(event.which === 13){
        event.preventDefault();
        p=0;
        f=0;
        let numerou = $("#number").val();
        console.log(numerou);
        //Validaciones generales
        if( repetidos(numerou)===true || numerou.length != 4){
            $("#number").addClass("is-invalid");
            $("#message").addClass("text-danger");
            return false;
        }
        else{
            $("#number").removeClass("is-invalid");
            $("#message").removeClass("text-danger");
        }
      
        //Valida picas y fijas
        for(let i=0; i< numerou.length; i++){
          console.log(numerou[i]);
          console.log(numero[i]);
            if(numerou[i] === numero[i]){

                f++;
            }else if (numero.includes(numerou[i])){

                p++;
            }
        }

        //En caso de terminar el juego mostrar el modal
        if(f===4){
            $("#modal").modal();
            return true;
        }

        $("#number").val('');
        //En caso contrario agregar fila a la tabla
        $('table tbody').append(`<tr><td>${numerou}</td><td>${p}</td><td>${f}</td></tr>`);
    }
});
