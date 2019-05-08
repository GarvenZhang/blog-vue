<template>
	<div class="header">
		<div class="header-left">
			<slot name="left"></slot>
		</div>
		<div class="header-center">
			<span class="header-title">{{ title }}</span>
		</div>
		<div class="header-right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: green;
	padding: 0 10rpx;

	.header-left {
		display: flex;
	}
	.header-center {
		font-size: 16rpx;
		text-align: center;
		color: white;
	}
	.header-right {
		display: flex;
		justify-content: center;
	}
}
</style>
