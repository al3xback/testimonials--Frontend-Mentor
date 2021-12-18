<template>
	<div :class="$style.container">
		<slot></slot>
	</div>
</template>

<style module lang="scss">
.container {
	padding: 0 24/13 +0em;
}
</style>
