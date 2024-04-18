const app = Vue.createApp({
	data() {
		return {
			showTitle: true,
			title: 'Some changes',
			age: 24,
		}
	},
	methods: {
		toggleShowTitle() {
			this.showTitle = !this.showTitle
		},
	},
})

app.mount('#app')
