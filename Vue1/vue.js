var app = new Vue({
        el: '#app',
        data: {
            message: '안녕하세씨발'
        }
    })

    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: '이' + new Date() + '로드'
        }
    })


    var app3 = new Vue({
        el: '#app-3',
        data: {
            seen : false
        }
    })

    var app4 = new Vue({
        el: '#app-4',
            data: {
            todos: [
                { text : '1번'},
                { text : '2번'},
                { text : '3번'}
            ]
}
    })


    var app5 = new Vue({
        el: '#app-5',
        data:{
            message: 'ㅂㅇㄹ 뷰제스'

        },
        methods: {
            reverseMessage : function () {
                this.message = this.message.split('').reverse().join('')
            }

        }

    })



Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

