<template lang="pug">
.test-slot
  light-timeline(:items='items')
    template(slot='symbol' slot-scope='{ item }')
      i.iconfont(:class='[`icon-${item.symbol}`, `${item.color}`]')
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          tag: 'Sunday',
          symbol: 'flash',
          color: 'yellow',
          content: '1111111'
        },
        {
          tag: 'Monday',
          symbol: 'sun',
          color: 'orange',
          content: '1111111'
        },
        {
          tag: 'Tueday',
          symbol: 'moon',
          color: 'blue',
          content: '2222222'
        },
        {
          tag: 'Wednesday',
          symbol: 'clound',
          color: 'blue',
          content: '2222222'
        },
        {
          tag: 'Thursday',
          symbol: 'leaf',
          color: 'green',
          content: '2222222'
        },
        {
          tag: 'Friday',
          symbol: 'moon',
          color: 'orange',
          content: '3333333'
        },
        {
          tag: 'Saturday',
          symbol: 'sun',
          color: 'yellow',
          content: '3333333'
        },
      ]
    }
  },
  created () {
  },
  methods: {
  },
  computed: {
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 837534 */
  src: url('//at.alicdn.com/t/font_837534_danbb31fcfl.eot');
  src: url('//at.alicdn.com/t/font_837534_danbb31fcfl.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_837534_danbb31fcfl.woff') format('woff'),
  url('//at.alicdn.com/t/font_837534_danbb31fcfl.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_837534_danbb31fcfl.svg#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-sun:before { content: "\e632"; }

.icon-moon:before { content: "\e633"; }

.icon-flash:before { content: "\e634"; }

.icon-leaf:before { content: "\e635"; }

.icon-clound:before { content: "\e636"; }

.test-slot {
  .iconfont {
    font-size: 24px;
    margin-left: -12px;
  }
  .item-symbol {
    bottom: 10px;
  }
  .yellow {
    color: #fadb3f;
  }
  .green {
    color: #7dd076;
  }
  .blue {
    color: #679ceb;
  }
  .orange {
    color: #f1b149;
  }
}
</style>

