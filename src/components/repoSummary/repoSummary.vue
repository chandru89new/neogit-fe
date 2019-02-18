<template>
  <div class="card">
    <div v-if="repoSummary">
      <h1>
        {{ repoSummary.name }}
      </h1>
      <div class="repo-description">
        {{ repoSummary.description }}
      </div>
      <div class="repo-meta">
        <a :href="repoSummary.html_url" target="_blank">
          View on GitHub
        </a>
        <span v-if="repoSummary.fork">
          &bull;
          Forked from: 
          <router-link :to="`/${repoSummary.parent.full_name}`">
            {{ repoSummary.parent.name }}
          </router-link>
        </span>
        <span v-if="repoSummary.updated_at">
          &bull;
          <span class="faded">Last update:</span> 
          {{ new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(new Date(repoSummary.updated_at)) }}
        </span>
      </div>
    </div>
  </div>
</template>
<style src="./style.sass" scoped lang="sass" />
<script src="./index.js" />