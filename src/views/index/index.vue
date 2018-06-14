<template>
  <div class="dashboard-container">
    <div class="dashboard-text">首页示例</div>
    <h2>时间过滤器：</h2>
    <p>时间戳：{{ times }}</p>
    <p>年月日：{{ times | parseTime('{y}-{m}-{d}') }}</p>
    <p>年月日时分秒：{{ times | parseTime }}</p>
    <p>年月日时分秒星期：{{ times | parseTime('{y}-{m}-{d} {h}:{i}:{s}  星期{a}') }}
    <p>年月日时分秒星期+实时更新：{{ times2 | parseTime('{y}-{m}-{d} {h}:{i}:{s}  星期{a}') }}
    </p>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'index',
  data() {
    return {
      times: new Date().getTime(),
      times2: new Date().getTime()
    }
  },
  mounted(){
    let vm = this;
    vm.updateTime()
  },
  methods: {
    //更新时间戳
    updateTime(){
      let vm = this;
      setInterval(function(){
        vm.times2 = new Date().getTime()
      },1000)
    }
  },
  computed: {
    // ...mapGetters([
    //   'name',
    //   'roles'
    // ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
