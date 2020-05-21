<template>
  <div class="home">
    <LanguageList/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LanguageList from '@/components/LanguageList'

export default {
  name: 'Home',
  components: {
      LanguageList,
    HelloWorld
  }
}
</script>
