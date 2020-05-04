<template>
    <v-navigation-drawer
      v-model="inputValue"
      app
      temporary
    >
    <v-list-item>
        <v-list-item-avatar>
          <v-img :src="userInfo.avatars"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ userInfo.userName }}</v-list-item-title>
          <v-list-item-subtitle>暂无描述</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
      <v-list-item link :to="'/'">
          <v-list-item-icon>
            <v-icon>
              mdi-home
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>主页</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      <v-list-group
        prepend-icon="mdi-book"
        no-action
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-title>博文</v-list-item-title>
        </template>
        <v-list-item link :to="'/artlist'">
          <v-list-item-icon>
            <v-icon>
              mdi-view-list
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>全部文章</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/artview'">
          <v-list-item-icon>
            <v-icon>
              mdi-folder-edit
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>管理我的文章</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="'/artadd'">
          <v-list-item-icon>
            <v-icon>
              mdi-fountain-pen-tip
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>新的文章</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-item link :to="'/msg'">
        <v-list-item-icon>
          <v-icon>mdi-clipboard-list</v-icon>
        </v-list-item-icon>
        <v-list-item-title>留言板</v-list-item-title>
      </v-list-item>
    </v-list>

      <v-btn class="mx-2 mb-10" fab absolute right bottom>
        <v-icon color="red">mdi-account-minus-outline</v-icon>
      </v-btn>
    </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
  }),
  computed: {
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.$store.commit('app/setDrawer', 'val')
      }
    },
    userInfo () {
      return this.$store.state.user.userInfo
    }
  }
}
</script>
