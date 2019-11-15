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
        { Team: "TBD", GP: "0", Points: "0", Win: "0", Draw:"0", Lost:"0", GS:"0", GC:"0", GD:"0" },
        { Team: "TBD", GP: "0", Points: "0", Win: "0", Draw:"0", Lost:"0", GS:"0", GC:"0", GD:"0" },
        { Team: "TBD", GP: "0", Points: "0", Win: "0", Draw:"0", Lost:"0", GS:"0", GC:"0", GD:"0" },
        { Team: "TBD", GP: "0", Points: "0", Win: "0", Draw:"0", Lost:"0", GS:"0", GC:"0", GD:"0" }
      ]
    };
  }
};
</script>