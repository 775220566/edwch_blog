<template>
    <div class="b-color">
    <v-container>
        <v-row>
            <v-col cols="2">
                <h1 class="f-color">留言给我</h1>
                <v-btn>提交</v-btn>
            </v-col>
            <v-col cols="10">
                <v-textarea
                label="说点什么吧..."
                outlined
                auto-grow
                rounded
                solo
                ></v-textarea>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.b-color {
    background-color: #3d3d4a
}
.f-color {
    color:white
}
</style>
