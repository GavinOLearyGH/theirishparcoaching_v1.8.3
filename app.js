
const FALLBACK_DATA = {
  "Config": [
    {
      "Key": "product_title",
      "Value": "TIP Coaching Intelligence"
    },
    {
      "Key": "product_subtitle",
      "Value": "Turn your scorecard into a TIP coaching debrief — patterns, ratios, and the right work for your next session."
    },
    {
      "Key": "product_tagline",
      "Value": "Built on The Irish Par method: fewer disasters, better decisions, stronger scoring habits."
    },
    {
      "Key": "default_course",
      "Value": "Springhaven Club"
    },
    {
      "Key": "default_tee",
      "Value": "Middle"
    },
    {
      "Key": "bucket_1_label",
      "Value": "0-99"
    },
    {
      "Key": "bucket_1_min",
      "Value": 0
    },
    {
      "Key": "bucket_1_max",
      "Value": 99
    },
    {
      "Key": "bucket_2_label",
      "Value": "100-149"
    },
    {
      "Key": "bucket_2_min",
      "Value": 100
    },
    {
      "Key": "bucket_2_max",
      "Value": 149
    },
    {
      "Key": "bucket_3_label",
      "Value": "150-199"
    },
    {
      "Key": "bucket_3_min",
      "Value": 150
    },
    {
      "Key": "bucket_3_max",
      "Value": 199
    },
    {
      "Key": "bucket_4_label",
      "Value": "200+"
    },
    {
      "Key": "bucket_4_min",
      "Value": 200
    },
    {
      "Key": "bucket_4_max",
      "Value": 999
    },
    {
      "Key": "fairway_strong_threshold",
      "Value": 55
    },
    {
      "Key": "fairway_warn_threshold",
      "Value": 45
    },
    {
      "Key": "gir_strong_threshold",
      "Value": 50
    },
    {
      "Key": "gir_warn_threshold",
      "Value": 35
    },
    {
      "Key": "ud_strong_threshold",
      "Value": 40
    },
    {
      "Key": "ud_warn_threshold",
      "Value": 25
    },
    {
      "Key": "penalty_alert_threshold",
      "Value": 2
    },
    {
      "Key": "three_putt_alert_threshold",
      "Value": 2
    },
    {
      "Key": "fw_min_sample",
      "Value": 8
    },
    {
      "Key": "bucket_min_sample",
      "Value": 4
    },
    {
      "Key": "custom_default_par",
      "Value": 4
    },
    {
      "Key": "custom_default_yards",
      "Value": 360
    }
  ],
  "Input_Legend": [
    {
      "Field": "Fairway",
      "Code": "Y",
      "Meaning": "Hit fairway",
      "Example": "Y",
      "Display_Order": 1
    },
    {
      "Field": "Fairway",
      "Code": "L",
      "Meaning": "Missed fairway left",
      "Example": "L",
      "Display_Order": 2
    },
    {
      "Field": "Fairway",
      "Code": "R",
      "Meaning": "Missed fairway right",
      "Example": "R",
      "Display_Order": 3
    },
    {
      "Field": "Fairway",
      "Code": "N/A",
      "Meaning": "Not a fairway hole (typically par 3)",
      "Example": "N/A",
      "Display_Order": 4
    },
    {
      "Field": "Green",
      "Code": "Y###",
      "Meaning": "Green hit from distance",
      "Example": "Y134",
      "Display_Order": 1
    },
    {
      "Field": "Green",
      "Code": "L###",
      "Meaning": "Missed green left from distance",
      "Example": "L125",
      "Display_Order": 2
    },
    {
      "Field": "Green",
      "Code": "R###",
      "Meaning": "Missed green right from distance",
      "Example": "R165",
      "Display_Order": 3
    },
    {
      "Field": "Green",
      "Code": "S###",
      "Meaning": "Missed green short from distance",
      "Example": "S90",
      "Display_Order": 4
    },
    {
      "Field": "Green",
      "Code": "LO###",
      "Meaning": "Missed green long from distance",
      "Example": "LO155",
      "Display_Order": 5
    },
    {
      "Field": "Putts",
      "Code": "1-4",
      "Meaning": "Number of putts",
      "Example": "2",
      "Display_Order": 1
    },
    {
      "Field": "U/D",
      "Code": "Y",
      "Meaning": "Converted up-and-down",
      "Example": "Y",
      "Display_Order": 1
    },
    {
      "Field": "U/D",
      "Code": "N",
      "Meaning": "Missed up-and-down chance",
      "Example": "N",
      "Display_Order": 2
    },
    {
      "Field": "S/S",
      "Code": "Y",
      "Meaning": "Converted sand save",
      "Example": "Y",
      "Display_Order": 1
    },
    {
      "Field": "S/S",
      "Code": "N",
      "Meaning": "Missed sand save",
      "Example": "N",
      "Display_Order": 2
    },
    {
      "Field": "Penalty",
      "Code": "0-3",
      "Meaning": "Penalty strokes on hole",
      "Example": "1",
      "Display_Order": 1
    }
  ],
  "Review_Rules": [
    {
      "Rule_ID": "RR001",
      "Priority": 1,
      "Primary_Tag": "PENALTY_ALERT",
      "Round_Profile": "Disaster Management Issue",
      "What_Traveled": "The card still had moments where playable golf showed up.",
      "What_Cost_Shots": "Too many penalty shots made the round expensive before the rest of the game had a chance to matter.",
      "Train_Next": "Protect the card first. Start with tee strategy, a calmer stock tee ball, and smarter recovery decisions.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR002",
      "Priority": 2,
      "Primary_Tag": "THREE_PUTT_ALERT",
      "Round_Profile": "Putting Dragged the Round",
      "What_Traveled": "The round created enough chances to score better than the final number.",
      "What_Cost_Shots": "Too many three-putts turned neutral holes into bogeys and stopped the card from settling.",
      "Train_Next": "This is a pace-control and hole-out discipline round. Get speed right first, then clean up the 3-to-6 foot range.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR003",
      "Priority": 3,
      "Primary_Tag": "TEE_TWO_WAY_MISS",
      "Round_Profile": "Two-Way Miss Under Pressure",
      "What_Traveled": "You still found enough playable shots to keep going.",
      "What_Cost_Shots": "The tee pattern was too wide in both directions, which made too many holes defensive from the start.",
      "Train_Next": "Shrink the pattern. Start line, tee height, and 85% tempo matter more than extra speed here.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR004",
      "Priority": 4,
      "Primary_Tag": "LOW_FW_PCT",
      "Round_Profile": "Tee Control Cost the Card",
      "What_Traveled": "There were enough settled holes in the round to build from.",
      "What_Cost_Shots": "Too many missed fairways put the card on the wrong side of the hole and made approach play harder than it needed to be.",
      "Train_Next": "Build a fairway-finder first. One-sided playable golf beats a wider pattern with extra yards.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR005",
      "Priority": 5,
      "Primary_Tag": "LOW_GIR_100_149",
      "Round_Profile": "Scoring Clubs Cost the Round",
      "What_Traveled": "The structure of the round stayed good enough that sharper scoring clubs would have changed the number.",
      "What_Cost_Shots": "From scoring distance, too many greens were missed, so reasonable chances never turned into low-stress pars or birdie looks.",
      "Train_Next": "This is not a rebuild round. It is a scoring-club round: start line, landing spot, and distance control.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR006",
      "Priority": 6,
      "Primary_Tag": "LOW_GIR_150_199",
      "Round_Profile": "Mid-Iron Window Leak",
      "What_Traveled": "The round gave you enough neutral positions to do damage.",
      "What_Cost_Shots": "The 150-199 window asked too much of the short game and kept too many pars from feeling comfortable.",
      "Train_Next": "Work the mid-iron window with center-green targets and a calmer stock pattern.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR007",
      "Priority": 7,
      "Primary_Tag": "LOW_GIR_OVERALL",
      "Round_Profile": "Approach Precision Leak",
      "What_Traveled": "The round held together enough off the tee to create some chances.",
      "What_Cost_Shots": "Approach conversion was too low, so workable positions did not turn into enough green hits.",
      "Train_Next": "Start with the weakest approach window and get back to center-green discipline.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR008",
      "Priority": 8,
      "Primary_Tag": "LOW_UD_PCT",
      "Round_Profile": "Short Game Couldn’t Cover",
      "What_Traveled": "You still created enough recovery opportunities to protect the card.",
      "What_Cost_Shots": "Missed greens became too expensive because the next shot did not finish close enough often enough.",
      "Train_Next": "Go back to one stock chip, one landing spot system, and make missed greens cheaper.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR009",
      "Priority": 9,
      "Primary_Tag": "LOW_SS_PCT",
      "Round_Profile": "Bunker Play Added Stress",
      "What_Traveled": "The rest of the round gave you enough room to survive the misses.",
      "What_Cost_Shots": "Greenside bunker opportunities did not convert often enough, which made a few misses more expensive than they needed to be.",
      "Train_Next": "Train entry point and splash control so bunker shots get back to a makeable-putt range.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR010",
      "Priority": 10,
      "Primary_Tag": "STRONG_UD_PCT",
      "Round_Profile": "Short Game Saved the Round",
      "What_Traveled": "The short game kept the card alive and covered for missed greens.",
      "What_Cost_Shots": "Ball-striking gave away enough opportunities that you had to rely on recovery more than you wanted.",
      "Train_Next": "Keep the recovery sharp, but spend the next block on the long-game pattern that created the pressure.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR011",
      "Priority": 11,
      "Primary_Tag": "SOLID_STRUCTURE_LOW_CONVERSION",
      "Round_Profile": "Solid Structure, Low Conversion",
      "What_Traveled": "The round had enough stability in play, penalties, and structure to produce a better number.",
      "What_Cost_Shots": "The round did not unravel. It simply failed to convert enough chances in the scoring zones.",
      "Train_Next": "This is a refinement round. Stay with the structure and sharpen the weakest scoring detail.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR012",
      "Priority": 12,
      "Primary_Tag": "BACK_NINE_FADE",
      "Round_Profile": "Back-Nine Fade",
      "What_Traveled": "There was enough golf early in the round to show the day had a workable number in it.",
      "What_Cost_Shots": "The card got looser late, which suggests either concentration drift, energy management, or a pattern that widened under pressure.",
      "Train_Next": "Practice with a finish. End sessions with one pressure drill and one calm target routine.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR013",
      "Priority": 13,
      "Primary_Tag": "SCORING_ZONE_UNDERPERFORMED",
      "Round_Profile": "Good Structure, Poor Scoring-Zone Conversion",
      "What_Traveled": "The card stayed playable enough to give your scoring clubs real chances.",
      "What_Cost_Shots": "Inside 150 yards, the round did not cash in enough. That is where the score stayed higher than it had to.",
      "Train_Next": "Start with scoring-zone random practice and distance-control pressure.",
      "Active": "Y"
    },
    {
      "Rule_ID": "RR014",
      "Priority": 14,
      "Primary_Tag": "PUTTING_STABLE",
      "Round_Profile": "Ball-Striking Cost More Than the Putter",
      "What_Traveled": "The putter did not add damage to the card.",
      "What_Cost_Shots": "The score was hurt more by tee-to-green conversion than by what happened on the greens.",
      "Train_Next": "Stay with putting maintenance and use the next block on the approach or recovery leak.",
      "Active": "Y"
    }
  ],
  "Drill_Library": [
    {
      "Drill_ID": "SD001",
      "Category": "Swing",
      "Focus_Area": "Tee",
      "Trigger_Tag": "TEE_TWO_WAY_MISS",
      "Drill_Name": "Tempo Rope Rehearsal",
      "Short_Label": "Tempo first",
      "Description": "Build a calmer 75-85% motion to reduce a two-way tee miss.",
      "How_To": "Make rehearsal swings with soft tempo and then hit 5-8 balls at 85% speed to one fairway side.",
      "Duration": "8-10 min",
      "Source": "Internal / tempo"
    },
    {
      "Drill_ID": "SD002",
      "Category": "Swing",
      "Focus_Area": "Tee",
      "Trigger_Tag": "TEE_LEFT_BIAS",
      "Drill_Name": "Hold-Off Tee Rehearsal",
      "Short_Label": "Hold off",
      "Description": "Reduce over-release and left bias on tee shots.",
      "How_To": "Rehearse a quieter face through impact, then hit 6-8 controlled tee balls to the wide side.",
      "Duration": "8 min",
      "Source": "Start-line / face control"
    },
    {
      "Drill_ID": "SD003",
      "Category": "Swing",
      "Focus_Area": "Tee",
      "Trigger_Tag": "TEE_RIGHT_BIAS",
      "Drill_Name": "Cover-and-Commit Rehearsal",
      "Short_Label": "Cover it",
      "Description": "Reduce blocks and weak fades off the tee.",
      "How_To": "Rehearse a more committed chest-through finish and start 6-8 balls at the safe side of the fairway.",
      "Duration": "8 min",
      "Source": "Start-line / commitment"
    },
    {
      "Drill_ID": "SK001",
      "Category": "Skill",
      "Focus_Area": "Tee",
      "Trigger_Tag": "LOW_FW_PCT",
      "Drill_Name": "Fairway Finder Drill",
      "Short_Label": "Fairway finder",
      "Description": "Train playable tee shots with a controlled stock pattern.",
      "How_To": "Pick a narrow fairway target and hit 8-12 tee shots with 3/4 swings, tracking how many finish in play.",
      "Duration": "12 min",
      "Source": "Jon Sherman / practical"
    },
    {
      "Drill_ID": "SK002",
      "Category": "Skill",
      "Focus_Area": "Tee",
      "Trigger_Tag": "TEE_TWO_WAY_MISS",
      "Drill_Name": "Start-Line Gate Drill",
      "Short_Label": "Gate it",
      "Description": "Narrow the initial start line to reduce both-direction misses.",
      "How_To": "Set two alignment sticks as a gate 10-15 yards in front and start 8 balls through the gate before adding speed.",
      "Duration": "10 min",
      "Source": "Gate training"
    },
    {
      "Drill_ID": "SK003",
      "Category": "Skill",
      "Focus_Area": "Tee",
      "Trigger_Tag": "PENALTY_ALERT",
      "Drill_Name": "Play-the-Wide-Side Drill",
      "Short_Label": "Wide side",
      "Description": "Rehearse strategy and a calmer tee pattern.",
      "How_To": "Pick the widest fairway zone, commit to one stock shape, and hit one-ball simulations with full routine.",
      "Duration": "12 min",
      "Source": "Course management"
    },
    {
      "Drill_ID": "SD004",
      "Category": "Swing",
      "Focus_Area": "Approach",
      "Trigger_Tag": "APP_LEFT_BIAS",
      "Drill_Name": "Alignment / Start-Line Check",
      "Short_Label": "Start line",
      "Description": "Reduce left bias on approach shots by checking setup and start line.",
      "How_To": "Use an alignment stick, rehearse square setup, and hit 10 balls starting just right of the target.",
      "Duration": "8 min",
      "Source": "Setup control"
    },
    {
      "Drill_ID": "SD005",
      "Category": "Swing",
      "Focus_Area": "Approach",
      "Trigger_Tag": "APP_RIGHT_BIAS",
      "Drill_Name": "Face Control Cover Drill",
      "Short_Label": "Cover it",
      "Description": "Reduce right leaks by improving face-to-path awareness.",
      "How_To": "Rehearse a slightly more covered strike feel and hit 8-10 stock shots to a safe center target.",
      "Duration": "8 min",
      "Source": "Face awareness"
    },
    {
      "Drill_ID": "SD006",
      "Category": "Swing",
      "Focus_Area": "Approach",
      "Trigger_Tag": "APP_SHORT_BIAS",
      "Drill_Name": "Brush-After-Ball Rehearsal",
      "Short_Label": "Low point",
      "Description": "Improve strike depth and control when short misses show up.",
      "How_To": "Make half-swings focusing on brushing the turf after the ball. Then blend into 8 stock shots.",
      "Duration": "8 min",
      "Source": "Contact first"
    },
    {
      "Drill_ID": "SD007",
      "Category": "Swing",
      "Focus_Area": "Approach",
      "Trigger_Tag": "APP_LONG_BIAS",
      "Drill_Name": "Three-Quarter Flight Rehearsal",
      "Short_Label": "Take one off",
      "Description": "Calm launch and speed when long misses show up.",
      "How_To": "Hit 8-10 three-quarter shots to a center-green target, keeping the same finish height each rep.",
      "Duration": "8 min",
      "Source": "Window control"
    },
    {
      "Drill_ID": "SK004",
      "Category": "Skill",
      "Focus_Area": "Wedge",
      "Trigger_Tag": "LOW_GIR_100_149",
      "Drill_Name": "Random Yardage Drill",
      "Short_Label": "Random wedges",
      "Description": "Build scoring-club performance with changing targets and full routine.",
      "How_To": "Rotate through 110, 125, 140, and 145 yards with one ball, full routine each time.",
      "Duration": "15 min",
      "Source": "Adam Young / variability"
    },
    {
      "Drill_ID": "SK005",
      "Category": "Skill",
      "Focus_Area": "Approach",
      "Trigger_Tag": "LOW_GIR_150_199",
      "Drill_Name": "Mid-Iron Randomizer",
      "Short_Label": "Mid-iron window",
      "Description": "Train center-green execution from the mid-iron window.",
      "How_To": "Alternate targets from 155-190 yards and track green-zone hits instead of flags.",
      "Duration": "15 min",
      "Source": "Center-green practice"
    },
    {
      "Drill_ID": "SK006",
      "Category": "Skill",
      "Focus_Area": "Approach",
      "Trigger_Tag": "LOW_GIR_OVERALL",
      "Drill_Name": "Center-Green Ladder",
      "Short_Label": "Green zone",
      "Description": "Train approach discipline over flag-chasing.",
      "How_To": "Hit 3 balls to the same green: left-center, middle, right-center. Track green-zone hits, not pin proximity.",
      "Duration": "12 min",
      "Source": "Strategy + execution"
    },
    {
      "Drill_ID": "SK007",
      "Category": "Skill",
      "Focus_Area": "Wedge",
      "Trigger_Tag": "SCORING_ZONE_UNDERPERFORMED",
      "Drill_Name": "Four-Number Wedge Test",
      "Short_Label": "Own your numbers",
      "Description": "Tighten distance control in the scoring zone.",
      "How_To": "Hit one ball each to four wedge numbers, then repeat for three rounds and track how many finish pin-high or on the green.",
      "Duration": "15 min",
      "Source": "Distance control"
    },
    {
      "Drill_ID": "SK008",
      "Category": "Skill",
      "Focus_Area": "Approach",
      "Trigger_Tag": "BACK_NINE_FADE",
      "Drill_Name": "Pressure-Finish Approach Set",
      "Short_Label": "Finish strong",
      "Description": "Practice execution when tired or distracted.",
      "How_To": "Save your three most important approach reps for the end of practice. All three must start on line before you leave.",
      "Duration": "8 min",
      "Source": "Pressure finish"
    },
    {
      "Drill_ID": "SD008",
      "Category": "Swing",
      "Focus_Area": "ShortGame",
      "Trigger_Tag": "LOW_UD_PCT",
      "Drill_Name": "Stock Chip Motion Rehearsal",
      "Short_Label": "One motion",
      "Description": "Simplify short-game technique around the green.",
      "How_To": "Rehearse one setup, one ball position, and one stock release for chips to an easy landing spot.",
      "Duration": "8 min",
      "Source": "Short game baseline"
    },
    {
      "Drill_ID": "SK009",
      "Category": "Skill",
      "Focus_Area": "ShortGame",
      "Trigger_Tag": "LOW_UD_PCT",
      "Drill_Name": "Landing Zone Drill",
      "Short_Label": "Landing spot",
      "Description": "Sharpen chip and pitch distance control.",
      "How_To": "Place a towel on the green and land chips in the zone before judging rollout.",
      "Duration": "12 min",
      "Source": "Landing-zone practice"
    },
    {
      "Drill_ID": "SK010",
      "Category": "Skill",
      "Focus_Area": "ShortGame",
      "Trigger_Tag": "STRONG_UD_PCT",
      "Drill_Name": "Up-and-Down Challenge",
      "Short_Label": "Keep the edge",
      "Description": "Maintain recovery sharpness under light pressure.",
      "How_To": "Play 9 random chips or pitches and track how many finish as up-and-down conversions.",
      "Duration": "12 min",
      "Source": "Conversion practice"
    },
    {
      "Drill_ID": "SK011",
      "Category": "Skill",
      "Focus_Area": "Bunker",
      "Trigger_Tag": "LOW_SS_PCT",
      "Drill_Name": "Dollar Bill Bunker Drill",
      "Short_Label": "Entry point",
      "Description": "Build a repeatable bunker entry point.",
      "How_To": "Draw a rectangle behind the ball and splash the sand from the rectangle without striking the ball first.",
      "Duration": "12 min",
      "Source": "Dave Pelz style"
    },
    {
      "Drill_ID": "SK012",
      "Category": "Skill",
      "Focus_Area": "Recovery",
      "Trigger_Tag": "PENALTY_ALERT",
      "Drill_Name": "Punch-Out Decision Drill",
      "Short_Label": "Take medicine",
      "Description": "Make recovery choices cheaper.",
      "How_To": "Practice 6 low punch shots to a number, then rehearse picking the safest escape line before each shot.",
      "Duration": "10 min",
      "Source": "Recovery discipline"
    },
    {
      "Drill_ID": "SD009",
      "Category": "Swing",
      "Focus_Area": "Putting",
      "Trigger_Tag": "THREE_PUTT_ALERT",
      "Drill_Name": "Three-Tee Tempo Drill",
      "Short_Label": "Even tempo",
      "Description": "Stabilize putter rhythm for better speed control.",
      "How_To": "Use three tees to keep the backswing and follow-through the same length on medium putts.",
      "Duration": "8 min",
      "Source": "Golf Digest tempo"
    },
    {
      "Drill_ID": "SD010",
      "Category": "Swing",
      "Focus_Area": "Putting",
      "Trigger_Tag": "PUTTING_STABLE",
      "Drill_Name": "Start-Line Gate Putts",
      "Short_Label": "Start line",
      "Description": "Maintain start-line control without overhauling your motion.",
      "How_To": "Set a gate just wider than the ball and roll 10 putts through it from 4-6 feet.",
      "Duration": "8 min",
      "Source": "Gate putting"
    },
    {
      "Drill_ID": "SK013",
      "Category": "Skill",
      "Focus_Area": "Putting",
      "Trigger_Tag": "THREE_PUTT_ALERT",
      "Drill_Name": "3-6-9 Circle Drill",
      "Short_Label": "Circle pressure",
      "Description": "Reduce three-putts through short-putt confidence and pressure tolerance.",
      "How_To": "Hole all putts in a 3-foot circle, then expand to 4-5 feet only after you clear the full ring.",
      "Duration": "12 min",
      "Source": "Short-putt pressure"
    },
    {
      "Drill_ID": "SK014",
      "Category": "Skill",
      "Focus_Area": "Putting",
      "Trigger_Tag": "THREE_PUTT_ALERT",
      "Drill_Name": "30-40-50 Lag Ladder",
      "Short_Label": "Own speed",
      "Description": "Train long-putt distance control from multiple lengths.",
      "How_To": "Putt from roughly 30, 40, and 50 feet and keep every ball inside a three-foot finish zone.",
      "Duration": "12 min",
      "Source": "Distance-control ladder"
    },
    {
      "Drill_ID": "SK015",
      "Category": "Skill",
      "Focus_Area": "Putting",
      "Trigger_Tag": "PUTTING_STABLE",
      "Drill_Name": "Speed Box Drill",
      "Short_Label": "Speed box",
      "Description": "Keep speed under control without over-complicating the read.",
      "How_To": "Build a box around the hole and roll putts from 5, 7, 9, and 11 feet so they finish in the box or hole out.",
      "Duration": "10 min",
      "Source": "Speed control"
    },
    {
      "Drill_ID": "ST001",
      "Category": "Stretch",
      "Focus_Area": "Tee",
      "Trigger_Tag": "LOW_FW_PCT",
      "Drill_Name": "Torso Twists",
      "Short_Label": "Turn free",
      "Description": "Free up rotation before tee-ball work.",
      "How_To": "2 x 30 seconds with a club across the shoulders.",
      "Duration": "3 min",
      "Source": "Mobility"
    },
    {
      "Drill_ID": "ST002",
      "Category": "Stretch",
      "Focus_Area": "Approach",
      "Trigger_Tag": "LOW_GIR_100_149",
      "Drill_Name": "Shoulder Scaption",
      "Short_Label": "Shoulder control",
      "Description": "Support cleaner arm and shoulder movement for scoring clubs.",
      "How_To": "2 x 30 seconds with light weight or no weight.",
      "Duration": "3 min",
      "Source": "Mobility"
    },
    {
      "Drill_ID": "ST003",
      "Category": "Stretch",
      "Focus_Area": "ShortGame",
      "Trigger_Tag": "LOW_UD_PCT",
      "Drill_Name": "Wrist Flexor / Extensor",
      "Short_Label": "Wrist feel",
      "Description": "Support short-game feel and control.",
      "How_To": "2 x 30 seconds each side.",
      "Duration": "3 min",
      "Source": "Mobility"
    },
    {
      "Drill_ID": "ST004",
      "Category": "Stretch",
      "Focus_Area": "Approach",
      "Trigger_Tag": "APP_SHORT_BIAS",
      "Drill_Name": "Hip Crossovers",
      "Short_Label": "Free the hips",
      "Description": "Improve rotation and low-point control support.",
      "How_To": "2 x 30 seconds each side.",
      "Duration": "3 min",
      "Source": "Mobility"
    },
    {
      "Drill_ID": "ST005",
      "Category": "Stretch",
      "Focus_Area": "General",
      "Trigger_Tag": "BACK_NINE_FADE",
      "Drill_Name": "Cat-Cow + Thoracic Openers",
      "Short_Label": "Stay mobile",
      "Description": "Reset posture and rotation when fatigue shows up later in the round.",
      "How_To": "60 seconds Cat-Cow, then 60 seconds thoracic openers.",
      "Duration": "4 min",
      "Source": "Mobility"
    },
    {
      "Drill_ID": "ST006",
      "Category": "Stretch",
      "Focus_Area": "Tee",
      "Trigger_Tag": "TEE_TWO_WAY_MISS",
      "Drill_Name": "Lateral Leg Swings",
      "Short_Label": "Athletic setup",
      "Description": "Support balance and athletic motion before tee work.",
      "How_To": "30 seconds each leg, front-back and side-side.",
      "Duration": "3 min",
      "Source": "Dynamic warmup"
    },
    {
      "Drill_ID": "STR001",
      "Category": "Strength",
      "Focus_Area": "Tee",
      "Trigger_Tag": "LOW_FW_PCT",
      "Drill_Name": "Single-Leg Glute Bridge",
      "Short_Label": "Glute stability",
      "Description": "Support balance and lower-body control for the tee ball.",
      "How_To": "2 x 10 each leg.",
      "Duration": "5 min",
      "Source": "Stability"
    },
    {
      "Drill_ID": "STR002",
      "Category": "Strength",
      "Focus_Area": "Approach",
      "Trigger_Tag": "LOW_GIR_100_149",
      "Drill_Name": "Split Squat with Rotation",
      "Short_Label": "Rotational stability",
      "Description": "Support cleaner rotation and scoring-club posture.",
      "How_To": "3 x 8 per leg.",
      "Duration": "6 min",
      "Source": "Stability"
    },
    {
      "Drill_ID": "STR003",
      "Category": "Strength",
      "Focus_Area": "ShortGame",
      "Trigger_Tag": "LOW_UD_PCT",
      "Drill_Name": "Dead Bug",
      "Short_Label": "Core connection",
      "Description": "Improve trunk stability for cleaner contact around the green.",
      "How_To": "2 x 10 controlled reps.",
      "Duration": "4 min",
      "Source": "Stability"
    },
    {
      "Drill_ID": "STR004",
      "Category": "Strength",
      "Focus_Area": "Putting",
      "Trigger_Tag": "THREE_PUTT_ALERT",
      "Drill_Name": "Forearm Plank",
      "Short_Label": "Quiet body",
      "Description": "Support posture and stability through the putting motion.",
      "How_To": "2 x 30-45 seconds.",
      "Duration": "4 min",
      "Source": "Stability"
    },
    {
      "Drill_ID": "STR005",
      "Category": "Strength",
      "Focus_Area": "General",
      "Trigger_Tag": "BACK_NINE_FADE",
      "Drill_Name": "Bird Dogs",
      "Short_Label": "Stay organized",
      "Description": "Support coordination and posture late in rounds and practice sessions.",
      "How_To": "2 x 8 per side with pauses.",
      "Duration": "4 min",
      "Source": "Stability"
    },
    {
      "Drill_ID": "STR006",
      "Category": "Strength",
      "Focus_Area": "Tee",
      "Trigger_Tag": "TEE_TWO_WAY_MISS",
      "Drill_Name": "Single-Leg Deadlift",
      "Short_Label": "Balance first",
      "Description": "Support centered pressure and control when the tee pattern widens.",
      "How_To": "2 x 8 per leg with controlled tempo.",
      "Duration": "5 min",
      "Source": "Stability"
    }
  ],
  "Prescription_Map": [
    {
      "Trigger_Tag": "PENALTY_ALERT",
      "Swing_Drill_ID": "SD001",
      "Skill_Drill_ID": "SK003",
      "Stretch_Drill_ID": "ST001",
      "Strength_Drill_ID": "STR001",
      "Prescription_Headline": "Protect the card first",
      "Prescription_Note": "This round starts with keeping the ball in play and making the expensive shot harder to find."
    },
    {
      "Trigger_Tag": "THREE_PUTT_ALERT",
      "Swing_Drill_ID": "SD009",
      "Skill_Drill_ID": "SK013",
      "Stretch_Drill_ID": "ST003",
      "Strength_Drill_ID": "STR004",
      "Prescription_Headline": "Pace and hole-out discipline",
      "Prescription_Note": "This is a putting control round, not a ball-striking rebuild."
    },
    {
      "Trigger_Tag": "LOW_FW_PCT",
      "Swing_Drill_ID": "SD001",
      "Skill_Drill_ID": "SK001",
      "Stretch_Drill_ID": "ST001",
      "Strength_Drill_ID": "STR001",
      "Prescription_Headline": "Playable tee shots first",
      "Prescription_Note": "Shrink the tee pattern before chasing anything else."
    },
    {
      "Trigger_Tag": "TEE_TWO_WAY_MISS",
      "Swing_Drill_ID": "SD001",
      "Skill_Drill_ID": "SK002",
      "Stretch_Drill_ID": "ST006",
      "Strength_Drill_ID": "STR006",
      "Prescription_Headline": "Narrow the pattern",
      "Prescription_Note": "One direction needs to come out of the round."
    },
    {
      "Trigger_Tag": "LOW_GIR_100_149",
      "Swing_Drill_ID": "SD004",
      "Skill_Drill_ID": "SK004",
      "Stretch_Drill_ID": "ST002",
      "Strength_Drill_ID": "STR002",
      "Prescription_Headline": "Scoring clubs first",
      "Prescription_Note": "Sharpen the 100-149 window before touching bigger swing changes."
    },
    {
      "Trigger_Tag": "LOW_GIR_150_199",
      "Swing_Drill_ID": "SD005",
      "Skill_Drill_ID": "SK005",
      "Stretch_Drill_ID": "ST004",
      "Strength_Drill_ID": "STR002",
      "Prescription_Headline": "Mid-iron window",
      "Prescription_Note": "Build a center-green pattern from the mid-iron range."
    },
    {
      "Trigger_Tag": "LOW_GIR_OVERALL",
      "Swing_Drill_ID": "SD004",
      "Skill_Drill_ID": "SK006",
      "Stretch_Drill_ID": "ST002",
      "Strength_Drill_ID": "STR002",
      "Prescription_Headline": "Center-green discipline",
      "Prescription_Note": "This round needs cleaner approach structure, not hero golf."
    },
    {
      "Trigger_Tag": "LOW_UD_PCT",
      "Swing_Drill_ID": "SD008",
      "Skill_Drill_ID": "SK009",
      "Stretch_Drill_ID": "ST003",
      "Strength_Drill_ID": "STR003",
      "Prescription_Headline": "Save more misses",
      "Prescription_Note": "Turn missed greens into makeable second putts."
    },
    {
      "Trigger_Tag": "LOW_SS_PCT",
      "Swing_Drill_ID": "",
      "Skill_Drill_ID": "SK011",
      "Stretch_Drill_ID": "ST003",
      "Strength_Drill_ID": "STR003",
      "Prescription_Headline": "Bunker conversion",
      "Prescription_Note": "Build a repeatable entry point and calmer splash pattern."
    },
    {
      "Trigger_Tag": "SCORING_ZONE_UNDERPERFORMED",
      "Swing_Drill_ID": "SD004",
      "Skill_Drill_ID": "SK007",
      "Stretch_Drill_ID": "ST002",
      "Strength_Drill_ID": "STR002",
      "Prescription_Headline": "Own the scoring zone",
      "Prescription_Note": "The card wants sharper numbers inside 150."
    },
    {
      "Trigger_Tag": "BACK_NINE_FADE",
      "Swing_Drill_ID": "",
      "Skill_Drill_ID": "SK008",
      "Stretch_Drill_ID": "ST005",
      "Strength_Drill_ID": "STR005",
      "Prescription_Headline": "Finish stronger",
      "Prescription_Note": "End practice the way you want to finish rounds."
    },
    {
      "Trigger_Tag": "PUTTING_STABLE",
      "Swing_Drill_ID": "SD010",
      "Skill_Drill_ID": "SK015",
      "Stretch_Drill_ID": "ST003",
      "Strength_Drill_ID": "STR004",
      "Prescription_Headline": "Maintain the putter",
      "Prescription_Note": "Keep the putter in maintenance mode and spend energy elsewhere."
    }
  ],
  "Voice_Library": [
    {
      "Section": "positive",
      "Key": "protect_card",
      "Text": "The card stayed alive.",
      "Display_Order": 1
    },
    {
      "Section": "positive",
      "Key": "structure_good",
      "Text": "There was enough golf in the round to work with.",
      "Display_Order": 2
    },
    {
      "Section": "positive",
      "Key": "short_game_saved",
      "Text": "The short game kept the card from drifting.",
      "Display_Order": 3
    },
    {
      "Section": "cost",
      "Key": "not_rebuild",
      "Text": "This was not a rebuild round.",
      "Display_Order": 1
    },
    {
      "Section": "cost",
      "Key": "expensive_zone",
      "Text": "One zone on the course made the card expensive.",
      "Display_Order": 2
    },
    {
      "Section": "cost",
      "Key": "conversion",
      "Text": "The round did not collapse — it just failed to convert.",
      "Display_Order": 3
    },
    {
      "Section": "train",
      "Key": "protect_first",
      "Text": "Protect the card first.",
      "Display_Order": 1
    },
    {
      "Section": "train",
      "Key": "sharpen_scoring",
      "Text": "Then sharpen the scoring clubs.",
      "Display_Order": 2
    },
    {
      "Section": "train",
      "Key": "one_lever",
      "Text": "Pick one lever for the next practice block.",
      "Display_Order": 3
    }
  ],
  "Practice_Plan_Templates": [
    {
      "Trigger_Tag": "PENALTY_ALERT",
      "Duration_Min": 30,
      "Block_1": "10 min Fairway Finder",
      "Block_2": "10 min Punch-Out Decision Drill",
      "Block_3": "10 min torso + glute stability",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "PENALTY_ALERT",
      "Duration_Min": 45,
      "Block_1": "12 min Tempo Rope Rehearsal",
      "Block_2": "15 min Fairway Finder",
      "Block_3": "18 min punch-out + reset practice",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "PENALTY_ALERT",
      "Duration_Min": 60,
      "Block_1": "15 min stock tee pattern",
      "Block_2": "20 min wide-side simulation",
      "Block_3": "25 min recovery + pressure finish",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "THREE_PUTT_ALERT",
      "Duration_Min": 30,
      "Block_1": "10 min three-tee tempo",
      "Block_2": "10 min 3-6-9 circle drill",
      "Block_3": "10 min 30-40-50 lag ladder",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "THREE_PUTT_ALERT",
      "Duration_Min": 45,
      "Block_1": "10 min tempo + start line",
      "Block_2": "15 min 3-6-9 circle drill",
      "Block_3": "20 min lag ladder and speed box",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "THREE_PUTT_ALERT",
      "Duration_Min": 60,
      "Block_1": "15 min tempo + gate putts",
      "Block_2": "20 min circle drill",
      "Block_3": "25 min lag ladder + speed box",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "LOW_FW_PCT",
      "Duration_Min": 30,
      "Block_1": "8 min torso + prep",
      "Block_2": "12 min Fairway Finder",
      "Block_3": "10 min start-line gate",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "LOW_FW_PCT",
      "Duration_Min": 45,
      "Block_1": "10 min tempo rope",
      "Block_2": "15 min Fairway Finder",
      "Block_3": "20 min pressure tee-ball set",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "LOW_FW_PCT",
      "Duration_Min": 60,
      "Block_1": "10 min prep",
      "Block_2": "20 min Fairway Finder",
      "Block_3": "15 min start-line gate",
      "Block_4": "15 min wide-side simulation"
    },
    {
      "Trigger_Tag": "LOW_GIR_100_149",
      "Duration_Min": 30,
      "Block_1": "8 min start-line check",
      "Block_2": "12 min Random Yardage Drill",
      "Block_3": "10 min split squat + shoulder control",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "LOW_GIR_100_149",
      "Duration_Min": 45,
      "Block_1": "10 min start-line check",
      "Block_2": "20 min Random Yardage Drill",
      "Block_3": "15 min Four-Number Wedge Test",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "LOW_GIR_100_149",
      "Duration_Min": 60,
      "Block_1": "10 min start-line check",
      "Block_2": "20 min Random Yardage Drill",
      "Block_3": "15 min Four-Number Wedge Test",
      "Block_4": "15 min landing-zone wedge finish"
    },
    {
      "Trigger_Tag": "LOW_UD_PCT",
      "Duration_Min": 30,
      "Block_1": "8 min stock chip motion",
      "Block_2": "12 min Landing Zone Drill",
      "Block_3": "10 min dead bug + wrist feel",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "LOW_UD_PCT",
      "Duration_Min": 45,
      "Block_1": "10 min stock chip motion",
      "Block_2": "20 min Landing Zone Drill",
      "Block_3": "15 min Up-and-Down Challenge",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "LOW_UD_PCT",
      "Duration_Min": 60,
      "Block_1": "10 min chip motion",
      "Block_2": "20 min Landing Zone Drill",
      "Block_3": "15 min Up-and-Down Challenge",
      "Block_4": "15 min bunker or pitch ladder"
    },
    {
      "Trigger_Tag": "SCORING_ZONE_UNDERPERFORMED",
      "Duration_Min": 30,
      "Block_1": "10 min Four-Number Wedge Test",
      "Block_2": "10 min center-green ladder",
      "Block_3": "10 min split squat + scaption",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "SCORING_ZONE_UNDERPERFORMED",
      "Duration_Min": 45,
      "Block_1": "10 min start-line check",
      "Block_2": "15 min Four-Number Wedge Test",
      "Block_3": "20 min Random Yardage Drill",
      "Block_4": ""
    },
    {
      "Trigger_Tag": "SCORING_ZONE_UNDERPERFORMED",
      "Duration_Min": 60,
      "Block_1": "10 min start-line check",
      "Block_2": "20 min Four-Number Wedge Test",
      "Block_3": "15 min Random Yardage Drill",
      "Block_4": "15 min pressure finish"
    }
  ],
  "Course_Presets": [
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 1,
      "Par": 4,
      "Yards": 417,
      "Handicap": 9
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 2,
      "Par": 5,
      "Yards": 546,
      "Handicap": 7
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 3,
      "Par": 3,
      "Yards": 186,
      "Handicap": 17
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 4,
      "Par": 4,
      "Yards": 417,
      "Handicap": 3
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 5,
      "Par": 4,
      "Yards": 395,
      "Handicap": 13
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 6,
      "Par": 3,
      "Yards": 179,
      "Handicap": 11
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 7,
      "Par": 4,
      "Yards": 448,
      "Handicap": 1
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 8,
      "Par": 5,
      "Yards": 544,
      "Handicap": 5
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 9,
      "Par": 3,
      "Yards": 168,
      "Handicap": 15
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 10,
      "Par": 4,
      "Yards": 426,
      "Handicap": 8
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 11,
      "Par": 4,
      "Yards": 446,
      "Handicap": 2
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 12,
      "Par": 5,
      "Yards": 515,
      "Handicap": 12
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 13,
      "Par": 3,
      "Yards": 188,
      "Handicap": 16
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 14,
      "Par": 4,
      "Yards": 344,
      "Handicap": 14
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 15,
      "Par": 4,
      "Yards": 380,
      "Handicap": 6
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 16,
      "Par": 3,
      "Yards": 169,
      "Handicap": 18
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 17,
      "Par": 4,
      "Yards": 371,
      "Handicap": 4
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Back",
      "Hole": 18,
      "Par": 4,
      "Yards": 379,
      "Handicap": 10
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 1,
      "Par": 4,
      "Yards": 408,
      "Handicap": 9
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 2,
      "Par": 5,
      "Yards": 530,
      "Handicap": 7
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 3,
      "Par": 3,
      "Yards": 139,
      "Handicap": 17
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 4,
      "Par": 4,
      "Yards": 400,
      "Handicap": 3
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 5,
      "Par": 4,
      "Yards": 363,
      "Handicap": 13
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 6,
      "Par": 3,
      "Yards": 162,
      "Handicap": 11
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 7,
      "Par": 4,
      "Yards": 421,
      "Handicap": 1
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 8,
      "Par": 5,
      "Yards": 541,
      "Handicap": 5
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 9,
      "Par": 3,
      "Yards": 145,
      "Handicap": 15
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 10,
      "Par": 4,
      "Yards": 395,
      "Handicap": 8
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 11,
      "Par": 4,
      "Yards": 437,
      "Handicap": 2
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 12,
      "Par": 5,
      "Yards": 500,
      "Handicap": 12
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 13,
      "Par": 3,
      "Yards": 178,
      "Handicap": 16
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 14,
      "Par": 4,
      "Yards": 337,
      "Handicap": 14
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 15,
      "Par": 4,
      "Yards": 370,
      "Handicap": 6
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 16,
      "Par": 3,
      "Yards": 129,
      "Handicap": 18
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 17,
      "Par": 4,
      "Yards": 356,
      "Handicap": 4
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 18,
      "Par": 4,
      "Yards": 370,
      "Handicap": 10
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 1,
      "Par": 4,
      "Yards": 399,
      "Handicap": 9
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 2,
      "Par": 5,
      "Yards": 463,
      "Handicap": 7
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 3,
      "Par": 3,
      "Yards": 130,
      "Handicap": 17
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 4,
      "Par": 4,
      "Yards": 324,
      "Handicap": 3
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 5,
      "Par": 4,
      "Yards": 228,
      "Handicap": 13
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 6,
      "Par": 3,
      "Yards": 119,
      "Handicap": 11
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 7,
      "Par": 4,
      "Yards": 363,
      "Handicap": 1
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 8,
      "Par": 5,
      "Yards": 496,
      "Handicap": 5
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 9,
      "Par": 3,
      "Yards": 134,
      "Handicap": 15
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 10,
      "Par": 4,
      "Yards": 388,
      "Handicap": 8
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 11,
      "Par": 4,
      "Yards": 428,
      "Handicap": 2
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 12,
      "Par": 5,
      "Yards": 443,
      "Handicap": 12
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 13,
      "Par": 3,
      "Yards": 168,
      "Handicap": 16
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 14,
      "Par": 4,
      "Yards": 330,
      "Handicap": 14
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 15,
      "Par": 4,
      "Yards": 360,
      "Handicap": 6
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 16,
      "Par": 3,
      "Yards": 96,
      "Handicap": 18
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 17,
      "Par": 4,
      "Yards": 320,
      "Handicap": 4
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward",
      "Hole": 18,
      "Par": 4,
      "Yards": 331,
      "Handicap": 10
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 1,
      "Par": 5,
      "Yards": 399,
      "Handicap": 9
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 2,
      "Par": 5,
      "Yards": 463,
      "Handicap": 7
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 3,
      "Par": 3,
      "Yards": 130,
      "Handicap": 17
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 4,
      "Par": 4,
      "Yards": 324,
      "Handicap": 3
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 5,
      "Par": 4,
      "Yards": 228,
      "Handicap": 13
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 6,
      "Par": 3,
      "Yards": 119,
      "Handicap": 11
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 7,
      "Par": 4,
      "Yards": 363,
      "Handicap": 1
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 8,
      "Par": 5,
      "Yards": 496,
      "Handicap": 5
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 9,
      "Par": 3,
      "Yards": 134,
      "Handicap": 15
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 10,
      "Par": 4,
      "Yards": 388,
      "Handicap": 4
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 11,
      "Par": 5,
      "Yards": 428,
      "Handicap": 6
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 12,
      "Par": 5,
      "Yards": 443,
      "Handicap": 2
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 13,
      "Par": 3,
      "Yards": 168,
      "Handicap": 16
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 14,
      "Par": 4,
      "Yards": 330,
      "Handicap": 14
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 15,
      "Par": 4,
      "Yards": 360,
      "Handicap": 8
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 16,
      "Par": 3,
      "Yards": 96,
      "Handicap": 18
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 17,
      "Par": 4,
      "Yards": 320,
      "Handicap": 10
    },
    {
      "Course": "Springhaven Club",
      "Tee": "Forward (Par 72)",
      "Hole": 18,
      "Par": 4,
      "Yards": 331,
      "Handicap": 12
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 1,
      "Par": 4,
      "Yards": 360,
      "Handicap": 9
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 2,
      "Par": 4,
      "Yards": 360,
      "Handicap": 7
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 3,
      "Par": 4,
      "Yards": 360,
      "Handicap": 17
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 4,
      "Par": 4,
      "Yards": 360,
      "Handicap": 3
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 5,
      "Par": 4,
      "Yards": 360,
      "Handicap": 13
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 6,
      "Par": 4,
      "Yards": 360,
      "Handicap": 11
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 7,
      "Par": 4,
      "Yards": 360,
      "Handicap": 1
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 8,
      "Par": 4,
      "Yards": 360,
      "Handicap": 5
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 9,
      "Par": 4,
      "Yards": 360,
      "Handicap": 15
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 10,
      "Par": 4,
      "Yards": 360,
      "Handicap": 8
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 11,
      "Par": 4,
      "Yards": 360,
      "Handicap": 2
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 12,
      "Par": 4,
      "Yards": 360,
      "Handicap": 12
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 13,
      "Par": 4,
      "Yards": 360,
      "Handicap": 16
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 14,
      "Par": 4,
      "Yards": 360,
      "Handicap": 14
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 15,
      "Par": 4,
      "Yards": 360,
      "Handicap": 6
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 16,
      "Par": 4,
      "Yards": 360,
      "Handicap": 18
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 17,
      "Par": 4,
      "Yards": 360,
      "Handicap": 4
    },
    {
      "Course": "Custom Course",
      "Tee": "Custom",
      "Hole": 18,
      "Par": 4,
      "Yards": 360,
      "Handicap": 10
    }
  ],
  "Sample_Rounds": [
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 1,
      "Score": "5",
      "Fairway": "L",
      "Green": "L125",
      "Putts": "2",
      "UD": "N",
      "SS": "",
      "Penalty": "0",
      "Notes": "Pull from tee"
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 2,
      "Score": "5",
      "Fairway": "Y",
      "Green": "Y118",
      "Putts": "2",
      "UD": "",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 3,
      "Score": "3",
      "Fairway": "N/A",
      "Green": "Y139",
      "Putts": "2",
      "UD": "",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 4,
      "Score": "5",
      "Fairway": "R",
      "Green": "S152",
      "Putts": "2",
      "UD": "N",
      "SS": "",
      "Penalty": "0",
      "Notes": "Came up short"
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 5,
      "Score": "4",
      "Fairway": "Y",
      "Green": "Y132",
      "Putts": "2",
      "UD": "",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 6,
      "Score": "3",
      "Fairway": "N/A",
      "Green": "Y162",
      "Putts": "2",
      "UD": "",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 7,
      "Score": "5",
      "Fairway": "Y",
      "Green": "L168",
      "Putts": "2",
      "UD": "N",
      "SS": "",
      "Penalty": "0",
      "Notes": "Missed left"
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 8,
      "Score": "5",
      "Fairway": "Y",
      "Green": "Y92",
      "Putts": "2",
      "UD": "",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 9,
      "Score": "4",
      "Fairway": "N/A",
      "Green": "S145",
      "Putts": "2",
      "UD": "N",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 10,
      "Score": "5",
      "Fairway": "L",
      "Green": "L144",
      "Putts": "2",
      "UD": "N",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 11,
      "Score": "4",
      "Fairway": "Y",
      "Green": "Y136",
      "Putts": "2",
      "UD": "",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 12,
      "Score": "6",
      "Fairway": "R",
      "Green": "R155",
      "Putts": "2",
      "UD": "N",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 13,
      "Score": "3",
      "Fairway": "N/A",
      "Green": "Y178",
      "Putts": "2",
      "UD": "",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 14,
      "Score": "4",
      "Fairway": "Y",
      "Green": "Y108",
      "Putts": "2",
      "UD": "",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 15,
      "Score": "5",
      "Fairway": "Y",
      "Green": "L122",
      "Putts": "2",
      "UD": "N",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 16,
      "Score": "3",
      "Fairway": "N/A",
      "Green": "Y129",
      "Putts": "2",
      "UD": "",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 17,
      "Score": "4",
      "Fairway": "Y",
      "Green": "Y141",
      "Putts": "2",
      "UD": "",
      "SS": "",
      "Penalty": "0",
      "Notes": ""
    },
    {
      "Round_Name": "Demo Round",
      "Course": "Springhaven Club",
      "Tee": "Middle",
      "Hole": 18,
      "Score": "5",
      "Fairway": "R",
      "Green": "LO134",
      "Putts": "2",
      "UD": "N",
      "SS": "",
      "Penalty": "0",
      "Notes": "Long over green"
    }
  ]
};
const SPRINGHAVEN_TEE_DATA = {
  "Back": {
    "tee": "Back",
    "holes": [
      {
        "hole": 1,
        "par": 4,
        "yards": 417,
        "handicap": 9
      },
      {
        "hole": 2,
        "par": 5,
        "yards": 546,
        "handicap": 7
      },
      {
        "hole": 3,
        "par": 3,
        "yards": 186,
        "handicap": 17
      },
      {
        "hole": 4,
        "par": 4,
        "yards": 417,
        "handicap": 3
      },
      {
        "hole": 5,
        "par": 4,
        "yards": 395,
        "handicap": 13
      },
      {
        "hole": 6,
        "par": 3,
        "yards": 179,
        "handicap": 11
      },
      {
        "hole": 7,
        "par": 4,
        "yards": 448,
        "handicap": 1
      },
      {
        "hole": 8,
        "par": 5,
        "yards": 544,
        "handicap": 5
      },
      {
        "hole": 9,
        "par": 3,
        "yards": 168,
        "handicap": 15
      },
      {
        "hole": 10,
        "par": 4,
        "yards": 426,
        "handicap": 8
      },
      {
        "hole": 11,
        "par": 4,
        "yards": 446,
        "handicap": 2
      },
      {
        "hole": 12,
        "par": 5,
        "yards": 515,
        "handicap": 12
      },
      {
        "hole": 13,
        "par": 3,
        "yards": 188,
        "handicap": 16
      },
      {
        "hole": 14,
        "par": 4,
        "yards": 344,
        "handicap": 14
      },
      {
        "hole": 15,
        "par": 4,
        "yards": 380,
        "handicap": 6
      },
      {
        "hole": 16,
        "par": 3,
        "yards": 169,
        "handicap": 18
      },
      {
        "hole": 17,
        "par": 4,
        "yards": 371,
        "handicap": 4
      },
      {
        "hole": 18,
        "par": 4,
        "yards": 379,
        "handicap": 10
      }
    ]
  },
  "Middle": {
    "tee": "Middle",
    "holes": [
      {
        "hole": 1,
        "par": 4,
        "yards": 408,
        "handicap": 9
      },
      {
        "hole": 2,
        "par": 5,
        "yards": 530,
        "handicap": 7
      },
      {
        "hole": 3,
        "par": 3,
        "yards": 139,
        "handicap": 17
      },
      {
        "hole": 4,
        "par": 4,
        "yards": 400,
        "handicap": 3
      },
      {
        "hole": 5,
        "par": 4,
        "yards": 363,
        "handicap": 13
      },
      {
        "hole": 6,
        "par": 3,
        "yards": 162,
        "handicap": 11
      },
      {
        "hole": 7,
        "par": 4,
        "yards": 421,
        "handicap": 1
      },
      {
        "hole": 8,
        "par": 5,
        "yards": 541,
        "handicap": 5
      },
      {
        "hole": 9,
        "par": 3,
        "yards": 145,
        "handicap": 15
      },
      {
        "hole": 10,
        "par": 4,
        "yards": 395,
        "handicap": 8
      },
      {
        "hole": 11,
        "par": 4,
        "yards": 437,
        "handicap": 2
      },
      {
        "hole": 12,
        "par": 5,
        "yards": 500,
        "handicap": 12
      },
      {
        "hole": 13,
        "par": 3,
        "yards": 178,
        "handicap": 16
      },
      {
        "hole": 14,
        "par": 4,
        "yards": 337,
        "handicap": 14
      },
      {
        "hole": 15,
        "par": 4,
        "yards": 370,
        "handicap": 6
      },
      {
        "hole": 16,
        "par": 3,
        "yards": 129,
        "handicap": 18
      },
      {
        "hole": 17,
        "par": 4,
        "yards": 356,
        "handicap": 4
      },
      {
        "hole": 18,
        "par": 4,
        "yards": 370,
        "handicap": 10
      }
    ]
  },
  "Forward": {
    "tee": "Forward",
    "holes": [
      {
        "hole": 1,
        "par": 4,
        "yards": 399,
        "handicap": 9
      },
      {
        "hole": 2,
        "par": 5,
        "yards": 463,
        "handicap": 7
      },
      {
        "hole": 3,
        "par": 3,
        "yards": 130,
        "handicap": 17
      },
      {
        "hole": 4,
        "par": 4,
        "yards": 324,
        "handicap": 3
      },
      {
        "hole": 5,
        "par": 4,
        "yards": 228,
        "handicap": 13
      },
      {
        "hole": 6,
        "par": 3,
        "yards": 119,
        "handicap": 11
      },
      {
        "hole": 7,
        "par": 4,
        "yards": 363,
        "handicap": 1
      },
      {
        "hole": 8,
        "par": 5,
        "yards": 496,
        "handicap": 5
      },
      {
        "hole": 9,
        "par": 3,
        "yards": 134,
        "handicap": 15
      },
      {
        "hole": 10,
        "par": 4,
        "yards": 388,
        "handicap": 8
      },
      {
        "hole": 11,
        "par": 4,
        "yards": 428,
        "handicap": 2
      },
      {
        "hole": 12,
        "par": 5,
        "yards": 443,
        "handicap": 12
      },
      {
        "hole": 13,
        "par": 3,
        "yards": 168,
        "handicap": 16
      },
      {
        "hole": 14,
        "par": 4,
        "yards": 330,
        "handicap": 14
      },
      {
        "hole": 15,
        "par": 4,
        "yards": 360,
        "handicap": 6
      },
      {
        "hole": 16,
        "par": 3,
        "yards": 96,
        "handicap": 18
      },
      {
        "hole": 17,
        "par": 4,
        "yards": 320,
        "handicap": 4
      },
      {
        "hole": 18,
        "par": 4,
        "yards": 331,
        "handicap": 10
      }
    ]
  },
  "Forward (Par 72)": {
    "tee": "Forward (Par 72)",
    "holes": [
      {
        "hole": 1,
        "par": 5,
        "yards": 399,
        "handicap": 9
      },
      {
        "hole": 2,
        "par": 5,
        "yards": 463,
        "handicap": 7
      },
      {
        "hole": 3,
        "par": 3,
        "yards": 130,
        "handicap": 17
      },
      {
        "hole": 4,
        "par": 4,
        "yards": 324,
        "handicap": 3
      },
      {
        "hole": 5,
        "par": 4,
        "yards": 228,
        "handicap": 13
      },
      {
        "hole": 6,
        "par": 3,
        "yards": 119,
        "handicap": 11
      },
      {
        "hole": 7,
        "par": 4,
        "yards": 363,
        "handicap": 1
      },
      {
        "hole": 8,
        "par": 5,
        "yards": 496,
        "handicap": 5
      },
      {
        "hole": 9,
        "par": 3,
        "yards": 134,
        "handicap": 15
      },
      {
        "hole": 10,
        "par": 4,
        "yards": 388,
        "handicap": 4
      },
      {
        "hole": 11,
        "par": 5,
        "yards": 428,
        "handicap": 6
      },
      {
        "hole": 12,
        "par": 5,
        "yards": 443,
        "handicap": 2
      },
      {
        "hole": 13,
        "par": 3,
        "yards": 168,
        "handicap": 16
      },
      {
        "hole": 14,
        "par": 4,
        "yards": 330,
        "handicap": 14
      },
      {
        "hole": 15,
        "par": 4,
        "yards": 360,
        "handicap": 8
      },
      {
        "hole": 16,
        "par": 3,
        "yards": 96,
        "handicap": 18
      },
      {
        "hole": 17,
        "par": 4,
        "yards": 320,
        "handicap": 10
      },
      {
        "hole": 18,
        "par": 4,
        "yards": 331,
        "handicap": 12
      }
    ]
  }
};
const DEMO_ROUND = [
  {
    "hole": 1,
    "score": "5",
    "fairway": "L",
    "green": "L125",
    "putts": "2",
    "ud": "N",
    "ss": "",
    "penalty": "0",
    "notes": "Pull from tee"
  },
  {
    "hole": 2,
    "score": "5",
    "fairway": "Y",
    "green": "Y118",
    "putts": "2",
    "ud": "",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 3,
    "score": "3",
    "fairway": "N/A",
    "green": "Y139",
    "putts": "2",
    "ud": "",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 4,
    "score": "5",
    "fairway": "R",
    "green": "S152",
    "putts": "2",
    "ud": "N",
    "ss": "",
    "penalty": "0",
    "notes": "Came up short"
  },
  {
    "hole": 5,
    "score": "4",
    "fairway": "Y",
    "green": "Y132",
    "putts": "2",
    "ud": "",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 6,
    "score": "3",
    "fairway": "N/A",
    "green": "Y162",
    "putts": "2",
    "ud": "",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 7,
    "score": "5",
    "fairway": "Y",
    "green": "L168",
    "putts": "2",
    "ud": "N",
    "ss": "",
    "penalty": "0",
    "notes": "Missed left"
  },
  {
    "hole": 8,
    "score": "5",
    "fairway": "Y",
    "green": "Y92",
    "putts": "2",
    "ud": "",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 9,
    "score": "4",
    "fairway": "N/A",
    "green": "S145",
    "putts": "2",
    "ud": "N",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 10,
    "score": "5",
    "fairway": "L",
    "green": "L144",
    "putts": "2",
    "ud": "N",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 11,
    "score": "4",
    "fairway": "Y",
    "green": "Y136",
    "putts": "2",
    "ud": "",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 12,
    "score": "6",
    "fairway": "R",
    "green": "R155",
    "putts": "2",
    "ud": "N",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 13,
    "score": "3",
    "fairway": "N/A",
    "green": "Y178",
    "putts": "2",
    "ud": "",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 14,
    "score": "4",
    "fairway": "Y",
    "green": "Y108",
    "putts": "2",
    "ud": "",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 15,
    "score": "5",
    "fairway": "Y",
    "green": "L122",
    "putts": "2",
    "ud": "N",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 16,
    "score": "3",
    "fairway": "N/A",
    "green": "Y129",
    "putts": "2",
    "ud": "",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 17,
    "score": "4",
    "fairway": "Y",
    "green": "Y141",
    "putts": "2",
    "ud": "",
    "ss": "",
    "penalty": "0",
    "notes": ""
  },
  {
    "hole": 18,
    "score": "5",
    "fairway": "R",
    "green": "LO134",
    "putts": "2",
    "ud": "N",
    "ss": "",
    "penalty": "0",
    "notes": "Long over green"
  }
];

const state = {
  workbookData: null,
  config: {},
  legend: [],
  reviews: [],
  drills: [],
  prescriptions: [],
  voice: [],
  practiceTemplates: [],
  currentCourseMode: 'springhaven',
  springhavenTees: SPRINGHAVEN_TEE_DATA,
  currentTee: 'Middle',
  results: null,
  mobileEntryView: 'cards',
};

const els = {
  heroTitle: document.getElementById('heroTitle'),
  heroSubtitle: document.getElementById('heroSubtitle'),
  heroTagline: document.getElementById('heroTagline'),
  courseMode: document.getElementById('courseMode'),
  teeSelect: document.getElementById('teeSelect'),
  roundTableBody: document.getElementById('roundTableBody'),
  scoreTableShell: document.getElementById('scoreTableShell'),
  entryModeCardsBtn: document.getElementById('entryModeCardsBtn'),
  entryModeTableBtn: document.getElementById('entryModeTableBtn'),
  summaryCards: document.getElementById('summaryCards'),
  roundProfile: document.getElementById('roundProfile'),
  whatTraveled: document.getElementById('whatTraveled'),
  whatCostShots: document.getElementById('whatCostShots'),
  whatTrainNext: document.getElementById('whatTrainNext'),
  patternGrid: document.getElementById('patternGrid'),
  bucketCards: document.getElementById('bucketCards'),
  prescriptionCards: document.getElementById('prescriptionCards'),
  prescriptionHeadline: document.getElementById('prescriptionHeadline'),
  prescriptionNote: document.getElementById('prescriptionNote'),
  prescriptionFocusChips: document.getElementById('prescriptionFocusChips'),
  parsedRoundBody: document.getElementById('parsedRoundBody'),
  courseName: document.getElementById('courseName'),
  roundDate: document.getElementById('roundDate'),
  focusOfDay: document.getElementById('focusOfDay'),
  roundNotes: document.getElementById('roundNotes'),
  practiceDuration: document.getElementById('practiceDuration'),
  practiceDate: document.getElementById('practiceDate'),
  practiceTime: document.getElementById('practiceTime'),
  practicePlanSummary: document.getElementById('practicePlanSummary'),
  toast: document.getElementById('toast'),
};

async function init() {
  setDefaultDates();
  await loadWorkbookData();
  buildConfig();
  populateTeeSelect();
  renderLegend();
  renderScorecardRows();
  bindEvents();
  analyzeRound();
}

function setDefaultDates() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  els.roundDate.value = `${yyyy}-${mm}-${dd}`;
  const next = new Date(today);
  next.setDate(today.getDate() + 1);
  const ny = next.getFullYear();
  const nm = String(next.getMonth() + 1).padStart(2, '0');
  const nd = String(next.getDate()).padStart(2, '0');
  els.practiceDate.value = `${ny}-${nm}-${nd}`;
}

async function loadWorkbookData() {
  try {
    const response = await fetch('./tip_coaching_intelligence_product_ready.xlsx');
    if (!response.ok) throw new Error('Workbook fetch failed');
    const buffer = await response.arrayBuffer();
    const wb = XLSX.read(buffer, { type: 'array' });
    const data = {};
    wb.SheetNames.forEach((name) => {
      data[name] = XLSX.utils.sheet_to_json(wb.Sheets[name], { defval: '' });
    });
    state.workbookData = data;
  } catch (error) {
    console.warn('Workbook load failed, using fallback data.', error);
    state.workbookData = FALLBACK_DATA;
  }
}


function mergeRecords(baseRows, workbookRows, keyOrFn) {
  const keyFn = typeof keyOrFn === 'function' ? keyOrFn : (row, index) => row?.[keyOrFn] || `${String(keyOrFn)}_${index}`;
  const map = new Map();
  [...(baseRows || []), ...(workbookRows || [])].forEach((row, index) => {
    if (!row) return;
    map.set(keyFn(row, index), row);
  });
  return [...map.values()];
}

function buildConfig() {
  const cfgRows = mergeRecords(FALLBACK_DATA.Config, state.workbookData.Config, 'Key');
  state.config = Object.fromEntries(cfgRows.map((row) => [row.Key, row.Value]));
  state.legend = mergeRecords(
      FALLBACK_DATA.Input_Legend,
      state.workbookData.Input_Legend,
      (row) => `${row.Field || ''}__${row.Code || ''}`
    ).sort((a, b) => Number(a.Display_Order) - Number(b.Display_Order));
  state.reviews = mergeRecords(FALLBACK_DATA.Review_Rules, state.workbookData.Review_Rules, 'Rule_ID')
    .filter((row) => String(row.Active || 'Y').toUpperCase() === 'Y')
    .sort((a, b) => Number(a.Priority) - Number(b.Priority));
  state.drills = mergeRecords(FALLBACK_DATA.Drill_Library, state.workbookData.Drill_Library, 'Drill_ID')
    .filter((row) => String(row.Active || 'Y').toUpperCase() === 'Y');
  state.prescriptions = mergeRecords(FALLBACK_DATA.Prescription_Map, state.workbookData.Prescription_Map, 'Map_ID')
    .sort((a, b) => Number(a.Priority || 999) - Number(b.Priority || 999));
  state.voice = mergeRecords(
      FALLBACK_DATA.Voice_Library,
      state.workbookData.Voice_Library,
      (row) => `${row.Section || ''}__${row.Key || ''}`
    ).sort((a, b) => Number(a.Display_Order || 99) - Number(b.Display_Order || 99));
  state.practiceTemplates = mergeRecords(
      FALLBACK_DATA.Practice_Plan_Templates,
      state.workbookData.Practice_Plan_Templates,
      (row) => `${row.Trigger_Tag || ''}__${row.Duration_Min || ''}`
    ).filter((row) => row.Trigger_Tag);
  els.heroTitle.textContent = state.config.product_title || 'TIP Coaching Intelligence';
  els.heroSubtitle.textContent = state.config.product_subtitle || '';
  els.heroTagline.textContent = state.config.product_tagline || '';
  els.courseName.value = state.config.default_course || 'Springhaven Club';
}

function populateTeeSelect() {
  els.teeSelect.innerHTML = Object.keys(state.springhavenTees).map((tee) => `<option value="${tee}">${tee}</option>`).join('');
  els.teeSelect.value = state.config.default_tee || 'Middle';
  state.currentTee = els.teeSelect.value;
}

function renderLegend() {
}

function renderScorecardRows() {
  const holes = getCurrentCourseHoles();
  const isCustom = state.currentCourseMode === 'custom';
  els.roundTableBody.innerHTML = holes.map((hole) => {
    const fairwayDefault = hole.par === 3 ? 'N/A' : '';
    return `
      <tr data-hole="${hole.hole}">
        <td><span class="font-bold text-slate-100">${hole.hole}</span><div class="cell-meta">HCP ${hole.handicap || '—'}</div></td>
        <td>${isCustom ? `<input class="cell-input small" data-field="par" value="${hole.par}" inputmode="numeric" />` : hole.par}</td>
        <td>${isCustom ? `<input class="cell-input small" data-field="yards" value="${hole.yards}" inputmode="numeric" />` : hole.yards}</td>
        <td><input class="cell-input small" data-field="score" value="" inputmode="numeric" /></td>
        <td><input class="cell-input small mono" data-field="fairway" value="${fairwayDefault}" placeholder="Y/L/R" /></td>
        <td><input class="cell-input mono" data-field="green" value="" placeholder="Y134 / L125 / R165" /></td>
        <td><input class="cell-input small" data-field="putts" value="" inputmode="numeric" /></td>
        <td><input class="cell-input small mono" data-field="ud" value="" placeholder="Y/N" /></td>
        <td><input class="cell-input small mono" data-field="ss" value="" placeholder="Y/N" /></td>
        <td><input class="cell-input small" data-field="penalty" value="0" inputmode="numeric" /></td>
        <td><input class="cell-input note" data-field="notes" value="" placeholder="Optional note" /></td>
      </tr>
    `;
  }).join('');
}

function getCurrentCourseHoles() {
  if (state.currentCourseMode === 'custom') {
    return Array.from({ length: 18 }, (_, i) => ({ hole: i + 1, par: Number(state.config.custom_default_par || 4), yards: Number(state.config.custom_default_yards || 360), handicap: i + 1 }));
  }
  return state.springhavenTees[state.currentTee].holes;
}

function bindEvents() {
  document.getElementById('loadDemoBtn').addEventListener('click', loadDemoRound);
  document.getElementById('loadDemoBtn2').addEventListener('click', loadDemoRound);
  document.getElementById('analyzeBtn').addEventListener('click', handleAnalyzeFromScorecard);
  document.getElementById('analyzeBtnTop').addEventListener('click', handleAnalyzeFromTop);
  document.getElementById('clearBtn').addEventListener('click', clearRound);
  document.getElementById('clearBtnTop').addEventListener('click', clearRound);
  document.getElementById('copyDebriefBtn').addEventListener('click', copyDebrief);
  document.getElementById('copyPlanBtn').addEventListener('click', copyPlan);
  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.view-how-prescription-btn');
    if (!btn) return;
    const payload = {
      id: btn.dataset.drillId || '',
      name: btn.dataset.drillName || '',
      title: btn.dataset.drillName || '',
      description: btn.dataset.drillDescription || '',
      howTo: btn.dataset.drillHowto || '',
      why: btn.dataset.drillWhy || ''
    };
    try {
      if (window.TIPHowUI) window.TIPHowUI.open(payload);
    } catch (err) {
      console.warn('Could not open drill guide', err);
    }
  });
  document.getElementById('calendarBtn').addEventListener('click', exportCalendar);
  els.practiceDuration.addEventListener('change', () => {
    if (state.results) {
      state.results.practicePlan = buildPracticePlan(state.results.review.Primary_Tag || '', state.results.tags);
      renderPracticePlan(state.results.practicePlan);
    }
  });
  els.courseMode.addEventListener('change', () => {
    state.currentCourseMode = els.courseMode.value;
    if (state.currentCourseMode === 'springhaven') {
      els.courseName.value = 'Springhaven Club';
      els.teeSelect.disabled = false;
    } else {
      els.courseName.value = 'Custom Course';
      els.teeSelect.disabled = true;
    }
    renderScorecardRows();
    analyzeRound();
  });
  els.teeSelect.addEventListener('change', () => {
    state.currentTee = els.teeSelect.value;
    renderScorecardRows();
    analyzeRound();
  });
  els.roundTableBody.addEventListener('input', (event) => {
    const input = event.target;
    if (input.matches('input')) validateInputElement(input);
    refreshAnalyzeButtons();
  });
  els.roundTableBody.addEventListener('change', refreshAnalyzeButtons);
}


function loadDemoRound() {
  state.currentCourseMode = 'springhaven';
  els.courseMode.value = 'springhaven';
  els.courseName.value = 'Springhaven Club';
  els.teeSelect.disabled = false;
  els.teeSelect.value = 'Middle';
  state.currentTee = 'Middle';
  renderScorecardRows();
  DEMO_ROUND.forEach((row) => {
    const tr = els.roundTableBody.querySelector(`tr[data-hole="${row.hole}"]`);
    if (!tr) return;
    tr.querySelector('[data-field="score"]').value = row.score;
    tr.querySelector('[data-field="fairway"]').value = row.fairway;
    tr.querySelector('[data-field="green"]').value = row.green;
    tr.querySelector('[data-field="putts"]').value = row.putts;
    tr.querySelector('[data-field="ud"]').value = row.ud;
    tr.querySelector('[data-field="ss"]').value = row.ss;
    tr.querySelector('[data-field="penalty"]').value = row.penalty;
    tr.querySelector('[data-field="notes"]').value = row.notes;
  });
  analyzeRound();
  toast('Demo round loaded.');
}

function clearAnalysisUI() {
  els.summaryCards.innerHTML = '';
  els.roundProfile.textContent = 'Awaiting analysis';
  els.whatTraveled.textContent = 'Enter a round to generate the debrief.';
  els.whatCostShots.textContent = 'The tool will identify the main leak on the card.';
  els.whatTrainNext.textContent = 'TIP will prescribe one clear next block of work.';
  if (els.oneThingFocus) els.oneThingFocus.textContent = 'Analyze a round to surface the clearest next lever.';
  if (els.oneThingSupport) els.oneThingSupport.textContent = 'TIP will pull one simple focus you can take straight into the next session.';
  if (els.patternGrid) els.patternGrid.innerHTML = '';
  if (els.bucketCards) els.bucketCards.innerHTML = '';
  if (els.prescriptionCards) els.prescriptionCards.innerHTML = '';
  if (els.practicePlanList) els.practicePlanList.innerHTML = '';
  if (els.parsedRoundBody) els.parsedRoundBody.innerHTML = '';
}

function clearRound() {
  renderScorecardRows();
  els.focusOfDay.value = '';
  els.roundNotes.value = '';
  state.results = null;
  clearAnalysisUI();
  refreshActionButtons(false);
  toast('Round cleared.');
}

function validateInputElement(input) {
  const field = input.dataset.field;
  const value = String(input.value || '').trim();
  let valid = true;
  if (!value) {
    input.classList.remove('invalid');
    return true;
  }
  if (field === 'fairway') valid = parseFairway(value).valid;
  if (field === 'green') valid = parseGreen(value).valid;
  if (field === 'ud' || field === 'ss') valid = /^[YN]$/i.test(value);
  if (field === 'putts') valid = /^[1-4]$/.test(value);
  if (field === 'penalty') valid = /^(0|1|2|3)$/.test(value);
  if (field === 'score') valid = /^([1-9]|1[0-2])$/.test(value);
  if (field === 'par') valid = /^[3-5]$/.test(value);
  if (field === 'yards') valid = /^\d(2, 3)$/.test(value);
  input.classList.toggle('invalid', !valid);
  return valid;
}

function collectRoundInputs() {
  return Array.from(els.roundTableBody.querySelectorAll('tr')).map((row) => {
    const hole = Number(row.dataset.hole);
    const par = Number(row.querySelector('[data-field="par"]')?.value || row.children[1].textContent.trim());
    const yards = Number(row.querySelector('[data-field="yards"]')?.value || row.children[2].textContent.trim());
    const hcpMeta = row.querySelector('.cell-meta')?.textContent || '';
    const handicap = Number((hcpMeta.match(/\d+/) || [hole])[0]);
    return {
      hole, par, yards, handicap,
      score: row.querySelector('[data-field="score"]').value.trim(),
      fairway: row.querySelector('[data-field="fairway"]').value.trim(),
      green: row.querySelector('[data-field="green"]').value.trim(),
      putts: row.querySelector('[data-field="putts"]').value.trim(),
      ud: row.querySelector('[data-field="ud"]').value.trim(),
      ss: row.querySelector('[data-field="ss"]').value.trim(),
      penalty: row.querySelector('[data-field="penalty"]').value.trim(),
      notes: row.querySelector('[data-field="notes"]').value.trim(),
    };
  });
}

function parseFairway(raw) {
  const cleaned = String(raw || '').trim().toUpperCase().replace(/\s+/g, '');
  if (!cleaned) return { valid: true, code: '' };
  if (['Y', 'L', 'R', 'N/A', 'NA'].includes(cleaned)) return { valid: true, code: cleaned === 'NA' ? 'N/A' : cleaned };
  return { valid: false, code: cleaned };
}

function parseGreen(raw) {
  const cleaned = String(raw || '').trim().toUpperCase().replace(/\s+/g, '').replace(/-/g, '');
  if (!cleaned) return { valid: true, code: '', distance: null, display: '' };
  const match = cleaned.match(/^(Y|L|R|S|LO)(\d{1,3})$/);
  if (!match) return { valid: false, code: cleaned, distance: null, display: cleaned };
  return { valid: true, code: match[1], distance: Number(match[2]), display: `${match[1]}${match[2]}` };
}

function normalizeHole(row) {
  const fairway = parseFairway(row.fairway);
  const green = parseGreen(row.green);
  const score = row.score ? Number(row.score) : 0;
  const putts = row.putts ? Number(row.putts) : 0;
  const penalty = row.penalty ? Number(row.penalty) : 0;
  return {
    ...row,
    fairwayResult: fairway.code,
    fairwayValid: fairway.valid,
    greenResult: green.code,
    greenValid: green.valid,
    greenDisplay: green.display,
    approachDistance: green.distance,
    score,
    putts,
    penalty,
    ud: row.ud ? row.ud.toUpperCase() : '',
    ss: row.ss ? row.ss.toUpperCase() : '',
    scoreToPar: score ? score - row.par : null,
  };
}

function getBuckets() {
  return [
    { key: 'bucket_0_99', label: state.config.bucket_1_label || '0-99', min: Number(state.config.bucket_1_min ?? 0), max: Number(state.config.bucket_1_max ?? 99) },
    { key: 'bucket_100_149', label: state.config.bucket_2_label || '100-149', min: Number(state.config.bucket_2_min ?? 100), max: Number(state.config.bucket_2_max ?? 149) },
    { key: 'bucket_150_199', label: state.config.bucket_3_label || '150-199', min: Number(state.config.bucket_3_min ?? 150), max: Number(state.config.bucket_3_max ?? 199) },
    { key: 'bucket_200_plus', label: state.config.bucket_4_label || '200+', min: Number(state.config.bucket_4_min ?? 200), max: Number(state.config.bucket_4_max ?? 999) },
  ];
}

function calculateMetrics(parsed) {
  const totalScore = parsed.reduce((sum, h) => sum + (h.score || 0), 0);
  const totalPar = parsed.reduce((sum, h) => sum + h.par, 0);
  const frontScore = parsed.filter((h) => h.hole <= 9).reduce((sum, h) => sum + (h.score || 0), 0);
  const backScore = parsed.filter((h) => h.hole >= 10).reduce((sum, h) => sum + (h.score || 0), 0);
  const fairwayHoles = parsed.filter((h) => h.par !== 3);
  const fairwaysPossible = fairwayHoles.length;
  const fairwaysHit = fairwayHoles.filter((h) => h.fairwayResult === 'Y').length;
  const missLeftCount = fairwayHoles.filter((h) => h.fairwayResult === 'L').length;
  const missRightCount = fairwayHoles.filter((h) => h.fairwayResult === 'R').length;
  const fairwayPct = fairwaysPossible ? (fairwaysHit / fairwaysPossible) * 100 : 0;
  const approachRows = parsed.filter((h) => h.approachDistance !== null);
  const girCount = approachRows.filter((h) => h.greenResult === 'Y').length;
  const girPct = approachRows.length ? (girCount / approachRows.length) * 100 : 0;
  const appLeft = approachRows.filter((h) => h.greenResult === 'L').length;
  const appRight = approachRows.filter((h) => h.greenResult === 'R').length;
  const appShort = approachRows.filter((h) => h.greenResult === 'S').length;
  const appLong = approachRows.filter((h) => h.greenResult === 'LO').length;
  const avgApproachDistance = average(approachRows.map((h) => h.approachDistance));
  const onePutts = parsed.filter((h) => h.putts === 1).length;
  const threePutts = parsed.filter((h) => h.putts >= 3).length;
  const totalPutts = parsed.reduce((sum, h) => sum + (h.putts || 0), 0);
  const puttsPerHole = parsed.length ? totalPutts / parsed.length : 0;
  const udOpp = parsed.filter((h) => h.ud === 'Y' || h.ud === 'N').length;
  const udConv = parsed.filter((h) => h.ud === 'Y').length;
  const udPct = udOpp ? (udConv / udOpp) * 100 : 0;
  const ssOpp = parsed.filter((h) => h.ss === 'Y' || h.ss === 'N').length;
  const ssConv = parsed.filter((h) => h.ss === 'Y').length;
  const ssPct = ssOpp ? (ssConv / ssOpp) * 100 : 0;
  const penalties = parsed.reduce((sum, h) => sum + (h.penalty || 0), 0);
  const doublesOrWorse = parsed.filter((h) => h.score && h.score - h.par >= 2).length;
  const buckets = getBuckets().map((bucket) => {
    const shots = approachRows.filter((h) => h.approachDistance >= bucket.min && h.approachDistance <= bucket.max);
    const misses = {
      left: shots.filter((h) => h.greenResult === 'L').length,
      right: shots.filter((h) => h.greenResult === 'R').length,
      short: shots.filter((h) => h.greenResult === 'S').length,
      long: shots.filter((h) => h.greenResult === 'LO').length,
    };
    const girs = shots.filter((h) => h.greenResult === 'Y').length;
    return {
      ...bucket,
      attempts: shots.length,
      girs,
      girPct: shots.length ? (girs / shots.length) * 100 : 0,
      misses,
      dominantMiss: dominantMissLabel(misses),
    };
  });
  return {
    totalScore, totalPar, scoreToPar: totalScore ? totalScore - totalPar : 0, frontScore, backScore,
    fairwaysPossible, fairwaysHit, fairwayPct, missLeftCount, missRightCount,
    approachRows, girCount, girPct, appLeft, appRight, appShort, appLong, avgApproachDistance,
    onePutts, threePutts, totalPutts, puttsPerHole, udOpp, udConv, udPct, ssOpp, ssConv, ssPct,
    penalties, doublesOrWorse, buckets,
  };
}

function average(values) {
  const usable = values.filter((v) => Number.isFinite(v));
  if (!usable.length) return 0;
  return usable.reduce((sum, value) => sum + value, 0) / usable.length;
}

function dominantMissLabel(misses) {
  const entries = Object.entries(misses);
  const max = Math.max(...entries.map(([, value]) => value), 0);
  if (!max) return 'No dominant miss';
  const labels = { left: 'Left', right: 'Right', short: 'Short', long: 'Long' };
  return labels[(entries.find(([, value]) => value === max) || ['none'])[0]] || 'Mixed';
}

function deriveTags(parsed, metrics) {
  const tags = [];
  const penaltyThreshold = Number(state.config.penalty_alert_threshold ?? 2);
  const threePuttThreshold = Number(state.config.three_putt_alert_threshold ?? 2);
  const fwStrong = Number(state.config.fairway_strong_threshold ?? 55);
  const fwWarn = Number(state.config.fairway_warn_threshold ?? 45);
  const girStrong = Number(state.config.gir_strong_threshold ?? 50);
  const girWarn = Number(state.config.gir_warn_threshold ?? 35);
  const udStrong = Number(state.config.ud_strong_threshold ?? 40);
  const udWarn = Number(state.config.ud_warn_threshold ?? 25);
  const bucketMinSample = Number(state.config.bucket_min_sample ?? 4);

  if (metrics.penalties >= penaltyThreshold) tags.push('PENALTY_ALERT');
  if (metrics.threePutts >= threePuttThreshold) tags.push('THREE_PUTT_ALERT');
  if (metrics.fairwayPct < fwStrong && metrics.fairwaysPossible >= Number(state.config.fw_min_sample ?? 8)) tags.push('LOW_FW_PCT');
  if (metrics.fairwayPct >= fwStrong) tags.push('TEE_STABLE');
  if ((metrics.missLeftCount > 0 && metrics.missRightCount > 0) && metrics.missLeftCount + metrics.missRightCount >= 4) tags.push('TEE_TWO_WAY_MISS');
  if (metrics.missLeftCount > metrics.missRightCount && metrics.missLeftCount >= 3) tags.push('TEE_LEFT_BIAS');
  if (metrics.missRightCount > metrics.missLeftCount && metrics.missRightCount >= 3) tags.push('TEE_RIGHT_BIAS');
  if (metrics.girPct < girStrong) tags.push('LOW_GIR_OVERALL');
  if (metrics.girPct >= girWarn && metrics.penalties === 0 && metrics.threePutts === 0) tags.push('PLAYABLE_GOLF_EXPENSIVE_MISTAKES');
  if (metrics.appLeft > metrics.appRight && metrics.appLeft >= 3) tags.push('APP_LEFT_BIAS');
  if (metrics.appRight > metrics.appLeft && metrics.appRight >= 3) tags.push('APP_RIGHT_BIAS');
  if (metrics.appShort >= 3) tags.push('APP_SHORT_BIAS');
  if (metrics.appLong >= 3) tags.push('APP_LONG_BIAS');
  if (metrics.udOpp >= 4 && metrics.udPct < udWarn) tags.push('LOW_UD_PCT');
  if (metrics.udOpp >= 4 && metrics.udPct >= udStrong) tags.push('STRONG_UD_PCT');
  if (metrics.ssOpp >= 2 && metrics.ssPct < 25) tags.push('LOW_SS_PCT');
  if (metrics.threePutts === 0) tags.push('PUTTING_STABLE');
  if (metrics.backScore && metrics.frontScore && metrics.backScore - metrics.frontScore >= 3) tags.push('BACK_NINE_FADE');

  metrics.buckets.forEach((bucket) => {
    if (bucket.attempts >= bucketMinSample && bucket.girPct < girStrong) {
      if (bucket.key === 'bucket_100_149') {
        tags.push('LOW_GIR_100_149');
        tags.push('SCORING_ZONE_UNDERPERFORMED');
      }
      if (bucket.key === 'bucket_150_199') tags.push('LOW_GIR_150_199');
    }
  });

  if (metrics.penalties < penaltyThreshold && metrics.threePutts < threePuttThreshold && metrics.fairwayPct >= fwWarn && metrics.girPct >= girWarn && metrics.scoreToPar > 0) {
    tags.push('SOLID_STRUCTURE_LOW_CONVERSION');
  }
  return [...new Set(tags)];
}

function selectReview(tags, metrics) {
  const primaryLeak = derivePriorityLeaks(metrics, tags)[0];
  const preferredTag = primaryLeak?.sourceTag;
  const match = (preferredTag && state.reviews.find((rule) => rule.Primary_Tag === preferredTag)) || state.reviews.find((rule) => tags.includes(rule.Primary_Tag));
  return match || {
    Round_Profile: 'Balanced Round, One Weak Zone',
    What_Traveled: 'The card stayed alive.',
    What_Cost_Shots: 'There was no single disaster theme, but one part of the round still cost the number.',
    Train_Next: 'Pick one lever for the next block and stay practical.',
    Primary_Tag: 'LOW_GIR_OVERALL',
  };
}

function getDrillById(id) {
  return state.drills.find((drill) => drill.Drill_ID === id);
}

function buildDrillCard(title, drillId, why) {
  const drill = getDrillById(drillId);
  if (!drill) return { title, name: 'Maintenance', label: 'Keep current work', description: 'No hard change needed from this category.', howTo: 'Stay with your current baseline in this bucket.', duration: '', why };
  return {
    id: drill.Drill_ID, title, name: drill.Drill_Name, label: drill.Short_Label, description: drill.Description, howTo: drill.How_To, duration: drill.Duration, why
  };
}

function getPrescription(primaryTag, tags) {
  let chosenTag = primaryTag;
  if (!state.prescriptions.find((row) => row.Trigger_Tag === chosenTag)) {
    chosenTag = tags.find((tag) => state.prescriptions.find((row) => row.Trigger_Tag === tag)) || 'LOW_FW_PCT';
  }
  const map = state.prescriptions.find((row) => row.Trigger_Tag === chosenTag) || state.prescriptions[0];
  return {
    triggerTag: chosenTag,
    headline: map.Prescription_Headline,
    note: map.Prescription_Note,
    cards: [
      buildDrillCard('Swing Drill', map.Swing_Drill_ID, 'Use this when the round points to a movement or start-line issue.'),
      buildDrillCard('Skill Drill', map.Skill_Drill_ID, 'This is the most on-course style piece of work for the round.'),
      buildDrillCard('Stretch', map.Stretch_Drill_ID, 'Support the pattern with a little more freedom and less tension.'),
      buildDrillCard('Strength', map.Strength_Drill_ID, 'Support the pattern with control and organization, not force.'),
    ]
  };
}


function buildPracticePlan(primaryTag, tags) {
  const requestedDuration = Number(els.practiceDuration.value || 40);
  const lookupDuration = requestedDuration <= 20 ? 30 : requestedDuration <= 40 ? 45 : 60;
  let chosenTag = primaryTag;
  let template = state.practiceTemplates.find((row) => row.Trigger_Tag === chosenTag && Number(row.Duration_Min) === lookupDuration);
  if (!template) {
    chosenTag = tags.find((tag) => state.practiceTemplates.find((row) => row.Trigger_Tag === tag && Number(row.Duration_Min) === lookupDuration)) || 'LOW_FW_PCT';
    template = state.practiceTemplates.find((row) => row.Trigger_Tag === chosenTag && Number(row.Duration_Min) === lookupDuration);
  }
  if (!template) return { triggerTag: chosenTag, duration: requestedDuration, requestedDuration, lookupDuration, blocks: ['No practice template available for this combination.'] };
  const blocks = [template.Block_1, template.Block_2, template.Block_3, template.Block_4].filter(Boolean);
  return { triggerTag: chosenTag, duration: requestedDuration, requestedDuration, lookupDuration, blocks };
}


function scrollToSection(target) {
  const section = typeof target === 'string' ? document.getElementById(target) : target;
  if (!section) return;
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function getRoundSummarySection() {
  return document.getElementById('roundSummarySection');
}

function getScorecardSection() {
  return document.getElementById('scorecardEntrySection');
}

function hasMeaningfulRoundData(rows) {
  return rows.some((row) => {
    const fairway = String(row.fairway || '').trim().toUpperCase();
    const score = String(row.score || '').trim();
    const green = String(row.green || '').trim();
    const putts = String(row.putts || '').trim();
    const ud = String(row.ud || '').trim();
    const ss = String(row.ss || '').trim();
    const notes = String(row.notes || '').trim();
    const penalty = Number(row.penalty || 0);
    return Boolean(
      score ||
      green ||
      putts ||
      ud ||
      ss ||
      notes ||
      penalty > 0 ||
      (fairway && fairway !== 'N/A' && fairway !== 'NA')
    );
  });
}

function handleAnalyzeFromTop() {
  const success = analyzeRound({ promptIfEmpty: true });
  if (success) {
    scrollToSection(getRoundSummarySection());
  } else {
    scrollToSection(getScorecardSection());
  }
}

function handleAnalyzeFromScorecard() {
  const success = analyzeRound({ promptIfEmpty: true });
  if (success) scrollToSection(getRoundSummarySection());
}

function analyzeRound(options = {}) {
  const { promptIfEmpty = false } = options;
  const rows = collectRoundInputs();
  if (!hasMeaningfulRoundData(rows)) {
    state.results = null;
    clearAnalysisUI();
    refreshActionButtons(false);
    if (promptIfEmpty) toast('Load the demo round or enter your scorecard first.');
    return false;
  }
  const parsed = rows.map(normalizeHole);
  const metrics = calculateMetrics(parsed);
  const tags = deriveTags(parsed, metrics);
  const review = selectReview(tags, metrics);
  const prescription = getPrescription(review.Primary_Tag || '', tags);
  const practicePlan = buildPracticePlan(review.Primary_Tag || '', tags);
  state.results = { parsed, metrics, tags, review, prescription, practicePlan };
  renderSummary(metrics);
  renderDebrief(review, metrics, tags);
  renderPatterns(metrics, tags);
  renderBuckets(metrics.buckets);
  renderPrescription(prescription);
  renderPracticePlan(practicePlan);
  renderParsedRound(parsed);
  refreshActionButtons(true);
  return true;
}

function refreshAnalyzeButtons() {
  const hasData = hasMeaningfulRoundData(collectRoundInputs());
  ['analyzeBtn','analyzeBtnTop'].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.disabled = !hasData;
    btn.classList.toggle('opacity-60', !hasData);
    btn.classList.toggle('cursor-not-allowed', !hasData);
    btn.setAttribute('aria-disabled', String(!hasData));
    btn.title = hasData ? 'Generate coaching' : 'Load a demo round or enter your scorecard first';
  });
  const hint = document.getElementById('coachingHint');
  if (hint) hint.classList.toggle('hidden', hasData);
}

function refreshActionButtons(hasResults = !!state.results) {
  const showSaveCourse = els.courseMode?.value === 'custom';
  if (extraEls.saveRoundBtn) {
    extraEls.saveRoundBtn.disabled = !hasResults;
    extraEls.saveRoundBtn.classList.toggle('opacity-50', !hasResults);
    extraEls.saveRoundBtn.classList.toggle('cursor-not-allowed', !hasResults);
  }
  if (extraEls.saveCourseBtn) extraEls.saveCourseBtn.classList.toggle('hidden', !showSaveCourse);
  refreshAnalyzeButtons();
}


function renderSummary(metrics) {
  const summary = [
    { label: 'Score', value: metrics.totalScore || '—', note: metrics.totalScore ? `${metrics.scoreToPar >= 0 ? '+' : ''}${metrics.scoreToPar} to par` : 'Awaiting input' },
    { label: 'FW %', value: formatPct(metrics.fairwayPct), note: `${metrics.fairwaysHit}/${metrics.fairwaysPossible} fairways` },
    { label: 'GIR %', value: formatPct(metrics.girPct), note: `${metrics.girCount}/${metrics.approachRows.length} greens` },
    { label: 'Putts', value: metrics.totalPutts || '—', note: `${metrics.threePutts} three-putt${metrics.threePutts === 1 ? '' : 's'}` },
    { label: 'U/D %', value: formatPct(metrics.udPct), note: `${metrics.udConv}/${metrics.udOpp || 0} conversions` },
    { label: 'Penalties', value: metrics.penalties || '0', note: `${metrics.doublesOrWorse} doubles+` },
  ];
  els.summaryCards.innerHTML = summary.map((card) => `
    <div class="summary-card">
      <div class="summary-label">${card.label}</div>
      <div class="summary-value">${card.value}</div>
      <div class="summary-note">${card.note}</div>
    </div>
  `).join('');
}

function renderDebrief(review, metrics, tags) {
  els.roundProfile.textContent = review.Round_Profile || 'Balanced Round';
  els.whatTraveled.textContent = buildWhatTraveled(review.What_Traveled, metrics, tags);
  els.whatCostShots.textContent = buildWhatCostShots(review.What_Cost_Shots, metrics, tags);
  els.whatTrainNext.textContent = buildTrainNext(review.Train_Next, metrics, tags);
}

function voice(section, key) {
  return state.voice.find((item) => item.Section === section && item.Key === key)?.Text || '';
}

function derivePriorityLeaks(metrics, tags) {
  const leaks = [];
  const push = (key, sourceTag, title, support, why, priority = 50) => {
    leaks.push({ key, sourceTag, title, support, why, priority });
  };
  if (tags.includes('PENALTY_ALERT')) push('penalties', 'PENALTY_ALERT', 'Protect the card first.', 'Penalty shots matter more than everything else when they show up.', 'Penalty shots made the round expensive before the rest of the game could matter.', 5);
  if (tags.includes('LOW_GIR_150_199')) push('approach_150_199', 'LOW_GIR_150_199', 'Tighten the 150–199 yard window.', 'This is the clearest place where neutral holes stayed stressful.', 'The 150-199 window kept asking the short game to clean things up.', 10);
  if (tags.includes('LOW_GIR_100_149')) push('approach_100_149', 'LOW_GIR_100_149', 'Sharpen the 100–149 yard window.', 'This is the best scoring lever on the card.', 'The 100-149 window was the clearest scoring leak.', 12);
  if (tags.includes('TEE_TWO_WAY_MISS')) push('tee_two_way', 'TEE_TWO_WAY_MISS', 'Reduce the two-way tee miss.', 'Tempo and start line come first. Narrow the pattern before chasing speed.', 'The tee pattern was too wide in both directions, which made too many holes defensive from the start.', 18);
  if (tags.includes('LOW_FW_PCT')) push('fw_pct', 'LOW_FW_PCT', 'Build a fairway-finder tee pattern.', 'Playable golf matters more than extra yards here.', 'Too many missed fairways put the card on the wrong side of the hole.', 20);
  if (tags.includes('APP_SHORT_BIAS')) push('short_bias', 'APP_SHORT_BIAS', 'Stop the short miss.', 'Short misses are keeping too many greens out of play.', 'Short misses showed up too often.', 25);
  if (tags.includes('APP_LEFT_BIAS')) push('left_bias', 'APP_LEFT_BIAS', 'Take the left miss out of the approach pattern.', 'Start line and face awareness are the simplest levers here.', 'Misses leaned left.', 28);
  if (tags.includes('APP_RIGHT_BIAS')) push('right_bias', 'APP_RIGHT_BIAS', 'Take the right miss out of the approach pattern.', 'Commitment and start line are the simplest levers here.', 'Misses leaned right.', 29);
  if (tags.includes('LOW_UD_PCT')) push('ud_pct', 'LOW_UD_PCT', 'Convert more of the easiest up-and-down chances.', 'Make missed greens cheaper before changing anything bigger.', 'The scoring zone did not convert often enough to cover the misses.', 30);
  if (tags.includes('LOW_SS_PCT')) push('ss_pct', 'LOW_SS_PCT', 'Own the bunker number.', 'A calmer entry point makes bunker holes much cheaper.', 'Bunker opportunities stayed too expensive.', 31);
  if (tags.includes('THREE_PUTT_ALERT')) push('three_putts', 'THREE_PUTT_ALERT', 'Take three-putts off the card.', 'Pace control is the fastest way to protect the next round.', 'Three-putts made neutral holes too expensive.', 32);
  if (tags.includes('BACK_NINE_FADE')) push('finish', 'BACK_NINE_FADE', 'Finish stronger.', 'Energy and one-shot focus need to last to the end.', 'The round also softened late.', 35);
  if (!leaks.length) {
    const weakBucket = metrics?.buckets?.find((bucket) => bucket.attempts >= Number(state.config.bucket_min_sample ?? 4) && bucket.girPct < Number(state.config.gir_warn_threshold ?? 35));
    if (weakBucket) push('bucket_generic', 'LOW_GIR_OVERALL', `Tighten the ${weakBucket.label} yard window.`, 'That is the simplest place to reduce stress on the rest of the card.', `The ${weakBucket.label} window stood out as the clearest scoring leak.`, 40);
  }
  return leaks.sort((a, b) => a.priority - b.priority);
}

function buildWhatTraveled(baseText, metrics, tags) {
  const extras = [];
  if (metrics.penalties === 0) extras.push('No penalty shots kept the card calmer.');
  if (metrics.threePutts === 0 && !extras.length) extras.push('The putter did not add damage.');
  if (tags.includes('STRONG_UD_PCT') && !extras.length) extras.push('Around the greens, you covered enough misses to stay in the round.');
  if (tags.includes('TEE_STABLE') && !extras.length) extras.push('The tee ball was stable enough to let the round breathe.');
  return `${baseText} ${extras[0] || voice('positive', 'structure_good')}`.trim();
}

function buildWhatCostShots(baseText, metrics, tags) {
  const leaks = derivePriorityLeaks(metrics, tags).slice(0, 3).map((item) => item.why);
  const unique = [];
  leaks.forEach((line) => { if (line && !unique.includes(line)) unique.push(line); });
  return `${baseText} ${unique.join(' ')}`.trim();
}

function buildTrainNext(baseText, metrics, tags) {
  const primary = derivePriorityLeaks(metrics, tags)[0];
  const line = primary ? ` Focus the first block on ${primary.title.replace(/\.$/, '').toLowerCase()}.` : '';
  return `${baseText} ${voice('train', 'one_lever')}${line}`.trim();
}

function renderPatterns(metrics, tags) {
  const cards = [
    {
      title: 'Tee Pattern',
      badge: classifyMetric(metrics.fairwayPct, Number(state.config.fairway_strong_threshold ?? 55), Number(state.config.fairway_warn_threshold ?? 45)),
      lines: [
        `${metrics.fairwaysHit}/${metrics.fairwaysPossible} fairways`,
        `Left misses: ${metrics.missLeftCount}`,
        `Right misses: ${metrics.missRightCount}`,
        tags.includes('TEE_TWO_WAY_MISS') ? 'Pattern: two-way miss' : 'Pattern: one-way or playable',
      ],
    },
    {
      title: 'Approach Pattern',
      badge: classifyMetric(metrics.girPct, Number(state.config.gir_strong_threshold ?? 50), Number(state.config.gir_warn_threshold ?? 35)),
      lines: [
        `${metrics.girCount}/${metrics.approachRows.length} greens`,
        `Left / Right: ${metrics.appLeft} / ${metrics.appRight}`,
        `Short / Long: ${metrics.appShort} / ${metrics.appLong}`,
        `Avg approach: ${Math.round(metrics.avgApproachDistance || 0)} yds`,
      ],
    },
    {
      title: 'Scoring Zone',
      badge: classifyMetric(metrics.udPct, Number(state.config.ud_strong_threshold ?? 40), Number(state.config.ud_warn_threshold ?? 25)),
      lines: [
        `U/D: ${metrics.udConv}/${metrics.udOpp || 0}`,
        `Sand saves: ${metrics.ssConv}/${metrics.ssOpp || 0}`,
        tags.includes('SCORING_ZONE_UNDERPERFORMED') ? 'Theme: under-converted scoring clubs' : 'Theme: monitor the easiest chances',
      ],
    },
    {
      title: 'Damage Control',
      badge: metrics.penalties >= Number(state.config.penalty_alert_threshold ?? 2) || metrics.threePutts >= Number(state.config.three_putt_alert_threshold ?? 2)
        ? { cls: 'metric-bad', text: 'Expensive' }
        : { cls: 'metric-good', text: 'Protected' },
      lines: [
        `Penalties: ${metrics.penalties}`,
        `Three-putts: ${metrics.threePutts}`,
        `Doubles+: ${metrics.doublesOrWorse}`,
        metrics.backScore && metrics.frontScore ? `Front / Back: ${metrics.frontScore} / ${metrics.backScore}` : 'Front / Back pending',
      ],
    },
  ];
  els.patternGrid.innerHTML = cards.map((card) => `
    <div class="pattern-card">
      <div class="flex items-center justify-between gap-3">
        <h4>${card.title}</h4>
        <span class="metric-badge ${card.badge.cls}">${card.badge.text}</span>
      </div>
      <div class="mt-4 space-y-2 text-sm text-slate-300">
        ${card.lines.map((line) => `<div>${line}</div>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderBuckets(buckets) {
  els.bucketCards.innerHTML = buckets.map((bucket) => `
    <div class="bucket-card">
      <div class="flex items-center justify-between gap-2">
        <h4>${bucket.label}</h4>
        <span class="metric-badge ${classifyMetric(bucket.girPct, Number(state.config.gir_strong_threshold ?? 50), Number(state.config.gir_warn_threshold ?? 35)).cls}">
          ${formatPct(bucket.girPct)}
        </span>
      </div>
      <div class="mt-3 space-y-2 text-sm text-slate-300">
        <div>Attempts: ${bucket.attempts}</div>
        <div>Greens: ${bucket.girs}</div>
        <div>Dominant miss: ${bucket.dominantMiss}</div>
      </div>
    </div>
  `).join('');
}


function renderPrescription(prescription) {
  const one = deriveOneThing(state.results?.review, state.results?.metrics, state.results?.tags || []);
  if (els.prescriptionHeadline) els.prescriptionHeadline.textContent = one?.title || prescription.headline || 'One clear focus for the next block.';
  if (els.prescriptionNote) els.prescriptionNote.textContent = prescription.note || one?.support || 'TIP uses the round to select the fewest things possible that can move the card forward.';
  if (els.prescriptionFocusChips) {
    els.prescriptionFocusChips.innerHTML = [
      '<span class="engine-chip">Primary fix</span>',
      '<span class="engine-chip">High-confidence build</span>',
      '<span class="engine-chip">' + ((Number(els.practiceDuration?.value || 40) <= 20) ? 'Quick mode' : (Number(els.practiceDuration?.value || 40) <= 40) ? 'Standard load' : 'Full build') + '</span>'
    ].join('');
  }
  els.prescriptionCards.innerHTML = prescription.cards.map((card, index) => {
    const meta = [card.label, card.duration].filter(Boolean).map((item) => `<span class="prescription-badge">${item}</span>`).join('');
    return `
      <div class="prescription-card">
        <div class="prescription-card-title">${card.title}</div>
        <h4>${card.name}</h4>
        <div class="prescription-meta">${meta}</div>
        <div>
          <div class="prescription-why-label">Why this is here</div>
          <p class="prescription-copy mt-2">${card.description}</p>
        </div>
        <div>
          <div class="prescription-why-label">How to use it</div>
          <p class="prescription-how mt-2">${card.howTo}</p>
        </div>
        <div class="text-xs text-slate-500">${card.why || ''}</div>
        <div class="mt-auto pt-1"><button class="tip-btn tip-btn-secondary w-full view-how-prescription-btn" data-drill-id="${card.id || ''}" data-drill-name="${card.name || card.title || ''}" data-drill-description="${String(card.description || '').replace(/"/g, "&quot;")}" data-drill-howto="${String(card.howTo || '').replace(/"/g, "&quot;")}" data-drill-why="${String(card.why || '').replace(/"/g, "&quot;")}">View How</button></div>
      </div>
    `;
  }).join('');
}

function buildSessionBuilderModel(plan) {
  const cards = state.results?.prescription?.cards || [];
  const swing = cards.find((card) => /Swing/i.test(card.title)) || cards[0];
  const skill = cards.find((card) => /Skill/i.test(card.title)) || cards[1] || cards[0];
  const mobility = cards.find((card) => /Stretch|Mobility/i.test(card.title)) || cards[2] || cards[0];
  const strength = cards.find((card) => /Strength/i.test(card.title)) || cards[3] || cards[0];
  const one = deriveOneThing(state.results?.review, state.results?.metrics, state.results?.tags || []);
  const primaryLeak = derivePriorityLeaks(state.results?.metrics, state.results?.tags || [])[0];
  const mode = plan.duration <= 20 ? 'Quick' : plan.duration <= 40 ? 'Standard' : 'Full';
  const intent = primaryLeak?.support || state.results?.prescription?.note || 'TIP is narrowing the clearest next lever from the round.';
  const buildMini = (label, title, copy) => ({ label, title, copy });
  const day1 = {
    title: 'Day 1 — Reset + Rebuild',
    badge: mode + ' mode',
    intent: 'Calm the body, slow the motion, and re-establish the pattern that the round asked for.',
    items: [
      buildMini('Stretch', mobility?.name || 'Stretch block', mobility?.howTo || ''),
      buildMini('Swing', swing?.name || 'Swing block', swing?.howTo || ''),
      buildMini('Control', strength?.name || 'Stability block', strength?.howTo || '')
    ]
  };
  const day2 = {
    title: 'Day 2 — Skill Transfer',
    badge: mode + ' mode',
    intent: 'Take the improved pattern and apply it to scoring shots, start lines, and decision quality.',
    items: [
      buildMini('Skill', skill?.name || 'Skill block', skill?.howTo || ''),
      buildMini('Swing support', swing?.name || 'Swing support', swing?.description || ''),
      buildMini('Pressure finish', 'One cue + one target', 'Finish with one calm target and one committed routine.'),
    ]
  };
  const day3 = {
    title: 'Day 3 — Strength + Stability',
    badge: mode + ' mode',
    intent: 'Support the pattern with control, organization, and a body that can hold up under speed and fatigue.',
    items: [
      buildMini('Strength', strength?.name || 'Strength block', strength?.howTo || ''),
      buildMini('Stretch', mobility?.name || 'Stretch support', mobility?.description || ''),
      buildMini('Finish', 'Take it to the course', one?.support || 'Use one cue and one clear intention in the next round.')
    ]
  };
  return {
    duration: plan.duration,
    mode,
    oneThing: one?.title || 'Build the next block around one clear lever.',
    why: intent,
    today: day1,
    days: [day1, day2, day3],
    blocks: plan.blocks || []
  };
}

function renderPracticePlan(plan) {
  const model = buildSessionBuilderModel(plan);
  els.practicePlanSummary.innerHTML = `
    <div class="session-builder-shell">
      <div class="today-session-card">
        <div class="today-session-grid">
          <div>
            <div class="section-kicker">Today’s session</div>
            <div class="focus-title mt-2">${model.today.title}</div>
            <p class="session-intent">${model.today.intent}</p>
          </div>
          <div class="space-y-3">
            <div>
              <div class="session-mini-label">Session length</div>
              <div class="mt-1 text-slate-100 font-semibold">${model.duration} min · ${model.mode}</div>
            </div>
            <div>
              <div class="session-mini-label">The one thing</div>
              <div class="mt-1 text-slate-100 font-semibold">${model.oneThing}</div>
            </div>
            <div>
              <div class="session-mini-label">Why this block matters</div>
              <div class="mt-1 text-slate-300">${model.why}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="session-days-grid">
        ${model.days.map((day) => `
          <div class="session-day-card">
            <div class="session-day-head">
              <div>
                <div class="session-day-title">${day.title}</div>
                <div class="session-intent">${day.intent}</div>
              </div>
              <span class="session-mode-badge">${day.badge}</span>
            </div>
            <div class="session-list">
              ${day.items.map((item) => `
                <div class="session-mini">
                  <div class="session-mini-label">${item.label}</div>
                  <div class="session-mini-title">${item.title}</div>
                  <div class="session-mini-copy">${item.copy}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="session-footer-grid">
        <div class="session-day-card">
          <div class="session-mini-label">Template blocks from the engine</div>
          <div class="session-list mt-3">
            ${model.blocks.map((block) => `<div class="session-mini"><div class="session-mini-title">${block}</div></div>`).join('')}
          </div>
        </div>
        <div class="session-day-card">
          <div class="session-mini-label">Take this to the course</div>
          <div class="session-list mt-3">
            <div class="session-mini">
              <div class="session-mini-label">One cue</div>
              <div class="session-mini-title">${model.oneThing}</div>
            </div>
            <div class="session-mini">
              <div class="session-mini-label">One reminder</div>
              <div class="session-mini-title">One side out of play</div>
              <div class="session-mini-copy">Use the round plan, not new mechanics, when you get back on the course.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildPracticeSessionCard(plan) {
  return buildSessionBuilderModel(plan);
}

function buildPracticePlanText() {
  if (!state.results) return 'TIP session builder';
  const model = buildSessionBuilderModel(state.results.practicePlan);
  const lines = [
    `TIP Session Builder V1.7`,
    `Round profile: ${state.results.review?.Round_Profile || 'TIP Practice'}`,
    '',
    `THE ONE THING`,
    model.oneThing,
    '',
    `WHY THIS BLOCK MATTERS`,
    model.why,
    '',
    `TODAY (${model.duration} min · ${model.mode})`,
    model.today.title,
    model.today.intent
  ];
  model.days.forEach((day, index) => {
    lines.push('');
    lines.push(`${index + 1}. ${day.title}`);
    day.items.forEach((item) => {
      lines.push(`- ${item.label}: ${item.title}`);
      if (item.copy) lines.push(`  ${item.copy}`);
    });
  });
  if (model.blocks?.length) {
    lines.push('');
    lines.push('ENGINE TEMPLATE');
    model.blocks.forEach((block) => lines.push(`- ${block}`));
  }
  lines.push('');
  lines.push('TIP flow: Round -> Insight -> Prescription -> Session Builder -> Next Round');
  return lines.join('\n');
}


function buildCalendarDescription(ctx, compact = false) {
  const session = buildPracticePlanText();
  if (compact) {
    return [
      `TIP Practice`,
      `Course: ${els.courseName.value || state.config.default_course || 'Course'}`,
      `Duration: ${ctx.duration} min`,
      '',
      session
    ].join('\n');
  }
  const debrief = copyDebriefText();
  return [
    `TIP Practice Invitation`,
    `Course: ${els.courseName.value || state.config.default_course || 'Course'}`,
    `Focus of the day: ${els.focusOfDay.value || 'TIP practice block'}`,
    `Scheduled block: ${ctx.duration} min`,
    '',
    session,
    '',
    `ROUND DEBRIEF`,
    debrief
  ].join('\n');
}

function renderParsedRound(parsed) {
  els.parsedRoundBody.innerHTML = parsed.map((hole) => `
    <tr>
      <td>${hole.hole}</td>
      <td>${hole.par}</td>
      <td>${hole.yards}</td>
      <td>${hole.score || '—'}</td>
      <td>${hole.fairwayResult || '—'}</td>
      <td>${hole.greenDisplay || '—'}</td>
      <td>${hole.putts || '—'}</td>
      <td>${[hole.ud || '', hole.ss ? `S/S ${hole.ss}` : ''].filter(Boolean).join(' | ') || '—'}</td>
      <td>${hole.penalty || 0}</td>
      <td>${holeInterpretation(hole)}</td>
    </tr>
  `).join('');
}

function holeInterpretation(hole) {
  const parts = [];
  if (hole.fairwayResult === 'Y') parts.push('Fairway hit');
  if (hole.fairwayResult === 'L') parts.push('Missed left');
  if (hole.fairwayResult === 'R') parts.push('Missed right');
  if (hole.greenResult === 'Y') parts.push(`Green hit from ${hole.approachDistance}`);
  if (hole.greenResult === 'L') parts.push(`Missed left from ${hole.approachDistance}`);
  if (hole.greenResult === 'R') parts.push(`Missed right from ${hole.approachDistance}`);
  if (hole.greenResult === 'S') parts.push(`Missed short from ${hole.approachDistance}`);
  if (hole.greenResult === 'LO') parts.push(`Missed long from ${hole.approachDistance}`);
  if (hole.putts) parts.push(`${hole.putts} putt${hole.putts === 1 ? '' : 's'}`);
  if (hole.penalty) parts.push(`${hole.penalty} penalty`);
  return parts.join(' · ') || 'No entry';
}

function classifyMetric(value, strong, warn) {
  if (value >= strong) return { cls: 'metric-good', text: 'Strong' };
  if (value >= warn) return { cls: 'metric-warn', text: 'Watch' };
  return { cls: 'metric-bad', text: 'Leak' };
}

function formatPct(value) {
  if (!Number.isFinite(value)) return '—';
  return `${Math.round(value)}%`;
}

function copyDebrief() {
  if (!state.results) return toast('Analyze a round first');
  const text = copyDebriefText();
  copyTextWithFallback(text, 'Debrief copied.');
}

function copyPlan() {
  if (!state.results) return toast('Analyze a round first');
  const text = copyPlanText();
  copyTextWithFallback(text, 'Practice plan copied.');
}


function exportCalendar() {
  if (!state.results) return;
  const date = els.practiceDate.value;
  const time = els.practiceTime.value || '17:30';
  if (!date) {
    toast('Add a practice date first.');
    return;
  }
  const [year, month, day] = date.split('-').map(Number);
  const [hour, minute] = time.split(':').map(Number);
  const start = new Date(year, month - 1, day, hour, minute);
  const end = new Date(start.getTime() + Number(els.practiceDuration.value || 45) * 60000);
  const plan = state.results.practicePlan;
  const title = `TIP Practice — ${state.results.review.Round_Profile}`;
  const description = [
    `Course: ${els.courseName.value}`,
    `Debrief: ${state.results.review.Round_Profile}`,
    `Focus: ${els.focusOfDay.value || 'TIP practice block'}`,
    '',
    ...plan.blocks.map((block, index) => `${index + 1}. ${block}`),
  ].join('\n');
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//TIP Coaching Intelligence//EN',
    'BEGIN:VEVENT',
    `UID:tip-${Date.now()}@theirishpar`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:${escapeICS(title)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tip-practice-plan.ics';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast('Calendar file exported.');
}

function toICSDate(date) {
  const pad = (num) => String(num).padStart(2, '0');
  return `${date.getFullYear()}${pad(date.getMonth()+1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
}

function escapeICS(text) {
  return String(text).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.remove('hidden');
  clearTimeout(els.toastTimer);
  els.toastTimer = setTimeout(() => els.toast.classList.add('hidden'), 4200);
}



const STORAGE_KEYS = { COURSES: 'tipci_saved_courses', ROUNDS: 'tipci_round_history', PREFS: 'tipci_user_prefs' };
const storage = {
  get(key, fallback = []) { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (e) { return fallback; } },
  set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};
state.savedCourses = storage.get(STORAGE_KEYS.COURSES, []);
state.roundHistory = storage.get(STORAGE_KEYS.ROUNDS, []);
state.selectedSavedCourseId = '';
state.savedCourseHoles = null;
state.mobileHoleIndex = 1;

const extraEls = {};
const originalRenderScorecardRows = renderScorecardRows;
const originalCollectRoundInputs = collectRoundInputs;
const originalLoadDemoRound = loadDemoRound;
const originalClearRound = clearRound;
const originalExportCalendar = exportCalendar;
const originalGetCurrentCourseHoles = getCurrentCourseHoles;

function initV12Enhancements() {
  extraEls.savedCourseSelect = document.getElementById('savedCourseSelect');
  extraEls.saveCourseBtn = document.getElementById('saveCourseBtn');
  extraEls.saveRoundBtn = document.getElementById('saveRoundBtn');
  extraEls.saveRoundBtnTop = document.getElementById('saveRoundBtnTop');
  extraEls.savedCoursesGrid = document.getElementById('savedCoursesGrid');
  extraEls.savedCoursesEmpty = document.getElementById('savedCoursesEmpty');
  extraEls.roundHistoryList = document.getElementById('roundHistoryList');
  extraEls.roundHistoryEmpty = document.getElementById('roundHistoryEmpty');
  extraEls.mobileEntryMount = document.getElementById('mobileEntryMount');
  extraEls.practiceRepeat = document.getElementById('practiceRepeat');
  bindV12Events();
  bindEntryModeButtons();
  refreshSavedCourseUI();
  renderRoundHistory();
  renderScorecardRows();
  refreshActionButtons(false);
}

getCurrentCourseHoles = function() {
  if (state.currentCourseMode === 'saved' && state.savedCourseHoles?.length) return state.savedCourseHoles;
  return originalGetCurrentCourseHoles();
};

renderScorecardRows = function() {
  originalRenderScorecardRows();
  renderMobileEntry();
};

collectRoundInputs = function() {
  if (window.innerWidth <= 767) syncMobileToTable();
  return originalCollectRoundInputs();
};

loadDemoRound = function() {
  originalLoadDemoRound();
  syncTableToMobile();
};

clearRound = function() {
  originalClearRound();
  syncTableToMobile();
};

exportCalendar = function() {
  const ctx = getPracticeCalendarContext();
  if (!ctx) return;
  const ics = buildICSString(ctx);
  downloadICSFile(ics, ctx.repeat === 'once' ? 'tip-practice.ics' : 'tip-practice-recurring.ics');
  toast(ctx.repeat === 'once' ? 'Calendar file downloaded' : 'Recurring calendar file downloaded');
};


function bindV12Events() {
  extraEls.saveCourseBtn?.addEventListener('click', saveCurrentCourse);
  extraEls.saveRoundBtn?.addEventListener('click', saveCurrentRound);
  extraEls.saveRoundBtnTop?.addEventListener('click', saveCurrentRound);
  document.getElementById('refreshSavedCoursesBtn')?.addEventListener('click', refreshSavedCourseUI);
  document.getElementById('refreshHistoryBtn')?.addEventListener('click', renderRoundHistory);
  extraEls.savedCourseSelect?.addEventListener('change', (e) => { if (e.target.value) selectSavedCourse(e.target.value); });
  els.courseMode?.addEventListener('change', () => {
    setTimeout(() => {
      if (els.courseMode.value === 'saved') {
        state.currentCourseMode = 'saved';
        els.teeSelect.disabled = true;
        extraEls.savedCourseSelect.disabled = false;
        if (extraEls.savedCourseSelect.value) selectSavedCourse(extraEls.savedCourseSelect.value);
      } else if (els.courseMode.value === 'custom') {
        state.currentCourseMode = 'custom';
        extraEls.savedCourseSelect.disabled = true;
        els.teeSelect.disabled = true;
        renderScorecardRows();
      } else {
        state.currentCourseMode = 'springhaven';
        extraEls.savedCourseSelect.disabled = true;
        els.teeSelect.disabled = false;
        renderScorecardRows();
      }
      refreshActionButtons(!!state.results);
    }, 0);
  });
  window.addEventListener('resize', debounce(() => { renderMobileEntry(); setMobileEntryView(state.mobileEntryView); refreshMobileStickyBar(); }, 120));
  window.addEventListener('scroll', debounce(() => { refreshMobileStickyBar(); }, 30));
}

function debounce(fn, wait){ let t; return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn(...args),wait); }; }

function buildCourseFromCurrent() {
  const rows = originalCollectRoundInputs();
  const holes = rows.map(r => ({ hole: r.hole, par: Number(r.par) || 4, yards: Number(r.yards) || 0, handicap: Number(r.handicap) || r.hole }));
  const name = (els.courseName.value || 'Custom Course').trim();
  const teeName = state.currentCourseMode === 'springhaven' ? state.currentTee : ((els.teeSelect?.value && els.teeSelect.disabled === false) ? els.teeSelect.value : 'Custom');
  return { id: `course_${Date.now()}`, name, teeName, holes, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
}

function saveCurrentCourse() {
  if (els.courseMode.value === 'springhaven') return toast('Switch to Custom or Saved before storing a course');
  if (window.innerWidth <= 767) syncMobileToTable();
  const course = buildCourseFromCurrent();
  if (!course.name) return toast('Add a course name first');
  state.savedCourses.push(course);
  storage.set(STORAGE_KEYS.COURSES, state.savedCourses);
  extraEls.savedCourseSelect.value = course.id;
  refreshSavedCourseUI();
  toast('Custom course saved');
}

function refreshSavedCourseUI() {
  state.savedCourses = storage.get(STORAGE_KEYS.COURSES, []);
  const opts = ['<option value="">Select saved</option>'].concat(state.savedCourses.map(c => `<option value="${c.id}">${c.name} — ${c.teeName}</option>`));
  if (extraEls.savedCourseSelect) extraEls.savedCourseSelect.innerHTML = opts.join('');
  if (extraEls.savedCoursesEmpty) extraEls.savedCoursesEmpty.style.display = state.savedCourses.length ? 'none' : 'block';
  if (extraEls.savedCoursesGrid) {
    extraEls.savedCoursesGrid.innerHTML = state.savedCourses.map(c => `
      <div class="saved-card">
        <h4>${c.name}</h4>
        <div class="saved-meta">${c.teeName} • Par ${c.holes.reduce((a,h)=>a+Number(h.par||0),0)} • ${c.holes.reduce((a,h)=>a+Number(h.yards||0),0)} yds</div>
        <div class="saved-actions">
          <button class="tiny-btn" onclick="selectSavedCourse('${c.id}')">Open</button>
          <button class="tiny-btn" onclick="duplicateSavedCourse('${c.id}')">Duplicate</button>
          <button class="tiny-btn danger" onclick="deleteSavedCourse('${c.id}')">Delete</button>
        </div>
      </div>
    `).join('');
  }
  if (state.selectedSavedCourseId && extraEls.savedCourseSelect) extraEls.savedCourseSelect.value = state.selectedSavedCourseId;
}

window.selectSavedCourse = function(id) {
  const course = state.savedCourses.find(c => c.id === id);
  if (!course) return toast('Saved course not found');
  state.selectedSavedCourseId = id;
  state.savedCourseHoles = course.holes.map(h => ({ ...h }));
  state.currentCourseMode = 'saved';
  els.courseMode.value = 'saved';
  extraEls.savedCourseSelect.disabled = false;
  extraEls.savedCourseSelect.value = id;
  els.courseName.value = course.name;
  els.teeSelect.disabled = true;
  renderScorecardRows();
  toast('Saved course loaded');
};

window.duplicateSavedCourse = function(id) {
  const course = state.savedCourses.find(c => c.id === id);
  if (!course) return;
  const clone = JSON.parse(JSON.stringify(course));
  clone.id = `course_${Date.now()}`;
  clone.name = `${clone.name} Copy`;
  clone.createdAt = new Date().toISOString();
  clone.updatedAt = clone.createdAt;
  state.savedCourses.push(clone);
  storage.set(STORAGE_KEYS.COURSES, state.savedCourses);
  refreshSavedCourseUI();
  toast('Course duplicated');
};

window.deleteSavedCourse = function(id) {
  state.savedCourses = state.savedCourses.filter(c => c.id !== id);
  storage.set(STORAGE_KEYS.COURSES, state.savedCourses);
  if (state.selectedSavedCourseId === id) {
    state.selectedSavedCourseId = '';
    state.savedCourseHoles = null;
    els.courseMode.value = 'springhaven';
    state.currentCourseMode = 'springhaven';
    els.courseName.value = 'Springhaven Club';
    els.teeSelect.disabled = false;
    renderScorecardRows();
  }
  refreshSavedCourseUI();
  toast('Course deleted');
};

function saveCurrentRound() {
  if (!state.results) analyzeRound();
  if (!state.results) return toast('Analyze a round first');
  if (window.innerWidth <= 767) syncMobileToTable();
  const inputs = originalCollectRoundInputs();
  const round = {
    id: `round_${Date.now()}`,
    date: els.roundDate.value || new Date().toISOString().slice(0,10),
    courseId: state.currentCourseMode === 'saved' ? state.selectedSavedCourseId : `${state.currentCourseMode}_${state.currentTee}`,
    courseName: els.courseName.value || 'Course',
    teeName: state.currentCourseMode === 'springhaven' ? state.currentTee : (state.currentCourseMode === 'saved' ? (state.savedCourses.find(c=>c.id===state.selectedSavedCourseId)?.teeName || 'Saved') : 'Custom'),
    focus: els.focusOfDay.value || '',
    roundNote: els.roundNotes.value || '',
    holes: inputs,
    summary: {
      score: state.results.metrics.totalScore || 0,
      fairwayPct: state.results.metrics.fairwayPct || 0,
      girPct: state.results.metrics.girPct || 0,
      putts: state.results.metrics.totalPutts || 0,
      udPct: state.results.metrics.udPct || 0,
      penalties: state.results.metrics.penalties || 0,
      roundProfile: state.results.review.Round_Profile || 'TIP Debrief'
    },
    debrief: { whatTraveled: els.whatTraveled.textContent, whatCostShots: els.whatCostShots.textContent, whatTrainNext: els.whatTrainNext.textContent },
    practicePlanText: copyPlanText(),
    createdAt: new Date().toISOString()
  };
  state.roundHistory.unshift(round);
  state.roundHistory = state.roundHistory.slice(0, 50);
  storage.set(STORAGE_KEYS.ROUNDS, state.roundHistory);
  renderRoundHistory();
  toast('Round saved to history');
}

function renderRoundHistory() {
  state.roundHistory = storage.get(STORAGE_KEYS.ROUNDS, []);
  if (extraEls.roundHistoryEmpty) extraEls.roundHistoryEmpty.style.display = state.roundHistory.length ? 'none' : 'block';
  if (!extraEls.roundHistoryList) return;
  extraEls.roundHistoryList.innerHTML = state.roundHistory.map(r => `
    <div class="history-card">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h4>${r.courseName}</h4>
          <div class="history-meta">${r.teeName} • ${r.date} • ${r.summary.roundProfile}</div>
        </div>
        <div class="text-right">
          <div class="text-xl font-extrabold text-slate-50">${r.summary.score}</div>
          <div class="history-meta">FW ${Math.round(r.summary.fairwayPct)}% • GIR ${Math.round(r.summary.girPct)}%</div>
        </div>
      </div>
      <div class="saved-actions">
        <button class="tiny-btn" onclick="openHistoryRound('${r.id}')">Open</button>
        <button class="tiny-btn" onclick="duplicateHistoryRound('${r.id}')">Duplicate</button>
        <button class="tiny-btn danger" onclick="deleteHistoryRound('${r.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

window.openHistoryRound = function(id) {
  const round = state.roundHistory.find(r => r.id === id);
  if (!round) return;
  els.roundDate.value = round.date || '';
  els.focusOfDay.value = round.focus || '';
  els.roundNotes.value = round.roundNote || '';
  const matchingSaved = state.savedCourses.find(c => c.id === round.courseId);
  if (round.courseName === 'Springhaven Club' || round.courseId.startsWith('springhaven_')) {
    state.currentCourseMode = 'springhaven'; els.courseMode.value = 'springhaven'; els.teeSelect.disabled = false; state.currentTee = round.teeName || 'Middle'; els.teeSelect.value = state.currentTee; els.courseName.value = 'Springhaven Club';
  } else if (matchingSaved) {
    selectSavedCourse(matchingSaved.id);
  } else {
    state.currentCourseMode = 'custom'; els.courseMode.value = 'custom'; els.teeSelect.disabled = true; els.courseName.value = round.courseName || 'Custom Course';
    state.savedCourseHoles = round.holes.map(h => ({ hole:h.hole, par:h.par, yards:h.yards, handicap:h.handicap }));
  }
  renderScorecardRows();
  round.holes.forEach((row) => {
    const tr = els.roundTableBody.querySelector(`tr[data-hole="${row.hole}"]`); if (!tr) return;
    ['score','fairway','green','putts','ud','ss','penalty','notes'].forEach(f => { const el = tr.querySelector(`[data-field="${f}"]`); if (el) el.value = row[f] ?? ''; });
    const parEl = tr.querySelector('[data-field="par"]'); if (parEl) parEl.value = row.par;
    const yEl = tr.querySelector('[data-field="yards"]'); if (yEl) yEl.value = row.yards;
  });
  syncTableToMobile();
  analyzeRound();
  toast('Round loaded');
};

window.duplicateHistoryRound = function(id) {
  const round = state.roundHistory.find(r => r.id === id); if (!round) return;
  const clone = JSON.parse(JSON.stringify(round));
  clone.id = `round_${Date.now()}`; clone.createdAt = new Date().toISOString(); clone.date = new Date().toISOString().slice(0,10);
  state.roundHistory.unshift(clone); storage.set(STORAGE_KEYS.ROUNDS, state.roundHistory); renderRoundHistory(); toast('Round duplicated');
};
window.deleteHistoryRound = function(id) { state.roundHistory = state.roundHistory.filter(r => r.id !== id); storage.set(STORAGE_KEYS.ROUNDS, state.roundHistory); renderRoundHistory(); toast('Round deleted'); };


function setMobileEntryView(view) {
  state.mobileEntryView = view;
  const isMobile = window.innerWidth <= 767;
  if (els.entryModeCardsBtn) els.entryModeCardsBtn.classList.toggle('active', view === 'cards');
  if (els.entryModeTableBtn) els.entryModeTableBtn.classList.toggle('active', view === 'table');
  if (!isMobile) {
    els.scoreTableShell?.classList.remove('table-hidden');
    extraEls.mobileEntryMount?.classList.remove('cards-hidden');
    return;
  }
  if (view === 'cards') {
    extraEls.mobileEntryMount?.classList.remove('cards-hidden');
    els.scoreTableShell?.classList.add('table-hidden');
  } else {
    extraEls.mobileEntryMount?.classList.add('cards-hidden');
    els.scoreTableShell?.classList.remove('table-hidden');
  }
}

function bindEntryModeButtons() {
  els.entryModeCardsBtn?.addEventListener('click', () => setMobileEntryView('cards'));
  els.entryModeTableBtn?.addEventListener('click', () => setMobileEntryView('table'));
}

function renderMobileEntry() {
  if (!extraEls.mobileEntryMount) return;
  const holes = getCurrentCourseHoles();
  if (window.innerWidth > 767) { extraEls.mobileEntryMount.innerHTML = ''; setMobileEntryView('cards'); refreshMobileStickyBar(); return; }
  if (!state.mobileEntryView) state.mobileEntryView = 'cards';
  const hole = holes[(state.mobileHoleIndex || 1) - 1];
  const tableRow = els.roundTableBody.querySelector(`tr[data-hole="${hole.hole}"]`);
  const values = tableRow ? {
    score: tableRow.querySelector('[data-field="score"]').value || '',
    fairway: tableRow.querySelector('[data-field="fairway"]').value || (hole.par === 3 ? 'N/A' : ''),
    green: tableRow.querySelector('[data-field="green"]').value || '',
    putts: tableRow.querySelector('[data-field="putts"]').value || '',
    ud: tableRow.querySelector('[data-field="ud"]').value || '',
    ss: tableRow.querySelector('[data-field="ss"]').value || '',
    penalty: tableRow.querySelector('[data-field="penalty"]').value || '0',
    notes: tableRow.querySelector('[data-field="notes"]').value || '',
    par: tableRow.querySelector('[data-field="par"]')?.value || hole.par,
    yards: tableRow.querySelector('[data-field="yards"]')?.value || hole.yards
  } : { score:'', fairway: hole.par===3?'N/A':'', green:'', putts:'', ud:'', ss:'', penalty:'0', notes:'', par:hole.par, yards:hole.yards };
  extraEls.mobileEntryMount.innerHTML = `
    <div class="mobile-hole-card" data-mobile-hole="${hole.hole}">
      <div class="mobile-nav top-nav sticky-nav">
        <button id="mobilePrevBtn" class="tip-btn tip-btn-secondary" ${hole.hole <= 1 ? 'disabled' : ''}>← Prev</button>
        <div class="mobile-progress">Hole ${hole.hole} of ${holes.length}</div>
        <button id="mobileNextBtn" class="tip-btn tip-btn-secondary" ${hole.hole >= holes.length ? 'disabled' : ''}>Next →</button>
      </div>
      <div class="flex items-center justify-between gap-3 mt-3">
        <div>
          <div class="section-kicker">Mobile Entry</div>
          <h3 class="text-2xl font-extrabold">Hole ${hole.hole}</h3>
        </div>
        <div class="flex flex-wrap justify-end gap-2">
          <span class="mobile-meta-chip">Par <strong>${values.par}</strong></span>
          <span class="mobile-meta-chip">${values.yards || 0} yds</span>
          <span class="mobile-meta-chip">HCP ${hole.handicap || '—'}</span>
        </div>
      </div>
      <div class="mobile-hole-grid">
        <div>
          <label class="field-label">Score</label>
          <input id="m_score" class="tip-input" inputmode="numeric" value="${values.score}" placeholder="4" />
        </div>
        <div>
          <label class="field-label">Putts</label>
          <input id="m_putts" class="tip-input" inputmode="numeric" value="${values.putts}" placeholder="2" />
        </div>
        <div class="col-span-2">
          <label class="field-label">Fairway</label>
          <div class="mobile-pill-group">${renderPills(['Y','L','R', hole.par===3?'N/A':''], values.fairway,'m_fairway')}</div>
        </div>
        <div class="col-span-2">
          <label class="field-label">Green shorthand</label>
          <input id="m_green" class="tip-input mono" value="${values.green}" placeholder="Y134 / L125 / LO155" />
        </div>
        <div>
          <label class="field-label">U/D</label>
          <div class="mobile-pill-group">${renderPills(['','Y','N'], values.ud,'m_ud')}</div>
        </div>
        <div>
          <label class="field-label">S/S</label>
          <div class="mobile-pill-group">${renderPills(['','Y','N'], values.ss,'m_ss')}</div>
        </div>
        <div>
          <label class="field-label">Penalty</label>
          <input id="m_penalty" class="tip-input" inputmode="numeric" value="${values.penalty}" placeholder="0" />
        </div>
        <div class="${state.currentCourseMode === 'custom' ? '' : 'hidden'}">
          <label class="field-label">Par</label>
          <input id="m_par" class="tip-input" inputmode="numeric" value="${values.par}" placeholder="4" />
        </div>
        <div class="col-span-2 ${state.currentCourseMode === 'custom' ? '' : 'hidden'}">
          <label class="field-label">Yards</label>
          <input id="m_yards" class="tip-input" inputmode="numeric" value="${values.yards}" placeholder="360" />
        </div>
        <div class="col-span-2">
          <label class="field-label">Quick note</label>
          <input id="m_notes" class="tip-input" value="${values.notes}" placeholder="Optional note" />
        </div>
      </div>
    </div>`;
  setMobileEntryView(state.mobileEntryView);
  refreshMobileStickyBar();
  document.getElementById('mobilePrevBtn')?.addEventListener('click', () => { syncMobileToTable(); state.mobileHoleIndex = Math.max(1, state.mobileHoleIndex - 1); renderMobileEntry(); });
  document.getElementById('mobileNextBtn')?.addEventListener('click', () => { syncMobileToTable(); state.mobileHoleIndex = Math.min(18, state.mobileHoleIndex + 1); renderMobileEntry(); });
  extraEls.mobileEntryMount.querySelectorAll('.mobile-pill').forEach(btn => btn.addEventListener('click', () => {
    const group = btn.dataset.group;
    extraEls.mobileEntryMount.querySelectorAll(`.mobile-pill[data-group="${group}"]`).forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
  }));
}

function renderPills(options, active, group) {
  return options.map(opt => {
    const label = opt || '—';
    const isActive = (String(active || '').toUpperCase() === String(opt || '').toUpperCase()) ? 'active' : '';
    return `<button type="button" class="mobile-pill ${isActive}" data-group="${group}" data-value="${opt}">${label}</button>`;
  }).join('');
}

function syncMobileToTable() {
  if (!extraEls.mobileEntryMount || window.innerWidth > 767) return;
  const card = extraEls.mobileEntryMount.querySelector('[data-mobile-hole]');
  if (!card) return;
  const hole = card.dataset.mobileHole;
  const tr = els.roundTableBody.querySelector(`tr[data-hole="${hole}"]`);
  if (!tr) return;
  const getActive = (group) => extraEls.mobileEntryMount.querySelector(`.mobile-pill.active[data-group="${group}"]`)?.dataset.value || '';
  const map = {
    score: document.getElementById('m_score')?.value || '',
    fairway: getActive('m_fairway') || (tr.querySelector('[data-field="fairway"]')?.value || ''),
    green: document.getElementById('m_green')?.value || '',
    putts: document.getElementById('m_putts')?.value || '',
    ud: getActive('m_ud'),
    ss: getActive('m_ss'),
    penalty: document.getElementById('m_penalty')?.value || '0',
    notes: document.getElementById('m_notes')?.value || '',
    par: document.getElementById('m_par')?.value,
    yards: document.getElementById('m_yards')?.value,
  };
  Object.entries(map).forEach(([field,val]) => { const input = tr.querySelector(`[data-field="${field}"]`); if (input && val !== undefined) input.value = val; });
}

function syncTableToMobile() { if (window.innerWidth <= 767) renderMobileEntry(); }

async function copyTextWithFallback(text, successMessage) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      toast(successMessage);
      return true;
    }
  } catch (err) {}
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    if (ok) {
      toast(successMessage);
      return true;
    }
  } catch (err) {}
  toast('Copy not available here');
  return false;
}

function copyDebriefText() {
  return [`Round Profile: ${els.roundProfile.textContent}`,'',`What traveled: ${els.whatTraveled.textContent}`,'',`What cost shots: ${els.whatCostShots.textContent}`,'',`What to train next: ${els.whatTrainNext.textContent}`].join('\n');
}
function copyPlanText() { return buildPracticePlanText(); }


// V1.3 enhancements
const v13Els = {
  oneThingFocus: document.getElementById('oneThingFocus'),
  oneThingSupport: document.getElementById('oneThingSupport'),
  mobileStickyBar: document.getElementById('mobileStickyBar'),
  analyzeStickyBtn: document.getElementById('analyzeStickyBtn'),
  googleCalendarBtn: document.getElementById('googleCalendarBtn'),
  outlookCalendarBtn: document.getElementById('outlookCalendarBtn')
};
state.legendExpanded = window.innerWidth >= 768;
const originalRenderLegend = renderLegend;
const originalRenderDebriefV13 = renderDebrief;
const originalRenderPracticePlanV13 = renderPracticePlan;

renderLegend = function() {
  updateLegendVisibility();
};

renderDebrief = function(review, metrics, tags) {
  originalRenderDebriefV13(review, metrics, tags);
  const one = deriveOneThing(review, metrics, tags);
  if (v13Els.oneThingFocus) v13Els.oneThingFocus.textContent = one.title;
  if (v13Els.oneThingSupport) v13Els.oneThingSupport.textContent = one.support;
};

renderPracticePlan = function(plan) {
  originalRenderPracticePlanV13(plan);
  const summaryNode = els.practicePlanSummary;
  if (summaryNode && state.results?.review?.Round_Profile) {
    summaryNode.innerHTML = `<div class="text-sm text-slate-300"><div class="mb-2 text-slate-400">Round profile: ${state.results.review.Round_Profile}</div>${summaryNode.innerHTML}</div>`;
  }
};

function deriveOneThing(review, metrics, tags) {
  const primary = derivePriorityLeaks(metrics, tags)[0];
  if (primary) {
    return {
      title: primary.title,
      support: primary.support
    };
  }
  return {
    title: 'Keep the card simple and protect the strongest pattern.',
    support: 'Use the prescribed session as the next block, then reassess after the next round.'
  };
}


function updateLegendVisibility(force) {
  if (typeof force === 'boolean') state.legendExpanded = force;
  if (!v13Els.legendListWrap || !v13Els.legendToggleBtn) return;
  const expanded = !!state.legendExpanded;
  v13Els.legendListWrap.classList.toggle('is-collapsed', !expanded);
  v13Els.legendListWrap.setAttribute('aria-hidden', expanded ? 'false' : 'true');
  const labelSpan = v13Els.legendToggleBtn.querySelector('span');
  if (labelSpan) labelSpan.textContent = expanded ? 'Hide legend' : 'Show legend';
  if (v13Els.legendToggleIcon) v13Els.legendToggleIcon.textContent = expanded ? '−' : '+';
}


function toICSDateUTC(date) {
  const pad = (num) => String(num).padStart(2, '0');
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth()+1)}${pad(date.getUTCDate())}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;
}

function foldICSLine(line) {
  const limit = 72;
  if (line.length <= limit) return line;
  let out = '';
  while (line.length > limit) {
    out += line.slice(0, limit) + '\r\n ';
    line = line.slice(limit);
  }
  return out + line;
}

function toLocalCalendarStamp(date) {
  const pad = (num) => String(num).padStart(2, '0');
  return `${date.getFullYear()}${pad(date.getMonth()+1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}00`;
}

function launchCalendarUrl(url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function buildICSString({ title, description, start, end, repeat }) {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'PRODID:-//The Irish Par//TIP Coaching Intelligence//EN',
    'X-WR-CALNAME:TIP Practice',
    'BEGIN:VEVENT',
    `UID:tip-practice-${Date.now()}@theirishpar`,
    `DTSTAMP:${toICSDateUTC(new Date())}`,
    `DTSTART:${toICSDateUTC(start)}`,
    `DTEND:${toICSDateUTC(end)}`,
    foldICSLine(`SUMMARY:${escapeICS(title)}`),
    foldICSLine(`DESCRIPTION:${escapeICS(description)}`),
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE'
  ];
  if (repeat === 'weekly4') lines.push('RRULE:FREQ=WEEKLY;COUNT=4');
  if (repeat === 'weekly8') lines.push('RRULE:FREQ=WEEKLY;COUNT=8');
  lines.push('END:VEVENT', 'END:VCALENDAR', '');
  return lines.join('\r\n');
}

function downloadICSFile(ics, filename='tip-session-builder-v1_7.ics') {
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 15000);
}


function getPracticeCalendarContext() {
  if (!state.results) { toast('Analyze a round first'); return null; }
  const date = els.practiceDate.value;
  const time = els.practiceTime.value;
  if (!date || !time) { toast('Set practice date and time'); return null; }
  const duration = Number(els.practiceDuration.value || 45);
  const start = new Date(`${date}T${time}`);
  const end = new Date(start.getTime() + duration * 60000);
  const repeat = extraEls.practiceRepeat?.value || 'once';
  const focus = state.results.review?.Round_Profile || state.results.metrics?.roundProfile || 'TIP Practice';
  const one = deriveOneThing(state.results.review, state.results.metrics, state.results.tags || []);
  const title = `TIP Practice - ${one?.title?.replace(/[.]+$/, '') || focus}`;
  const description = buildCalendarDescription({ duration, focus, start, end, repeat }, false);
  const compactDescription = buildCalendarDescription({ duration, focus, start, end, repeat }, true);
  return { date, time, duration, start, end, repeat, focus, title, description, compactDescription };
}

exportCalendar = function() {
  const ctx = getPracticeCalendarContext();
  if (!ctx) return;
  const ics = buildICSString(ctx);
  downloadICSFile(ics);
  toast(ctx.repeat === 'once' ? 'Calendar file exported' : 'Recurring calendar file exported');
};

function openGoogleCalendar() {
  const ctx = getPracticeCalendarContext();
  if (!ctx) return;
  if (ctx.repeat !== 'once') {
    toast('Use .ics export for recurring sessions');
    exportCalendar();
    return;
  }
  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', ctx.title);
  url.searchParams.set('details', ctx.compactDescription || ctx.description);
  url.searchParams.set('dates', `${toICSDateUTC(ctx.start)}/${toICSDateUTC(ctx.end)}`);
  launchCalendarUrl(url.toString());
}

function openOutlookCalendar() {
  const ctx = getPracticeCalendarContext();
  if (!ctx) return;
  if (ctx.repeat !== 'once') {
    toast('Use .ics export for recurring sessions');
    exportCalendar();
    return;
  }
  const url = new URL('https://outlook.office.com/calendar/0/deeplink/compose');
  url.searchParams.set('path', '/calendar/action/compose');
  url.searchParams.set('rru', 'addevent');
  url.searchParams.set('subject', ctx.title);
  url.searchParams.set('body', ctx.compactDescription || ctx.description);
  url.searchParams.set('startdt', ctx.start.toISOString());
  url.searchParams.set('enddt', ctx.end.toISOString());
  launchCalendarUrl(url.toString());
}


function refreshMobileStickyBar() {
  if (!v13Els.mobileStickyBar) return;
  const isMobile = window.innerWidth < 768;
  const scoreSection = document.getElementById('scorecardEntrySection') || document.getElementById('scoreTableShell')?.closest('.glass-card');
  if (!isMobile || !scoreSection) {
    v13Els.mobileStickyBar.classList.add('hidden');
    return;
  }
  const rect = scoreSection.getBoundingClientRect();
  const viewportH = window.innerHeight || document.documentElement.clientHeight;
  const inEntryZone = rect.top < viewportH - 80 && rect.bottom > 140;
  const cardsMode = state.mobileEntryView === 'cards';
  const show = inEntryZone && !cardsMode;
  v13Els.mobileStickyBar.classList.toggle('hidden', !show);
}

function initV13() {
  v13Els.analyzeStickyBtn?.addEventListener('click', handleAnalyzeFromScorecard);
  v13Els.googleCalendarBtn?.addEventListener('click', openGoogleCalendar);
  v13Els.outlookCalendarBtn?.addEventListener('click', openOutlookCalendar);
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) updateLegendVisibility(true);
    refreshMobileStickyBar();
  });
  refreshMobileStickyBar();
  updateLegendVisibility(window.innerWidth >= 768);
}

init();
initV12Enhancements();
initV13();
