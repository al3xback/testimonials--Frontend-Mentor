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
					mainColor: 'hsl(0, 0%, 100%)',
					alphaColor1: 'hsla(0, 0%, 100%, 0.5)',
					alphaColor2: 'hsla(0, 0%, 100%, 0.5)',
					borderColor: 'hsl(211, 59%, 43%)',
				},
				{
					id: 'c2',
					bgColor: '#396EB0',
					mainColor: 'hsl(0, 0%, 100%)',
					alphaColor1: 'hsla(0, 0%, 100%, 0.5)',
					alphaColor2: 'hsla(0, 0%, 100%, 0.5)',
					borderColor: 'hsl(213, 51%, 46%)',
				},
				{
					id: 'c3',
					bgColor: '#D47AE8',
					mainColor: 'hsl(0, 0%, 100%)',
					alphaColor1: 'hsla(0, 0%, 100%, 0.5)',
					alphaColor2: 'hsla(0, 0%, 100%, 0.5)',
					borderColor: 'hsl(289, 89%, 53%)',
				},
				{
					id: 'c4',
					bgColor: '#FC997C',
					mainColor: 'hsl(0, 0%, 100%)',
					alphaColor1: 'hsla(0, 0%, 100%, 0.5)',
					alphaColor2: 'hsla(0, 0%, 100%, 0.5)',
					borderColor: 'hsl(14, 86%, 58%)',
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
	gap: 4/13 +0em;
	padding: 8/13 +0em 8/13 +0em 0 !important;
}
</style>
