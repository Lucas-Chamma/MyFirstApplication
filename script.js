var dados = new Object();
var id_exclusao = '';
var id_edicao = '';

$("#nome").change(function(){
    dados.nome = $("#nome").val(); 
});
$("#email").change(function(){
    dados.email = $("#email").val(); 
});
$("#cpf").change(function(){
    dados.cpf = $("#cpf").val(); 
});
$("#celular").change(function(){
    dados.celular = $("#celular").val(); 
});
$("#nascimento").change(function(){
    dados.nascimento = $("#nascimento").val(); 
});
$("#endereco").change(function(){
    dados.endereco = $("#endereco").val(); 
});
$("#observacao").change(function(){
    dados.observacao = $("#observacao").val(); 
});

$("#formulario").submit(function () { return false; });


function limpaForm(){
    
    $('#formulario').each(function(){
        this.reset();
      });
    
}

// bloqueando  keycodes com js puro 
var nome = document.querySelector("#nome");
nome.addEventListener("keypress", function(e) {
var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 32 && keyCode < 65) {
    e.preventDefault();
  }
  if (keyCode > 90 && keyCode < 97) {
    e.preventDefault();
  }
  if (keyCode > 122 && keyCode < 127) {
    e.preventDefault();
  }
})

var celular = document.querySelector("#celular");
celular.addEventListener("keypress", function(e) {
var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 32 && keyCode < 48) {
    e.preventDefault();
  }
  if (keyCode > 57 && keyCode < 126) {
    e.preventDefault();
  }

  
})

var cpf = document.querySelector("#cpf");
cpf.addEventListener("keypress", function(e) {
var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 32 && keyCode < 48) {
    e.preventDefault();
  }
  if (keyCode > 57 && keyCode < 126) {
    e.preventDefault();
  }

  
})

//


function TestaCPF()
    {
        var cpf = $('#cpf').val().replace(/[^0-9]/g, '').toString();
        
        if( cpf.length == 11 )
        {
            var v = [];
            
            //Calcula o primeiro dígito de verificação.
            v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
            v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
            v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
            v[0] = v[0] % 11;
            v[0] = v[0] % 10;

            //Calcula o segundo dígito de verificação.
            v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
            v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
            v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;

            //Retorna Verdadeiro se os dígitos de verificação são os esperad
            if ((v[0] != cpf[9]) || (v[1] != cpf[10]) ){
                var v = [];
                
                $('#cpf').val('');
                $('#cpf').focus();
                return false;
            }
            return true;
        }
        //case guard
        if(cpf.length == 0){
            return false;
        }
            

        else{
            //alert('CPF inválido:' + cpf);       
            $('#cpf').val('');
            $('#cpf').focus();
            return false;
        }
    };


function preencherTabela(){
    $('#tabela tr').remove();

    $.get( "buscar.php", function(dados){        
        for (var i = 0; i < 9; i++) {
            $('#tabela').append('<tr><td>'+dados[i][0]+'</td><td class="col">'+dados[i][1]+'</td><td class="col">'+dados[i][2]+'</td><td class="col">'+dados[i][3]+'</td><td class="col">'+dados[i][4]+'</td><td class="col">'+dados[i][5]+'</td><td class="col">'+dados[i][6]+'</td><td class="col">'+dados[i][7]+'</td><td class="col"><div class="row"><div class="col"><div class="d-grid"><button value="'+dados[i][0]+'" id="botaoEditar" class="btn btn-info mb-2 ">Editar</button></div></div><div class="col"><div class="d-grid"><button class="btn btn-danger" value="'+dados[i][0]+'" type="button" id ="botaoExcluir" data-bs-toggle="modal" data-bs-target="#excluiModal">Excluir</button></div></div></div></td></tr>');
        }
        
    },'json');
    
} 

$(document).ready(function(){
    preencherTabela();
    mostraSalvar();
});

$("#btnBuscar").click(function(){
    var tipo =  $("input[name='tipoBusca']:checked").val();      
    var valor = $('#busca').val();

    if(valor == ''){
        preencherTabela();
    }else{
        $.post("filtrar.php",{tipo:tipo , valor:valor},function(dados){
            $('#tabela tr').remove();
            for (var i = 0; i < 9; i++) {
                $('#tabela').append('<tr><td class="col">'+dados[i][0]+'</td><td class="col">'+dados[i][1]+'</td><td class="col">'+dados[i][2]+'</td><td class="col">'+dados[i][3]+'</td><td class="col">'+dados[i][4]+'</td><td class="col">'+dados[i][5]+'</td><td class="col">'+dados[i][6]+'</td><td class="col">'+dados[i][7]+'</td><td class="col"><div class="row"><div class="col"><div class="d-grid"><button value="'+dados[i][0]+'" id="botaoEditar" class="btn btn-info mb-2 ">Editar</button></div></div><div class="col"><div class="d-grid"><button class="btn btn-danger" value="'+dados[i][0]+'" type="button" id ="botaoExcluir" data-bs-toggle="modal" data-bs-target="#excluiModal">Excluir</button></div></div></div></td></tr>');
            }
            
        },'json');
    }
    

});

function validaDados(){
    
    var retorno = 1;
    
    if($("#nome").val() === ''){
    
        $("#nome").attr('placeholder','Preencha o Nome Corretamente');
        $("#nome").addClass('trocaCor');;
        retorno = 0;
       
    }
    if($("#email").val() === ''){
       
        $("#email").attr('placeholder','Preencha o Email Corretamente');
        $("#email").addClass('trocaCor');;
        retorno = 0;
        
    }
    
    
    if($("#celular").val() === ''){
        
        $("#celular").attr('placeholder','Celular Invalido');
        $("#celular").addClass('trocaCor');;
        retorno = 0;
    
    }
    

    if($("#endereco").val() === ''){

        $("#endereco").attr('placeholder','Preencha o Endeço Corretamente');
        $("#endereco").addClass('trocaCor');;
        retorno = 0;
        
    }
    if(!TestaCPF()){
    
        $("#cpf").attr('placeholder','CPF inválido');
        $("#cpf").addClass('trocaCor');;
        retorno = 0;
        
    }
    return retorno;
    
    
}




$("#salvar").on("click",function(){
    //$('#').remove();
    if(validaDados()){
        $.post( "gravar.php",dados,function(resultado){
            console.log(resultado);  
        },'json');
    }
    
})

    

//botão que abre o modal 
$("#tabela").on("click","#botaoExcluir",function(){
    id_exclusao = $(this).val();
    $('#usuarioExclusao').html('Desaja realmente excluir o usuário com id : ' + id_exclusao);

});

// botão que exclui o usario do banco

$("#excluirUsuario").click(function(){
    $.post("excluir.php" ,{id: id_exclusao},function(resultado){
        console.log(resultado);
    },'json');
    alert('Usuário Excluido com Sucesso');
    preencherTabela();
    
});


$("#tabela").on("click","#botaoEditar",function(){
    id_edicao = $(this).val();
    var valor = $(this).val();
    $.post("filtrar_id.php",{id:valor},function(dados){

        $("#nome").val(dados[0]['nome']);
        $("#email").val(dados[0]['email']);
        $("#cpf").val(dados[0]['cpf']);
        $("#celular").val(dados[0]['celular']);
        $("#nascimento").val(dados[0]['nascimento']);
        $("#endereco").val(dados[0]['endereco']);
        $("#observacao").val(dados[0]['observacao']);

    },'json');
    mostrarCadastro();
    mostraEditar();

});

$("#editar").click(function(){

    var nome = $("#nome").val();
    var email = $("#email").val();
    var cpf = $("#cpf").val();
    var celular = $("#celular").val();
    var nascimento = $("#nascimento").val();
    var endereco = $("#endereco").val();
    var observacao = $("#observacao").val();
    
    if(validaDados()){
        $.post("editar.php" , {id:id_edicao, nome:nome, email:email, cpf:cpf, celular:celular, nascimento:nascimento, endereco:endereco, observacao:observacao},function(resultado){
            
            alert('Usuário Atualizado com Sucesso')
            mostrarConsulta();
            mostraSalvar();
            preencherTabela();
            
        });
    }
});


function mostraEditar(){
    $("#salvar").hide();
    $("#novoCadastro").hide();
    $("#editar").show();
}
function mostraSalvar(){
    $("#editar").hide();
    $("#novoCadastro").show();
    $("#salvar").show();
}

function mostrarCadastro(){
    var y = document.getElementById("telaConsulta");
    var x = document.getElementById("telaCadastro");          
    x.hidden = false;
    y.hidden = true;
    mostraSalvar();

}

function mostrarConsulta(){
    var y = document.getElementById("telaConsulta");
    var x = document.getElementById("telaCadastro");
    x.hidden = true;
    y.hidden = false;
}

$("#navConsultar").click(function(){
    mostrarConsulta();
    preencherTabela();
});

$("#novoCadastro").click(function(){
    limpaForm();
});

$("#navCadastrar").click(function(){
    mostrarCadastro();
    limpaForm();
});

