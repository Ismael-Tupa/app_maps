var dat = JSON.parse(sessionStorage.getItem("dato"));
var titulo = "Bienvenido "+dat.nombre;
function doc(){document.write(titulo);}

function geolo(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sucess, error, options);
  }else{
    alert('no se pudo');
  }

  var options = {
    EnableHighAccuracy:true,
    TimeOut:300,
    MaximunAge:0
  }

  async function sucess(geo){
    
    let cord = geo.coords;
    let dato = await axios.post('https://axiosqwertyuiop.herokuapp.com/mar', {
      username: dat.username,
      latitud: cord.latitude,
      longitud: cord.longitude,
      movimiento: "ingreso",
      fecha: fecha()    
    })
    console.log(dato.data)
    if(dato.data == "listo"){
      respueta = "<div class='alert alert-success' role='alert'>en linea</div>";
    }else{
      respueta = "<div class='alert alert-danger' role='alert'>error</div>";
    }
    document.getElementById('datos').innerHTML = respueta;
    
  }
  function error(err){
    alert(err.message)
  }
}
function fecha(){
    var f = new Date();
    var dd = ("0"+f.getDate()).slice(-2);
    var mm = ("0"+(f.getMonth()+1)).slice(-2);
    var yy = f.getFullYear();
    var hoy = yy +"-"+mm+"-"+dd;
    return hoy;
    console.log(hoy)
}