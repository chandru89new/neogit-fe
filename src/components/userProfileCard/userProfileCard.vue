<template>
  <div id="user-card" v-if="userProfile" class="card">
    <div class="avatar">
      <img :src="userProfile.avatar_url" alt="">
    </div>
    <div v-if="userProfile" class="user-meta">
      <h1>
        {{ userProfile.name }}
      </h1>
      <p>
        {{ userProfile.public_repos }} repos
        &bull;
        since {{ new Intl.DateTimeFormat('en-GB', { year: 'numeric' }).format(new Date(userProfile.created_at)) }} 
        &bull; 
        <a target="_blank" :href="getURL(userProfile.blog)">
          {{ userProfile.blog | stripProtocol }}
        </a>
      </p>
    </div>
  </div>
</template>
<script src="./index.js" />
<style src="./style.sass" lang="sass" scoped />