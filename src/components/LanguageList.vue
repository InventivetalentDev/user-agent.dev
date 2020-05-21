<template>
  <div class="language-list">
    <div v-for="lang in filteredLanguages" :key="lang.language + lang.library">
      <LanguageInfo :language="lang.language" :prism-language="lang.prismLanguage" :library="lang.library" :snippet-path="lang.snippet"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LanguageInfo from '@/components/LanguageInfo.vue'
@Component({
    components: { LanguageInfo }
})
export default class LanguageList extends Vue {
  languages: LanguageInfo[] = [];


    get filteredLanguages(): LanguageInfo[] {
        //TODO
       return this.languages;
    }

    mounted(): void {
        let langs = (window as any).languages(); // From languages.js
        console.log(langs);
        this.languages = langs;
        console.log(this.languages);
    }

}
</script>
