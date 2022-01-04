const App = {
  data() {
    return {
      activeIndex: 0,
      resetTest: true, // то, что позволяет определить текущий активный шаг
      steps: [
        {title: 'Основы', text: 'Изучение теории Vue, vue route, vuex и создание этого приложения'},
        {title: 'Практика 1', text: 'Созадание UI приложения для банка'},
        {title: 'Практика 2', text: 'Создание простой CRM системы'},
        {title: 'Практика 3', text: 'Создание небольшого интернет магазина'},
        {title: 'Практика 4', text: 'Создание приложения для анкетирования'},
      ]
    }
  },
  methods: {
    prev() {
    console.log('prev');
    },
    reset() {
      this.activeIndex = 0;
      this.resetTest = true;
    },
    nextOfFinish() {
      this.activeIndex !== this.steps.length - 1
        ? this.activeIndex++
        : this.resetTest = false
        console.log(this.activeIndex, this.steps.length - 1);
        console.log(this.resetTest);
    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
    }
  },
  computed: {
    activeStep() {
      return this.steps[this.activeIndex]
    }
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    // 2. выключена ли кнопка назад
    // 3. находимся ли мы на последнем шаге
  }
}

Vue.createApp(App).mount('#app')