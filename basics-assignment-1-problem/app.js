const app = Vue.createApp({
    data () {
        return {
            my_name: 'Evan Young',
            my_age: 55,
            my_image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/CMHR_and_Winnipeg_Downtown_%28wide_aspect%29.png'
        }
    },
    methods: {
        my_age_plus() {
            return this.my_age + 5
        },
        my_favourite_number() {
            return Math.round(Math.random());
        }
    }
});

app.mount('#assignment');