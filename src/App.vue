<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">User-Agent.Dev</span>
      </md-app-toolbar>
      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import '~vue-material/dist/vue-material.min.css';
  @import "~vue-material/dist/theme/default-dark.css";
</style>
