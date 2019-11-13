<template>
  <div>
    <b-table striped bordered hover responsive :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "PointsTable",
  data() {
    return {
      items: [
        { Team: "Blasters", GP: "1", Points: "3", Win: "1", Draw:"0", Lost:"0", GS:"1", GC:"0", GD:"1" },
        { Team: "Blasters", GP: "1", Points: "3", Win: "1", Draw:"0", Lost:"0", GS:"1", GC:"0", GD:"1" },
        { Team: "Blasters", GP: "1", Points: "3", Win: "1", Draw:"0", Lost:"0", GS:"1", GC:"0", GD:"1" },
        { Team: "Blasters", GP: "1", Points: "3", Win: "1", Draw:"0", Lost:"0", GS:"1", GC:"0", GD:"1" }
      ]
    };
  }
};
</script>