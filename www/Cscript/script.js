
async function Opcion(){ 
	 
	var usuario=document.login.usuario.value; 
	var password=document.login.password.value; 
	var cuit = Number(document.login.cuit.value); 
	
	let datos = await axios.get('https://axiosqwertyuiop.herokuapp.com/api');
 
    let pos;
    let res;
    for (var i = datos.data.length - 1; i >= 0; i--) {
    	if (usuario==datos.data[i].username && password==datos.data[i].password && cuit==datos.data[i].cuit){
    		res = 1;
    		pos = i;
    	}
    }
	if(res==1) { 
		window.location="opcion.html";

		sessionStorage.setItem("dato", JSON.stringify(datos.data[pos]));
		/*console.log("hola2", datos.data[0].password)
		var res = datos.data[0].fec_alta.split("T");
		console.log(res[0]) */
	} else{
 	 	alert("DATOS INCORRECTOS. REINGRESE TODO.");
 	 	var inputImage = document.getElementById("typeEmailX");
  		inputImage.value = '';
	}

}
function Login(){
	window.location="login.html";
}