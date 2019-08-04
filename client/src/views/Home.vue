<template>
	<div>
		<form>
			<div class="form-group">
				<input type="text" name="title" class="form-control" v-model="task.title">
			</div>
			<div class="form-group">
				<input type="text" name="description" class="form-control" v-model="task.description">
			</div>
			<div class="form-group">
				<button class="btn btn-success" @click.prevent="addTask">Add task</button>
			</div>
		</form>
		<div class="row">
			<div class="col-4" v-for="(item, index) of tasks">

				<div class="card border-secondary">
					<div class="card-header">
						<b>{{ item.title }}</b>
					</div>
					<div class="card-body">
						<p class="card-text">
							{{ item.description }}
						</p>
					</div>
					<div class="card-footer">
						<router-link :to="'task/' + item._id" class="btn btn-warning mr-2">Edit</router-link>
						<button class="btn btn-danger" @click.prevent="deleteTask(item._id, index)">Delete</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				task: {
					title: null,
					description: null
				},
				tasks: []
			}
		},

		mounted() {
			this.getTasks();
		},

		methods: {
			addTask() {
				axios.post('http://localhost:8081/api/tasks', {
					title: this.task.title,
					description: this.task.description
				}).then(response => {
					this.tasks.push(this.task);
					this.task.title = null;
					this.task.description = null;
				}).catch(err => {
					console.log(err);
				});
			},

			getTasks() {
				axios.get('http://localhost:8081/api/tasks').then(response => {
					this.tasks = response.data;
				}).catch(err => {
					console.log(err);
				});
			},

			deleteTask(id, index) {
				axios.delete('http://localhost:8081/api/tasks/' + id)
					.then(response => {
						this.tasks.splice(index, 1);
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	}
</script>

