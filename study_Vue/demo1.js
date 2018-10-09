let app = new Vue({
    el: '#app',
    data: {
        message1: '第一个程序',
        message2: {
            'name': '周叶青',
            'sex': '男'
        },
        message3: ['one','two','tree'],
        "result": [
            {
                "id":"242",
                "catalog":"中国文学"
            },
            {
                "id":"252",
                "catalog":"人物传记"
            },
            {
                "id":"244",
                "catalog":"儿童文学"
            },
            {
                "id":"248",
                "catalog":"历史"
            },
            {
                "id":"257",
                "catalog":"哲学"
            },
            {
                "id":"243",
                "catalog":"外国文学"
            },
            {
                "id":"247",
                "catalog":"小说"
            },
            {
                "id":"251",
                "catalog":"心灵鸡汤"
            },
            {
                "id":"253",
                "catalog":"心理学"
            },
            {
                "id":"250",
                "catalog":"成功励志"
            },
            {
                "id":"249",
                "catalog":"教育"
            },
            {
                "id":"245",
                "catalog":"散文"
            },
            {
                "id":"256",
                "catalog":"理财"
            },
            {
                "id":"254",
                "catalog":"管理"
            },
            {
                "id":"246",
                "catalog":"经典名著"
            },
            {
                "id":"255",
                "catalog":"经济"
            },
            {
                "id":"258",
                "catalog":"计算机"
            }
        ],
        message4: true,
        isInfo: true,
        abc: '123456'
    },
    methods: {
        show_hide: function () {
            if (this.message4) {
                this.message4 = false;
            } else {
                this.message4 =true;
            }
        },
        consol: function () {
            console.log('弹出');
        }
    }
});