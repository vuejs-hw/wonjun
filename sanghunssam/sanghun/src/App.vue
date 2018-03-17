<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li ref="abcd"><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul v-if="isvisible">
      <li><input v-model="test"></li> <!-- 1-1 -->
      <!-- 뷰모델로 쓰는 이유는 사용자의 입력받을 수 있으니까 어떤 값을 입력하는지 체크박스, 인풋, 등등 사용자가 수정하는거고, 바인딩은 뒤에서 하니까 바인딩, 버튼은 수정못하고 0,1이니까 바인딩 -->
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <button @click="alertt('ddddddd')">가나다라마바사</button> <!-- 2 -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () { //데이터는 정적인 데이터 처리해
    return {
      msg: 'Welcome to Your Vue.js App',
      isvisible:true,
      test: '' // 1-2
    }
  },
  computed: { // 계산 필요한 동적 데이터 처리
    todayDate: () => {
      return new Date()
    }
  },
  methods: { // 메소드 ()
    alertt(s) {
      alert(s) // 2-2

      console.log(this.$refs.abcd)
    }
  },
  watch: { // 뒷편에서 이벤트 잡을려고
    test: (c) => {
      console.log(c) // 2-2
    }
  }
}
//나누는 이유는 뷰 규칙, 데이터랑 컴퓨트랑 나누는 이유는 연산 등 내부 로직자체가 달라서 퍼포먼스때문에
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
