<template>
  <div class="language">
    <h2>{{ language }} <small>{{ library }}</small></h2>
    <Prism :language="prismLang">{{ snippetContent }}</Prism>
  </div>
</template>

<style lang="scss">
  @import "~prismjs/themes/prism-tomorrow.css";
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
        snippetContent: string = "";

        @Prop() private userAgent!: string;
        @Prop() private url!: string;

        get prismLang() {
            return (this.prismLanguage || this.language || 'markup').toLowerCase()
        }

        mounted(): void {
            fetch("/snippets/" + this.snippetPath).then(res=>res.text()).then(snippet=>{
                this.snippetContent = snippet
                    .replace(/%%url%%/gi, this.url)
                    .replace(/%%useragent%%/gi, this.userAgent);
            })
        }
    }
</script>
