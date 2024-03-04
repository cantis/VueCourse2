const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputTask: '',
            isListVisible: true
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.inputTask);
        },
        toggleListVisibility(){
            this.isListVisible = !this.isListVisible;
        }
    },
    computed:{
        buttonCaption(){
            return this.isListVisible ? 'Hide List' : 'Show List';
        }
    },
    watch:{

    }
});

app.mount('#assignment')