<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<view>列表渲染</view>
		<grid v-for="(item, index) in songList" :item="item" :key="index" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			songList: [
				{
					img: 'http://gw.alicdn.com/bao/uploaded/i3/1917047079/O1CN01VlEDD522AEJzpw3A5_!!2-item_pic.png_360x10000.jpg',
					title: 'Apple/苹果 iPhone 11 Pro',
					price: '8699.00',
					marketPrice: '￥8699.00'
				},
				{
					img: 'http://gw.alicdn.com/bao/uploaded/i3/1917047079/O1CN01VlEDD522AEJzpw3A5_!!2-item_pic.png_360x10000.jpg',
					title: 'Apple/苹果 iPhone 11 Pro',
					price: '8699.00',
					marketPrice: '￥8699.00'
				},
				{
					img: 'http://gw.alicdn.com/bao/uploaded/i3/1917047079/O1CN01VlEDD522AEJzpw3A5_!!2-item_pic.png_360x10000.jpg',
					title: 'Apple/苹果 iPhone 11 Pro',
					price: '8699.00',
					marketPrice: '￥8699.00'
				}
			]
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
