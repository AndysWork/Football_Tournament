<template>
  <div>
    <b-table
      striped
      bordered
      hover
      responsive
      class="text-md-left"
      :items="items"
    ></b-table>
  </div>
</template>

<script>
export default {
  name: "Rules",
  data() {
    return {
      items: [
        {
          Mandatory_Rules:
            "Each team will consist of 5 active players and 3 substitutes."
        },
        {
          Mandatory_Rules:
            "Game will follow Round Robin format and top teams will move to knockout stage matches. (Head to head count will be considered if equal then goal difference overall)"
        },
        {
          Mandatory_Rules:
            "In case of tie in League matches, the points will be shared and in knockout stages, there will be a NORMAL PENALTY (WITH INCREASED DISTANCE)"
        },
        {
          Mandatory_Rules:
            "Substitutions can be made at any point during the game and are “rolling”, and there is no limit for substitutions."
        },
        {
          Mandatory_Rules:
            "Match will be played for 15 minutes with 7 minutes each half and 1 minute break in league matches and for 23 minutes with 10 minutes each half and 3 minutes break in knockouts"
        },
        { Mandatory_Rules: "There are no offside rule." },
        {
          Mandatory_Rules:
            "Referee has a right to send you off(Red Card) or can issue a warning(Yellow card) in case of a foul."
        },
        {
          Mandatory_Rules:
            "Inappropriate conduct and dangerous play leads to yellow/Red card."
        },
        {
          Mandatory_Rules:
            "A player who gets one yellow cards will be sent off for 2 minutes & two yellow equivalent to red."
        },
        {
          Mandatory_Rules: "Play starts from centre line when a goal is scored."
        },
        {
          Mandatory_Rules:
            "If a ball goes out of play, the ball must be kicked in at the position where the ball went out of the field of play"
        },
        {
          Mandatory_Rules:
            "When restarting the play from sidelines, the ball should be either on or behind the line and should not be moving."
        },
        {
          Mandatory_Rules:
            "One cannot score directly from sideline when the ball goes out of bounds(including corners, goal kicks)."
        },
        {
          Mandatory_Rules:
            "A Free Kick will be given at the spot where a foul has occured."
        },
        {
          Mandatory_Rules:
            "A free kick can be given for one of the following: (1) roughness (2) Handball (3) dangerous play"
        },
        {
          Mandatory_Rules:
            "If a foul has occured within the goal-keeper area(Penalty area), it leads to a penalty."
        },
        {
          Mandatory_Rules:
            "A corner kick or goal kick is taken when the ball leaves the field across the goal line – the end of the field."
        },
        {
          Mandatory_Rules:
            "If the offensive team kicks it out, play is restarted with a goal kick. If the defensive team kicks it out, play is restarted with a corner kick."
        },
        {
          Mandatory_Rules:
            "Goalkeepers can roll, throw or kick the ball out. They are not allowed to throw the ball above head height or throw it with an overarm motion."
        },
        {
          Mandatory_Rules:
            "If the goalkeeper throws, kicks or rolls the ball out over head height an indirect free-kick will be awarded to the opposing team from the kick off spot."
        },
        {
          Mandatory_Rules:
            "A goal keeper can not catch the ball when a team mate passes the ball to him."
        },
        {
          Mandatory_Rules:
            "A penalty kick and a YELLOW card will be given after two warnings if he does not adhere to the rule."
        },
        {
          Mandatory_Rules:
            "If a goal keeper catches the ball outside the penalty area, it leads to a penalty immediately(No warnings)."
        },
        {
          Mandatory_Rules:
            "Handballs will be decided by the referee. The referee can rule it out if its near body."
        },
        {
          Mandatory_Rules:
            "Players will not be allowed to wear anything that can cause an injury to others(Ex: Wrist watches)"
        },
        {
          Mandatory_Rules:
            "No Player will be allowed to play barefoot. We recommend to use football shoes(Studs)."
        },
        {
          Mandatory_Rules:
            "If a team doesnt turn up, points will be given to the opponents (2-0 win)"
        }
      ]
    };
  }
};
</script>