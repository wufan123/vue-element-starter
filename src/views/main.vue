<template>
    <main>
        <el-row class="menu">
            <el-col :span="3"  class="logo">
                <div class="logo"> </div>
            </el-col>
            <el-col :span="21"  class="logo">
                <el-menu theme="dark"  mode="horizontal" >
                    <el-menu-item index="2">首页</el-menu-item>
                    <el-menu-item index="3">客诉建议处理</el-menu-item>
                    <el-menu-item index="4">系统管理</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <el-row>
            <router-view>

            </router-view>
        </el-row>

    </main>
</template>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
<style lang="less">
    @import "~style/base-variables";
    main {
        .logo {
            display: inline-block;
            height: 70px;
            background: url("~assets/image/main/main_logo.png") no-repeat center;
            background-size: cover;
        }
    }
</style>
