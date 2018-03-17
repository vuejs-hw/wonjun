

선언적 렌더구조

<div id="app"> 

  {{ message }} // 데이터안에 메세지 바인딩

</div>



var app = new Vue({

  el: '#app', // 선택자

  data: { // 모든 데이터는 이안에서 바인딩

    message: '안녕하세요 Vue!'

  }

})



바인딩

v-bind:title

조건

<p v-if="asdf"> 보일까 </p>

반복문

v-else 반대되는개념



<div v-for="todo in todos" <- 두투안에 투두스만큼 돌린다.

{{ todo.text }} <- 가져옴



    인풋
    
    <div id="app-6">
      <p>{{ message }}</p>
      <input v-model="message">
    </div>
    
    var app6 = new Vue({
      el: '#app-6',
      data: {
        message: '안녕하세요 Vue!'
      }
    })



bable이란 ES6/ES7코드를 ECMAScript5 코드로 변환도구 <- 모듈화, 템플릿화 할때 씀







- =는 만약 a=b이라고 했을때, b를 a에 대입해서 a가 b이라고 약속하는 것이라고 합니다.
- ==는 먄약 a==b이라고 했을때, a가 b과 '값'이 같은지를 판단해서 맞으면 true, 틀리면 false라고 합니다.
- ===는 만약 a===b이라고 했을대, a가 b과 '값'과 '타입/형식?'이 정확하게 같은지를 판단해서 true/false를 표현합니다.

v-pre 프리 그대로 렌더링

<div id = "app" v-cloak> // 자스가 렌더되기전에, 뷰 인스턴스가 준비되기전에 코드를 숨겨서 잔상을 막기, 설정값은 없지만 css에서

[v-cloak]{ display:none;} 해줘야함



v-once - 초기에 한번만 렌더, 업데이트 성능 최적화 (초기값같은거 적어줄때 쓰면 될듯)



<img v-bind:src="dataname"/> -> 줄여서 <img :src="dataname"/>

js : data: '이지미링크'
