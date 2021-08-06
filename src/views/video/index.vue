<template>
	<div class="video-container">
		<!-- 子路由出口 -->
		<router-view></router-view>
		<!-- 子路由出口 -->
		视频
	</div>
</template>

<script>
	export default {
		name: 'VideoIndex',
		components: {},
		props: {},
		data() {
			return {
				active:0
			}
		},
		computed: {},
		watch: {},
		created() {},
		mounted() {},
		methods:{}
	}
</script>

<style lang="less" scoped>
	.video-container{
		
	}
</style>
