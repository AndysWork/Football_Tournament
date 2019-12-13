<template>
  <div>
    <br />
    <div class="text-center">
      <b>Top Players Statistics</b>
    </div>
    <b-table striped bordered hover responsive :fields="fields3" :items="items3">
      <template v-slot:cell(logo)="data">
        <router-link to="/tournament/teams">
          <img :src="data.item.Team" class="image-class" />
        </router-link>
      </template>
      <template v-slot:cell()="data">
        <i>{{data.value}}</i>
      </template>
    </b-table>
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
    <b-table
      striped
      bordered
      hover
      responsive
      :fields="fields2"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :items="items2"
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
  </div>
</template>

<script>
export default {
  name: "PointsTable",
  data() {
    return {
      sortBy: "Points",
      sortDesc: true,
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
      fields3: [
        "Name",
        { key: "logo", label: "Team" },
        "GP",
        "Goals",
        "Assists",
        "MOTM",
        "Rating"
      ],
      items1: [
        {
          imagePath: require("../assets/images/Inflight_United.png"),
          Team: "Inflight United",
          GP: "3",
          Points: "6",
          Win: "3",
          Draw: "0",
          Lost: "0",
          GS: "11",
          GC: "1",
          GD: "10"
        },
        {
          imagePath: require("../assets/images/Sporting_FC.png"),
          Team: "Sporting FC",
          GP: "3",
          Points: "4",
          Win: "2",
          Draw: "0",
          Lost: "1",
          GS: "6",
          GC: "3",
          GD: "3"
        },
        {
          imagePath: require("../assets/images/The_Bad_Knees.jpg"),
          Team: "The Bad Knees",
          GP: "3",
          Points: "2",
          Win: "1",
          Draw: "0",
          Lost: "2",
          GS: "1",
          GC: "4",
          GD: "-3"
        },
        {
          imagePath: require("../assets/images/Vandals.jpg"),
          Team: "Vandals",
          GP: "3",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "3",
          GS: "1",
          GC: "11",
          GD: "-10"
        }
      ],
      items2: [
        {
          imagePath: require("../assets/images/Werewolves_Fc.jpg"),
          Team: "WEREWOLVES FC",
          GP: "3",
          Points: "6",
          Win: "3",
          Draw: "0",
          Lost: "0",
          GS: "10",
          GC: "0",
          GD: "10"
        },
        {
          imagePath: require("../assets/images/PTS_Panthers.jpg"),
          Team: "PTS Panthers",
          GP: "3",
          Points: "4",
          Win: "2",
          Draw: "0",
          Lost: "1",
          GS: "4",
          GC: "1",
          GD: "3"
        },
        {
          imagePath: require("../assets/images/Golden_Boot.jpg"),
          Team: "Golden Boot",
          GP: "3",
          Points: "2",
          Win: "1",
          Draw: "0",
          Lost: "2",
          GS: "4",
          GC: "4",
          GD: "0"
        },
        {
          imagePath: require("../assets/images/Rangers_Fc.png"),
          Team: "FMS Rangers",
          GP: "3",
          Points: "0",
          Win: "0",
          Draw: "0",
          Lost: "3",
          GS: "1",
          GC: "14",
          GD: "-13"
        }
      ],
      items3: [
        {
          Name: "Abrar",
          Team: require("../assets/images/Inflight_United.png"),
          GP: 4,
          Goals: 7,
          Assists: 4,
          MOTM: 2,
          Rating: 110
        },
        {
          Name: "Srinidhi",
          Team: require("../assets/images/Werewolves_Fc.jpg"),
          GP: 5,
          Goals: 5,
          Assists: 3,
          MOTM: 2,
          Rating: 83
        },
        {
          Name: "Koustav",
          Team: require("../assets/images/Werewolves_Fc.jpg"),
          GP: 5,
          Goals: 4,
          Assists: 2,
          MOTM: 2,
          Rating: 68
        },
        {
          Name: "Gourab",
          Team: require("../assets/images/Inflight_United.png"),
          GP: 4,
          Goals: 4,
          Assists: 3,
          MOTM: 1,
          Rating: 65
        },
        {
          Name: "Thiru",
          Team: require("../assets/images/PTS_Panthers.jpg"),
          GP: 5,
          Goals: 4,
          Assists: 1,
          MOTM: 1,
          Rating: 55
        },
        {
          Name: "Sumit",
          Team: require("../assets/images/Werewolves_Fc.jpg"),
          GP: 5,
          Goals: 3,
          Assists: 2,
          MOTM: 1,
          Rating: 50
        },
        {
          Name: "Madhavan",
          Team: require("../assets/images/Golden_Boot.jpg"),
          GP: 3,
          Goals: 3,
          Assists: 1,
          MOTM: 1,
          Rating: 45
        },
        {
          Name: "Seeni",
          Team: require("../assets/images/PTS_Panthers.jpg"),
          GP: 5,
          Goals: 2,
          Assists: 2,
          MOTM: 1,
          Rating: 40
        },
        {
          Name: "Anoop",
          Team: require("../assets/images/Sporting_FC.png"),
          GP: 4,
          Goals: 3,
          Assists: 2,
          MOTM: 0,
          Rating: 42
        },
        {
          Name: "Kunal",
          Team: require("../assets/images/Inflight_United.png"),
          GP: 3,
          Goals: 2,
          Assists: 2,
          MOTM: 0,
          Rating: 32
        },
        {
          Name: "Amir",
          Team: require("../assets/images/Sporting_FC.png"),
          GP: 4,
          Goals: 2,
          Assists: 0,
          MOTM: 1,
          Rating: 30
        },
        {
          Name: "Sahil",
          Team: require("../assets/images/Werewolves_Fc.jpg"),
          GP: 5,
          Goals: 2,
          Assists: 0,
          MOTM: 0,
          Rating: 22
        }
      ]
    };
  }
};
</script>
