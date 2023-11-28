document.addEventListener("DOMContentLoaded", () => {
    const mostrar_categorias = () => {
        fetch("../php/mostrar_categorias.php", {
            method: "GET"
        }).then(response => {
            if (!response.ok) {
                //lanzamos una excepcion
                throw new Error("error en la respuesta");
            }
            return response.json();
        }).then(data => {
            data.forEach(categoria => {
                let categoriaS = document.querySelector("#categoria_id");
                let option = document.createElement("option");
                option.innerHTML = `${categoria.Area}`;
                option.value = `${categoria.id_categoria}`;
                categoriaS.append(option);
            });

        }).catch(error => {
            //manejamos errores si los hay
            console.error("error en la solicitud", error);
        });
    }

    const actualizar_registro = () => {
        const urlId = new URLSearchParams(window.location.search);
        const id = urlId.get("id");
        fetch(`../php/mostrar_articuloA?id=${id}`, {
            method: "GET",
        }).then(response => {
            if (!response.ok) {
                //lanzar excepcion error
                throw new Error("Respuesta fallida");
            }
            return response.json();
        }).then(data => {

            console.log(data);
            const narticulo=document.querySelector(".narticulo");
            const marca=document.querySelector(".marca");
            const color=document.querySelector(".color");
            const existencia=document.querySelector(".existencia");
            const categoria=document.querySelector("#categoria_id")

            narticulo.value=data.registro[0].nombre;
            marca.value=data.registro[0].marca;
            color.value=data.registro[0].color;
            existencia.value=data.registro[0].existencia;
            categoria.value=data.registro[0].categoria_id;
        });
    }
    mostrar_categorias();
    actualizar_registro();



});
