<template>
	<li :class="quoteClasses" :style="quoteStyles">
		<color-chips
			:custom-class="$style['color-chip-cs']"
			@select-color="onSelectColor"
		></color-chips>
		<base-card
			:bg-color="colorSet.bgColor"
			:txt-color="colorSet.mainColor"
			:custom-class="$style['quote__card']"
		>
			<template #head>
				<img
					:class="$style['quote__author-avatar']"
					:style="{ 'border-color': colorSet.borderColor }"
					width="30"
					height="30"
					:src="require(`@/assets/images/${authorAvatar}.jpg`)"
					:alt="quote.author.name"
				/>
				<div :class="$style['quote__author-profile']">
					<h2 :class="$style['quote__author-name']">
						{{ quote.author.name }}
					</h2>
					<p
						:class="$style['quote__author-status']"
						:style="{ color: colorSet.alphaColor1 }"
					>
						{{ quote.author.status }}
					</p>
				</div>
			</template>
			<template #default>
				<p :class="$style['quote__caption']">
					{{ quote.author.quoteCaption }}
				</p>
				<p
					:class="$style['quote__text']"
					:style="{ color: colorSet.alphaColor2 }"
				>
					{{ quote.author.quoteText }}
				</p>
			</template>
		</base-card>
		<div :class="quoteSkeletonClasses"></div>
	</li>
</template>

<script>
export default {
	props: [
		'quote',
		'shuffleIndex',
		'screen',
		'customQuoteClass',
		'customSkeletonClass',
	],
	data() {
		return {
			colorSet: {
				bgColor: this.quote.style.backgroundColor,
				mainColor: this.quote.style.color.main,
				alphaColor1: this.quote.style.color.alpha1,
				alphaColor2: this.quote.style.color.alpha2,
				borderColor: this.quote.style.borderColor,
			},
		};
	},
	computed: {
		authorAvatar() {
			const { name } = this.quote.author;
			const firstName = name.split(' ')[0].toLowerCase();
			return firstName;
		},
		quoteClasses() {
			return [this.$style.quote, this.customQuoteClass];
		},
		quoteStyles() {
			return {
				'grid-area':
					this.quote.position[this.screen][this.shuffleIndex],
			};
		},
		quoteSkeletonClasses() {
			return [this.$style['quote__skeleton'], this.customSkeletonClass];
		},
	},
	methods: {
		onSelectColor(colorData) {
			this.colorSet = colorData;
		},
	},
};
</script>

<style module lang="scss">
.quote {
	position: relative;
}

.quote:first-child .quote__card {
	background-image: url('~@/assets/images/icons/quotation.svg');
	background-repeat: no-repeat;
	background-size: 104/13 +0em auto;
	background-position: right 24/13 +0em top;
}

.quote:hover .color-chip-cs {
	opacity: 1;
	transform: translate3d(0, 0, 0) scale(1);
}

.quote:hover .color-chip-cs:nth-child(1) {
	transition-delay: 0.15s;
}

.quote:hover .color-chip-cs:nth-child(2) {
	transition-delay: 0.1s;
}

.quote:hover .color-chip-cs:nth-child(3) {
	transition-delay: 0.05s;
}

.quote__author-avatar {
	width: 30/13 +0em;
	height: 30/13 +0em;
	margin-right: 16/13 +0em;
	border: 2/13 +0em solid transparent;
	border-radius: 50%;
}

.quote__author-name {
	margin-bottom: 4/13 +0em;
	font-size: 13/13 +0em;
	font-weight: $fw-medium;
	line-height: 13/13 +0em;
}

.quote__author-status {
	font-size: 11/13 +0em;
	line-height: 11/13 +0em;
}

.quote__caption {
	margin-bottom: 16/20 +0em;
	line-height: 24/20 +0em;
	font-size: 20/13 +0em;
	font-weight: $fw-semibold;
}

.quote__text::before {
	content: '\201C';
	margin-right: 2/13 +0em;
}

.quote__text::after {
	content: '\201D';
	margin-left: 2/13 +0em;
}

.quote__skeleton {
	position: absolute;
	top: 0;
	right: 0;
	width: 0;
	height: 100%;
	background-color: $bg-main;
	border-radius: 8/13 +0em;
}

@media (min-width: 750/16 +0em) {
	.quote:first-child .quote__card {
		background-position: right 46/13 +0em top;
	}
}

@media (min-width: 1200/16 +0em) {
	.quote:first-child .quote__card {
		background-position: right 80/13 +0em top;
	}
}
</style>
