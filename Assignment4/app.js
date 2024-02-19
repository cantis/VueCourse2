const app = Vue.createApp({
    data() {
        return {
            input1: '',
            isHidden: false,
            colour: ''
        }
    },
    watch: {
    },
    computed: {
        returnInput1() {
            if (this.isHidden){
                return this.input1 + ' hidden';
            }
            else {
                return this.input1;
            }
        },
        colorStyle() {
            if (this.colour === '') {
                return '';
            }
            else {
                return "background-color: " + this.colour;
            }
        }
    },
    methods: {
        storeInput1(event) {
            this.input1 = event.target.value;
        },
        toggleVisibility() {
            this.isHidden = !this.isHidden;
        },
        storeColour(event) {
            this.colour = event.target.value;
        }
    }
});

app.mount('#assignment');