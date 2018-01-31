
## vue-light-timeline

A lightweight timeline components for vue2

![Travis branch](https://img.shields.io/travis/SME-FE/vue-light-timeline/master.svg?style=flat-square)
<!-- ![coverage](https://img.shields.io/coveralls/github/SME-FE/vue-light-timeline/master.svg?style=flat-square) -->
![download](https://img.shields.io/npm/dm/vue-light-timeline.svg?style=flat-square)
![version](https://img.shields.io/npm/v/vue-light-timeline.svg?style=flat-square)
![license](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)

## install

```shell
yarn add vue-light-timeline
```

if you prefer npm:

```shell
npm i vue-light-timeline
```

## usage

```js
import Vue from 'vue';
import LightTimeline from 'vue-light-timeline';

Vue.use(LightTimeline);
```

```html
<template>
  <light-timeline :items='items'></light-timeline>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          tag: '2018-01-12',
          content: 'hallo'
        },
        {
          tag: '2018-01-13',
          color: '#dcdcdc',
          type: 'circle',
          content: 'world'
        },
        {
          type: 'star',
          tag: '2018-01-14',
          content: '=v ='
        }
      ]
    }
  }
}
</script>
```

## Demo

[https://sme-fe.github.io/vue-light-timeline/#/](https://sme-fe.github.io/vue-light-timeline/#/)

Hei, let's gonna try it online, have fun ~~

[![Edit vue-light-timeline example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/yvrml426vx)

### demo screenshot

<!-- ![许昕](./docs/vue-light-timeline.jpg) -->
<img alt='许昕' src='./docs/vue-light-timeline.jpg' style='height: 600px;'/>

## docs

### Attributes

Attribute | Description | Type | Accepted values	 | Default
----|------|----|----|----
items | timeline content data  | Array | -- | --

### items

Attribute | Description | Type | Accepted values	 | Default
----|------|----|----|----
tag | item tag | String | -- | --
content | item content | String | -- | --
type | point type | String | circle, star | circle
color | point color | String | purple,orange,yellow,or hex colors RGB colors so on... | purple

### Attributes

参数 | 说明 | 类型 | 可选值	 | 默认值
----|------|----|----|----
items | timeline 需要展示的数据  | Array | -- | --

### items

参数 | 说明 | 类型 | 可选值	 | 默认值
----|------|----|----|----
tag | item 标签（可选） | String | -- | --
content | item 内容 | String | -- | --
type | point 类型 | String | circle, star | circle
color | point 颜色 | String | purple,orange,yellow,or hex colors RGB colors so on... | purple

