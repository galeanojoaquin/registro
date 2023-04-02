<script>
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";
</script>

<div class="layout-container">
    <Navbar />
    <div class="container pb-5 mb-5">
    <div class="content">
        <slot> </slot>
    </div>
    <Footer />
  </div>
</div>

 