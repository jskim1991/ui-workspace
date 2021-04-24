const app = Vue.createApp({
    data() {
        return {
            name: "King J",
            age: 25,
            imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTZfMjY2/MDAxNTcxMTgyMjIyODQ0.xSg5-1hPPEdwZlg_05HAL2aMZWM6BpFyHpksi9OHpbwg.xQoxPMZ4SQPCtpe6-UyCcYWAoZo43uZnGuIiUvSEwusg.JPEG.jhc9639/Vue.js-cta-main.jpg?type=w800',
            inputDefaultValue: 'this is default',
        }
    },
    methods: {
        getFavoriteNumber() {
            return Math.random()
        },

        ageInFiveYears() {
            return this.age + 5;
        }
    }
});


app.mount('#assignment');