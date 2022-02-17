<template>
	<button :class="$style.btn">
		<slot></slot>
	</button>
</template>

<style module lang="scss">
.btn {
	display: inline-block;
	height: em(36);
	padding: em(6) em(20);
	background-color: $primary-4;
	border: em(1) solid $neutral-1;
	border-radius: em(8);
	font-size: em(16, 13);
	color: $primary-2;
	transition: all 0.3s;
}
</style>
