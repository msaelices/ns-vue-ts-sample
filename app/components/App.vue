<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!"/>
    <GridLayout columns="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue';

  export default Vue.extend({
    data(): any {
      return {
        msg: 'Hello Typescript World!'
      }
    }
  });
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
