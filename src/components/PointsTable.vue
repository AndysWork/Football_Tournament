<template>
  <div>
    <br />
    <div class="text-center">
      <b>GROUP A</b>
    </div>
    <b-table
      striped
      bordered
      hover
      responsive
      :fields="fields1"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :items="items1"
    >
      <template v-slot:cell(teamlogo)="data">
        <router-link to="/tournament/teams">
          <img :src="data.item.imagePath" class="image-class" />
        </router-link>
      </template>
      <template v-slot:cell()="data">
        <i>{{data.value }}</i>
      </template>
    </b-table>
    <div class="text-center">
      <b>GROUP B</b>
    </div>
    <b-table striped bordered hover responsive :fields="fields2" :items="items2">
      <template v-slot:cell(teamlogo)="data">
        <router-link to="/tournament/teams">
          <img :src="data.item.imagePath" class="image-class" />
        </router-link>
      </template>
      <template v-slot:cell()="data">
        <i>{{data.value }}</i>
      </template>
    </b-table>
    <div class="text-center">
      <b>Top 5 Players Statistics</b>
    </div>
    <b-table striped bordered hover responsive :items="items3"></b-table>
  </div>
</template>

<script>
export default {
  name: "PointsTable",
  data() {
    return {
      sortBy: "Points",
      sortDesc: false,
      fields1: [
        { key: "teamlogo", label: "Team" },
        "GP",
        { key: "Points", sortable: true },
        "Win",
        "Draw",
        "Lost",
        "GS",
        "GC",
        "GD"
      ],
      fields2: [
        { key: "teamlogo", label: "Team" },
        "GP",
        { key: "Points", sortable: true },
        "Win",
        "Draw",
        "Lost",
        "GS",
        "GC",
        "GD"
      ],
      items1: [
        {
          imagePath: require("../assets/images/Inflight_United.png"),
          Team: "Inflight United",
          GP: "1",
          Points: "3",
          Win: "1",
          Draw: "0",
          Lost: "0",
          GS: "3",
          GC: "0",
          GD: "3"
        },
        {
          imagePath: require("../assets/images/Sporting_FC.png"),
          Team: "Sporting FC",
          GP: "2",
          Points: "3",
          Win: "1",
          Draw: "0",
          Lost: "1",
          GS: "4",
          GC: "3",
          GD: "1"
        },
        {
          imagePath: require("../assets/images/The_Bad_Knees.jpg"),
          Team: "The Bad Knees",
          GP: "1",
          Points: "3",
          Win: "1",
          Draw: "0",
          Lost: "0",
          GS: "1",
          GC: "0",
          GD: "1"
        },
        {
          imagePath: require("../assets/images/Vandals.jpg"),
          Team: "Vandals",
          GP: "2",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "2",
          GS: "0",
          GC: "5",
          GD: "-5"
        }
      ],
      items2: [
        {
          imagePath: require("../assets/images/PTS_Panthers.jpg"),
          Team: "PTS Panthers",
          GP: "2",
          Points: "6",
          Win: "2",
          Draw: "0",
          Lost: "0",
          GS: "4",
          GC: "0",
          GD: "4"
        },
        {
          imagePath: require("../assets/images/Werewolves_Fc.jpg"),
          Team: "WEREWOLVES FC",
          GP: "1",
          Points: "3",
          Win: "1",
          Draw: "0",
          Lost: "0",
          GS: "7",
          GC: "0",
          GD: "7"
        },
        {
          imagePath: require("../assets/images/Golden_Boot.jpg"),
          Team: "Golden Boot",
          GP: "1",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "1",
          GS: "0",
          GC: "1",
          GD: "-1"
        },
        {
          imagePath: require("../assets/images/Rangers_Fc.png"),
          Team: "FMS Rangers",
          GP: "2",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "2",
          GS: "0",
          GC: "10",
          GD: "-10"
        }
      ],
      items3: [
        {
          Name: "Abrar",
          Team: "Inflight United",
          GP:1,
          Goals: 3,
          CleanSheet: 0,
          MOTM: 1,
          Rating: ""
        },
        {
          Name: "Srinidhi",
          Team: "Werewolves FC",
          GP: 1,
          Goals: 3,
          CleanSheet: 0,
          MOTM: 1,
          Rating: ""
        },
        {
          Name: "Thiru",
          Team: "PTS Panthers",
          GP: 2,
          Goals: 3,
          CleanSheet: 0,
          MOTM: 1,
          Rating: ""
        },
        {
          Name: "Koustav",
          Team: "Werewolves FC",
          GP: 1,
          Goals: 2,
          CleanSheet: 0,
          MOTM: 0,
          Rating: ""
        },
        {
          Name: "Seeni",
          Team: "PTS Panthers",
          GP: 2,
          Goals: 2,
          CleanSheet: 0,
          MOTM: 1,
          Rating: ""
        },
      ]
    };
  }
};
</script>
