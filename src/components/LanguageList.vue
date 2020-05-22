<template>
  <div class="language-list">
    <div>
      <div>
        <md-field>
          <label>Filter</label>
          <md-input v-model="filter"></md-input>
        </md-field>
      </div>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label>URL</label>
            <md-input v-model="url"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item">
          <md-field>
            <label>User-Agent</label>
            <md-input v-model="userAgent"></md-input>
          </md-field>
        </div>
      </div>
    </div>
    <div v-for="lang in filteredLanguages" :key="lang.language + lang.library">
      <LanguageInfo :language="lang.language" :prism-language="lang.prismLanguage" :library="lang.library" :snippet-path="lang.snippet" :user-agent="userAgent" :url="url"/>
    </div>
  </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import LanguageInfo from '@/components/LanguageInfo.vue'

    // import loadLanguages from 'prismjs/components/index';

    // https://github.com/PrismJS/prism/issues/1400
    const LANG_DEPENDENCIES = new Map<string, string[]>();
    LANG_DEPENDENCIES.set("php", ["prism-markup-templating"]);

    @Component({
        components: { LanguageInfo }
    })
    export default class LanguageList extends Vue {
        languages: LanguageInfo[] = [];
        userAgent: string = "MyFancyUserAgent/1.0";
        url: string = "https://example.com";

        filter: string = "";


        get filteredLanguages(): LanguageInfo[] {
            if (this.filter && this.filter.length > 0) {
                return this.languages.filter(lang => {
                    // https://stackoverflow.com/questions/52558770/vuejs-search-filter/52560430
                    return this.filter.toLowerCase().split(' ').every(v => (lang as any).language.toLowerCase().includes(v) || (lang as any).library.toLowerCase().includes(v))
                })
            }
            return this.languages;
        }

        mounted(): void {
            let langs = (window as any).languages(); // From languages.js
            console.log(langs);

            for (let lang of langs) {
                let prismLang = (lang.prismLanguage || lang.language || 'markup').toLowerCase();
                try {
                    console.log("Loading prism language: " + prismLang);
                    let langDeps = LANG_DEPENDENCIES.get(prismLang);
                    if (langDeps) {
                        langDeps.forEach(dep => {
                            console.log("  Loading " + prismLang + " dependency " + dep)
                            require('prismjs/components/' + dep + '.js')
                        });
                    }
                    require('prismjs/components/prism-' + prismLang + ".js");
                } catch (e) {
                    console.warn(e);
                }
            }


            this.languages = langs;
            console.log(this.languages);
        }

    }
</script>
