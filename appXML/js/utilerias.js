function getParams(){
	return sessionStorage.params;
}

function leerXML(path){

	return new Promise(function(resolve, reject) {
		try{
			var fs= require("fs");

			fs.readFile(path, 'utf8', function(err, data){
			    //console.log(data);

			var convert = require('xml-js');
			var xml = data
			var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
			//var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
			//console.log(result1, '\n', result2);
			//console.log(result1);

			var JSON_Plataforma= JSON.parse(result1)
			//window.alert(result1)
			console.log(JSON_Plataforma);
			resolve(JSON_Plataforma);

			});
		}catch(err){
			//window.alert(err.toString())
			reject(err)
		}
	})
}

function analizarSeccionXML(path){
console.log("analiza");
	return new Promise(function(resolve, reject) {
		var listaUnidades=[];
		var promesaLectura= leerXML(path);
		promesaLectura.then(function(data){
			console.log("Comenzando a analizar..")
			//console.log(data.CDInteractive.Unidad)
			//console.log(data);
			console.log("iniciando foreach")
			var arrUnidades=[];

			data.CDInteractive.Unidad.forEach(function(item, index){
					var auxJson={"Unidad": ""};
					auxJson.Unidad=item;
					var jsonXML = jsonToXML(auxJson);
					arrUnidades.push(jsonXML);
			});
			console.log("ArrUnidades", arrUnidades);
			resolve({"unidades": arrUnidades});
		});
			fs = require('fs');
			fs.writeFile('helloworld.txt', '', function (err) {
			  if (err) return console.log(err);
			  console.log('Hello World > helloworld.txt');
			});
		}, function(err){
			alert("se genero un error al leer el archivo json")
	});
}

function jsonToXML(json){
	var convert = require('xml-js');
	var options = {compact: true, ignoreComment: true, spaces: 4};
	var result = convert.json2xml(json, options);
	//console.log(result);
	return result;
}

// function escribir(){
// 	fs = require('fs');
// 	fs.writeFile('helloworld.txt', arrUnidades, function (err) {
// 	  if (err) return console.log(err);
// 	  console.log('Hello World > helloworld.txt');
// 	});
// }

// fs.writeFile("path/to/anywhere/test.txt", "Hi mom!", function(err) {
//     if(err) {
//         alert("error");
//     }
// });
// function guardarXML()
// {
// 	// Puedes obviamente dar una direccion completa sin usar el dialogo (C:/Program Files/path/myfileexample.txt)
// dialog.showSaveDialog(function (fileName) {
//        if (fileName === undefined){
//             console.log("No guardaste el archivo");
//             return;
//        }
//        // filename es una cadena de texto que contiene la direccion y el nombre del archivo "creado" con el dialogo
//        fs.writeFile(fileName, arrUnidades, function (err) {
//            if(err){
//                alert("Ha ocurrido un error creando el archivo: "+ err.message)
//            }
//
//            alert("El archivo ha sido creado satisfactoriamente");
//        });
// }); 
// }
//
// function btnGuardar(){
// 	var  fs  =  require ( 'fs' ) ;
//
// 	var  archivo  =  fs . readFile ( arrUnidades, 'utf8' , function ( err , data ) {
//     fs . writeFile ( 'Unidades.xml' , datos ) ;
//     consola . log ( datos ) ;
// 	} ) ;
// }

module.exports.getParams = getParams;
module.exports.analizarSeccionXML = analizarSeccionXML;
module.exports.leerXML=leerXML;
module.exports.jsonToXML = jsonToXML;
