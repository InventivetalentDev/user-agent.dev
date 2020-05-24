<template>
  <div class="language">
    <h2>
      <a :href="'#' + language.toLowerCase() + '-' + library.toLowerCase()"><font-awesome-icon class="hover-link language-link" icon="link" /></a>
      {{ language }}
      <small>{{ library }} </small>
      <a target="_blank" :href="'https://github.com/InventivetalentDev/user-agent.dev/blob/master/public/snippets/' + snippetPath"><font-awesome-icon class="hover-link language-github" :icon="['fab', 'github']" /></a>
    </h2>
    <Prism :language="prismLang">{{ formattedSnippet }}</Prism>
  </div>
</template>

<style lang="scss">
  @import "~prismjs/themes/prism-tomorrow.css";

  .hover-link {
    opacity: 0.1;
    transition: opacity 0.3s;
  }

  .hover-link:hover {
    opacity: 1;
  }

  .language-link {
    width: 0.9em !important;
    text-decoration: none;
    color: #ababab;
  }

  .language-github {
    opacity: 0.3;
    width: 0.9em !important;
    text-decoration: none;
    color: #ababab;
  }
</style>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import 'prismjs'
    import Prism from 'vue-prism-component'

    @Component({
        components: {
            Prism
        }
    })
    export default class LanguageInfo extends Vue {
        @Prop() private language!: string;
        @Prop() private prismLanguage!: string;
        @Prop() private library!: string;
        @Prop() private snippetPath!: string;
        snippetBaseContent: string = "";

        @Prop() private userAgent!: string;
        @Prop() private url!: string;

        get prismLang() {
            return (this.prismLanguage || this.language || 'markup').toLowerCase()
        }

        get urlHost() {
            return new URL(this.url).host;
        }
        
        get urlPath() {
            return new URL(this.url).pathname;
        }

        get formattedSnippet() {
            return this.snippetBaseContent
                .replace(/%%url%%/gi, this.url)
                .replace(/%%urlhost%%/gi, this.urlHost)
                .replace(/%%urlpath%%/gi, this.urlPath)
                .replace(/%%useragent%%/gi, this.userAgent);
        }

        mounted(): void {
            fetch("/snippets/" + this.snippetPath).then(res=>res.text()).then(snippet=>{
                this.snippetBaseContent = snippet;
            })
        }
    }
</script>
