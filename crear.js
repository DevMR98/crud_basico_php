const mostrar_categorias=()=>{
    fetch("../php/mostrar_categorias.php",{
        method:"GET"
    }).then(response=>{
        if(!response.ok){
            //lanzamos una excepcion
            throw new Error("error en la respuesta");
        }
        return response.json();
    }).then(data=>{
        data.forEach(categoria => {
            let categoriaS=document.querySelector("#categoria_id");
            let option=document.createElement("option");
            option.innerHTML=`${categoria.Area}`;
            option.value=`${categoria.id_categoria}`;
            categoriaS.append(option);            
        });

    }).catch(error=>{
        //manejamos errores si los hay
        console.error("error en la solicitud",error);
    });
}

const insertar_articulo=()=>{
    let formularioI=document.querySelector(".form-insertar");
    formularioI.addEventListener("submit",(e)=>{

        e.preventDefault();
        let formData=new FormData(formularioI);

        // formData.forEach((id,articulo) =>{
        //     console.log(articulo,id);
        // })

        fetch("../php/crear_articulo.php",{
            method:"POST",
            body:formData
        }).then(response=>{
            if(!response.ok){
                //lanzamos una excepcion error
                throw new Error("Error en la respuesta"); 
            }
            return response.json();
        }).then(data=>{
            if(data.status=="success"){
                window.location.href="../index.html";
            }
        })
    })
}



mostrar_categorias();
insertar_articulo();
