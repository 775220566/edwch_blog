<template>
  <v-container>
      <v-card>
        <v-card-title>新的文章</v-card-title>
        <v-card-text>
        <v-row>
          <v-col cols="3">
          <v-combobox
          v-model="select"
          :items="items"
          label="文章类别"
          outlined
          dense
          small-chips
        ></v-combobox>
          </v-col>
          <v-col>
        <v-text-field
        v-model="article.title"
        label="文章标题"
        dense
        outlined
        ></v-text-field>
        </v-col>
        </v-row>
        <v-text-field
        v-model="article.summary"
        label="文章概要"
        dense
        outlined
        ></v-text-field>
        <quill-editor
          v-model="article.context"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
        </quill-editor>
        </v-card-text>
        <v-card-actions>
        <v-btn text color="deep-purple" class="" @click="onsubmit">发布</v-btn>
        <v-btn text color="deep-purple" class="">保存</v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>

<script>
import { quillEditor } from 'vue-quill-editor' // 调用编辑器

import { addArticle } from '@/api/article'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components: {
    quillEditor
  },
  data () {
    return {
      article: {
        title: '',
        summary: '',
        userId: this.$store.state.user.userInfo.id,
        categoryId: 1,
        isRead: 0,
        isTop: 0,
        context: '',
        score: 0
      },
      select: '',
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify'
      ],
      editorOption: {
        placeholder: '请输入正文...',
        theme: 'snow'
      }
    }
  },
  methods: {
    onEditorReady (editor) { // 准备编辑器
    },
    onEditorBlur () {}, // 失去焦点事件
    onEditorFocus () {}, // 获得焦点事件
    onEditorChange () {}, // 内容改变事件
    onsubmit () {
      const data = this.article
      console.log(data)
      console.log(this.$store.state.user.userInfo)
      addArticle(data)
        .then(res => {
          if (res.code === 200) {
            console.log('添加成功')
          } else {
          }
        })
        .catch(e => {
        })
        .finally(() => {
        })
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  }
}
</script>
