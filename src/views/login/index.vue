<template>
	<div class="login-container">
		<!-- 导航栏 -->
		<van-nav-bar class="page-nav-bar" title="登录" />

		<!-- 登录表单 -->
		<!--
      表单验证：
        1、给 van-field 组件配置 rules 验证规则
          参考文档：https://youzan.github.io/vant/#/zh-CN/form#rule-shu-ju-jie-gou
        2、当表单提交的时候会自动触发表单验证
           如果验证通过，会触发 submit 事件
           如果验证失败，不会触发 submit
     -->
		<van-form @submit="onSubmit">
			<van-field
			v-model="user.mobile"
			 name="手机号" 
			 placeholder="请输入手机号"
			>
				<i slot='left-icon' class="toutiao toutiao-shouji"></i>
		</van-field>
			<van-field
			v-model="user.code"
				name="验证码" 
				placeholder="请输入验证码"
				>
					<i slot='left-icon' class="toutiao toutiao-yanzhengma"></i>
					<template #button>
					    <van-button class="send-sms-btn" round="" size="small" type="default">发送验证码</van-button>
					  </template>
				</van-field>
			<div class="login-btn-wrap">
				<van-button class="login-btn"  block type="info" native-type="submit">登录</van-button>
			</div>
		</van-form>

	</div>
</template>

<script>
	import {login} from '@/api/user'
	
	export default {
		name: 'LoginIndex',
		components: {},
		props: {}, 
		data(){
			return{
				user: {
					mobile:'',	//手机号
					code: ''		//验证码
				}
			}
		},
		mounted() {},
		methods: {
		async	onSubmit () {
				// 1.获取表单数据
				const user = this.user
				
				// TODO 2.表单验证
				
				// 3.提交表单请求登录
				// console.log(login)
				try{
					const res = await login(user)
					console.log('登录成功',res)
				}catch(err){
					if(err.response.status===400){
						console.log('手机号或验证码错误')
					}else{
						
					console.log('登录失败,请稍后重试',err)
					}
				}
				
				// 4.根据请求响应效果处理后续操作
				
			}
		}
	}
</script>

<style scoped lang="less">
	.login-container{
		.toutiao{
			font-size: 37px;
		}
		.send-sms-btn{
			width: 156px;
			height: 46px;
			line-height: 46px;
			background: #ededed;
			font-size: 22px;
			color: #666;
		}
		.login-btn-wrap{
			padding: 53px 33px;
			.login-btn{
				color: #6db4fb;
				border: none;
			}
		}
	}
</style>
