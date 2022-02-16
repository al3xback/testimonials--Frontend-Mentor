<template>
	<figure :class="cardClasses" :style="cardStyles">
		<div :class="$style['card__head']">
			<slot name="head"></slot>
		</div>
		<blockquote :class="$style['card__body']">
			<slot></slot>
		</blockquote>
	</figure>
</template>

<script>
export default {
	props: ['bgColor', 'txtColor', 'customClass'],
	computed: {
		cardClasses() {
			return [this.$style.card, this.customClass];
		},
		cardStyles() {
			return {
				'background-color': this.bgColor,
				color: this.txtColor,
			};
		},
	},
};
</script>

<style module lang="scss">
.card {
	padding: em(26, 13) em(32, 13) em(32, 13);
	height: 100%;
	border-radius: em(8, 13);
	box-shadow: em(40, 13) em(60, 13) em(50, 13) em(-47, 13)
		rgba(72, 85, 106, 0.24);
	background-color: $primary-1;
	transition: all 0.3s;
}

.card__head {
	display: flex;
	align-items: center;
	margin-bottom: em(16, 13);
}
</style>
