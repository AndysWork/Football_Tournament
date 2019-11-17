<template>
  <div>
    <div class="p-3">
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
    <div class="container-fluid p-3 align-players">
      <div v-if="getTeamDetails" class="row">
        <div v-for="(team,index) in getTeamDetails" v-bind:key="index">
          <div v-for="(player, index) in team.players" v-bind:key="index">
            <div>
              <b-card :title="player.name" style="max-width: 20rem;" class="mb-2">
                <!-- <b-card-text>{{player.email}}</b-card-text> -->
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teams",
  data() {
    return {
      selected: null,
      selectedTeam: [],
      imagePath: require("../assets/images/4.jpg"),
      options: [
        { value: "null", text: "Choose your Ninjas" },
        { value: 1, text: "Platform Footballers" }
      ],
      teams: [
        {
          id: 1,
          teamName: "Platform Footballers",
          players: [
            {
              name: "Madhavan Sekar (C)",
              email: "Madhavan.Sekar@rockwellcollins.com"
            },
            {
              name: "Shubham Dangare",
              email: "shubham.kashunath.dangare@rockwellcollins.com"
            },
            {
              name: "Sachin Shet",
              email: "sachin.shet@rockwellcollins.com"
            },
            {
              name: "Manjunath Gangadhara",
              email: "manjunath.gangadhara@rockwellcollins.com"
            },
            {
              name: "Anil Vemula",
              email: "anil.kumar.vemula1@rockwellcollins.com"
            },
            {
              name: "Sai Sadineni",
              email: "sai.anvesh.sadineni@rockwellcollins.com"
            },
            {
              name: "Jasim Kandi",
              email: "jasim.vadakke.nagathan.kandi@rockwellcollins.com"
            },
            {
              name: "Franklin Francis",
              email: "franklin.francis@rockwellcollins.com"
            }
          ]
        }
      ]
    };
  },
  computed: {
    getTeamDetails() {
      return this.teams.filter(team => team.id === this.selected);
      // return selectedTeam;
    }
  }
};
</script>

<style>
.align-players {
  display: flex;
  justify-content: center;
}
</style>