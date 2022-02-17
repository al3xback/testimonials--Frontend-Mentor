<template>
	<ul :class="$style['color-chips']">
		<color-chip
			v-for="color in colors"
			:key="color.id"
			:custom-class="customClass"
			:color="color"
			@select-color="selectColor"></color-chip>
	</ul>
</template>

<script>
import ColorChip from './ColorChip.vue';

export default {
	components: {
		ColorChip,
	},
	emits: ['select-color'],
	props: ['customClass'],
	data() {
		return {
			colors: [
				{
					id: 'c1',
					bgColor: '#2E4C6D',
				},
				{
					id: 'c2',
					bgColor: '#396EB0',
				},
				{
					id: 'c3',
					bgColor: '#D47AE8',
				},
				{
					id: 'c4',
					bgColor: '#FC997C',
				},
			],
		};
	},
	methods: {
		selectColor(id) {
			const foundColor = this.colors.find((color) => color.id === id);
			this.$emit('select-color', foundColor);
		},
	},
};
</script>

<style module lang="scss">
.color-chips {
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	gap: em(4, 13);
	padding: em(8, 13) em(8, 13) 0 !important;
}
</style>
