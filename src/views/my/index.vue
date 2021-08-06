<template>
	<div class="my-container">
		<!-- 未登录 -->
		<div v-if="!user" class="header not-login">
			<div class="login-btn" @click="$router.push('/login')">
				<img class="mobile-img" src="~@/assets/mobile.png" alt="">
				<span class="text">登录 / 注册</span>
			</div>
		</div>
		<!-- 未登录 -->

		<!-- 已登录 -->
		<div v-else class="header user-info">
			<div class="base-info">
				<div class="left">
					<van-image 
					class="avatar"
					:src="userInfo.photo"
					round 
					fit="cover" 
					/>
					<span class="name">{{userInfo.name}}</span>
				</div>
				<div class="right">
					<van-button size="mini" round>编辑资料</van-button>
				</div>
			</div>
			<div class="data-stats">
				<div class="data-item">
					<div class="count">{{userInfo.art_count}}</div>
					<span class="text">头条</span>
				</div>
				<div class="data-item">
					<div class="count">{{userInfo.follow_count}}</div>
					<span class="text">关注</span>
				</div>
				<div class="data-item">
					<div class="count">{{userInfo.fans_count}}</div>
					<span class="text">粉丝</span>
				</div>
				<div class="data-item">
					<div class="count">{{userInfo.like_count}}</div>
					<span class="text">获赞</span>
				</div>
			</div>
		</div>
		<!-- 已登录 -->

		<!-- 宫格导航 -->
		<van-grid class="grid-nav" :column-num="2" clickable>
			<van-grid-item class="grid-item">
				<i slot="icon" class="toutiao toutiao-shoucang"></i>
				<span slot="text" class="text">收藏</span>
			</van-grid-item>
			<van-grid-item class="grid-item">
				<i slot="icon" class="toutiao toutiao-lishi"></i>
				<span slot="text" class="text">历史</span>
			</van-grid-item>
		</van-grid>
		<!-- 宫格导航 -->

	
		<van-cell title="消息通知" is-link/>
		<van-cell class="mb-9" title="小智同学" is-link/>
		<van-cell
		 v-if="user" 
		 class="logout-cell" 
		 title="退出登录"
		 clickable=""
		 @click="onLogout"/>

	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	import {getUserInfo} from '@/api/user'
	export default {
		name: 'MyIndex',
		components: {},
		props: {},
		data() {
			return {
				userInfo:''
			}
		},
		computed: {
			...mapState(['user'])
		},
		watch: {},
		created() {
			// 用户登录，则请求加载用户信息数据
			if(this.user){
				this.loadUserInfo()
			}
		},
		mounted() {},
		methods: {
			onLogout(){
				// 退出提示
				this.$dialog.confirm({
				  title: '确认退出吗？',
				})
				  .then(() => {
				    // on confirm
						console.log('确认执行这里')
				// 确认退出：清除登录状态， （容器中的user + 本地存储中的 user）
					this.$store.commit('setUser',null)
				  })
				  .catch(() => {
				    // on cancel
						console.log('取消执行这里')
				  });
			},
			
			async loadUserInfo(){
				try{
					const {data} =await getUserInfo()
					this.userInfo=data.data
					console.log(data)
				}catch(err){
					this.$toast('获取失败')
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.my-container {
		.header {
			height: 361px;
			background: url(~@/assets/banner.png);
			background-size: cover;

		}

		.not-login {
			display: flex;
			justify-content: center;
			align-items: center;

			.login-btn {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.mobile-img {
					width: 132px;
					height: 132px;
					margin-bottom: 15px;
				}

				.text {
					font-size: 28px;
					color: #fff;
				}
			}
		}

		.user-info {
			.base-info {
				height: 231px;
				padding: 76px 32px 23px;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left {
					display: flex;
					align-items: center;

					.avatar {
						width: 132px;
						height: 132px;
						border: 4px solid #fff;
						margin-right: 23px;
					}

					.name {
						font-size: 30px;
						color: #fff;
					}
				}
			}

			.data-stats {
				height: 130px;
				display: flex;

				.data-item {
					height: 130px;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: #fff;

					.count {
						font-size: 36px;
					}

					.text {
						font-size: 23px;
					}
				}
			}

		}

		.grid-nav {
			margin-bottom: 15px;

			.grid-item {
				height: 141px;

				i.toutiao {
					font-size: 45px;
				}

				.toutiao-shoucang {
					color: #eb5253;
				}

				.toutiao-lishi {
					color: #ff9d1d;
				}

				span.text {
					font-size: 28px;
				}
			}
		}

		
		.mb-9{
			margin-bottom: 15px;
		}
		.logout-cell {
			height: 105px;
			text-align: center;
			line-height: 60px;
			.van-cell__title {
				color: #d86262;
			}
			
		}
	}
</style>
