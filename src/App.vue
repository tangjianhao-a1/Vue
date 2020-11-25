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
      <!-- <el-button @click="add">新增</el-button> -->
      <el-form :inline="true" :model="addUserInfo" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input
            v-model="addUserInfo.username"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            v-model="addUserInfo.noteInfo"
            placeholder="备注"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add">新增</el-button>
        </el-form-item>
      </el-form>
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
      <el-table-column align="center" prop="id" label="id" width="180">
      </el-table-column>
      <el-table-column align="center" prop="username" label="名称" width="180">
      </el-table-column>
      <el-table-column align="center" prop="noteInfo" label="备注" width="180">
      </el-table-column>
      <el-table-column align="center" prop="operate" label="操作" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

  <script>
import axios from "axios";
export default {
 
  methods: {
    queryUserInfo() {
      axios.get("http://81.68.177.149:8080/userInfo/query").then((res) => {
        console.log(res.data);
        this.tableData = res.data;
      });
    },
    add: function () {
      axios
        .post("http://81.68.177.149:8080/userInfo/add", {
          username: this.addUserInfo.username,
          noteInfo: this.addUserInfo.noteInfo,
        })
        .then(() => {
          this.addUserInfo.username = null;
          this.addUserInfo.noteInfo = null;
          this.$message.success("新增")
          this.queryUserInfo();
        }).catch(() => {

          this.$message.error("你的输入有误，请修改后重试")
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
      addUserInfo: {
        username: null,
        noteInfo: "",
      },
      tableData: [],
    };
  },
};
</script>
  