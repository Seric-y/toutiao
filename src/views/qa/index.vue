<template>
	<div class="qa-container">
		<!-- 子路由出口 -->
		<router-view></router-view>
		<!-- 子路由出口 -->
		问答
	</div>
</template>

<script>
	export default {
		name: 'QaIndex',
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
	.qa-container{
		
	}
</style>
