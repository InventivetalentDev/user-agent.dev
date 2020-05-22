<template>
  <div class="language-list">
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


    get filteredLanguages(): LanguageInfo[] {
        //TODO
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
                if(langDeps) {
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
