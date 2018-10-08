<template lang="pug">
.test
  .test-header
  light-timeline(:items='items' :openTop='false' :openBottom='false')
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          tag: '2010年1月',
          color: 'yellow',
          content: '在国际乒联巡回赛总决赛中，许昕2-4不敌马龙，获得男单亚军。'
        },
        {
          tag: '2011年1月',
          type: 'circle',
          color: 'orange',
          htmlMode: true,
          content: '<div style="color:#ed9153;">在斯洛文尼亚赛公开赛中，许昕4-2战胜马琳，获得男单冠军</div>'
        },
        {
          tag: '2011年9月',
          type: 'circle',
          content: '在第24届亚洲杯乒乓球赛男单决赛中，许昕2-4不敌马龙，获得亚军。'
        },
        {
          tag: '2012年5月',
          type: 'circle',
          content: '在中国公开赛男单比赛中，许昕连胜张继科、马龙夺得冠军。'
        },
        {
          tag: '2013年1月',
          type: 'star',
          content: '在世界排名上，许昕职业生涯首次登上世界第一的宝座。'
        },
        {
          tag: '2013年10月',
          type: 'star',
          color: 'orange',
          content: `在比利时举行的乒乓球世界杯男单比赛中，许昕依次战胜闫安、奥恰洛夫、萨姆索诺夫，收获个人首个世界三大赛单打冠军.\n\n也成为自1953年中国踏足国际乒乓球赛事以来，第一位获得乒乓球男单世界冠军的左手运动员。`
        },
        {
          tag: '2014年1月',
          type: 'circle',
          content: '在国际乒联巡回赛总决赛男单决赛中，许昕以4-3击败队友马龙，获得冠军。'
        }
      ]
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
  }
}
</script>
<style lang="scss">
.test-header {
  background: url("./../assets/xuxin.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.7;
  height: 200px;
}
</style>

