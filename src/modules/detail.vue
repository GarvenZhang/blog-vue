<template>
	<div class="article-detail">
		<Header>
			<span slot="left" class="icon icon-icon_left" @click="back"></span>
		</Header>
		<article class="article">
			<h1 class="title">Web Component</h1>
			<aside class="aside">
				<p>
					<span>作者: garven</span>
					<span>评论数: 22</span>
				</p>
				<p>
					<span>总字数: 2888</span>
					<span>浏览数: 88</span>
				</p>
				<p>写作时间: 2019-03-22</p>
			</aside>
			<section
				class="content"
			>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</section>
		</article>
		<div class="reply">
			<div class="title">评论区</div>
			<div v-for="(item, index) in reply" :key="index" class="reply-item">
				<p class="basic-info">{{item.name}} 于 {{ item.time }} 发表评论</p>
				<p class="content">{{ item.content }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "../components/Header";
export default {
	components: { Header },
	data() {
		return {
			reply: [
				{
					name: "小明",
					time: "2019-02-10 10:20:23",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum"
				},
				{
					name: "小明",
					time: "2019-02-10 10:20:23",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum"
				},
				{
					name: "小明",
					time: "2019-02-10 10:20:23",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum"
				}
			]
		};
	},
	methods: {
		back() {
			this.$router.go(-1);
		}
	}
};
</script>
<style lang="scss">
.article-detail {
	.icon {
		padding: 10rpx;
	}
	.article {
		padding: 0 10rpx;
		border-bottom: 6rpx double purple;
		.title {
			font-size: 18rpx;
			border-bottom: 6rpx double purple;
		}
		.aside {
			font-size: 14rpx;
			border-bottom: 6rpx double purple;
		}
		.content {
			text-align: left;
			font-size: 13rpx;
			line-height: 1.6;
			padding: 10rpx 0;
		}
	}
	.reply {
		padding: 10rpx;
		.title {
			font-size: 18rpx;
			text-align: left;
		}
		.reply-item {
			background: orange;
			margin-bottom: 10rpx;
		}
		.basic-info,
		.content {
			font-size: 14rpx;
			line-height: 1.5;
			text-align: left;
		}
	}
}
</style>

