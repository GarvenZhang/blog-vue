<template>
	<div class="wrapper tag-wrapper">
		<Header>
			<span slot="right" class="icon icon-icon_threeline_fill" @click="show"></span>
		</Header>

		<nav class="nav">
			<ul class="tag-nav-list">
				<li class="list-item" v-for="(item, index) in tags" :key="index">
					<router-link :to="item.url">{{ item.name }}({{item.number}})</router-link>
				</li>
			</ul>
		</nav>

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
import {mapState, mapActions} from 'vuex';
import {actionTypes} from '../store/modules/tag.js';

export default {
	data() {
		return {
			visibility: false,
		};
	},
	computed: {
		...mapState({
			tags (state) {
				return state.tag.list || [];
			}
		})
	},
	components: { Header, ArticleItem },
	created () {
		this.getTagList()
	},
	methods: {
		...mapActions({
			getTagList: `tag/${actionTypes.A_GET_TAG_LIST}`
		}),
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
.tag-wrapper {
	.tag-nav-list {
		.list-item {
			background: blue;
			border-bottom: 1rpx solid #eee;
		}
		.list-item:last-of-type {
			border-bottom: none;
		}
		.list-item a {
			font-size: 14rpx;
			color: white;
		}
	}
	.icon {
		padding: 10rpx;
	}
}

</style>

