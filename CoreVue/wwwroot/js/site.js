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
    },
    //update: function (el, binding, vnode) {
    //    el.value = binding.value;
    //},
    componentUpdated: function (el, binding, vnode) {
        el.value = binding.value;
    },

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