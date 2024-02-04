const app = Vue.createApp({
    data() {
        return {
        fieldOne: '',
        fieldTwo: ''
        }
    },
    methods: {
        showAlert() {
            alert('Hello! This is an alert!');
        },
        storeFieldOne(event) {
            this.fieldOne = event.target.value;
        },
        storeFieldTwo(event) {
            this.fieldTwo = event.target.value;
        }
    }
});

app.mount('#assignment');

