<template>
    <div class="para-table">
        <el-table
        :data="tabledata"
        stripe
        style="width: 100%">
        <el-table-column
            prop="para"
            label="Parameters">
        </el-table-column>
        <el-table-column
            prop="desc"
            label="Description">
        </el-table-column>
        </el-table>
    </div>
</template>

<style lang="scss" scoped>
.para-table{
    width:70%;
    margin:auto;
}
</style>

<script>
export default {
    props:['tabledata']
}
</script>