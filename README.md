# vue-flex
Some easy vue components basis on css’ flex , focus on layout.
### 用法
##### 圣杯布局
```html
<div-flex>
  <div-item fixed basis="150px">左侧固定</div-item>
  <div-item expand>中间伸展</div-item>
  <div-item fixed basis="150px">右侧固定</div-item>
</div-flex>
```
##### 比例布局
```html
<div-flex>
  <div-item fixed basis="10%">10%宽度</div-item>
  <div-item fixed basis="20%">20%宽度</div-item>
  <div-item fixed basis="30%">30%宽度</div-item>
  <div-item fixed basis="40%">40%宽度</div-item>
</div-flex>
```
##### 等比布局
```html
<div-flex>
  <div-item fixed basis="1">等比宽度</div-item>
  <div-item fixed basis="1">等比宽度</div-item>
  <div-item fixed basis="1">等比宽度</div-item>
</div-flex>
```
