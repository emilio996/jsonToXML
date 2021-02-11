//var controlador= require('./comunicaciones/bd')
var util= require('./js/utilerias.js')
//var parametros=null;
//var idPlataforma=null;
$(document).ready(function(){

  // var contacto={"nombre":"emilio", "edad":25, "direccion":"dfdjfdfj"};
  // console.log(contacto.nombre)
  // contacto.cp="42157";
  //   console.log(contacto);
  // var arrTel=[];
  // arrTel.push("771254545")
  // arrTel.push("2525454545")
  // arrTel.push("54465456")
  //
  // contacto.telefonos=arrTel;
  //
  // console.log(contacto)

  // for(var i=0; i<=contacto.telefonos.length-1; i++){
  //   console.log(contacto.telefonos[i]);
  // }
  //
  // console.log("foreach")
  //
  // contacto.telefonos.forEach(function(item, index){
  //   console.log(item)
//});

	// parametros=JSON.parse(sessionStorage.params);
	// console.log(parametros);
	// idPlataforma=parametros.plataforma.idplataforma;
	// $(".nombrePlataforma").html(parametros.plataforma.nombre);

	//alert();
	// buscando actualizaciones

	// var promesaBuscarP = controlador.query("select descripcion, fecha from actualizaciones where idplataforma="+idPlataforma);
	// promesaBuscarP.then(function(result){
	// 		if(result.results.length>0){
	// 			var tablaInit='<table style="width:100%" id="actualizaciones_tb"><tr><th>Descripcion</th><th>Fecha</th><th>PIN Autorizacion</th></tr></table>'
	// 			$(".contActualizaciones").html(tablaInit);
	//
	// 			result.results.forEach(function(item, index){
	//
	// 				$("#actualizaciones_tb").append("<tr><td>"+item.descripcion+"</td><td>"+item.fecha+"</td><td><span class ='btn btn-primary'>Mostrar</span></td></td></tr>");
	// 			})
	// 		}else{
	// 			$(".contActualizaciones").html("<h4>No hay actualizacines para mostrar</h4>");
	// 		}
	// 	})

        // prevent default behavior from changing page on dropped file
        window.ondragover = function(e) { e.preventDefault(); return false };
        // NOTE: ondrop events WILL NOT WORK if you do not "preventDefault" in the ondragover event!!
        window.ondrop = function(e) { e.preventDefault(); return false };

        const holder = document.getElementById('holder');
        holder.ondragover = function () { this.className = 'hover'; return false; };
        holder.ondragleave = function () { this.className = ''; return false; };
        holder.ondrop = function (e) {
          e.preventDefault();

          for (var i = 0; i < e.dataTransfer.files.length; ++i) {
            console.log(e.dataTransfer.files[i].path);
            $("#holder").html("analizando "+e.dataTransfer.files[i].path+" ...");
            var promesaAnalisis=util.analizarSeccionXML(e.dataTransfer.files[i].path);
            //console.log(promesaAnalisis);

            promesaAnalisis.then(function(data){
            	console.log("analisis recibido")
            	console.log(data);
              // data.CDInteractive.Unidad.forEach(function(item, index){
              //   console.log(item)
              // });
            	$("#holder").html("Detecto "+ data.unidades.length +" unidades, deseas continuar con el proceso de subir archivos? <span className = 'btnGuardar' class ='btn btn-success btn-lg btn-block' >Guardar</span> ")
            });
          }
        }
});
