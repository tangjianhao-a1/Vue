<template>
  <div>
    <div>
      <el-input
        v-model="input"
        placeholder="输入名称查询"
        style="width: 600px"
      ></el-input>
      <el-button style="margin-left: 20px; width: 100px" @click="query"
        >查询</el-button
      >
    </div>
    <div style="margin: 30px 0 10px 0">
      <el-button @click="add">新增</el-button>
      <el-button style="margin-left: 570px" @click="remove">删出</el-button>
    </div>
    <el-table
      :data="tableData"
      height="200"
      border
      stripe
      size="mini"
      style="width: 100%"
    >
      <el-table-column align="center" prop="number" label="id" width="180">
      </el-table-column>
      <el-table-column align="center" prop="name" label="名称" width="180">
      </el-table-column>
      <el-table-column align="center" prop="remarks" label="备注" width="180">
      </el-table-column>
      <el-table-column align="center" prop="operate" label="操作" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

  <script>
export default {
  methods: {
    add: function () {
      this.tableData.push({
        number: "2",
        name: "李四",
        remarks: "脾气大",
        operate: "修改 删出",
      });
    },
    remove: function () {
      this.tableData.pop();
    },
    query: function () {  
      //1.获取input的值
      var inputs = this.input;  
    
      //2.获取tableData的值
      var table = this.tableData;
    
      function query(name) {
       //3.先写一个空数组，然后遍历，把满足条件的值放进去 ，
        var newArr = [];
       //4.把table遍历一遍
        for (var i = 0; i < table.length; i++) {
          var itm = table[i];
          var name2 = itm.name;
          if (name == name2) {
            newArr.push(itm);
          }
        }
        return newArr;
      }
      var re = query(inputs);
      this.tableData = re;
    },
    
  },

  data() {
    return {
      input: "",
      tableData: [
        {
          number: "1",
          name: "张三",
          remarks: "这是好人",
          operate: "修改 删出",
        },
        {
          number: "2",
          name: "李四",
          remarks: "脾气大",
          operate: "修改 删出",
        },
      ],
    };
  },
};
</script>
  