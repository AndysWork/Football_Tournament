<template>
  <div class="container-fluid">
    <br />
    <div>
      <b>3rd December (Group Stage)</b>
    </div>
    <div class="row justify-content-center">
      <div class="tree">
        <ul>
          <li>
            <a href="#">
              <img :src="sfPath" class="image-class" /> Sporting FC
              <br />vs
              <br />
              <img :src="iuPath" class="image-class" /> Inflight United
              <br />4.00 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="vPath" class="image-class" /> Vandals
              <br />vs
              <br />
              <img :src="bkPath" class="image-class" /> Bad Knees
              <br />4.30 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="ppPath" class="image-class" /> PTS Panthers
              <br />vs
              <br />
              <img :src="gbPath" class="image-class" /> Golden Boot
              <br />4.50 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="rfPath" class="image-class" /> FMS Rangers
              <br />vs
              <br />
              <img :src="wfPath" class="image-class" /> WEREWOLVES FC
              <br />5.10 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="sfPath" class="image-class" /> Sporting FC
              <br />vs
              <br />
              <img :src="vPath" class="image-class" /> Vandals
              <br />5.30 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="ppPath" class="image-class" /> PTS Panthers
              <br />vs
              <br />
              <img :src="rfPath" class="image-class" /> FMS Rangers
              <br />5.50 PM
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <b>4th December (Group Stage)</b>
    </div>
    <div class="row justify-content-center">
      <div class="tree">
        <ul>
          <li>
            <a href="#">
              <img :src="ppPath" class="image-class" /> PTS Panthers
              <br />vs
              <br />
              <img :src="wfPath" class="image-class" /> WEREWOLVES FC
              <br />4.00 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="iuPath" class="image-class" /> Inflight United
              <br />vs
              <br />
              <img :src="bkPath" class="image-class" /> Bad Knees
              <br />4.30 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="gbPath" class="image-class" /> Golden Boot
              <br />vs
              <br />
              <img :src="wfPath" class="image-class" /> WEREWOLVES FC
              <br />4.50 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="iuPath" class="image-class" /> Inflight United
              <br />vs
              <br />
              <img :src="vPath" class="image-class" /> Vandals
              <br />5.10 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="sfPath" class="image-class" /> Sporting FC
              <br />vs
              <br />
              <img :src="bkPath" class="image-class" /> Bad Knees
              <br />5.30 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="gbPath" class="image-class" /> Golden Boot
              <br />vs
              <br />
              <img :src="rfPath" class="image-class" /> FMS Rangers
              <br />5.50 PM
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <b>9th December (Semi Final)</b>
    </div>
    <div class="row justify-content-center">
      <div class="tree">
        <ul>
          <li>
            <a href="#">
              <img :src="dfPath" class="image-class" /> GA_1
              <br />vs
              <br />
              <img :src="dfPath" class="image-class" /> GB_2
              <br />4.00 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="dfPath" class="image-class" /> GB_1
              <br />vs
              <br />
              <img :src="dfPath" class="image-class" /> GA_2
              <br />4.40 PM
            </a>
          </li>
        </ul>
      </div>
    </div>
       <div>
      <b>11th December (Third Place & THE FINAL)</b>
    </div>
    <div class="row justify-content-center">
      <div class="tree">
        <ul>
          <li>
            <a href="#">
              <img :src="dfPath" class="image-class" /> S1_L
              <br />vs
              <br />
              <img :src="dfPath" class="image-class" /> S2_L
              <br />4.00 PM
            </a>
          </li>
          <li>
            <a href="#">
              <img :src="dfPath" class="image-class" /> S1_W
              <br />vs
              <br />
              <img :src="dfPath" class="image-class" /> S2_W
              <br />4.40 PM
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fixtures",
  data() {
    return {
      gbPath: require("../assets/images/Golden_Boot.jpg"),
      wfPath: require("../assets/images/Werewolves_Fc.jpg"),
      iuPath: require("../assets/images/Inflight_United.png"),
      sfPath: require("../assets/images/Sporting_FC.png"),
      bkPath: require("../assets/images/The_Bad_Knees.jpg"),
      ppPath: require("../assets/images/PTS_Panthers.jpg"),
      rfPath: require("../assets/images/Rangers_Fc.png"),
      vPath: require("../assets/images/Vandals.jpg"),
      dfPath: require("../assets/images/4.jpg")
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.tree ul {
  padding-top: 20px;
  position: relative;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}

.tree li {
  float: left;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 20px 5px 0 5px;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}

/*We will use ::before and ::after to draw the connectors*/

.tree li::before,
.tree li::after {
  content: "";
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 1px solid #ccc;
  width: 50%;
  height: 20px;
}
.tree li::after {
  right: auto;
  left: 50%;
  border-left: 1px solid #ccc;
}

/*We need to remove left-right connectors from elements without 
any siblings*/
.tree li:only-child::after,
.tree li:only-child::before {
  display: none;
}

/*Remove space from the top of single children*/
.tree li:only-child {
  padding-top: 0;
}

/*Remove left connector from first child and 
right connector from last child*/
.tree li:first-child::before,
.tree li:last-child::after {
  border: 0 none;
}
/*Adding back the vertical connector to the last nodes*/
.tree li:last-child::before {
  border-right: 1px solid #ccc;
  border-radius: 0 5px 0 0;
  -webkit-border-radius: 0 5px 0 0;
  -moz-border-radius: 0 5px 0 0;
}
.tree li:first-child::after {
  border-radius: 5px 0 0 0;
  -webkit-border-radius: 5px 0 0 0;
  -moz-border-radius: 5px 0 0 0;
}

/*Time to add downward connectors from parents*/
.tree ul ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 1px solid #ccc;
  width: 0;
  height: 20px;
}

.tree li a {
  border: 1px solid #ccc;
  padding: 5px 10px;
  text-decoration: none;
  color: #666;
  font-family: arial, verdana, tahoma;
  font-size: 15px;
  display: inline-block;

  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
}

/*Time for some hover effects*/
/*We will apply the hover effect the the lineage of the element also*/
.tree li a:hover,
.tree li a:hover + ul li a {
  background: moccasin;
  color: #000;
  border: 1px solid #94a0b4;
}
/*Connector styles on hover*/
.tree li a:hover + ul li::after,
.tree li a:hover + ul li::before,
.tree li a:hover + ul::before,
.tree li a:hover + ul ul::before {
  border-color: #94a0b4;
}
.image-class {
  height: 35px;
  width: auto;
}
</style>