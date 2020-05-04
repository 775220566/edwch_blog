<template>
  <v-app-bar
      app
      elevate-on-scroll
      dense
      color="transparent"
  >
    <v-app-bar-nav-icon @click.stop="onClickBtn"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>

export default {
  methods: {
    onClickBtn () {
      this.$store.commit('app/setDrawer', '!this.$store.state.app.drawer')
    }
  }
}
</script>
