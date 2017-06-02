// Write your Javascript code.
Vue.directive('input-html', {
    bind: function (el, binding, vnode) {
        vnode.context._data[binding.expression] = el.innerHTML;
    },
    //update: function (el, binding, vnode) {
    //    el.innerHTML = binding.value;
    //},
    componentUpdated: function (el, binding, vnode) {
        el.innerHTML = binding.value;
    },
})
Vue.directive('input-value', {
    bind: function (el, binding, vnode) {
        vnode.context._data[binding.expression] = el.value;
        el.addEventListener("input", function () {
            vnode.context._data[binding.expression] = el.value;
        });
    },
    //update: function (el, binding, vnode) {
    //    el.value = binding.value;
    //},
    componentUpdated: function (el, binding, vnode) {
        el.value = binding.value;
    },

})

Vue.directive('add-item', {
    bind: function (el, binding, vnode, oldVnode) {
        var obj = {};
        for (var i = 0; i < el.children.length; i++)
        {
            var child = el.children[i];
            obj[child.getAttribute("prop")] = child.innerHTML;
        }
        vnode.context._data[binding.expression].push(obj);
        
    },    
    inserted: function (el, binding, vnode, oldVnode) {
        el.remove();
    },
    //componentUpdated: function (el, binding, vnode) {
    //    el.value = binding.value;
    //},

})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

new Vue({
    el: '#hook-arguments-example',
    data: {
        message: 'hello!'
    }
})

new Vue({
    el: '#hook-arguments-example1',
    data: {
        message: 'xin chao!'
    }
})
var student = {
    Name:"Nam", BirthDay : 1977
}
Vue.component('component-text', {
    props: ['dvalue'],
    template: '<div>{{dvalue}}gffhf</div>',   
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function () {
            this.counter += 1
            this.$emit('increment')
        }
    },
})
Vue.component('component-button', {   
    template: '<button v-on:click="increment">{{counter}}</button>',
    data:  function() {
        return {counter:0}
    },
    methods: {
        increment: function () {
            this.counter += 1
            this.$emit('increment')
        }
    },
})
new Vue({
    el: '#hook-arguments-example2',
    data: {
        items: [],
        students: [],
        value:'',
    }
})