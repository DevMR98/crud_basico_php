
const formActualizar=document.querySelector(".form-actualizar");
        formActualizar.addEventListener("submit",(e)=>{
            e.preventDefault();
            const formData=new FormData(formActualizar);
            const url=new URLSearchParams(window.location.search);
            const id=url.get("id");

            fetch(`../php/actualizar_registro.php?id=${id}`,{
                method:"POST",
                body:formData
            }).then(response=>{
                if(!response.ok){
                    throw new Error("error en la respuesta");
                }
                return response.json();
            }).then(data=>{
               
            });
        });

