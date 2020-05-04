<template>
  <div class="btn-position">
     <v-speed-dial
      v-model="fab"
      direction="top"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-spin mdi-star-face</v-icon>
          <v-icon v-else>mdi-star-face</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="pink"
      >
        <v-icon>mdi-cards-heart</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
    hover: true,
    transition: 'slide-y-reverse-transition'
  })
}
</script>

<style scoped>
.btn-position {
  position: fixed;
  cursor: pointer;
  bottom:40px;
  right:10px;
  width: '64px';
  height: '64px';
}

</style>
