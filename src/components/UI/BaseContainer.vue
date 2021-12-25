<template>
	<div :class="containerClasses">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['customClass'],
	computed: {
		containerClasses() {
			return [ this.$style.container, this.customClass ]
		}
	}
}
</script>

<style module lang="scss">
.container {
	padding: 0 24/13 +0em;
}
</style>
