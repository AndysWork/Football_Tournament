<template>
  <div>
    <div class="container-fluid p-3 align-players">
      <div class="row">
        <div class="m-auto" v-for="(player, index) in players" v-bind:key="index">
          <div>
            <b-card
              :title="player.name"
              :img-src="imagePath"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                <b-badge variant="info">{{player.position}}</b-badge>
              </b-card-text>
              <b-card-text v-if="player.isAvailable">
                <b-badge variant="success">Available</b-badge>
              </b-card-text>
              <b-card-text v-if="!player.isAvailable">
                <b-badge variant="danger">Not Available</b-badge>
              </b-card-text>
              <b-card-text v-if="!player.isAvailable && player.currentTeam">
                <b-badge variant="primary">{{player.currentTeam}}</b-badge>
              </b-card-text>
              <b-card-text v-if="player.isAvailable">
                <b-badge
                  variant="warning"
                  onclick="window.open('https://tinyurl.com/vve5ndy')"
                >Wanna BID?</b-badge>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bidding",
  data() {
    return {
      imagePath: require("../assets/images/4.jpg"),
      players: [
        {
          name: "Aravinda Krishna K",
          email: "aravinda.krishna.kambadaraya@rockwellcollins.com",
          position: "Midfielder, Striker",
          isAvailable: false,
          currentTeam: "FMS Rangers"
        },
        {
          name: "Chinmaya Mishra",
          email: "chinmaya.mishra@rockwellcollins.com",
          position: "Defender, Striker",
          isAvailable: false,
          currentTeam: "ISES Blasters"
        },
        {
          name: "Kunal Pal Varma",
          email: "kunal.pal.varma@rockwellcollins.com",
          position: "Striker",
          isAvailable: false,
          currentTeam: "ISES Blasters"
        },
        {
          name: "Biplab Datta",
          email: "biplab.datta@rockwellcollins.com",
          position: "Defender, Midfielder, Striker",
          isAvailable: false,
          currentTeam: "ISES Blasters"
        },
        {
          name: "Sampurna Murali Kakarlapudi",
          email: "sampurna.murali.kakarlapudi@rockwellcollins.com",
          position: "Goal Keeper",
          isAvailable: true,
          currentTeam: ""
        },
        {
          name: "Hardik Agarwal",
          email: "hardik.agarwal@rockwellcollins.com",
          position: "Midfielder",
          isAvailable: false,
          currentTeam: "ISES Blasters"
        },
        {
          name: "Rajdeep Chakraborty",
          email: "rajdeep.chakraborty@rockwellcollins.com",
          position: "Defender",
          isAvailable: true,
          currentTeam: ""
        },
        {
          name: "Abrar Farooq",
          email: "abrar.farooq.taploo@rockwellcollins.com",
          position: "Striker",
          isAvailable: false,
          currentTeam: "ISES Blasters"
        },
        {
          name: "Bhaskara",
          email: "bhaskara.puttaswamaiah@rockwellcollins.com",
          position: "Defender",
          isAvailable: false,
          currentTeam: "All has bad knees"
        },
        {
          name: "Manoj Jain",
          email: "manoj.jain@rockwellcollins.com",
          position: "Defender",
          isAvailable: true,
          currentTeam: ""
        },
        {
          name: "Rudresha YR",
          email: "rudresha.crn@rockwellcollins.com",
          position: "Defender, Midfielder",
          isAvailable: false,
          currentTeam: "FMS Rangers"
        },
        {
          name: "Vishesh Manav",
          email: "vishesh.manav@rockwellcollins.com",
          position: "Midfielder",
          isAvailable: true,
          currentTeam: ""
        },
        {
          name: "Gowtham Kannan",
          email: "gowtham.kannan@rockwellcollins.com",
          position: "Goal Keeper, Defender",
          isAvailable: true,
          currentTeam: ""
        },
        {
          name: "Vinod Kumar V",
          email: "vinod.kumarv@rockwellcollins.com",
          position: "Defender, Midfielder",
          isAvailable: true,
          currentTeam: ""
        },
        {
          name: "Ruhul Amin Choudhury",
          email: "ruhul.amin.choudhury@rockwellcollins.com",
          position: "Striker",
          isAvailable: true,
          currentTeam: ""
        },
        {
          name: "Shaik Ali Basha",
          email: "ali.basha.shaik@rockwellcollins.com",
          position: "Defender",
          isAvailable: true,
          currentTeam: ""
        },
        {
          name: "Saurabh Joshi",
          email: "saurabh.joshi@rockwellcollins.com",
          position: "Striker",
          isAvailable: true,
          currentTeam: ""
        },
        {
          name: "Rajaniakant",
          email: "rajanikant.badiger@rockwellcollins.com",
          position: "Defender, Midfielder, Striker",
          isAvailable: true,
          currentTeam: ""
        },
        {
          name: "Marwan Nizamuddin",
          email: "marwan.nizamuddin@rockwellcollins.com",
          position: "Defender, Midfielder",
          isAvailable: true,
          currentTeam: ""
        }
      ]
    };
  }
};
</script>

<style>
.align-players {
  display: flex;
  justify-content: center;
}
</style>
