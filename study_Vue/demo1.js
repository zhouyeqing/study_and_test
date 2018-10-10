Array.prototype.clone = function () {
    return this.slice(0);
};
Vue.component('shop-car', {
    props: ['info'],
    template: '<div class="row">\n' +
        '    <div class="col-xs-12">\n' +
        '        <table class="table table-hover table-bordered">\n' +
        '            <thead>\n' +
        '            <tr class="info">\n' +
        '                <th class="text-center">序号</th>\n' +
        '                <th class="text-center">选择商品</th>\n' +
        '                <th class="text-center">商品名称</th>\n' +
        '                <th class="text-center">商品单价</th>\n' +
        '                <th class="text-center">购买数量</th>\n' +
        '                <th class="text-center">操作</th>\n' +
        '            </tr>\n' +
        '            </thead>\n' +
        '            <tbody class="text-center">\n' +
        '            <template v-for="(list,index) in lists">\n' +
        '                <tr>\n' +
        '                    <td>{{index + 1}}</td>\n' +
        '                    <th style="width: 50px;text-align: center"><input type="checkbox" v-model="list.checked" style="width: 30px"></th>\n' +
        '                    <td>{{list.name}}</td>\n' +
        '                    <td>{{list.price}}</td>\n' +
        '                    <td>\n' +
        '                        <i class="glyphicon glyphicon-minus" @click="minus(list.id)"></i>\n' +
        '                        <input type="text" v-model="list.num" style="width: 30px;text-align: center">\n' +
        '                        <i class="glyphicon glyphicon-plus" @click="add(list.id)"></i>\n' +
        '                    </td>\n' +
        '                    <td>\n' +
        '                        <button class="btn btn-xs btn-danger" @click="remove(index)">移除</button>\n' +
        '                    </td>\n' +
        '                </tr>\n' +
        '            </template>\n' +
        '            </tbody>\n' +
        '        </table>\n' +
        '    </div>\n' +
        '    <div class="col-xs-4">\n' +
        '        <button type="button" class="btn btn-info" @click="selectAll">全选/全不选</button>\n' +
        '    </div>\n' +
        '    <div class="clearfix"></div>\n' +
        '    <h2>总价：￥{{costs}}</h2>\n' +
        '</div>',
    data: function () {
        return {lists: this.info, isSelectAll: false};
    },
    methods: {
        remove: function (index) {
            this.lists.splice(index, 1);
        },
        minus: function (id) {
            if (this.lists[id - 1].num > 0) {
                this.lists[id - 1].num--;
            }
        },
        add: function (id) {
            this.lists[id - 1].num++;
        },
        selectAll: function () {
            let a = false;
            for (let temp in this.lists) {
                a = a || !this.lists[temp].checked;
            }
            if (this.isSelectAll) {
                for (let temp in this.lists) {
                    this.lists[temp].checked = false;
                }
                this.isSelectAll = false;
            } else if (a) {
                for (let temp in this.lists) {
                    this.lists[temp].checked = true;
                }
                this.isSelectAll = true;
            } else {
                for (let temp in this.lists) {
                    this.lists[temp].checked = false;
                }
                this.isSelectAll = false;
            }
        }
    },
    computed: {
        costs: function () {
            for (let temp in this.lists) {
                if (this.lists[temp].num > 999) {
                    this.lists[temp].num = 999;
                }
            }
            let sum = 0;
            for (let temp in this.lists) {
                this.lists[temp].num = parseInt(this.lists[temp].num) || 0;
                if (this.lists[temp].checked) {
                    sum += parseInt(this.lists[temp].num) * parseInt(this.lists[temp].price);
                }
            }
            return sum;
        }
    }
});

let shop = new Vue({
    el: '#shop',
    data: {
        lists: [
            {
                name: 'iPhone7',
                price: 6188,
                num: 0,
                id: 1,
                show: true,
                checked: false
            },
            {
                name: 'iPad Pro',
                price: 5888,
                num: 0,
                id: 2,
                show: true,
                checked: false
            },
            {
                name: 'MacBook Pro',
                price: 21488,
                num: 0,
                id: 3,
                show: true,
                checked: false
            }
        ]
    }
});