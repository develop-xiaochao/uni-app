<template>
	<view>
		<view class="banner">
		<swiper class="swiper" indicator-dots="true" indicator-active-color="#ff372b" autoplay="true" interval="interval"
		 :circular="true" indicator-color='rgba(255,255,255, .5)' duration="500">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<view class="item">
					<image :src="item.imageUrl" class="img"></image>
					<view class="tag">{{item.typeTitle}}</view>
				</view>
			</swiper-item>
		</swiper>
		</view>
	</view>
</template>

<script>
	var that;
	export default {
		data() {
			return {
				swipers: [],
				loading: false
			};
		},
		onLoad() {
			that = this;
			this.getBanner()
		},

		methods: {
			getBanner() {
				// this.loading = true;
				uni.request({
					url: that.$baseUrl+"/banner",
					method: 'GET',
					data: {},
					success: res => {
						that.swipers = res.data.banners
					},
					fail: () => {},
					complete: () => {
						// this.loading = false;
					}
				});
			}
		}
	}
</script>

<style lang="scss">
.banner {
	width: 100%;
	height: 268rpx;
	margin: 30rpx auto 44rpx;
	.swiper {
		height: 268rpx;
	}
	.item {
		width: 686rpx;
		height: 268rpx;
		margin: 0 auto;
		border-radius: 14rpx;
		position: relative;
		display: block;
		overflow: hidden;
	}
	.img {
		display: block;
		width: 100%;
		height: 100%;
	}
	.tag {
		position: absolute;
		bottom: 0;
		right: 0;
		height: 34rpx;
		padding: 0 14rpx;
		line-height: 34rpx;
		color: #fff;
		background: #43a5f0;
		z-index: 10;
		border-top-left-radius: 14rpx;
	}
}
</style>
