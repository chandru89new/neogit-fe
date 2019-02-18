<template>
  <div id="search">
    
    <div v-if="loggedIn" class="card search-box">
      <div>
        Type a username or an organization name to explore their GitHub repos
      </div>
      <div class="input-group">
        <input type="text" v-model="username" placeholder="eg. anandology" @keyup.enter="goToProfile">
        <button id="go" disabled class="btn btn-highlight" @click="goToProfile">&rarr;</button>
      </div>
      <div class="error" v-if="error">
        {{ error }}
      </div>
    </div>

    <div v-else class="card login-box">
      <div>
        {{ error || 'Please login using your GitHub account to start using the app' }}
      </div>
      <div class="spacer mini"></div>
      <a class="btn btn-highlight" :href="loginURL">
        Login via GitHub
      </a>
    </div>
  </div>
</template>
<style src="./style.sass" lang="sass" scoped />
<script src="./index.js" />