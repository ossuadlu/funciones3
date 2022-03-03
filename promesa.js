function recibirCredencial(nombre,correo,password,plan){

    let promesa=new Promise(function(resolve,reject){

        setTimeout(function(){
            let usuario={
                nombre:nombre,
                correo:correo,
                password:password,
                plan:plan
                
            } 
            console.log("hola")
            //reject("Bienvenido a HBO-MAX " +usuario.nombre)
            resolve("Bienvenido a HBO-MAX " +usuario.nombre)

        },3000)
    })

    return promesa
}
recibirCredencial( "Adny osorio", "adluossu@gmail.com", 12345678,"1.mensual")
.then(function(respuesta){
//.catch(function(respuesta){
    console.log(respuesta)
})
    

