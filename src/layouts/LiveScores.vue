<template>
  <div>
    <div class="container">
      <br />
      <div>
        <b>GROUP LEAGUE</b>
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
                      <i>{{match.result}}</i>
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
          <!-- <div>
            <b>Match Summary</b>
          </div>-->
          <div v-for="(selMatch,index) in isValueSelected" :key="index">
            <p>
              <b>Match Summary of </b>
              <img :src="selMatch.t1" class="score-image-class" />
              VS
              <img :src="selMatch.t2" class="score-image-class" />
            </p>
            {{selMatch.summary}}
          </div>
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
          time: "4:00 PM",
          result: "3 - 0",
          summary:
            "We have witnessed an awesome opening match of Futsal 1.0." +
            "Three Superb strikes from ABRAR helps Inflight United to clinch the first win, First Hatrick of Futsal 1.0." +
            "The other team members also played their part very well. On the other side Sporting FC had a bad day in the office." +
            "They have tried their best but failed to avoid the loss this time. So the final score was 3 - 0 in favour of Infligfht."
        },
        {
          id: 2,
          t1: require("../assets/images/Vandals.jpg"),
          t2: require("../assets/images/The_Bad_Knees.jpg"),
          time: "4:30 PM",
          result: "0 - 1",
          summary:
            "We have witnessed a really exciting match. It was a hard earned win for Bad Knees. A vintage strike from SEETHARAM" +
            " helped them to win their first match. Vandals was also in the verge of scoring their first goal but failed to convert." +
            "Spectators also had lots of great moments to cheer!!  So the final score was 1 - 0 in favour of Bad Knees."
        },
        {
          id: 3,
          t1: require("../assets/images/PTS_Panthers.jpg"),
          t2: require("../assets/images/Golden_Boot.jpg"),
          time: "4:50 PM",
          result: "1 - 0",
          summary:
            "Overall it was an entertaining match. It was a hard earned win for Bad Knees. A superb strike from THIRU" +
            " helped Panthers to win their first match. Golden Boot was also in the verge of scoring their first goal but failed to convert." +
            "It was like they had to keep their Golden Boot in the house!! So the final score was 1 - 0 in favour of PTS PANTHERS."
        },
        {
          id: 4,
          t1: require("../assets/images/Rangers_Fc.png"),
          t2: require("../assets/images/Werewolves_Fc.jpg"),
          time: "5:10 PM",
          result: "0 - 7",
          summary:
            "We have witnessed a raining of goals in this match. WEREWOLVES FC completely outplayed RANGERS. SRINIDHI fired three " +
            "bullets in the back of the net, second hatrick of Futsal 1.0. KOUSTAV scored a brace and SUMIT scored one." +
            "On the other Side nothing went correct for FMS RANGERS. Their Goal Keeper had a tough time and also one Own Goal happened due to " +
            "the misunderstanding in between players!! So the final score was 7 - 0 in favour of WEREWOLVES."
        },
        {
          id: 5,
          t1: require("../assets/images/Sporting_FC.png"),
          t2: require("../assets/images/Vandals.jpg"),
          time: "5:30 PM",
          result: "4 - 0",
          summary:
            "SPORTING FC is back on track. Captain ANOOP came to rescue his team from the last match defeat with two superb finish in the back of the net." +
            "AMIR played a crucial role in the way of victory with two great goals. Akhil was also rock solid in defence." +
            " VANDALS were lacking a lot in the finishing and also some fumble in the defene cause them the loss" +
            "So the final score was 4 - 0 in favour of SPORTING FC."
        },
        {
          id: 6,
          t1: require("../assets/images/PTS_Panthers.jpg"),
          t2: require("../assets/images/Rangers_Fc.png"),
          time: "5:50 PM",
          result: "3 - 0",
          summary:
            "PTS PANTHERS clinched their second win in a commandable way. Two great strike from SEENI & one from THIRU helped PANTHERS" +
            " to make their way a bit clear for Semi Finals. Their defence was rock solid. Rangers was trying hard on the first half but they were lacking" +
            " on finishing. Some arguments also happened but those are the part of a football game, right?" +
            "So the final score was 3 - 0 in favour of PTS PANTHERS. So the Day 1 of FUTSAL 1.0 ends with loads of great moments."
        },
        {
          id: 7,
          t1: require("../assets/images/PTS_Panthers.jpg"),
          t2: require("../assets/images/Werewolves_Fc.jpg"),
          time: "4:00 PM",
          result: "Stay Tuned!!",
          summary: "Stay Tuned!!"
        },
        {
          id: 8,
          t1: require("../assets/images/Inflight_United.png"),
          t2: require("../assets/images/The_Bad_Knees.jpg"),
          time: "4:30 PM",
          result: "Stay Tuned!!",
          summary: "Stay Tuned!!"
        },
        {
          id: 9,
          t1: require("../assets/images/Golden_Boot.jpg"),
          t2: require("../assets/images/Werewolves_Fc.jpg"),
          time: "4:50 PM",
          result: "Stay Tuned!!",
          summary: "Stay Tuned!!"
        },
        {
          id: 10,
          t1: require("../assets/images/Inflight_United.png"),
          t2: require("../assets/images/Vandals.jpg"),
          time: "5:10 PM",
          result: "Stay Tuned!!",
          summary: "Stay Tuned!!"
        },
        {
          id: 11,
          t1: require("../assets/images/Sporting_FC.png"),
          t2: require("../assets/images/The_Bad_Knees.jpg"),
          time: "5:30 PM",
          result: "Stay Tuned!!",
          summary: "Stay Tuned!!"
        },
        {
          id: 12,
          t1: require("../assets/images/Golden_Boot.jpg"),
          t2: require("../assets/images/Rangers_Fc.png"),
          time: "5:50 PM",
          result: "Stay Tuned!!",
          summary: "Stay Tuned!!"
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