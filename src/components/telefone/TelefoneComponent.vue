<template>
  <div>
    <h6 class="card-title">{{ nome | capitalize }}</h6>
    <input type="tel" v-mask="['(##) ####-####', '(##) #####-####']" class="form-control mb-2" placeholder="telefone">
  </div>
</template>

<script src="./script.js"></script>

<style src="../style/style.css"></style>
