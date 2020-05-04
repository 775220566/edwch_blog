<template>
    <v-container>
    <v-img class="center hitokoto-title elevation-5" src="https://picsum.photos/1920/1080?random" aspect-ratio="2.7">
      <h1>『 </h1>
      <h1>
      生而为人，我很抱歉
      </h1>
      <h1> 』</h1>
      <h3>-「太宰治」</h3>
    </v-img>
    </v-container>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.hitokoto-title {
  color: white;
  font-weight: 100 !important;
  line-height: 1 !important;
  font-size: 1.5rem !important;
}
.center {
/*flex 布局*/
display: flex;
/*实现垂直居中*/
align-items: center;
/*实现水平居中*/
justify-content: center;
text-align: center;
}
</style>
