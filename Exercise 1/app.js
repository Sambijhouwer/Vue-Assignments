document.addEventListener('DOMContentLoaded', () =>{
    new Vue({
        el: '#app',
        data: {
            name: 'sam',
            age: '19',
            photo: 'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?cs=srgb&dl=action-active-adult-2404370.jpg&fm=jpg'
        },
        methods: {
            age_multiplier = function(){
                return this.age * 3
            },
            random = function(){
                return random()
            }

        }
    })
})