<template>
    <main>
        <el-row class="menu">
            <el-col  class="logo">
                <el-menu mode="horizontal" >
                    <el-menu-item index="2">首页</el-menu-item>
                    <el-menu-item index="3">系统管理</el-menu-item>
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
    main {
        .logo {

        }
    }
</style>
