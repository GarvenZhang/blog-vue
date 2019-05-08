<template>
	<div class="wrapper">
		<Header>
			<span slot="right" class="icon icon-icon_threeline_fill" @click="show"></span>
		</Header>
		
		<div>
			<div class="avator-wrap">
				<img src="http://img4.imgtn.bdimg.com/it/u=2166652144,286952562&fm=11&gp=0.jpg" alt="" class="avator">
			</div>
			<p>高度''</p>
			<p>广东工业大学</p>
			<p>电子商务</p>
			<p>本科</p>
			<p><a href="mailto:jf00258jf@hotmail.com">jf00258jf@hotmail.com</a></p>
			<p><a href="">github</a></p><p><a href="">resume</a></p>
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
export default {
	data() {
		return {
			visibility: false,
		};
	},
	components: { Header },
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
	
	.icon {
		font-size: 16rpx;
		line-height: 2;
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

