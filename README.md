# 多维数据分析`mda`

使用web及nosql技术，对数据挖掘作业的一次创新作答，颠覆传统sql教学。

- 项目架构：node.js/ express+jade+lowdb
- 作业及作答文档：[《数据仓库与数据挖掘》作业3.doc](https://raw.githubusercontent.com/fritx/mda/dev/《数据仓库与数据挖掘》作业3.doc)

## 完成进度

- [x] 业务数据库的测试数据生成
- [x] 将业务数据导入数据仓库
- [x] 展现数据表格
- [ ] 多维分析操作
- [ ] 代码/数据注解

## 搭建及运行指南

1. 安装依赖

  ```
  $ cd mda
  $ npm install
  ```

2. 生成业务数据库的测试数据，产生db.json

  ```
  $ node testdata
  ```

3. 将业务数据库的数据导入数据仓库，产生dw.json

  ```
  $ node dataware
  ```

4. 启动服务，即可访问页面 <http://localhost:8115>

  ```
  $ node server
  ```
