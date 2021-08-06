<template>
	<div class="layout-container">
		<!-- 子路由出口 -->
		<router-view></router-view>
		<!-- 子路由出口 -->
		
		<!-- 标签导航栏 -->
		<!-- 
		 route: 开启路由模式
		 -->
		<van-tabbar class="layout-tabbar" route>
		  <van-tabbar-item to="/">
				<i slot='icon' class="toutiao toutiao-shouye"></i>
				<span>首页</span>
				</van-tabbar-item>
		  <van-tabbar-item to="/qa">
				<i slot='icon' class="toutiao toutiao-wenda"></i>
				<span>问答</span>
			</van-tabbar-item>
		  <van-tabbar-item to="/video">
				<i slot='icon' class="toutiao toutiao-shipin"></i>
				<span>视频</span>
			</van-tabbar-item>
		  <van-tabbar-item to="/my">
				<i slot='icon' class="toutiao toutiao-wode"></i>
				<span>{{$store.state.user ? '我的':'未登录'}}</span>
			</van-tabbar-item>
		</van-tabbar>
		<!-- 标签导航栏 -->
	</div>
</template>

<script>
	export default {
		name: 'LayoutIndex',
		components: {},
		props: {},
		data() {
			return {
				
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
	.layout-container{
		.layout-tabbar{
			i.toutiao{
				font-size: 40px;
			}
			span.text{
				font-size: 20px;
			}
		}
	}
</style>
