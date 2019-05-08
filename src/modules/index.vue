<template>
	<div class="wrapper">
		<Header>
			<div slot="left" class="search-wrapper">
				<span class="icon icon-icon_search"></span>
				<input type="text" class="search-input">
			</div>
			<span slot="right" class="icon icon-icon_threeline_fill" @click="show"></span>
		</Header>
		<div class="article-list">
			<ArticleItem v-for="(item, index) in articles" :key="index" :detail="item"></ArticleItem>
		</div>

		<div class="nav-wrapper" v-if="visibility">
			<nav class="nav">
					<ul class="nav-list">
						<li class="list-item" @click="hide">
							<router-link to="/">首页</router-link>
						</li>
						<li class="list-item" @click="hide">
							<router-link to="/tag">标签页</router-link>
						</li>
						<li class="list-item" @click="hide">
							<router-link to="/user" >博主介绍</router-link>
						</li>
					</ul>
				</nav>
				<span class="back" @click="hide">返回</span>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "../components/Header";
import ArticleItem from "../components/ArticleItem";
export default {
	data() {
		return {
			visibility: false,
			articles: [
				{
					title: 'hello',
					seeNumber: 1000,
					createTime: '2019-02-20',
					content: '附件二娃覅额偶瓦基弗IE哦啊接我覅偶尔王建安费家饿哦位i爱福家而我安静佛安慰奥法饥饿哦挖坟',
					imgSrc:'http://img3.imgtn.bdimg.com/it/u=1055727654,337004439&fm=26&gp=0.jpg'
				},
				{
					title: 'hello',
					seeNumber: 1000,
					createTime: '2019-02-20',
					content: '附件二娃覅额偶瓦基弗IE哦啊接我覅偶尔王建安费家饿哦位i爱福家而我安静佛安慰奥法饥饿哦挖坟',
					imgSrc:'http://img3.imgtn.bdimg.com/it/u=1055727654,337004439&fm=26&gp=0.jpg'
				},
				{
					title: 'hello',
					seeNumber: 1000,
					createTime: '2019-02-20',
					content: '附件二娃覅额偶瓦基弗IE哦啊接我覅偶尔王建安费家饿哦位i爱福家而我安静佛安慰奥法饥饿哦挖坟',
					imgSrc:'http://img3.imgtn.bdimg.com/it/u=1055727654,337004439&fm=26&gp=0.jpg'
				},
				{
					title: 'hello',
					seeNumber: 1000,
					createTime: '2019-02-20',
					content: '附件二娃覅额偶瓦基弗IE哦啊接我覅偶尔王建安费家饿哦位i爱福家而我安静佛安慰奥法饥饿哦挖坟',
					imgSrc:'http://img3.imgtn.bdimg.com/it/u=1055727654,337004439&fm=26&gp=0.jpg'
				},
				{
					title: 'hello',
					seeNumber: 1000,
					createTime: '2019-02-20',
					content: '附件二娃覅额偶瓦基弗IE哦啊接我覅偶尔王建安费家饿哦位i爱福家而我安静佛安慰奥法饥饿哦挖坟',
					imgSrc:'http://img3.imgtn.bdimg.com/it/u=1055727654,337004439&fm=26&gp=0.jpg'
				},
				{
					title: 'hello',
					seeNumber: 1000,
					createTime: '2019-02-20',
					content: '附件二娃覅额偶瓦基弗IE哦啊接我覅偶尔王建安费家饿哦位i爱福家而我安静佛安慰奥法饥饿哦挖坟',
					imgSrc:'http://img3.imgtn.bdimg.com/it/u=1055727654,337004439&fm=26&gp=0.jpg'
				}
			]
		};
	},
	components: { Header, ArticleItem },
	methods: {
		show() {
			this.visibility = true;
		},
		hide() {
			this.visibility = false;
		}
	}
};
</script>

<style lang="scss">
.wrapper {
	.search-wrapper {
		display: flex;
		padding: 5rpx 0;
		align-items: center;
		.search-input {
			width: 240rpx;
			height: 32rpx;;
			margin-left: 10rpx;
		}
	}
	.icon {
		font-size: 16rpx;
	}
	.nav-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #4e9bf5;
		.list-item {
			border-bottom: 1rpx solid #eee;
		}
		.list-item:last-of-type {
			border-bottom: none;
		}
		.list-item a {
			font-size: 14rpx;
			color: white;
		}
		.back {
			font-size: 16rpx;
			color: yellow;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
		}
	}
	.article-list {
		margin-top: 10rpx;
		padding: 0 10rpx;
	}
}
</style>

