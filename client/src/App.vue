<template>
	<div id="app">
		<component :is="layout">
			<router-view/>
		</component>
	</div>
</template>

<script>
	export default {
		computed: {
			layout() {
				return ( this.$route.meta.template || 'default' ) + '-layout';
			}
		}
	}
</script>
