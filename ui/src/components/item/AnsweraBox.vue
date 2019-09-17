<template>
  <div>
    <div v-for="i in list" :key="i.url" class="answer-box">
      <section  class="box"  >
        <div class="rank">
          <div class="votes hidden-xs">
            {{i.votes}}
            <small>得票</small>
          </div>
          <div class="answers answered solved ml10 mr10">
            {{i.answers}}
            <small>解决</small>
          </div>
          <div class="views hidden-xs viewsword0to99">
            <span>{{i.views}}</span>
            <small>浏览</small>
          </div>
        </div>

        <div class="summary">
          <ul class="author list-inline">
            <li>
              <a :href="i.authorUrl">{{i.authornName}}</a>
              <span class="split"></span>
              <a :href="'https://segmentfault.com/'+i.url">{{i.publishTime}}</a>
            </li>
          </ul>
          <h2 class="title">
            <a :href="'https://segmentfault.com/'+i.url">{{i.title}}</a>
          </h2>

          <ul class="taglist--inline ib">
            <li v-for="tag in i.tags" :key="tag.id" class="tagPopup">
              <a class="tag" :href="'https://segmentfault.com/'+tag.link">
              <template v-if="tag.img?true:false">
                <img :src="tag.img">
              </template>
              {{tag.name}}</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
export default {
  props: ["list"]
};
</script>



<style lang="stylus">
.hidden-xs {
  display: none !important;
}

.answer-box {
  .box {
    padding: 0.1rem 0;
    margin: 0;
    border-bottom: 0.01rem solid #eee;

    .split:before {
      content: '·';
      color: #ddd;
    }

    .rank {
      margin-right: 0.1rem;
      font-size: 0.16rem;
      float: left;
      text-align: center;
      line-height: 1.2;

      .solved {
        background-color: #009A61;
        color: #fff;
      }

      .votes, .views {
        display: inline-block;
        padding-top: 3px;
        width: 45px;
        height: 42px;
        color: #757575;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
      }

      .answers {
        width: 36px;
        height: 40px;
        margin: 0 6px;
        color: #AD3A37;
      }

      .answered {
        color: #017E66;
        background: rgba(1, 126, 102, 0.08);
        border: 1px solid rgba(1, 126, 102, 0.16);
      }

      .viewsword0to99 {
        color: #999;
      }

      small {
        display: block;
        font-size: 12px;
      }
    }

    .summary {
      overflow: auto;
      overflow-x: hidden;
    }

    .author {
      margin-bottom: 0;
      color: #999;
      font-size: 13px;

      a {
        color: #999;
        outline: 0;
      }
    }

    .list-inline {
      line-height: 20px;
      padding-left: 0;
      list-style: none;
      margin-left: -5px;

      >li {
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
      }
    }

    .title {
      font-size: 14px;
      display: inline-block;
      margin: 0 5px 0 0;
      height: 22px;
      line-height: 22px;

      a {
        color: #333;
        text-decoration: none;
        font-weight: normal;

        &:visited {
          font-weight: 400;
        }
      }
    }

    .ib.taglist--inline, .ib.taglist--block {
      margin: 0;
      display: inline-block;
    }

    .taglist--inline, .taglist--block {
      list-style: none;
      padding: 0;
      font-size: 0;
    }

    .taglist--inline>li:last-child {
      margin-right: 0;
    }

    .taglist--inline>li {
      display: inline-block;
      margin-right: 5px;
    }

    .taglist--inline li, .taglist--block li {
      padding: 0;
      font-size: 13px;
    }
  }

  .tag {
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    display: inline-block;
    padding: 0 6px;
    color: #017E66;
    background-color: rgba(1, 126, 102, 0.08);
    font-weight: normal;
    text-align: center;
  }
  .tag img{
    width: 16px;
    height: 16px;
    margin-right: 5px;
    margin-top: -1px;
    vertical-align: middle;
  }
}
</style>
