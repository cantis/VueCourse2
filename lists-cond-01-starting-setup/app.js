const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
    },
    removeGoal(index) {
      // splice removes the element from the array
      this.goals.splice(index, 1);
    }
  }
});

app.mount("#user-goals");
