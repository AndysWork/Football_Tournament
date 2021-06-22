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
          email: "aravinda.krishna.kambadaraya@test.com",
          position: "Midfielder, Striker",
          isAvailable: false,
          currentTeam: "FMS Rangers"
        },
        {
          name: "Chinmaya Mishra",
          email: "chinmaya.mishra@test.com",
          position: "Defender, Striker",
          isAvailable: false,
          currentTeam: "Inflight United"
        },
        {
          name: "Kunal Pal Varma",
          email: "kunal.pal.varma@test.com",
          position: "Striker",
          isAvailable: false,
          currentTeam: "Inflight United"
        },
        {
          name: "Biplab Datta",
          email: "biplab.datta@test.com",
          position: "Defender, Midfielder, Striker",
          isAvailable: false,
          currentTeam: "Vandals"
        },
        {
          name: "Hardik Agarwal",
          email: "hardik.agarwal@test.com",
          position: "Midfielder",
          isAvailable: false,
          currentTeam: "Inflight United"
        },
        {
          name: "Rajdeep Chakraborty",
          email: "rajdeep.chakraborty@test.com",
          position: "Defender",
          isAvailable: false,
          currentTeam: "Vandals"
        },
        {
          name: "Abrar Farooq",
          email: "abrar.farooq.taploo@test.com",
          position: "Striker",
          isAvailable: false,
          currentTeam: "Inflight United"
        },
        {
          name: "Bhaskara",
          email: "bhaskara.puttaswamaiah@test.com",
          position: "Defender",
          isAvailable: false,
          currentTeam: "The Bad Knees"
        },
        {
          name: "Manoj Jain",
          email: "manoj.jain@test.com",
          position: "Defender",
          isAvailable: false,
          currentTeam: "Inflight United"
        },
        {
          name: "Rudresha YR",
          email: "rudresha.crn@test.com",
          position: "Defender, Midfielder",
          isAvailable: false,
          currentTeam: "FMS Rangers"
        },
        {
          name: "Vishesh Manav",
          email: "vishesh.manav@test.com",
          position: "Midfielder",
          isAvailable: false,
          currentTeam: "Vandals"
        },
        {
          name: "Gowtham Kannan",
          email: "gowtham.kannan@test.com",
          position: "Goal Keeper, Defender",
          isAvailable: false,
          currentTeam: "Vandals"
        },
        {
          name: "Vinod Kumar V",
          email: "vinod.kumarv@test.com",
          position: "Defender, Midfielder",
          isAvailable: false,
          currentTeam: "Vandals"
        },
        {
          name: "Ruhul Amin Choudhury",
          email: "ruhul.amin.choudhury@test.com",
          position: "Striker",
          isAvailable: false,
          currentTeam: "Vandals"
        },
        {
          name: "Shaik Ali Basha",
          email: "ali.basha.shaik@test.com",
          position: "Defender",
          isAvailable: false,
          currentTeam: "FMS Rangers"
        },
        {
          name: "Saurabh Joshi",
          email: "saurabh.joshi@test.com",
          position: "Striker",
          isAvailable: false,
          currentTeam: "Vandals"
        },
        {
          name: "Rajaniakant Badiger",
          email: "rajanikant.badiger@test.com",
          position: "Defender, Midfielder, Striker",
          isAvailable: false,
          currentTeam: "Vandals"
        },
        {
          name: "Marwan Nizamuddin",
          email: "marwan.nizamuddin@test.com",
          position: "Defender, Midfielder",
          isAvailable: false,
          currentTeam: "Vandals"
        },
        {
          name: "Vishnu Mohan",
          email: "vishnu.mohan@test.com",
          position: "Goal Keeper",
          isAvailable: false,
          currentTeam: "Inflight United"
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
