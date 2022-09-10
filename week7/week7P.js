Vue.component('component1' ,{
    template: '<div><h3>{{message}}</h3></div>',
    data: function() {
        return {
            message: 'This is a Local component example component '
        }
    }
});


var component3 = {
    template: '<div>This is local component example using a Global component<global></global></div>',
};


Vue.component('global', {
    template: '<div><h3>This a Global Component Example</h3></div>',
})

var app = new Vue ({
    el:'#app',
    data:{
        text:"Components Example: (Global and Local)",
    },
    components: {
        component3,
    },
})
