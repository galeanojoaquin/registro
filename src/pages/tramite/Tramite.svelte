<script>
  import AuthServices from "../../services/AuthServices";
  import config from "../../config";

  import Tramite from "../../componentes/Tramite/Tramite.svelte";
 

  (async function () {
    const auth = new AuthServices();
    const result = await auth.attemp(
      config.app.auth.user,
      config.app.auth.pass
    );
    let token = result.data.body.token;
    console.log('Token desde respuesta de POST:',token);

    if (!result.data) {
      alert(
        "Sin conneccion contra el servidor, intente mas tarde o Comuniquese con por telefono"
      );
    }

  console.log(token)
  
  fetch("http://10.10.32.12:4002/zoonosis/api/tramites", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    })();
</script>

<div class="col-md-12">
  <Tramite />
</div>
