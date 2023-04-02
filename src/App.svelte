<script>
  import { Router, Route } from "svelte-routing";
  import Layout from "./componentes/Layout/Layout.svelte";
  import Index from "./pages/index/Index.svelte";
  import Padron from "./pages/padron/Padron.svelte";
  import Turno from "./pages/turno/Turno.svelte";
  import Tramite from "./pages/tramite/Tramite.svelte";
  import Steps from "./componentes/Layout/Steps.svelte";
</script>

<Router >
  <Layout>
    <div class="container">
      <Route path="index" component={Index} />
      <Route path="steps" component={Steps} />
      <Route path="tramite" component={Tramite} />
      <Route path="padron" component={Padron} />
      <Route path="turno" component={Turno} />
      <Route path="/"><Index /></Route>
    </div>
  </Layout>
</Router>

