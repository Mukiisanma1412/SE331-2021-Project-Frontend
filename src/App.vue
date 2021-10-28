<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>

   <div id="nav">
   <nav class="navbar navbar-expand">
      <ul v-if="!GStore.currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </ul>
      <ul v-if="GStore.currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ GStore.currentUser.name }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="logout">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </ul>
    </nav>
    
  </div>


  <link
    href="https://fonts.googleapis.com/css2?family=Material+Icons"
    rel="stylesheet"
  />

  <div class="container">
    <nav class="navbar navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Home</router-link>
    </nav>
  </div>
  <div class="container" id="content">
    <router-view />
  </div>
</template>

<script>
export default {
  inject: ["GStore"], //<--
};
</script>

<style>
@keyframes beautifade {
  from {
    background: rgb(212, 120, 136);
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: beautifade;
  animation-duration: 7s;
  position: middle;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
