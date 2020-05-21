// https://github.com/vatson/vue-prism-component/blob/master/types/index.d.ts
declare module "vue-prism-component" {
  import { FunctionalComponentOptions } from 'vue';
  const _default: FunctionalComponentOptions<{
    code: string;
    language: string;
  }>;
  export default _default;
}
