<script>
	export default {
		/*  赋值：getApp().globalData.websiteUrl = 'http://localhost:3000'  
			取值：console.log(getApp().globalData.websiteUrl) // 'http://localhost:3000' 
		*/
		globalData: {
			baseUrl: "baseUrl"
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import './common/css/common.scss';
	view {
		font-size: 30rpx;
	}
</style>
