<template>
  <transition name="fader">
    <div v-if="visible" id="loader" :class="type">
      {{ msg }}
    </div>
  </transition>
</template>
<style src="./style.sass" scoped lang="sass" />
<script src="./index.js" />
