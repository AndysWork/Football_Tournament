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
      <b>Top 5 Players Stat</b>
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
        { key: "teamlogo", label: "Team Name" },
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
        { key: "teamlogo", label: "Team Name" },
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
          imagePath: require("../assets/images/Sporting_FC.png"),
          Team: "Sporting FC",
          GP: "0",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "0",
          GS: "0",
          GC: "0",
          GD: "0"
        },
        {
          imagePath: require("../assets/images/Inflight_United.png"),
          Team: "Inflight United",
          GP: "0",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "0",
          GS: "0",
          GC: "0",
          GD: "0"
        },
        {
          imagePath: require("../assets/images/Vandals.jpg"),
          Team: "Vandals",
          GP: "0",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "0",
          GS: "0",
          GC: "0",
          GD: "0"
        },
        {
          imagePath: require("../assets/images/The_Bad_Knees.jpg"),
          Team: "The Bad Knees",
          GP: "0",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "0",
          GS: "0",
          GC: "0",
          GD: "0"
        }
      ],
      items2: [
        {
          imagePath: require("../assets/images/PTS_Panthers.jpg"),
          Team: "PTS Panthers",
          GP: "0",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "0",
          GS: "0",
          GC: "0",
          GD: "0"
        },
        {
          imagePath: require("../assets/images/Golden_Boot.jpg"),
          Team: "Golden Boot",
          GP: "0",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "0",
          GS: "0",
          GC: "0",
          GD: "0"
        },
        {
          imagePath: require("../assets/images/Rangers_Fc.png"),
          Team: "FMS Rangers",
          GP: "0",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "0",
          GS: "0",
          GC: "0",
          GD: "0"
        },
        {
          imagePath: require("../assets/images/Werewolves_Fc.jpg"),
          Team: "WEREWOLVES FC",
          GP: "0",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "0",
          GS: "0",
          GC: "0",
          GD: "0"
        }
      ],
      items3: [
        {
          Name: "",
          Team: "",
          Goals: "",
          Asists: "",
          CleanSheet: "",
          MOTM: "",
          Rating: ""
        }
      ]
    };
  }
};
</script>
