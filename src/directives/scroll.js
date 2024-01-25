import Vue from 'vue';

Vue.directive('scroll', {
  bind(el, binding, vnode) {
    // console.log('bind')

    // 此处为了简单，直接判断触底了
    function handleScroll(e) {
      let isBottom =
        e.target.clientHeight + e.target.scrollTop == e.target.scrollHeight;

      if (isBottom && !vnode.context.loading) {
        binding.value();
      }
    }

    // 监听滚动
    // let wrapDom = el.querySelector('.el-autocomplete-suggestion__wrap')
    el.__handleScroll__ = handleScroll;
    // el.__dom__ = wrapDom
    el.addEventListener('scroll', handleScroll, false);
  },

  unbind(el, binding, vnode) {
    console.log('unbind');
    // 解除事件监听
    el.removeEventListener('scroll', el.__handleScroll__, false);
  },
});
