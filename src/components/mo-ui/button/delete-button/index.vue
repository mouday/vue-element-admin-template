<template>
  <el-popconfirm
    title="确定删除？"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-button
      slot="reference"
      type="text"
      :disabled="disabled"
    >
      <i class="el-icon-delete"></i>
    </el-button>
  </el-popconfirm>
</template>

<script>
/**
 * Events
 * confirm	点击确认按钮时触发
 * cancel	点击取消按钮时触发
 */
export default {
  name: 'MoDeleteButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.el-icon-delete {
  color: #f56c6c;
}

.is-disabled .el-icon-delete {
  color: #c0c4cc;
}
</style>
