document.addEventListener("DOMContentLoaded",()=>{

    const mostrar_articulos=()=>{
        fetch("php/mostrar_articulos.php",{
            method:"GET"
        }).then(response=>{
            if(!response.ok){
                //lanzar excepcion error
                throw new Error("Respuesta fallida");
            }
            return response.json();
        }).then(data=>{
            data.forEach(articulo => {
                let tbody=document.querySelector(".tbody");
                let tr=document.createElement("tr");
                


                tr.innerHTML=`
                    <th>${articulo.nombre}</th>
                    <th>${articulo.marca}</th>
                    <th>${articulo.color}</th>
                    <th>${articulo.existencia}</th>
                    <th>${articulo.categoria}</th>
                    <th>
                    <div class="d-flex">
                    <a href="view/actualizar_articulo.html?id=${articulo.id_articulo}"><button>Actualizar</button></a>
                    <a href=index.html?id=${articulo.id_articulo}><button class="btn-eliminar">Eliminar</button></a>
                    </div>                 
                    </th>
                `;
                tbody.append(tr);
                
            });
            const btnEliminar=document.querySelectorAll(".btn-eliminar");
            console.log(btnEliminar);
            btnEliminar.forEach(eliminar=>{

                eliminar.addEventListener("click",()=>{
                    const url=new URLSearchParams(window.location.search);
                    const id=url.get("id");
                    console.log(id);
                  
            fetch(`php/eliminar_articulo.php?id=${id}`,{
            }).then(response=>{
                if(!response.ok){
                    throw new Error("error en la respuesta");
                }
                return response.json();
            }).then(data=>{
                // if(data.status=="eliminado"){
                //     window.location.href="index.html";
                // }
            })
                });
            })

        }); 
    }
    
    mostrar_articulos();

});

