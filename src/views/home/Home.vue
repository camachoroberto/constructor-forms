<template>
  <div id="home">
    <div class="container">
      <div>
        <b-input-group>
          <template v-slot:prepend>
            <b-input-group-text>Digite o Titulo da Pergunta</b-input-group-text>
          </template>
          <b-form-input v-model='titulo.nome'></b-form-input>

          <template v-slot:append>
            <b-dropdown text="Selecione o elemento" variant="success">
              <b-dropdown-item v-on:click="onSubmit(titulo.nome, 'textoCurto')">Campo de Texto Curto</b-dropdown-item>
              <b-dropdown-item v-on:click="onSubmit(titulo.nome, 'textoLongo')">Campo de Texto Maior</b-dropdown-item>
              <b-dropdown-item v-on:click="onSubmit(titulo.nome, 'email')">Email</b-dropdown-item>
              <b-dropdown-item v-on:click="onSubmit(titulo.nome, 'telefone')">Telefone</b-dropdown-item>
            </b-dropdown>
          </template>
        </b-input-group>
      </div>

      <div class="card mb-3">
        <div class="card-body">
          <img alt="Vue logo" src="../../assets/logo.png">
          <h1>Constructor de Formularios</h1>
          <div v-for="(i, index) in textos" v-bind:key="index">
            <span class="float-right" style="cursor: pointer" @click="excluirTexto(index, 'textoCurto')">X</span>
            <TextComponent :nome='i' :index=index />
          </div>

          <div v-for="(l, index) in textosLongos" v-bind:key="index">
            <span class="float-right" style="cursor: pointer" @click="excluirTexto(index, 'textoLongo')">X</span>
            <TextAreaComponent :nome='l' :index=index />
          </div>

          <div v-for="(m, index) in telefone" v-bind:key="index">
            <span class="float-right" style="cursor: pointer" @click="excluirTexto(index, 'telefone')">X</span>
            <TelefoneComponent :nome='m' :index=index />
          </div>

          <div v-for="(e, index) in email" v-bind:key="index">
            <span class="float-right" style="cursor: pointer" @click="excluirTexto(index, 'email')">X</span>
            <EmailComponent :nome='e' :index=index />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

