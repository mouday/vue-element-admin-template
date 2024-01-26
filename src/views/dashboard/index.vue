<template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎登录{{ settings.title }}管理后台</div>

    <el-input
      placeholder="请输入搜索内容"
      v-model="keywords"
      class="input-with-select"
      size="medium"
      @keyup.enter.native="search"
    >
      <el-select
        v-model="selectIndex"
        slot="prepend"
        placeholder="请选择"
      >
        <template v-for="(item, index) in options">
          <el-option
            :label="item.label"
            :value="index"
          ></el-option>
        </template>
      </el-select>

      <el-button
        slot="append"
        icon="el-icon-search"
        @click.prevent="search"
      ></el-button>
    </el-input>
  </div>
</template>

<script>
import settings from '@/settings.js'

export default {
  name: 'Dashboard',

  data() {
    return {
      settings: settings,
      keywords: '',
      selectIndex: 0,

      options: [
        // { label: '用户', value: 'user-list' },
        { label: '视频', value: '/item/list' },
        // { label: '音乐', value: 'music-list' },
        // { label: '文章', value: 'article-list' },
        // { label: '话题', value: 'topic-list' },
      ],
    }
  },
  methods: {
    search() {
      // this.$store.dispatch("temp/setKeywords", this.keywords);

      let name = this.options[this.selectIndex].value
      // console.log(name);

      this.$router.push({
        path: name,
        query: { keyword: this.keywords },
      })
    },
  },

  computed: {},
}
</script>

<style lang="scss">
.dashboard-container {
  margin: 150px auto;
  max-width: 600px;
  text-align: center;

  .dashboard-text {
    font-size: 30px;
    line-height: 46px;
  }

  .el-input--suffix {
    width: 100px;
  }

  .input-with-select {
    margin-top: 20px;
  }
}
</style>
