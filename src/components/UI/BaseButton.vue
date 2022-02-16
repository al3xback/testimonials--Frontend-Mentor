<template>
	<a href="#" :class="$style.btn" :style="{ color: color }">
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: ['color'],
};
</script>

<style module lang="scss">
.btn {
	display: inline-block;
	padding: em(10, 13) em(30, 13);
	background-color: $primary-4;
	border: em(2, 13) solid $primary-4;
	border-radius: em(25, 13);
	font: inherit;
	transition: all 0.3s;
}

.btn:hover,
.btn:active {
	background-color: transparent;
	border-color: $primary-4;
	color: $primary-4 !important;
}
</style>
