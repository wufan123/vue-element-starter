<template>
    <div class="login content-center">
        <div class="login-logo">
        </div>
        <el-row class="login-box">
            <el-col>
                <el-form ref="form">
                    <el-form-item>
                        <span class="icon account"></span>
                        <el-input placeholder="请输入用户名">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <span class="icon password"></span>
                        <el-input placeholder="请输入密码">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox>记住密码</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary login-button">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
</script>
<style lang="less">
    .login {
        width: 100%;
        height: 100%;
        background: url("~assets/image/login/login_bg.png") no-repeat center;
        background-size: cover;
        .login-logo {
            position: absolute;
            top: 40px;
            left: 40px;
            height: 36px;
            width: 251px;
            background: url("~assets/image/login/login_logo.png") no-repeat center;
            background-size: cover;

        }
        .login-box {
            height: 394px;
            width: 350px;
            padding: 138px 30px 30px 30px;
            background: url("~assets/image/login/login_user.png") no-repeat center;
            background-size: cover;
            .login-button {
                width: 100%;
            }
            input{
                height: 44px;
                padding-left: 44px;
                line-height: 44px;
            }
            .icon {
                height: 19px;
                width: 19px;
                background-size: cover;
                position: absolute;
                background-size: cover;
                z-index: 99;
                top: 13px;
                left: 13px;
            }
            .account {
                background: url("~assets/image/login/login_account.png") no-repeat center;

            }
            .password {
                background: url("~assets/image/login/login_password.png") no-repeat center;
            }
        }
    }
</style>