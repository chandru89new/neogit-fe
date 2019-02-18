<template>
  <div>
    <header>
      <div class="logo">
        <router-link :to="{name: 'home'}">
          neogit
        </router-link>
        <span v-if="user">
          &bull; {{ user }}
        </span>
      </div>
      <div class="logout">
        <a href="#" @click="logout">
          Logout
        </a>
      </div>
    </header>
    <div class="wrapper">
      <router-view />
    </div>
    <Loader />
  </div>
</template>
<style src="./style.sass" lang="sass" scoped />
<script src="./index.js" />