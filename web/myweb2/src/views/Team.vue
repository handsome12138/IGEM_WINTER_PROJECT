<template>
    <div class="team">
        <h1>Our Team</h1>
        <div class="member-card-box">
            <div v-for="member in members" :key="member.id" class='member-card'>
                <img :src="member.avatar" style="width:100%">
                <b>{{member.name}}</b>
                <p>{{member.info}}</p>
                <p><b>Contribution:</b>{{member.attr}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.team{
  padding-top:20px;
  .member-card-box{
      width:80%;
      display:flex;
      margin:auto;
      flex-wrap: wrap;
  }
  .member-card {
      img{
          border-radius:50px;
          width:100%;
      }
      b{
          text-align: left;
          padding: 1em;
      }
      p{
          text-align: left;
          padding: 1em;
          white-space: pre-line;
          b{
            padding:0;
          }
      }
      width:25%;
      // text-align:left;
  }
}
</style>

<script>
export default {
  data () {
    return {
      members: [
        {
          id: 1,
          name: '陈雨涵',
          avatar: require('@/assets/avatars/chen.jpg'),
          info: "I'm Electricity Chan, a girl with a cat, who is trying to finish the daily grind while amusing herself.",
          attr: '\nThe art designer of the team,who designed the logo, webpage style, poster, and PPT template.'
        },
        {
          id: 2,
          name: '程纪瓯',
          avatar: require('@/assets/avatars/cheng.jpg'),
          info: "Hey I'm Kristall, a girl from Lishui, Zhejiang. Glad to participate in our iGem project. Come and tell me your stories!",
          attr: '\nSignaling pathway selection, design in each chamber, future, presentation'
        },
        {
          id: 3,
          name: '黄冠睿',
          avatar: require('@/assets/avatars/huang.jpg'),
          info: 'el psy kongroo',
          attr: '\nOriginal topic proponent. Take part in most parts of the total design and also carry out the responsibility of several specific parts such as amount control, intercellular communication, etc.'
        },
        {
          id: 4,
          name: '姬俊哲',
          avatar: require('@/assets/avatars/ji.jpg'),
          info: 'This is Junzhe Ji.\nTell your heart to never stop.\nLock your eyes only on the spot.',
          attr: 'Wiki'
        },
        {
          id: 5,
          name: '雷江楚',
          avatar: require('@/assets/avatars/lei.jpg'),
          info: 'Joshua Rae\nZJU MBBS\nUWA BioMed\nand\nPre-igemer!',
          attr: '\nNamed project, integrated description，concepted design， proposed recording system，gene circuit and signaling pathways, constructed safety, HP'
        },
        {
          id: 6,
          name: '沈雨萱',
          avatar: require('@/assets/avatars/shen.jpg'),
          info: 'hi my name‘s Yuxuan Shen. Nice to meet you!'
        },
        {
          id: 7,
          name: '汪奕晨',
          avatar: require('@/assets/avatars/wang.jpg'),
          info: 'Handsome12138. \n Love you three thousand.'
        },
        {
          id: 8,
          name: '吴浩然',
          avatar: require('@/assets/avatars/wu.jpg'),
          info: "I'm Robby Wu, an undergraduate specialized in ecology, ZJU."
        },
        {
          id: 9,
          name: '于佳正',
          avatar: require('@/assets/avatars/yu.jpg'),
          info: 'Bjersgen，dream of Iron Man',
          attr: '\nHardware'
        },
        {
          id: 10,
          name: '张伯彦',
          avatar: require('@/assets/avatars/zhang.jpg'),
          info: 'The ending must be good, if it is not good enough, then it is not the ending.'
        },
        {
          id: 11,
          name: '郑小雨',
          avatar: require('@/assets/avatars/zheng.jpg'),
          info: 'this is my info'
        }
      ]
    }
  }
}
</script>
