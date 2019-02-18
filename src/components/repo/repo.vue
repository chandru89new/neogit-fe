<template>
  <div>
    
    <RepoSummary :repo="repo" :user="user" />

    <div class="spacer"></div>
    
    <div class="path spacer mini">
      <router-link :to="{ name: 'profile', params: { user }}">
        {{ user }}
      </router-link> &raquo;
      <router-link :to="{name: 'repo', params: { user, repo} }">
        {{ repo }}
      </router-link>
      <span v-if="pathArray.length">
        <span v-for="(folder, i) in pathArray" :key="`folder-${i}`">
          &raquo;
          <router-link v-if="pathArray.length > (i+1)" :to="{name: 'repo', params: { user, repo, path: folder} }">
            {{ folder }}
          </router-link>
          <span v-else>
            {{ folder }}
          </span>
        </span>
      </span>
    </div>

    <div class="card no-padding">
      <div v-if="Array.isArray(files)">
        <div
          v-for="(file, i) in files"
          :key="i"
          class="file-card"
        >
          <router-link
            v-if="path"
            :to="`/${user}/${repo}/${path}/${file.name}`"
          >
            {{ file.name }}
          </router-link>
          <router-link
            v-else
            :to="`/${user}/${repo}/${file.name}`"
          >
            {{ file.name }}
          </router-link>
        </div>
      </div>
      <div class="file-contents" v-else-if="files.hasOwnProperty('content')">
        <div class="file-actions">
          <a :href="files.download_url" target="_blank">Raw / Download</a>
          &bull;
          {{ files.size | fileSizeFormatter }}
        </div>
        <pre><code>{{ getContent(files.content) }}</code></pre>
      </div>
      <div v-else class="file-card">
        {{ files.name }} ({{ files.type }})
      </div>
    </div>

  </div>
</template>
<script src="./index.js" />
<style src="./style.sass" lang="sass" scoped />