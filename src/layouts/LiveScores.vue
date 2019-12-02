<template>
  <div>
    <div class="container">
      <br />
      <div>
        <b>Todays Match</b>
      </div>
      <div class="row">
        <div
          class="MultiCarousel"
          data-items="1,3,5,6"
          data-slide="1"
          id="MultiCarousel"
          data-interval="1000"
        >
          <div class="MultiCarousel-inner">
            <div v-for="(match,index) in matches" :key="index">
              <a href="#" @click.prevent="selectedMatch=match.id">
                <div class="item">
                  <div class="pad15">
                    <p>
                      <img :src="match.t1" class="score-image-class" />
                      VS
                      <img :src="match.t2" class="score-image-class" />
                    </p>
                    <p>
                      <i>{{match.time}}</i>
                    </p>
                    <p>
                      <i>Stay Tuned!!!</i>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <button class="btn btn-primary leftLst"></button>
          <button class="btn btn-primary rightLst"></button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center" v-if="isValueSelected">
          <div
            v-for="(selMatch,index) in isValueSelected"
            :key="index"
          >We will keep you posted SOON!!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;
export default {
  name: "livescores",
  data() {
    return {
      matches: [
        {
          id: 1,
          t1: require("../assets/images/Inflight_United.png"),
          t2: require("../assets/images/Sporting_FC.png"),
          time: "4:00 PM"
        },
        {
          id: 2,
          t1: require("../assets/images/Vandals.jpg"),
          t2: require("../assets/images/The_Bad_Knees.jpg"),
          time: "4:30 PM"
        },
        {
          id: 3,
          t1: require("../assets/images/PTS_Panthers.jpg"),
          t2: require("../assets/images/Golden_Boot.jpg"),
          time: "4:50 PM"
        },
        {
          id: 4,
          t1: require("../assets/images/Rangers_Fc.png"),
          t2: require("../assets/images/Werewolves_Fc.jpg"),
          time: "5:10 PM"
        },
        {
          id: 5,
          t1: require("../assets/images/Sporting_FC.png"),
          t2: require("../assets/images/Vandals.jpg"),
          time: "5:30 PM"
        },
        {
          id: 6,
          t1: require("../assets/images/PTS_Panthers.jpg"),
          t2: require("../assets/images/Rangers_Fc.png"),
          time: "5:50 PM"
        }
        // {
        //   gbPath: require("../assets/images/Golden_Boot.jpg"),
        //   wfPath: require("../assets/images/Werewolves_Fc.jpg"),
        //   iuPath: require("../assets/images/Inflight_United.png"),
        //   sfPath: require("../assets/images/Sporting_FC.png"),
        //   bkPath: require("../assets/images/The_Bad_Knees.jpg"),
        //   ppPath: require("../assets/images/PTS_Panthers.jpg"),
        //   rfPath: require("../assets/images/Rangers_Fc.png"),
        //   vPath: require("../assets/images/Vandals.jpg")
        // }
      ],
      selectedMatch: 0
    };
  },
  mounted() {
    $(document).ready(function() {
      var itemsMainDiv = ".MultiCarousel";
      var itemsDiv = ".MultiCarousel-inner";
      var itemWidth = "";

      $(".leftLst, .rightLst").click(function() {
        var condition = $(this).hasClass("leftLst");
        if (condition) click(0, this);
        else click(1, this);
      });

      ResCarouselSize();

      $(window).resize(function() {
        ResCarouselSize();
      });

      //this function define the size of the items
      function ResCarouselSize() {
        var incno = 0;
        var dataItems = "data-items";
        var itemClass = ".item";
        var id = 0;
        var btnParentSb = "";
        var itemsSplit = "";
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $("body").width();
        $(itemsDiv).each(function() {
          id = id + 1;
          var itemNumbers = $(this).find(itemClass).length;
          btnParentSb = $(this)
            .parent()
            .attr(dataItems);
          itemsSplit = btnParentSb.split(",");
          $(this)
            .parent()
            .attr("id", "MultiCarousel" + id);

          if (bodyWidth >= 1200) {
            incno = itemsSplit[3];
            itemWidth = sampwidth / incno;
          } else if (bodyWidth >= 992) {
            incno = itemsSplit[2];
            itemWidth = sampwidth / incno;
          } else if (bodyWidth >= 768) {
            incno = itemsSplit[1];
            itemWidth = sampwidth / incno;
          } else {
            incno = itemsSplit[0];
            itemWidth = sampwidth / incno;
          }
          $(this).css({
            transform: "translateX(0px)",
            width: itemWidth * itemNumbers
          });
          $(this)
            .find(itemClass)
            .each(function() {
              $(this).outerWidth(itemWidth);
            });

          $(".leftLst").addClass("over");
          $(".rightLst").removeClass("over");
        });
      }

      //this function used to move the items
      function ResCarousel(e, el, s) {
        var leftBtn = ".leftLst";
        var rightBtn = ".rightLst";
        var translateXval = "";
        var divStyle = $(el + " " + itemsDiv).css("transform");
        var values = divStyle.match(/-?[\d.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
          translateXval = parseInt(xds) - parseInt(itemWidth * s);
          $(el + " " + rightBtn).removeClass("over");

          if (translateXval <= itemWidth / 2) {
            translateXval = 0;
            $(el + " " + leftBtn).addClass("over");
          }
        } else if (e == 1) {
          var itemsCondition =
            $(el)
              .find(itemsDiv)
              .width() - $(el).width();
          translateXval = parseInt(xds) + parseInt(itemWidth * s);
          $(el + " " + leftBtn).removeClass("over");

          if (translateXval >= itemsCondition - itemWidth / 2) {
            translateXval = itemsCondition;
            $(el + " " + rightBtn).addClass("over");
          }
        }
        $(el + " " + itemsDiv).css(
          "transform",
          "translateX(" + -translateXval + "px)"
        );
      }

      //It is used to get some elements from btn
      function click(ell, ee) {
        var Parent =
          "#" +
          $(ee)
            .parent()
            .attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
      }
    });
  },
  computed: {
    isValueSelected() {
      return this.matches.filter(match => match.id === this.selectedMatch);
    }
  },
  methods: {
    check() {}
  }
};
</script>

<style>
.MultiCarousel {
  float: left;
  overflow: hidden;
  padding: 15px;
  width: 100%;
  position: relative;
}
.MultiCarousel .MultiCarousel-inner {
  transition: 1s ease all;
  float: left;
}
.MultiCarousel .MultiCarousel-inner .item {
  float: left;
}
.MultiCarousel .MultiCarousel-inner .item > div {
  text-align: center;
  padding: 10px;
  margin: 10px;
  background: #f1f1f1;
  color: #666;
}
.MultiCarousel .leftLst,
.MultiCarousel .rightLst {
  position: absolute;
  border-radius: 50%;
  top: calc(50% - 20px);
}
.MultiCarousel .leftLst {
  left: 0;
}
.MultiCarousel .rightLst {
  right: 0;
}

.MultiCarousel .leftLst.over,
.MultiCarousel .rightLst.over {
  pointer-events: none;
  background: #ccc;
}
.score-image-class {
  height: 45px;
  width: auto;
}
</style>