const app = Vue.createApp({
    data() {
        return {
            my_name: 'Evan Young',
            my_age: 56,
            old_age: 56+5,
            my_number: Math.random(),
            picture: 'https://www.pexels.com/photo/man-love-people-woman-5593690/',
        };
    }
});

app.mount('#assignment');