# vue-flex
#### 两个简单的flex组件（父容器和子容器），帮助开发者快捷地实现多种flex布局。

##### 父容器仅定义以下样式
```css
flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content
```

##### 子容器仅定义以下样式
```css
order
flex-grow
flex-shrink
flex-basis
flex
align-self
```

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
