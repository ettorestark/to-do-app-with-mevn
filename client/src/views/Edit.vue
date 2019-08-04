<template>
	<div>
		<form>
			<div class="form-group">
				<input type="text" name="title" class="form-control" v-model="task.title">
			</div>
			<div class="form-group">
				<textarea class="form-control" v-model="task.description"></textarea>
			</div>
			<div class="form-group">
				<button class="btn btn-success" @click.prevent="saveTask(task.id)">Edit</button>
			</div>
		</form>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				id: null,
				task: {
					id: null,
					title: null,
					description: null
				}
			}
		},

		methods: {
			getTask() {
				axios.get('http://localhost:8081/api/tasks/' + this.id).then(response => {
					this.task.id = response.data._id;
					this.task.title = response.data.title;
					this.task.description = response.data.description;
				}).catch(err => {
					console.log(err);
				});
			},

			saveTask(id) {
				axios.patch('http://localhost:8081/api/tasks/' + id, {
						title: this.task.title,
						description: this.task.description
					})
					.then(response => {
						this.$router.replace('/');
					})
					.catch(err => {
						console.log(err);
					});
			}
		},


		mounted() {
			this.id = this.$route.params.id;
			this.getTask();
		}
	}
</script>