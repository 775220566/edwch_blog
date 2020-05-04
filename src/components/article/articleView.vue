<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">博主信息</div>
              <v-list-item-title class="mb-1">{{ article.user.userName }}</v-list-item-title>
              <v-list-item-subtitle>暂无更多描述...</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="80" color="grey">
              <v-img :src="article.user.avatars"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-list-item class="grow">
              <v-row align="center" justify="end">
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
        <v-card>
          <v-tabs grow class="mt-4">
            <v-tab>最新文章</v-tab>
            <v-tab>最热文章</v-tab>
          </v-tabs>
        </v-card>
      </v-col>
      <v-col>
        <v-card :loading="loading">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-subtitle>
            <v-row class="mx-0">
              最近修改于 {{ article.updateTime | formatDate }}
              <v-rating v-model="score" class="ml-4" color="amber" dense half-increments size="16"></v-rating>
              <div class="grey--text">欢迎评分</div>
            </v-row>
          </v-card-subtitle>

          <v-divider class="mx-4"></v-divider>
          <v-card-text v-html="article.context"></v-card-text>
        </v-card>

        <v-card class="mt-4">
          <div class="px-4 py-4">
            <v-alert dense text type="info">请勿发布不友善或者负能量的内容。与人为善，比聪明更重要！</v-alert>
            <v-textarea label="说点什么吧..." outlined></v-textarea>
            <v-btn text color="deep-purple" class="mt-n6">提交</v-btn>
          </div>
        </v-card>

        <v-card class="mt-4">
          <v-card-title>共4条评论</v-card-title>
          <v-list class="px-4" v-for="comment in comments" :key="comment.index">
            <v-list-item>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-1"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ comment.comment.user.userName }}</v-list-item-title>
                <v-list-item-subtitle>发表于 {{ comment.comment.creteTime | formatDate }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text>{{ comment.comment.context }}</v-card-text>
            <v-text-field solo dense></v-text-field>
            <v-list v-for="sub in comment.subComment" :key="sub.index">
              <v-list-item threeLine>
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-1"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  {{ sub.user.userName }}
                  <v-list-item-subtitle>
                    {{ sub.context }}
                    {{ sub.creteTime | formatDate }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn @click="at(sub.userName)" text color="deep-purple">@ta</v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { getArticle } from '@/api/article'
import formate from '@/utils/formate'

export default {
  data: () => ({
    comments: [
      {
        comment: {
          id: '402893817032fce901703301013c0004',
          context: '评论1',
          user: {
            id: '402893817032ed94017032f095720000',
            userName: 'admin',
            password: '21232f297a57a5a743894a0e4a801fc3',
            avatars:
              'https://avataaars.io/?https://cdn.vuetifyjs.com/images/lists/1.jpg',
            description: '管理员',
            thumbs: 0
          },
          articleId: '4028938170527448017052be47ef000b',
          createTime: '2020-02-29T14:36:25.000+0000',
          parentCommentId: null,
          thumbs: 0
        },
        subComment: [
          {
            id: '40289381708fae9401709122908d0003',
            context: '评论22',
            user: {
              id: '402893817032ed94017032f095720000',
              userName: 'admin',
              password: '21232f297a57a5a743894a0e4a801fc3',
              avatars:
                'https://avataaars.io/?https://cdn.vuetifyjs.com/images/lists/1.jpg',
              description: '管理员',
              thumbs: 0
            },
            articleId: '4028938170527448017052be47ef000b',
            createTime: '2020-02-29T13:28:46.000+0000',
            parentCommentId: '402893817032fce901703301013c0004',
            thumbs: 0
          }
        ]
      },
      {
        comment: {
          id: '40289381708fae940170900b1d260001',
          context: '评论1',
          user: {
            id: '402893817032ed94017032f095720000',
            userName: 'admin',
            password: '21232f297a57a5a743894a0e4a801fc3',
            avatars:
              'https://avataaars.io/?https://cdn.vuetifyjs.com/images/lists/1.jpg',
            description: '管理员',
            thumbs: 0
          },
          articleId: '4028938170527448017052be47ef000b',
          createTime: '2020-02-29T08:23:32.000+0000',
          parentCommentId: null,
          thumbs: 0
        },
        subComment: []
      },
      {
        comment: {
          id: '40289381708fae940170912119220002',
          context: '评论2',
          user: {
            id: '402893817032ed94017032f095720000',
            userName: 'admin',
            password: '21232f297a57a5a743894a0e4a801fc3',
            avatars:
              'https://avataaars.io/?https://cdn.vuetifyjs.com/images/lists/1.jpg',
            description: '管理员',
            thumbs: 0
          },
          articleId: '4028938170527448017052be47ef000b',
          createTime: '2020-02-29T13:27:10.000+0000',
          parentCommentId: null,
          thumbs: 0
        },
        subComment: []
      }
    ],
    article: {},
    score: 0
  }),
  created () {
    getArticle(this.$route.params.id)
      .then(res => {
        if (res.code === 200) {
          this.article = res.data
        } else {
        }
      })
      .catch(() => {})
  },
  methods: {
    at (name) {
      console.log(name)
    }
  },
  filters: {
    formatDate (time) {
      if (time !== null && time !== '') {
        return formate.formateDateTime(time)
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 16px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 28px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
