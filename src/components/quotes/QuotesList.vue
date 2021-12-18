<template>
	<ul :class="$style.quotes">
		<quote-list-item
			v-for="quote in quotes"
			:key="quote.id"
			:quote="quote"
			:shuffle-index="shuffleIndex"
			:screen="screen"
		></quote-list-item>
	</ul>
</template>

<script>
import quoteData from '../json/quotes.json';
import QuoteListItem from './QuoteListItem.vue';

export default {
	quoteData: quoteData,
	components: {
		QuoteListItem,
	},
	props: ['shuffleIndex', 'screen'],
	data() {
		return {
			quotes: this.$options.quoteData
		};
	}
};
</script>

<style module lang="scss">
.quotes {
	max-width: 1110/13 +0em;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 24/13 +0em;
	gap: 24/13 +0em;
}

@media (min-width: 600/16 +0em) {
	.quotes {
		grid-gap: 30/13 +0em;
		gap: 30/13 +0em;
		grid-template-columns: repeat(3, 1fr);
	}
}

@media (min-width: 890/16 +0em) {
	.quotes {
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>
