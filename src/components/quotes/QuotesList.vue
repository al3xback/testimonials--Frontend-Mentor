<template>
	<ul :class="quotesClasses">
		<quote-list-item
			v-for="quote in quotes"
			:key="quote.id"
			:quote="quote"
			:shuffle-index="shuffleIndex"
			:screen="screen"
			:custom-quote-class="customQuoteClass"
			:custom-skeleton-class="customSkeletonClass"></quote-list-item>
	</ul>
</template>

<script>
import quoteData from '../../assets/json/quotes.json';
import QuoteListItem from './QuoteListItem.vue';

export default {
	quoteData: quoteData,
	components: {
		QuoteListItem,
	},
	props: [
		'shuffleIndex',
		'screen',
		'customQuotesClass',
		'customQuoteClass',
		'customSkeletonClass',
	],
	data() {
		return {
			quotes: this.$options.quoteData,
		};
	},
	computed: {
		quotesClasses() {
			return [this.$style.quotes, this.customQuotesClass];
		},
	},
};
</script>

<style module lang="scss">
.quotes {
	max-width: em(340, 13);
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: em(24, 13);
	gap: em(24, 13);
}

@media (min-width: em(750)) {
	.quotes {
		max-width: em(700, 13);
		grid-template-columns: repeat(3, 1fr);
		grid-gap: em(30, 13);
		gap: em(30, 13);
	}
}

@media (min-width: em(1200)) {
	.quotes {
		max-width: em(1100, 13);
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>
