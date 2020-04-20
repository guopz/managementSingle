<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
#app,
.wrapper,
body,
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
