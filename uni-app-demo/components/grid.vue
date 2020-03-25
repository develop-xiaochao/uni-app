<template>
	<view class="song-item">
		<image class="img" :src="item.img"></image>
		<view class="desc">{{ item.title }}</view>
		<view class="flex-box">
			<view class="price">￥{{item.price}}</view>
			<view class="market-price">{{item.marketPrice}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		// 从父组件传值的
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			},
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
	.song-item {
		float: left;
		position: relative;
		width: 320rpx;
		// height: 502rpx;
		margin-top: 18rpx;
	
		line-height: 34rpx;
		color: #333;
		background: #fff;
		border-radius: 10rpx;
		overflow: hidden;
		font-size: 26rpx;

		// &:nth-child(n+1) {
		// 	margin-left: 23rpx;
		// }

		.img {
			display: block;
			width: 342rpx;
			height: 342rpx;
			margin-bottom: 24rpx;
			background: #eee;
		}

		.desc {
			height: 64rpx;
			margin-top: 12rpx;
			line-height: 30rpx;
		}

		.price {
			color: #ff5000;
		}

		.market-price {
			padding-left: 10px;
			font-size: 24rpx;
			color: #979797;
			text-decoration: line-through;
		}
	}
</style>
