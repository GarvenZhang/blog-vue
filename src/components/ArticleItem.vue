<template>
	<router-link to="/detail">
		<div class="article-item">
			<div class="article-basic-info">
				<span>{{ detail.title }}</span>
				<span>{{ detail.seeNumber }}人阅读</span>
				<span>{{ detail.createTime }}</span>
			</div>
			<img class="img" :src="detail.imgSrc" alt>
			<div class="content">{{ detail.content }}</div>
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		detail: {
			title: String,
			seeNumber: Number,
			createTime: "",
			content: "",
			imgSrc: ""
		}
	}
};
</script>

<style lang="scss">
.article-item {
	margin-bottom: 10rpx;
	padding: 10rpx;
	background: #359ef3;
	color: white;
	font-size: 14rpx;
	.article-basic-info {
		display: flex;
		justify-content: space-between;
		line-height: 1;
		margin-bottom: 10rpx;
	}
	.content {
		text-align: left;
		padding: 10rpx 0;
		line-height: 1.5;
	}
	.img {
		display: block;
		width: 220rpx;
		height: 150rpx;
	}
}
</style>
