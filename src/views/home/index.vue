<template>
	<div class="home-container">
		<!-- 子路由出口 -->
		<router-view></router-view>
		<!-- 子路由出口 -->
		首页
	</div>
</template>

<script>
	export default {
		name: 'HomeIndex',
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
	.home-container{
		
	}
</style>
