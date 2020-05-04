<template>
<v-container>
  <h1>全部文章</h1>
  <v-row>
  <v-col cols="2">
    <v-chip-group
      column
      v-model="searchData.categoryId"
      active-class="primary--text"
      @change="search()"
    >
        <v-chip v-for="category in categorys" :key="category.id">
          {{ category.categoryName }}
        </v-chip>
    </v-chip-group>
  </v-col>
  <v-col cols="10">
     <v-timeline dense>
      <v-timeline-item small
        v-for="article in articles"
        :key="article.id"
      >
        <v-card>
          <v-list-item three-line>
            <v-list-item-content>
              <!-- <div class="overline mb-4">OVERLINE</div> -->
              <v-list-item-title>{{ article.title }}
                <v-row>
                <v-rating
                class="ml-3"
                v-model="article.score"
                color="amber"
                dense
                half-increments
                readonly
                size="12"
                ></v-rating>
                <span class="grey--text ml-1 caption">({{ article.score === 0 ? "暂无评分" : article.score }})</span>
                </v-row>
              </v-list-item-title>
              <v-list-item-subtitle>{{ article.updateTime | formatDate }} by {{ article.user.userName }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="50"
              color="grey"
            >
            <v-img :src="article.user.avatars"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-row class="my-n5 mx-1">
            <v-col cols="auto" class="mr-auto">
              <v-chip
                small
                color="secondary"
              >
                {{ article.category.categoryName }}
              </v-chip>
            </v-col>
            <v-col cols="auto">
              <span class="pl-2 grey--text text--darken-2 font-weight-light caption">{{ article.thumbs }}个赞</span>
            </v-col>
          </v-row>
          <v-row class="ma-1">
            <v-col cols="auto" class="ml-auto">
            <v-btn
              small
              color="primary"
              :to="'/artview/' + article.id"
              >阅读原文
            </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-col>
  </v-row>
    <v-pagination
      v-model="page"
      :length="length"
      :total-visible="7"
    ></v-pagination>
  </v-container>
</template>

<script>
import {
  getArticleList
} from '@/api/article'
import {
  getCategory
} from '@/api/category'
import formate from '@/utils/formate'

export default {
  data: () => ({
    page: 1,
    pageSize: 10,
    total: '',
    articles: [],
    searchData: {
      categoryId: ''
    },
    categorys: {},
    selection: {}
  }),
  filters: {
    formatDate (time) {
      if (time !== null && time !== '') {
        return formate.formateDateTime(time)
      } else {
        return ''
      }
    }
  },
  computed: {
    length: {
      get: function () {
        return this.total
          ? Math.ceil(this.total / this.pageSize)
          : 0
      },
      set: function () {}
    }
  },
  created () {
    this.search()
    getCategory().then(res => {
      if (res.code === 200) {
        this.categorys = res.data
        console.log(this.categorys)
      } else {
      }
    })
      .catch(e => {
      })
  },
  methods: {
    search () {
      const searchData = this.searchData
      console.log(searchData)
      const page = this.page
      getArticleList(searchData, page, 10)
        .then(res => {
          if (res.code === 200) {
            this.articles = res.data.rows
            this.total = res.data.total
            console.log(this.articles)
          } else {
          }
        })
        .catch(e => {
        })
        .finally(() => {
        })
    }
  }
}
</script>
