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
        { value: 1, text: "Golden Boot" },
        { value: 2, text: "WEREWOLVES FC" },
        { value: 3, text: "Inflight United" },
        { value: 4, text: "Sporting FC" },
        { value: 5, text: "All has bad knees" },
        { value: 6, text: "PTS Panthers" },
        { value: 7, text: "FMS Rangers" },
        { value: 8, text: "Vandals" }
      ],
      teams: [
        {
          id: 1,
          logoPath: require("../assets/images/Golden_Boot.jpg"),
          teamName: "Golden Boot",
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
              name: "Veeresh Patil",
              email: "veeresh.patil@rockwellcollins.com"
            }
          ]
        },
        {
          id: 2,
          logoPath: require("../assets/images/Werewolves_Fc.jpg"),
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
          logoPath: require("../assets/images/Inflight_United.png"),
          teamName: "Inflight United",
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
              name: "Hardik Agarwal",
              email: "hardik.agarwal@rockwellcollins.com"
            },
            {
              name: "Kunal Pal Varma",
              email: "kunal.pal.varma@rockwellcollins.com"
            },
            {
              name: "Vishnu Mohan",
              email: "vishnu.mohan@rockwellcollins.com"
            },
            {
              name: "Manoj Jain",
              email: "manoj.jain@rockwellcollins.com"
            }
          ]
        },
        {
          id: 4,
          logoPath: require("../assets/images/Sporting_FC.png"),
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
        },
        {
          id: 5,
          logoPath: require("../assets/images/4.jpg"),
          teamName: "All has bad knees",
          players: [
            {
              name: "Bhaskara Puttaswamaiah (C)",
              email: "bhaskara.puttaswamaiah@rockwellcollins.com"
            },
            {
              name: "Srikanth Annumandla",
              email: "srikanth.annumandla@rockwellcollins.com"
            },
            {
              name: "Mayank Raj",
              email: "mayank.raj@rockwellcollins.com"
            },
            {
              name: "Nitish Singh",
              email: "Nitish.singh@rockwellcollins.com"
            },
            {
              name: "Sadiq M",
              email: "mohammed.sadiq.kareem.saheb@rockwellcollins.com"
            },
            {
              name: "Ashish Sharma",
              email: "ashish.sharma@rockwellcollins.com"
            },
            {
              name: "Ashish Shrikhande",
              email: "ashish.shrikhande@rockwellcollins.com "
            }
          ]
        },
        {
          id: 6,
          logoPath: require("../assets/images/PTS_Panthers.jpg"),
          teamName: "PTS Panthers",
          players: [
            {
              name: "Seeni Azhar (C)",
              email: "seeni.azar.akbar@rockwellcollins.com"
            },
            {
              name: "Lakshmi Prasad",
              email: "lakshmi.prasad.mallela@rockwellcollins.com"
            },
            {
              name: "Wahedullah",
              email: "waheedulla.ubayadulla@rockwellcollins.com"
            },
            {
              name: "Nithish Baskaran",
              email: "nithish.vivek.raja.samuel.baskaran@rockwellcollins.com"
            },
            {
              name: "Tushar",
              email: "tushar.tiwari@rockwellcollins.com"
            },
            {
              name: "Balasubramanian Arumugam",
              email: "balasubramanian.arumugam@rockwellcollins.com"
            },
            {
              name: "Thiru",
              email: "thirunavukkarasu.alagarsamy@rockwellcollins.com"
            },
            {
              name: "Vasanth raj",
              email: "vasanthraj.radhakrishnan@rockwellcollins.com"
            }
          ]
        },
        {
          id: 7,
          logoPath: require("../assets/images/4.jpg"),
          teamName: "FMS Rangers",
          players: [
            {
              name: "Gokul P (C)",
              email: "gokul.puthiyottil@rockwellcollins.com"
            },
            {
              name: "Akshay Kumar",
              email: "akshay.kumar@rockwellcollins.com"
            },
            {
              name: "Bijin Varghese Mathew",
              email: "bijin.varghese.mathew@rockwellcollins.com"
            },
            {
              name: "Nagarjuna Hanumantharayappa",
              email: "nagarjuna.hanumantharayappa@rockwellcollins.com"
            },
            {
              name: " Aravinda Krishna",
              email: "aravinda.krishna.kambadaraya@rockwellcollins.com"
            },
            {
              name: "Rudresha YR",
              email: "rudresha.crn@rockwellcollins.com"
            },
            {
              name: "Prajwal Hagalawadi",
              email: "prajwal.hagalawadi@rockwellcollins.com"
            },
            {
              name: "Shaik Ali Basha",
              email: "ali.basha.shaik@rockwellcollins.com"
            }
          ]
        },
        {
          id: 8,
          logoPath: require("../assets/images/Vandals.jpg"),
          teamName: "Vandals",
          players: [
            {
              name: "Marwan Nizamuddin (C)",
              email: "marwan.nizamuddin@rockwellcollins.com"
            },
            {
              name: "Rajaniakant",
              email: "rajanikant.badiger@rockwellcollins.com"
            },
            {
              name: "Saurabh Joshi",
              email: "saurabh.joshi@rockwellcollins.com"
            },
            {
              name: "Ruhul Amin Choudhury",
              email: "ruhul.amin.choudhury@rockwellcollins.com"
            },
            {
              name: "Vinod Kumar V",
              email: "vinod.kumarv@rockwellcollins.com"
            },
            {
              name: "Gowtham Kannan",
              email: "gowtham.kannan@rockwellcollins.com"
            },
            {
              name: "Vishesh Manav",
              email: "vishesh.manav@rockwellcollins.com"
            },
            {
              name: "Rajdeep Chakraborty",
              email: "rajdeep.chakraborty@rockwellcollins.com"
            },
            {
              name: "Biplab Datta",
              email: "biplab.datta@rockwellcollins.com"
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
