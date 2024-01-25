<template>
  <el-switch
    active-color="#4568c5"
    inactive-color="#C0CCDA"
    :active-value="1"
    :inactive-value="0"
    :width="35"
    v-bind="$attrs"
    v-on="$listeners"
  ></el-switch>
</template>

<script>
/**
 * 传入 0 / 1
 *
 * sync: value
 * emit: change 0/1
 */

export default {
  name: 'MoSwitch',
};
</script>

<style lang="scss">
.el-switch__core {
  height: 16px;
}

.el-switch__core:after {
  width: 12px;
  height: 12px;
  left: 4px;
}
</style>
