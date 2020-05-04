<template>
    <v-content>
        <titleBoard />
        <more />
        <!-- <articleTimeLine /> -->
        <msgBoard />
    </v-content>
</template>

<script>
import titleBoard from '@/components/home/titleBoard'
// import articleTimeLine from '@/components/home/articleTimeLine'
import more from '@/components/home/more'
import msgBoard from '@/components/home/msgBoard'

export default {
  data: () => ({

  }),
  components: {
    titleBoard,
    // articleTimeLine,
    more,
    msgBoard
  }
}
</script>
