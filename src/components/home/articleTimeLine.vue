<template>
<v-container>
  <h1>最新文章</h1>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-4">
        <v-card class="elevation-2">
        <v-card-title :class="`headline font-weight-light mb-4 ${year.color}--text`">Lorem ipsum</v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
        </v-card-text>
      </v-card>
      </div>
    </v-timeline-item>
  </v-timeline>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '1960'
      },
      {
        color: 'green',
        year: '1970'
      },
      {
        color: 'pink',
        year: '1980'
      },
      {
        color: 'amber',
        year: '1990'
      },
      {
        color: 'orange',
        year: '2000'
      }
    ]
  })
}
</script>
