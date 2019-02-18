<template>
  <div>
    <UserProfileCard :user="user" />
    <div class="spacer"></div>
    <Repos :user="user" />
  </div>
</template>
<script src="./index.js" />
<style src="./style.sass" scoped lang="sass" />