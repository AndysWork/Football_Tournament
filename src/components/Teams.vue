<template>
  <div>
    <div class="p-3">
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
    <div class="container-fluid p-3 align-players">
      <div v-if="getTeamDetails">
        <div v-for="(team,index) in getTeamDetails" v-bind:key="index">
          <div class="row">
            <div class="m-auto" v-for="(player, index) in team.players" v-bind:key="index">
              <div>
                <b-card
                  :title="player.name"
                  :img-src="team.logoPath"
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
      options: [
        { value: "null", text: "Choose your Ninja" },
        { value: 1, text: "Sporting FC" },
        { value: 2, text: "Inflight United" },
        { value: 3, text: "Vandals" },
        { value: 4, text: "The Bad Knees" },
        { value: 5, text: "PTS Panthers" },
        { value: 6, text: "Golden Boot" },
        { value: 7, text: "FMS Rangers" },
        { value: 8, text: "WEREWOLVES FC" }
      ],
      teams: [
        {
          id: 1,
          logoPath: require("../assets/images/Sporting_FC.png"),
          teamName: "Sporting FC",
          players: [
            {
              name: "Anoop V (C)",
              email: "anoop.vasudevan@test.com"
            },
            {
              name: "Shyamjith Menoth",
              email: "shyamjith.menoth@test.com"
            },
            {
              name: "Md Amir Sohail",
              email: "md.amir.sohail.ansari@test.com"
            },
            {
              name: "Dhanesh EV",
              email: "dhanesh.edalattu.velayudhan@test.com"
            },
            {
              name: "Bharath Siva",
              email: "bharath.siva@test.com"
            },
            {
              name: "Jasim Kandi",
              email: "jasim.vadakke.nagathan.kandi@test.com"
            },
            {
              name: "Akhil Parackal",
              email: "akhil.parackal.suresh@test.com"
            },
            {
              name: "Anso Mamachan",
              email: "anso.mamachan1@test.com"
            }
          ]
        },
        {
          id: 2,
          logoPath: require("../assets/images/Inflight_United.png"),
          teamName: "Inflight United",
          players: [
            {
              name: "Gourab Paul (C)",
              email: "gourab.paul@test.com"
            },
            {
              name: "Chinmaya Mishra",
              email: "chinmaya.mishra@test.com"
            },
            {
              name: "Krishna Kachroo",
              email: "krishna.kachroo@test.com"
            },
            {
              name: "Abrar Farooq",
              email: "abrar.farooq.taploo@test.com"
            },
            {
              name: "Suresh M",
              email: "suresh.m@test.com"
            },
            {
              name: "Hardik Agarwal",
              email: "hardik.agarwal@test.com"
            },
            {
              name: "Kunal Pal Varma",
              email: "kunal.pal.varma@test.com"
            },
            {
              name: "Vishnu Mohan",
              email: "vishnu.mohan@test.com"
            },
            {
              name: "Manoj Jain",
              email: "manoj.jain@test.com"
            }
          ]
        },
        {
          id: 3,
          logoPath: require("../assets/images/Vandals.jpg"),
          teamName: "Vandals",
          players: [
            {
              name: "Marwan Nizamuddin (C)",
              email: "marwan.nizamuddin@test.com"
            },
            {
              name: "Rajaniakant Badiger",
              email: "rajanikant.badiger@test.com"
            },
            {
              name: "Saurabh Joshi",
              email: "saurabh.joshi@test.com"
            },
            {
              name: "Ruhul Amin Choudhury",
              email: "ruhul.amin.choudhury@test.com"
            },
            {
              name: "Vinod Kumar V",
              email: "vinod.kumarv@test.com"
            },
            {
              name: "Gowtham Kannan",
              email: "gowtham.kannan@test.com"
            },
            {
              name: "Vishesh Manav",
              email: "vishesh.manav@test.com"
            },
            {
              name: "Rajdeep Chakraborty",
              email: "rajdeep.chakraborty@test.com"
            },
            {
              name: "Biplab Datta",
              email: "biplab.datta@test.com"
            }
          ]
        },
        {
          id: 4,
          logoPath: require("../assets/images/The_Bad_Knees.jpg"),
          teamName: "The Bad Knees",
          players: [
            {
              name: "Bhaskara Puttaswamaiah (C)",
              email: "bhaskara.puttaswamaiah@test.com"
            },
            {
              name: "Srikanth Annumandla",
              email: "srikanth.annumandla@test.com"
            },
            {
              name: "Mayank Raj",
              email: "mayank.raj@test.com"
            },
            {
              name: "Nitish Singh",
              email: "Nitish.singh@test.com"
            },
            {
              name: "Sadiq M",
              email: "mohammed.sadiq.kareem.saheb@test.com"
            },
            {
              name: "Ashish Sharma",
              email: "ashish.sharma@test.com"
            },
            {
              name: "Ashish Shrikhande",
              email: "ashish.shrikhande@test.com "
            },
            {
              name: "Seetharam Pandith",
              email: "seetharam.pandith@test.com"
            }
          ]
        },
        {
          id: 5,
          logoPath: require("../assets/images/PTS_Panthers.jpg"),
          teamName: "PTS Panthers",
          players: [
            {
              name: "Seeni Azhar (C)",
              email: "seeni.azar.akbar@test.com"
            },
            {
              name: "Lakshmi Prasad",
              email: "lakshmi.prasad.mallela@test.com"
            },
            {
              name: "Wahedullah",
              email: "waheedulla.ubayadulla@test.com"
            },
            {
              name: "Nithish Baskaran",
              email: "nithish.vivek.raja.samuel.baskaran@test.com"
            },
            {
              name: "Tushar",
              email: "tushar.tiwari@test.com"
            },
            {
              name: "Balasubramanian Arumugam",
              email: "balasubramanian.arumugam@test.com"
            },
            {
              name: "Thiru",
              email: "thirunavukkarasu.alagarsamy@test.com"
            },
            {
              name: "Vasanth raj",
              email: "vasanthraj.radhakrishnan@test.com"
            }
          ]
        },
        {
          id: 6,
          logoPath: require("../assets/images/Golden_Boot.jpg"),
          teamName: "Golden Boot",
          players: [
            {
              name: "Madhavan Sekar (C)",
              email: "Madhavan.Sekar@test.com"
            },
            {
              name: "Shubham Dangare",
              email: "shubham.kashunath.dangare@test.com"
            },
            {
              name: "Sachin Shet",
              email: "sachin.shet@test.com"
            },
            {
              name: "Manjunath Gangadhara",
              email: "manjunath.gangadhara@test.com"
            },
            {
              name: "Anil Vemula",
              email: "anil.kumar.vemula1@test.com"
            },
            {
              name: "Sai Sadineni",
              email: "sai.anvesh.sadineni@test.com"
            },
            {
              name: "Kartik Prahalad",
              email: "kartik.prahalad.kowligi@test.com"
            },
            {
              name: "Veeresh Patil",
              email: "veeresh.patil@test.com"
            }
          ]
        },
        {
          id: 7,
          logoPath: require("../assets/images/Rangers_Fc.png"),
          teamName: "FMS Rangers",
          players: [
            {
              name: "Gokul P (C)",
              email: "gokul.puthiyottil@test.com"
            },
            {
              name: "Akshay Kumar",
              email: "akshay.kumar@test.com"
            },
            {
              name: "Bijin Varghese Mathew",
              email: "bijin.varghese.mathew@test.com"
            },
            {
              name: "Nagarjuna Hanumantharayappa",
              email: "nagarjuna.hanumantharayappa@test.com"
            },
            {
              name: "Aravinda Krishna",
              email: "aravinda.krishna.kambadaraya@test.com"
            },
            {
              name: "Rudresha YR",
              email: "rudresha.crn@test.com"
            },
            {
              name: "Prajwal Hagalawadi",
              email: "prajwal.hagalawadi@test.com"
            },
            {
              name: "Shaik Ali Basha",
              email: "ali.basha.shaik@test.com"
            }
          ]
        },
        {
          id: 8,
          logoPath: require("../assets/images/Werewolves_Fc.jpg"),
          teamName: "WEREWOLVES FC",
          players: [
            {
              name: "Vignesh Thukaram (C)",
              email: "vignesh.thukaram@test.com"
            },
            {
              name: "SRINIDHI SN",
              email: "srinidhi.n@test.com"
            },
            {
              name: "Sumit Solankar",
              email: "sumit.sukhadev.solankar@test.com"
            },
            {
              name: "Vinayaka Deskar",
              email: "vinayaka.r.deskar@test.com"
            },
            {
              name: "Koustav Das",
              email: "koustav.das@test.com"
            },
            {
              name: "Sahil Dilip Kamble",
              email: "sahil.dilip.kamble@test.com"
            },
            {
              name: "SUBHAKAR Krishnamoorthy",
              email: "subhakar.krishnamoorthy@test.com"
            },
            {
              name: "Nithin Kazhinhikkarathekkedath",
              email: "nithin.kazhinhikkarathekkedath@test.com"
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
