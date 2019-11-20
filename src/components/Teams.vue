<template>
  <div>
    <div class="p-3">
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
    <div class="container-fluid p-3 align-players">
      <div class="row">
        <div v-if="getTeamDetails">
          <div v-for="(team,index) in getTeamDetails" v-bind:key="index">
            <div class="m-auto" v-for="(player, index) in team.players" v-bind:key="index">
              <div>
                <b-card
                  :title="player.name"
                  :img-src="imagePath"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                ></b-card>
              </div>
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
        { value: "null", text: "Choose your Ninja" },
        { value: 1, text: "Platform Footballers" },
        { value: 2, text: "WEREWOLVES FC" },
        { value: 3, text: "ISES Blasters" },
        { value: 4, text: "Sporting FC"}
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
              name: "Kartik Prahalad",
              email: "kartik.prahalad.kowligi@rockwellcollins.com"
            },
            {
              name: "Franklin Francis",
              email: "franklin.francis@rockwellcollins.com"
            }
          ]
        },
        {
          id: 2,
          teamName: "WEREWOLVES FC",
          players: [
            {
              name: "Vignesh Thukaram (C)",
              email: "vignesh.thukaram@rockwellcollins.com"
            },
            {
              name: "SRINIDHI SN",
              email: "srinidhi.n@rockwellcollins.com"
            },
            {
              name: "Sumit Solankar",
              email: "sumit.sukhadev.solankar@rockwellcollins.com"
            },
            {
              name: "Vinayaka Deskar",
              email: "vinayaka.r.deskar@rockwellcollins.com"
            },
            {
              name: "Koustav Das",
              email: "koustav.das@rockwellcollins.com"
            },
            {
              name: "Sahil Dilip Kamble",
              email: "sahil.dilip.kamble@rockwellcollins.com"
            },
            {
              name: "SUBHAKAR Krishnamoorthy",
              email: "subhakar.krishnamoorthy@rockwellcollins.com"
            },
            {
              name: "Nithin Kazhinhikkarathekkedath",
              email: "nithin.kazhinhikkarathekkedath@rockwellcollins.com"
            }
          ]
        },
        {
          id: 3,
          teamName: "ISES Blasters",
          players: [
            {
              name: "Gourab Paul (C)",
              email: "gourab.paul@rockwellcollins.com"
            },
            {
              name: "Chinmaya Mishra",
              email: "chinmaya.mishra@rockwellcollins.com"
            },
            {
              name: "Krishna Kachroo",
              email: "krishna.kachroo@rockwellcollins.com"
            },
            {
              name: "Abrar Farooq",
              email: "abrar.farooq.taploo@rockwellcollins.com"
            },
            {
              name: "Suresh M",
              email: "suresh.m@rockwellcollins.com"
            },
            {
              name: "Rajdeep Chakraborty",
              email: "rajdeep.chakraborty@rockwellcollins.com"
            },
            {
              name: "Hardik Agarwal",
              email: "hardik.agarwal@rockwellcollins.com"
            },
            {
              name: "Sampurna Murali Kakarlapudi",
              email: "sampurna.murali.kakarlapudi@rockwellcollins.com"
            }
          ]
        },
        {
          id: 4,
          teamName: "Sporting FC",
          players: [
            {
              name: "Anoop V (C)",
              email: "anoop.vasudevan@rockwellcollins.com"
            },
            {
              name: "Shyamjith Menoth",
              email: "shyamjith.menoth@rockwellcollins.com"
            },
            {
              name: "Md Amir Sohail",
              email: "md.amir.sohail.ansari@rockwellcollins.com"
            },
            {
              name: "Dhanesh EV",
              email: "dhanesh.edalattu.velayudhan@rockwellcollins.com"
            },
            {
              name: "Bharath Siva",
              email: "bharath.siva@rockwellcollins.com"
            },
            {
              name: "Jasim Kandi",
              email: "jasim.vadakke.nagathan.kandi@rockwellcollins.com"
            },
            {
              name: "Akhil Parackal",
              email: "akhil.parackal.suresh@rockwellcollins.com"
            },
            {
              name: "Anso Mamachan",
              email: "anso.mamachan1@rockwellcollins.com"
            }
          ]
        }
      ]
    };
  },
  computed: {
    getTeamDetails() {
      return this.teams.filter(team => team.id === this.selected);
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
