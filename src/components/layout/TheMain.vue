<template>
	<main :class="$style.main">
		<base-container :custom-class="$style['container-cs']">
			<div :class="$style['shuffle__con']">
				<button
					type="button"
					@click="onShuffleQuotes"
					:class="$style['shuffle__btn']"
					:disabled="shuffleModeActive"
				>
					Shuffle
				</button>
			</div>
			<quotes-list
				:shuffle-index="curShuffleIndex"
				:screen="curScreen"
				:custom-quotes-class="quotesCustomClasses"
				:custom-quote-class="quoteCustomClasses"
				:custom-skeleton-class="$style['quote-skeleton-cs']"
			></quotes-list>
			<div :class="$style['animate-block']"></div>
		</base-container>
	</main>
</template>

<script>
import QuotesList from '../quotes/QuotesList.vue';
import { gsap } from 'gsap';

export default {
	components: {
		QuotesList,
	},
	data() {
		return {
			shuffleModeActive: false,
			curShuffleIndex: 0,
			curScreen: null,
		};
	},
	computed: {
		quotesCustomClasses() {
			return this.$style['quotes-cs'];
		},
		quoteCustomClasses() {
			return this.$style['quote-cs'];
		},
	},
	methods: {
		onShuffleQuotes() {
			const animateBlock = `.${this.$style['animate-block']}`;
			const skeletonBlock = `.${this.$style['quote-skeleton-cs']}`;

			this.shuffleModeActive = true;

			const t1 = gsap.timeline();
			t1.to(animateBlock, {
				width: '100%',
				duration: 0.6,
				onComplete: () => {
					if (this.curShuffleIndex === 7) {
						this.curShuffleIndex = 0;
					} else {
						this.curShuffleIndex++;
					}

					gsap.set(skeletonBlock, { width: '100%' });
				},
			})
				.to(animateBlock, {
					scaleX: 0,
					duration: 0.6,
					clearProps: 'all',
				})
				.to(
					skeletonBlock,
					{
						width: 0,
						onComplete: () => {
							this.shuffleModeActive = false;
						},
					},
					'<0.1'
				);
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
.quotes-cs {
	position: relative;
}

.quote-cs {
	opacity: 1;
}

.main {
	display: flex;
	justify-content: center;
	align-items: center;
	flex: auto;
	flex-shrink: 1;
	padding: 24/16 +0em 0;
}

.container-cs {
	position: relative;
}

.quote-skeleton-cs {
	visibility: visible;
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

.animate-block {
	position: absolute;
	top: 40/13 + 0em;
	bottom: -20/13 + 0em;
	left: 0;
	width: 0;
	background-color: $bg-main;
	transform-origin: right;
}
</style>
