<template>
  <div>
    <div v-if="repos && repos.length">
      <h4>Repos</h4>
      <div class="spacer mini"></div>
      <div v-if="repos && repos.length" class="card">
        <div
          v-for="(repo, i) in repos"
          :key="repo.id"
          :class="{'spacer mini': i > 0}"
        >
          <h3>
            <span title="Forked" v-if="repo.fork" style="font-size: 0.75em; vertical-align: 3px">
              &#9822;
            </span>
            <router-link :to="{ name: 'repo', params: {user, repo: repo.name} }">
              {{ repo.name }}
            </router-link>
          </h3>
          <p class="repo-description">
            {{ repo.description }}
          </p>
          <div class="repo-meta">
            <div>
              <span v-if="repo.language" class="language css" >{{ repo.language }}</span> &bull; 
              <span class="faded">Last updated:</span> {{ new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(new Date(repo.updated_at)).replace(/\//g,' ') }}
            </div>
            <div style="text-align: right">
              &#9733; {{ repo.stargazers_count }}
            </div>
            <div style="text-align: right">
              <router-link
                :to="`/${repo.parent}`"
              >
                {{ repo.parent }}
              </router-link>
            </div>
          </div>
          <hr v-if="repos.length > (i+1)" class="spacer mini">
        </div>
      </div>
      <div class="nav">
        <a v-if="prevPage" @click="page--">
          Previous
        </a>
        <span v-if="prevPage && nextPage">&bull;</span>
        <a v-if="nextPage" @click="page++">
          Next
        </a>
      </div>
    </div>
  </div>
</template>
<script src="./index.js" />
<style src="./style.sass" scoped lang="sass" />