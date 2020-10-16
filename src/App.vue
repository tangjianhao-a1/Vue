<template>
    <el-table
      :data="tableData"
      height="200"
      border
      stripe
      size= "mini"
      style="width: 100%" >
      <el-table-column
        align="center"
        prop="number"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="remarks"
        label="备注"
        width="180">
      </el-table-column>
       <el-table-column 
        align="center"
        prop="operate"
        label="操作"
        width="180">
      </el-table-column>
     
      
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{

            number: '1',
            name: '张三',
            remarks: '这是好人',
            operate: '修改 删出',
          }, {
            number: '2',
            name: '李四',
            remarks: '脾气大',
            operate: '修改 删出',

          }, {
            number: '3',
            name: '王二',
            remarks: '爱生气',
            operate: '修改 删出',
          },{
            number: '4',
            name: '赵六',
            remarks: '游手好闲',
            operate: '修改 删出',
          },{
            number: '5',
            name: '王二',
            remarks: '一事无成',
            operate: '修改 删出',
          },{
            number: '6',
            name: '麻子',
            remarks: '好吃懒做',
            operate: '修改 删出',
          }]
        }
      }
    }
  </script>