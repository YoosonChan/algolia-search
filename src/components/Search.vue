<script>
import { AisInstantSearch, AisSearchBox, AisConfigure, AisHits, AisHighlight } from 'vue-instantsearch/vue3/es'
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import 'instantsearch.css/themes/algolia-min.css';
import { getPropertyByPath } from 'instantsearch.js/es/lib/utils';

export default {
  data() {
    return {
      searchClient: algoliasearch(
        'DMEXD90946',
        'e05b6ee3e776b482b006b52c3f3605c0'
      ),
    };
  },
  methods: {
    getPropertyByPath,
  },
  components: {
    AisInstantSearch,
    AisSearchBox,
    AisConfigure,
    AisHits,
    AisHighlight,
  },
};
</script>

<template>
  <ais-instant-search :search-client="searchClient" index-name="movie">
    <ais-configure :hits-per-page.camel="5"></ais-configure>
    <ais-search-box></ais-search-box>
    <ais-hits>
      <template v-slot:item="{ item }">
        <img :src="item.poster_path" />
        <div class="hit-title">
          <ais-highlight attribute="title" :hit="item"></ais-highlight>
        </div>
        <div class="hit-overview">
          <ais-highlight attribute="overview" :hit="item"></ais-highlight>
        </div>
        <div class="hit-original_title">
          <ais-highlight attribute="original_title" :hit="item"></ais-highlight>
        </div>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>


<style>
.ais-SearchBox {
  margin-bottom: 1em;
}

.ais-InstantSearch {
  max-width: 960px;
  width: 100%;
  display: block;
  overflow: hidden;
  margin: 0 auto
}

.ais-Hits-item {
  margin-left: 0;
  width: 100%;
}

.ais-Hits-item img {
  margin-right: 1em
}

.ais-Hits-list {
  margin-bottom: 1em;
}
</style>