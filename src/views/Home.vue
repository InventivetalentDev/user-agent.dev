<template>
  <div class="home">
    <LanguageList/>
  </div>
</template>

<script>
    import LanguageList from '@/components/LanguageList'

    export default {
        name: 'Home',
        components: {
            LanguageList
        }
    }
</script>
