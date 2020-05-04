<template>
  <v-app>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="6">
        <v-img src="../assets/person.png" contain aspect-ratio="1" max-height="150"></v-img>
        <h1 class="display-1 font-weight-thin mb-4">Welcome</h1>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="6">
        <v-form ref="form" v-model="valid" lazy-validation>

          <v-text-field v-model="form.userName" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-text-field
            v-model="form.password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[passwordRules.required, passwordRules.min]"
            :type="show ? 'text' : 'password'"
            label="password"
            @click:append="show = !show"
            required
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">Login</v-btn>

          <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>

        </v-form>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>

export default {
  data: () => ({
    form: {
      userName: '',
      password: ''
    },
    show: false,
    valid: true,
    emailRules: [
      v => !!v || 'E-mail is required'
      // v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: {
      required: v => !!v || 'Required.',
      min: v => v.length >= 5 || 'Min 5 characters'
    },
    checkbox: false
  }),

  methods: {
    login () {
      //  登录接口
      if (this.$refs.form.validate()) {
        this.$store.dispatch('user/loginByUserName', this.form).then(() => { this.$router.replace('/') })
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
