<template>
	<figure :class="$style.card" :style="cardStyles">
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
	props: ['bgColor', 'txtColor'],
	computed: {
		cardStyles() {
			return {
				'background-color': this.bgColor,
				'color': this.txtColor
			}
		}
	}
};
</script>

<style module lang="scss">
.card {
	padding: 26/13 +0em 32/13 +0em 32/13 +0em;
	height: 100%;
	border-radius: 8/13 +0em;
	box-shadow: 40px 60px 50/13 +0em -47px rgba(72, 85, 106, 0.24);
	background-color: $moderate-violet;
}

.card__head {
	display: flex;
	align-items: center;
	margin-bottom: 16/13 +0em;
}
</style>
