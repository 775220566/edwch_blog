<template>
  <v-app>
    <toolbar />
    <navbar />
    <v-content id="main-content" class="pt-3">
        <router-view />
    </v-content>
    <floatBtnGroup />
  </v-app>
</template>

<script>
import toolbar from '@/components/home/toolbar'
import navbar from '@/components/home/nav'
import floatBtnGroup from '@/components/home/floatBtnGroup'

export default {
  data: () => ({

  }),
  components: {
    navbar,
    toolbar,
    floatBtnGroup
  }
}
</script>
