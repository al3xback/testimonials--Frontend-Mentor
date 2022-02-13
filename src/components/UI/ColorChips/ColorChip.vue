<template>
	<li :class="colorChipClasses">
		<button
			type="button"
			:style="{ 'background-color': color.bgColor }"
			@click="selectColor"
			aria-label="select-color"></button>
	</li>
</template>

<script>
export default {
	emits: ['select-color'],
	props: ['color', 'customClass'],
	computed: {
		colorChipClasses() {
			return [this.$style['color-chip'], this.customClass];
		},
	},
	methods: {
		selectColor() {
			this.$emit('select-color', this.color.id);
		},
	},
};
</script>

<style module lang="scss">
.color-chip {
	opacity: 0;
	transform: translate3d(em(8, 13), 0, 0);
	transition: all 0.3s;
}

.color-chip button {
	width: 12px;
	height: 12px;
	border: 1px solid rgba(255, 255, 255, 0.4);
	border-radius: 50%;
}
</style>
