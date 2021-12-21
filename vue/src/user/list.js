//注册界面 组件
const listForm = {
    template: '\
    <div>\
    <table border="1" cellpadding="0" cellspacing="0"> \
    <tr>\
    <th>年龄</th>\
    <th>姓名</th>\
    </tr>\
    <tr v-for="user in users">\
    <td>{{user.age}}</td>\
    <td>{{user.name}}</td>\
    <br/>\
    </table>\
    </div>\
    ',
    data() {
        return {
            users: [
                {age: 1, name: '张三'},
                {age: 2, name: '李四'},
                {age: 3, name: '王五'},
            ]
        }
    }
}