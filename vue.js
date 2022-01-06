document.body.onload = () => {
  let preloader = document.getElementById('preloader')
  setTimeout(() => {
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done')
    }
  }, 1500)
}
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
      if (this.activeIndex !== 0) this.activeIndex--
    },
    reset() {
      this.activeIndex = 0;
      this.resetTest = true;
    },
    nextOfFinish() {
      this.activeIndex !== this.steps.length - 1
        ? this.activeIndex++
        : this.resetTest = false
    },
    setActive(idx) {
     this.activeIndex = idx;
    }
  },
  computed: {
    activeStep() {
      return this.steps[this.activeIndex]
    },
    disableBtn() {
      return this.activeIndex === 0;
    }
  }
}

Vue.createApp(App).mount('#app')