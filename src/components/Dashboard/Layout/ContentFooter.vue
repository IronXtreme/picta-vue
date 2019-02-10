<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav class="pull-left">
        <ul>
          <li>
            <router-link :to="{path:'/admin/overview'}">Accueil</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright pull-right">
        Copyright &copy; by
        <span style="text-transform: uppercase;">PICTALIO</span>.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>

</style>
