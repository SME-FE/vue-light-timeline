
## vue-light-timeline

A lightweight timeline components for vue2

![Travis branch](https://img.shields.io/travis/SME-FE/vue-light-timeline/master.svg?style=flat-square)
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
<img alt='许昕' src='./docs/vue-light-timeline.jpg' width='50%'/>

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/6712767?v=4" width="100px;"/><br /><sub>hwen</sub>](https://github.com/hwen)<br />[💬](#question "Answering Questions") [💻](https://github.com/SME-FE/vue-light-timeline/commits?author=hwen "Code") [🎨](#design "Design") [📖](https://github.com/SME-FE/vue-light-timeline/commits?author=hwen "Documentation") [💡](#example "Examples") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, hwen <hwenleung@gmail.com>
