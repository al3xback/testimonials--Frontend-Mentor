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
	background-color: $white;
	border: em(2, 13) solid $white;
	border-radius: em(25, 13);
	font: inherit;
	// color: $very-dark-cyan;
	transition: all 0.3s;
}

.btn:hover,
.btn:active {
	background-color: transparent;
	border-color: $white;
	color: $white !important;
}
</style>
