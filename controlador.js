function recibirCredencial(nombre,correo,password,plan,callback){
    setTimeout(function(){
        let usuario={
            nombre:nombre,
            correo:correo,
            password:password,
            plan:plan,
            
        }
        callback(usuario)

    },10000)
}
recibirCredencial("Adny osorio", "adluossu@gmail.com", 12345678,"1.mensual",function(usuario){
    console.log(`señor usuario ${usuario.nombre} Bienvenido a HBO-max.
    disfrutaras de el plan: ${usuario.plan}`)
})
