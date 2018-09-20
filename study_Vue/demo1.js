Vue.component('comp1',{
    props: ['prop1'],
    template: `<li>{{prop1.name}}</li>`
});
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: `<div><button v-on:click="count++">You clicked me {{ count }} times.</button></div>`
});
window.onload = function () {
    let div1 = new Vue({
        el: "#div1",
        data: {
            styleInput: {
                color: "red"
            },
            key: true,
            message1: "我是zhouyeqing",
            seen: true,
            message2: "点击显示消失",
            text: [
                {title: "苹果"},
                {title: "橘子"},
                {title: "香蕉"},
                {title: "芒果"},
                {title: "梨子"}
            ],
            message3: [
                {id: 0,name: "苹果1",seen:true},
                {id: 1,name: "橘子1",seen:true},
                {id: 2,name: "香蕉1",seen:true},
                {id: 3,name: "芒果1",seen:true},
                {id: 4,name: "梨子1",seen:true}
            ]
        },
        watch: {
            message1: function () {
                console.log(this.message1);
            }
        },
        methods: {
            inputC: function () {
                this.seen ? this.seen = false : this.seen = true;
                this.styleInput.color == "red" ? this.styleInput.color = "blue" : this.styleInput.color = "red";
                this.key ? this.key = false : this.key = true;
                this.text.push(this.text[Math.floor(Math.random()*5)]);
            },
            input1: function () {
                this.message3[0].seen ? this.message3[0].seen = false : this.message3[0].seen = true;
            },
            input2: function () {
                this.message3[1].seen ? this.message3[1].seen = false : this.message3[1].seen = true;
            },
            input3: function () {
                this.message3[2].seen ? this.message3[2].seen = false : this.message3[2].seen = true;
            },
            input4: function () {
                this.message3[3].seen ? this.message3[3].seen = false : this.message3[3].seen = true;
            },
            input5: function () {
                this.message3[4].seen ? this.message3[4].seen = false : this.message3[4].seen = true;
            }
        }
    });
    new Vue({
        el: '#demo',
        data: {
            show: true
        }
    });
    new Vue({
        el: '#example-2',
        data: {
            show: true
        }
    });




};