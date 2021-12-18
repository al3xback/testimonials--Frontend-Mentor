<template>
	<main :class="$style.main">
		<base-container>
			<div :class="$style['shuffle__con']">
				<button
					type="button"
					@click="onShuffleQuotes"
					:class="$style['shuffle__btn']"
				>
					Shuffle
				</button>
			</div>
			<quotes-list
				:shuffle-index="curShuffleIndex"
				:screen="curScreen"
			></quotes-list>
		</base-container>
	</main>
</template>

<script>
import QuotesList from '../quotes/QuotesList.vue';

export default {
	components: {
		QuotesList,
	},
	data() {
		return {
			curShuffleIndex: 0,
			curScreen: null,
		};
	},
	methods: {
		onShuffleQuotes() {
			if (this.curShuffleIndex === 7) {
				this.curShuffleIndex = 0;
			} else {
				this.curShuffleIndex++;
			}
		},
		adjustScreen() {
			if (window.innerWidth < 750) {
				this.curScreen = 'mobile';
			} else if (window.innerWidth < 1200) {
				this.curScreen = 'tablet';
			} else {
				this.curScreen = 'desktop';
			}
		},
	},
	created() {
		this.adjustScreen();

		window.addEventListener('resize', () => {
			this.adjustScreen();
		});
	},
};
</script>

<style module lang="scss">
.main {
	display: flex;
	justify-content: center;
	align-items: center;
	flex: auto;
	flex-shrink: 1;
	padding: 24/16 +0em 0;
}

.shuffle__con {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 10/13 +0em;
}

.shuffle__btn {
	height: 32/13 +0em;
	padding: 4/13 +0em 15/13 +0em;
	background-color: #ffffff;
	border: 1/13 +0em solid $light-gray;
	border-radius: 8/13 +0em;
	font-size: 16/13 +0em;
	color: $very-dark-grayish-blue;
}
</style>
