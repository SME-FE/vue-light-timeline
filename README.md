
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
const theme = 'red';
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
          htmlMode: true,
          content: `<div style="color: ${theme};"> =v = </div>`
        }
      ]
    }
  }
}
</script>
```
- slot

Or you can pass slots for each part of the timeline:

```html
<template>
  <light-timeline :items='items'>
    <template slot='tag' slot-scope='{ item }'>
      {{item.date}}
    </template>
    <template slot='symbol' slot-scope='{ item }'>
      <div class="my_icon_class"><i :class="item.class"></i><div>
    </template>
    <template slot='content' slot-scope='{ item }'>
      {{item.content}}
    </template>
  </light-timeline>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          tag: '2018-01-12',
          content: 'hallo',
          class: 'fas fa-star'
        },
        {
          tag: '2018-01-13',
          content: 'world',
          class: 'far fa-star'
        },
        {
          tag: '2018-01-14',
          content: 'other',
          class: 'fas fa-star'
        }
      ]
    }
  }
}
</script>
```
here is [example demo](https://sme-fe.github.io/vue-light-timeline/#/slot) and [code](https://github.com/SME-FE/vue-light-timeline/blob/master/example/components/Slot.vue)

## Demo

- [Demo1](https://sme-fe.github.io/vue-light-timeline/#/)
- [Demo2 slot](https://sme-fe.github.io/vue-light-timeline/#/slot)

Hei, let's gonna try it online, have fun ~~

[![Edit vue-light-timeline example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/yvrml426vx)

### demo screenshot

<!-- ![许昕](./docs/vue-light-timeline.jpg) -->
<img alt='许昕' src='./docs/normal.jpg' width='40%'/>

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
htmlMode | output real HTML as content | Boolean | -- | false
type | point type | String | circle, star | circle
color | point color | String | purple,orange,yellow,or hex colors RGB colors so on... | purple

### slot

- tag: slot='tag' replace the default tag
- symbol: slot='symbol' replace the default icon
- content: slot='content' replace the default content

### Attributes

参数 | 说明 | 类型 | 可选值	 | 默认值
----|------|----|----|----
items | timeline 需要展示的数据  | Array | -- | --

### items

参数 | 说明 | 类型 | 可选值	 | 默认值
----|------|----|----|----
tag | item 标签（可选） | String | -- | --
content | item 内容 | String | -- | --
htmlMode | 是否HTML字串 | Boolean | -- | false
type | point 类型 | String | circle, star | circle
color | point 颜色 | String | purple,orange,yellow,or hex colors RGB colors so on... | purple

### slot 插槽

- tag: slot='tag' 替换原先的标签
- symbol: slot='symbol' 替换原先的图标
- content: slot='content' 替换原先的内容

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/6712767?s=460&v=4" width="100px;"/><br /><sub><b>hwencc</b></sub>](https://github.com/hwen)<br />[💻](https://github.com/hwen/vue-light-timeline/commits?author=hwen "Code") [🤔](#ideas-hwen "Ideas, Planning, & Feedback") [💡](#example-hwen "Examples") [📖](https://github.com/hwen/vue-light-timeline/commits?author=hwen "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/12069729?s=460&v=4" width="100px;"/><br /><sub><b>luyilin</b></sub>](https://github.com/luyilin)<br />[💻](https://github.com/hwen/vue-light-timeline/commits?author=luyilin "Code") [🤔](#ideas-luyilin "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/1368836?s=460&v=4" width="100px;"/><br /><sub><b>vratojr</b></sub>](https://github.com/vratojr)<br />[💻](https://github.com/hwen/vue-light-timeline/commits?author=vratojr "Code") [🤔](#ideas-vratojr "Ideas, Planning, & Feedback") [📖](https://github.com/hwen/vue-light-timeline/commits?author=vratojr "Documentation") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind are welcome!
## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, hwen <hwenleung@gmail.com>
