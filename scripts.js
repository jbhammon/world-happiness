// Our raw data

// Africa
let region1_color = 'rgba(17, 157, 255, 0.7)';
let region1_countries = ['Mauritius','Nigeria','South Africa','Sierra Leone','Cameroon','Kenya','Mozambique','Senegal','Zambia','Gabon','Ethiopia','Mauritania','Congo (Brazzaville)','Congo (Kinshasa)','Mali','Ivory Coast','Sudan','Ghana','Uganda','Burkina Faso','Niger','Malawi','Chad','Zimbabwe','Lesotho','Angola','Botswana','Benin','Madagascar','Liberia','Guinea','Togo','Rwanda','Tanzania','Burundi','Central African Republic'];
let region1_rankings = [64,95,101,106,107,112,113,115,116,118,119,123,124,126,127,128,130,131,133,134,135,136,137,138,139,140,142,143,144,148,149,150,151,153,154,155];
let region1_change = [7,-17,12,17,26,13,-19,27,-31,25,3,1,15,-6,11,23,-12,-17,8,18,9,-5,12,-23,-42,-3,-14,12,3,-32,1,8,3,-7,3,-7];
let region1_happinessScore = [5.629000187,5.073999882,4.828999996,4.709000111,4.695000172,4.552999973,4.550000191,4.534999847,4.513999939,4.465000153,4.460000038,4.291999817,4.290999889,4.28000021,4.190000057,4.179999828,4.138999939,4.119999886,4.080999851,4.032000065,4.027999878,3.970000029,3.936000109,3.875,3.808000088,3.795000076,3.766000032,3.657000065,3.644000053,3.532999992,3.506999969,3.494999886,3.470999956,3.348999977,2.904999971,2.693000078];
let region1_economy = [21.1297834,15.44651703,21.84093408,7.823761315,12.01928316,12.31011345,5.149574509,10.56910779,14.09851102,26.83561474,7.606139958,15.10851157,18.85258152,2.151923936,11.36468944,14.42700827,15.93420396,16.19477773,9.346501566,8.686203084,4.019993444,5.880152048,11.12837843,9.699265419,13.68228033,22.61997794,29.79538355,11.78795188,8.392115493,3.369425227,6.97319453,8.739477166,10.62362137,15.26234337,3.153961099,0];
let region1_family = [21.4880254,23.96079053,28.67650928,20.89904485,20.14948209,23.45597919,19.13628524,26.01305294,22.22391034,25.88175089,19.38720172,29.63725266,19.39045408,28.71549992,30.58409023,21.64545615,29.33096371,21.20545537,27.68507178,25.87499971,24.6530545,12.91105358,24.23414242,27.95086214,31.25249891,29.10176384,32.43640427,11.90319487,25.05544343,24.68491194,22.56186749,12.35715434,27.24595318,31.11346104,21.67964166,0];
let region1_health = [11.33429456,1.12171327,3.874095468,0.11817273,2.830502921,6.808441727,2.344053418,9.026744582,5.711916227,7.986082324,7.923984417,6.648399165,6.757339583,4.472126533,4.042140136,1.163688325,7.028770918,7.175673184,5.332825654,5.353280147,6.665963633,7.936765257,1.045089275,5.077774297,0,1.314062319,9.074761182,5.740503343,10.29701711,6.507732735,5.535475926,7.070259716,9.40434489,10.88412322,5.21896019,0.697091922];
let region1_freedom = [8.727079582,7.783850496,9.924347409,6.767842079,9.166959174,9.944295381,10.56683674,8.333457106,10.22604117,6.995040679,9.166877545,2.239003893,10.13810026,5.513115337,7.31775033,10.71067491,0.362306239,10.26762878,10.85973955,8.044837445,9.028269787,11.76107432,4.124543255,8.680882761,10.25896245,0,13.41466619,11.64787444,5.192007746,9.422054423,9.939763789,10.88486842,16.76300376,11.64579817,2.061988076,10.05726098];
let region1_trust = [6.412040132,4.551580634,2.885946989,6.222996264,5.032980795,9.770707482,7.081936054,4.04562071,5.529024111,0.980635532,7.010106218,4.703402437,2.816409488,5.758313573,4.375995143,4.814293739,4.404867207,6.236018231,7.982505976,6.221842286,5.677106577,7.233513045,5.490697256,4.881122426,4.135957678,2.580408117,2.638036303,5.686312751,5.728115449,7.544576439,7.551043466,5.633652573,7.281936969,10.57797445,7.037355836,10.42987296];
let region1_generosity = [0.749361407,0.514812113,1.501542702,1.50977223,1.092792953,1.419752238,3.94365667,2.545985709,1.732688326,1.703175462,3.709769341,3.190983477,1.855468097,1.407508249,2.505256458,3.111525846,2.17075432,0.614960454,1.398424922,2.984327978,3.440242061,1.831527795,1.361328265,2.461300155,3.127485222,1.837162941,2.617716361,1.666092806,1.845004776,1.102412938,3.163319617,2.737196513,13.11495303,1.97178583,2.896659065,2.100448361];

// Asia
let region2_color = 'rgba(82, 255, 163, 0.7)';
let region2_countries = ['Taiwan','Japan','South Korea','Hong Kong','China','Mongolia','Singapore','Thailand','Malaysia','Philippines','Indonesia','Vietnam','Myanmar','Cambodia','Pakistan','Bhutan','Nepal','Bangladesh','Sri Lanka','India','Afghanistan'];
let region2_rankings = [33,51,55,71,79,100,26,32,42,72,81,94,114,129,80,97,99,110,120,122,141];
let region2_change = [5,-5,-8,1,5,0,-2,2,19,18,-7,-19,15,16,1,-18,22,-1,12,-5,12];
let region2_happinessScore = [6.421999931,5.920000076,5.837999821,5.472000122,5.272999763,4.954999924,6.572000027,6.423999786,6.084000111,5.429999828,5.262000084,5.073999882,4.545000076,4.168000221,5.269000053,5.011000156,4.961999893,4.607999802,4.440000057,4.315000057,3.79399991];
let region2_economy = [22.32367718,23.9343777,24.00956639,28.35663027,20.50380883,20.73129933,25.74981228,17.55711098,21.22313275,15.79556615,18.91939521,15.54094587,8.077239689,14.43774146,13.79547397,17.66945443,9.669895251,12.73183594,22.74437232,18.35970423,10.58189846];
let region2_family = [21.55972233,24.26246302,19.32638704,23.07731889,22.01474425,30.13140785,20.59973155,22.19477745,21.11515468,23.09240543,24.21977725,25.17720459,24.71366165,24.14199347,12.76695167,26.74369332,23.76628953,15.95338048,28.37784619,17.48256285,15.32797416];
let region2_health = [12.36350424,15.43033546,15.41990585,17.23432756,14.06060183,11.2569827,14.44754095,10.07532769,10.17068404,8.618951562,9.356627008,12.85315341,8.746371009,10.31150147,7.630438014,9.895814739,10.15983055,11.57207155,14.07952306,10.55452169,4.764016428];
let region2_freedom = [5.628567283,8.540971951,4.417980026,8.972380008,8.966200062,7.954469728,8.366411545,9.031767611,6.61185034,10.77743449,8.424999162,11.25454482,11.31995658,15.19615618,4.464134743,10.00873409,8.873558192,10.38100433,12.63993801,10.89193508,2.79861683];
let region2_trust = [4.02305322,2.036702136,3.540157131,6.843307468,0.546308407,6.830761558,5.264241929,8.906026293,6.847615424,3.563783225,11.62494447,4.63082492,18.43949718,9.259187801,5.986828921,9.460277993,7.942284855,3.738180543,11.05548549,5.365897704,8.22010913];
let region2_generosity = [0.99391524,2.76622863,1.083978605,5.37159617,0.432282875,0.664021988,7.064938878,0.492103612,1.078249619,1.829316688,0.2910896,1.727103647,4.154371878,1.634019851,2.359993656,3.459995702,1.470688182,2.684849486,1.658873087,2.13735536,1.61196182];

// Australia, New Zealand
let region3_color = 'rgba(148, 48, 255, 0.7)';
let region3_countries = ['New Zealand','Australia'];
let region3_rankings = [8,10];
let region3_change = [1,0];
let region3_happinessScore = [7.31400013,7.28399992];
let region3_economy = [19.21938779,20.37911795];
let region3_family = [21.16755669,20.7309441];
let region3_health = [11.16707262,11.58548603];
let region3_freedom = [8.395708492,8.259299679];
let region3_trust = [6.836274502,6.55819955];
let region3_generosity = [5.234026459,4.134867289];

// Europe
let region4_color = 'rgba(255, 38, 121, 0.7)';
let region4_countries = ['Slovakia','Poland','Uzbekistan','Russia','Lithuania','Latvia','Moldova','Romania','Turkmenistan','Kazakhstan','Slovenia','Estonia','Belarus','Serbia','Hungary','Croatia','Kosovo','Montenegro','Azerbaijan','Bosnia and Herzegovina','Macedonia','Tajikistan','Kyrgyzstan','Bulgaria','Albania','Armenia','Georgia','Ukraine','Norway','Denmark','Iceland','Switzerland','Finland','Netherlands','Sweden','Austria','Ireland','Germany','Belgium','Luxembourg','United Kingdom','Malta','France','Spain','Italy','North Cyprus','Cyprus','Greece','Portugal'];
let region4_rankings = [40,46,47,49,52,54,56,57,59,60,62,66,67,73,75,77,78,83,85,90,92,96,98,105,109,121,125,132,1,2,3,4,5,6,9,13,15,16,17,18,19,27,31,34,48,61,65,87,89];
let region4_change = [5,14,-3,15,4,35,-4,29,11,-6,-7,7,-8,14,29,-15,-9,-1,-5,6,1,10,-21,29,-14,6,5,-21,3,1,-1,-3,1,1,-1,0,3,10,2,-1,2,10,-2,2,2,5,2,15,-1];
let region4_happinessScore = [6.09800005,5.97300005,5.971000195,5.962999821,5.90199995,5.849999905,5.837999821,5.824999809,5.822000027,5.818999767,5.757999897,5.611000061,5.568999767,5.394999981,5.323999882,5.293000221,5.278999805,5.236999989,5.234000206,5.18200016,5.175000191,5.040999889,5.004000187,4.714000225,4.644000053,4.375999928,4.285999775,4.096000195,7.537000179,7.521999836,7.504000187,7.493999958,7.468999863,7.376999855,7.28399992,7.006000042,6.977000237,6.951000214,6.890999794,6.862999916,6.714000225,6.52699995,6.441999912,6.402999878,5.964000225,5.809999943,5.620999813,5.227000237,5.195000172];
let region4_economy = [21.73488926,21.62711957,13.17101092,21.49552466,22.27350659,21.5512589,12.48493752,20.90444551,19.42247952,22.07520745,23.29291384,23.54088978,20.76777893,19.8205298,24.15499554,23.09760404,18.02395183,21.40784874,22.04053727,18.95811246,20.57155358,10.40891979,11.91486918,24.63850302,21.45117876,20.58036455,22.17948469,21.84208756,21.44703656,19.70729919,19.73124977,20.88310064,19.32751307,20.38694137,20.51602534,21.22605273,22.01098734,21.40588891,21.24192142,25.38166428,21.47205677,20.5803562,22.21241046,21.62108215,23.39145819,23.18263897,24.12272055,24.66974216,25.31617423];
let region4_family = [24.68119432,24.20411783,25.94153575,24.63998714,24.9663863,24.01222162,21.44271342,19.74405713,25.64667046,23.79049788,25.22610016,26.31743154,25.94622511,23.32140503,25.22789485,18.2879835,21.5543388,23.6466775,22.01758138,20.63558288,23.34092695,25.22244204,27.86248079,30.4280736,17.3058837,23.02293733,13.31346159,34.04632572,20.34660374,20.62113303,21.46287269,20.24168339,20.6218604,19.37019454,20.29327547,20.83849492,22.33382632,21.18429443,21.22061735,21.23828769,22.28865103,22.80391721,21.54264003,23.92770469,24.2274183,20.41830273,20.12743837,23.71177572,26.31459043];
let region4_health = [11.68797811,11.71062016,8.344877101,9.179093584,10.65655617,10.9156749,10.09704041,11.76237484,7.518482961,10.41487498,13.73442588,12.3893835,11.45114551,12.06273723,12.91817183,13.24935749,10.25671661,12.74517234,10.3319785,13.60838065,12.46276638,10.4986141,11.06030728,15.02370908,15.74418042,14.56865714,15.15508668,14.06015441,10.57007409,10.53663311,11.10810369,11.45091131,10.8335478,10.98950984,11.40685293,11.63757371,11.60645831,11.49403981,11.87188933,12.313704,11.99487507,12.59298672,13.10875293,13.88350175,14.30490134,14.36570131,15.0278372,15.50026528,15.3194132];
let region4_freedom = [4.85105711,8.711570528,11.02409381,6.268373691,3.968684971,5.567656706,4.123485036,7.84555806,7.184334027,7.517688615,9.94400518,8.539144979,5.304368367,3.868684499,3.303221692,4.832274368,4.930629866,3.723296838,7.60710398,3.944484189,6.297699845,9.354626411,9.091594165,6.135589822,8.214871461,4.531610381,7.219086613,3.002313724,8.430709459,8.322344265,8.357710813,8.274227121,8.273542219,7.935265006,8.414663725,8.103999238,8.214280099,8.092524337,7.832981253,8.693397906,7.569109606,9.020485009,7.299318883,6.38421424,4.299978258,8.110217377,6.317586743,1.831475926,9.595096891];
let region4_trust = [2.23916825,2.653038099,6.9667331,0.876468616,0.172223942,2.616663051,3.576209873,2.292187509,4.292768582,3.470775581,4.214121176,1.762445374,2.785733803,4.080183221,1.47260826,4.685489621,6.060455765,3.779091549,0.864909022,6.346342818,4.903593326,4.939449504,8.564755355,2.400884357,4.334903999,1.907863194,1.260121741,6.593297123,4.80313425,4.723218516,6.337156305,3.877092069,3.28668868,6.377793673,5.291038663,4.517161292,6.1324109,4.837709102,3.359502901,4.126198244,7.339501675,8.805432502,2.014317118,2.969445192,2.897210622,4.592869288,4.825730475,0,1.830658515];
let region4_generosity = [0.397029383,0.992931617,4.128759252,0.55279024,0.201044444,1.262268858,0.172855195,0.075328775,4.453286479,2.04988642,0.783761372,3.265887008,2.806856321,0.758179447,0.688146841,0.814341738,1.088683844,1.683677567,3.457919371,0,1.164788247,2.903732379,0.788153028,0.234440612,0.858402574,0.609561756,5.871830336,0.562242918,4.192169663,5.327972304,2.045929573,4.897348373,5.122660999,3.831663692,5.277302763,3.155300652,4.276739901,3.981181549,3.647411675,4.645700538,3.953352057,2.345121345,2.677777559,1.10751364,0.46995456,2.67389593,0.733641298,0.828195428,0.305475486];

// Latin America and Caribbean
let region5_color = 'rgba(255, 76, 43, 0.7)';
let region5_countries = ['Costa Rica','Chile','Brazil','Argentina','Mexico','Uruguay','Guatemala','Panama','Colombia','Trinidad and Tobago','Nicaragua','Ecuador','El Salvador','Bolivia','Peru','Paraguay','Jamaica','Venezuela','Dominican Republic','Honduras','Haiti'];
let region5_rankings = [12,20,22,24,25,28,29,30,36,38,43,44,45,58,63,70,76,82,86,91,145];
let region5_change = [0,7,-6,6,-11,4,14,-5,-3,3,14,4,-3,-7,-5,-17,-11,-59,12,14,-26];
let region5_happinessScore = [7.078999996,6.65199995,6.635000229,6.598999977,6.578000069,6.453999996,6.453999996,6.452000141,6.356999874,6.168000221,6.071000099,6.007999897,6.002999783,5.822999954,5.715000153,5.493000031,5.31099987,5.25,5.230000019,5.181000233,3.602999926];
let region5_economy = [15.67603169,18.83320234,16.68957305,17.96174371,17.5309183,18.86519516,13.51103109,19.12195302,16.84162885,22.07126868,12.14460866,16.65812941,15.15549773,14.31833372,18.1141775,16.97683073,17.4275905,21.49392764,20.638123,14.10100531,10.23064864];
let region5_family = [20.00852736,19.3028407,21.5720566,21.82832475,18.40775536,21.88143585,19.4543724,21.28320705,22.05730635,22.37724497,21.20269624,21.4076038,19.69223946,21.08224389,21.32581544,27.44010325,25.76196757,27.26357324,26.81485088,22.07961644,17.77546032];
let region5_health = [10.7290474,12.31929811,9.29242399,10.53397615,10.79323488,11.1437376,8.37062272,10.94476317,9.360200343,8.430338414,10.75763384,11.41205449,9.92867857,8.133784196,11.02652837,10.54525195,12.06971191,11.75512813,10.99184977,11.24434383,7.696950755];
let region5_freedom = [8.195107364,5.665894195,6.593123314,7.49385067,6.274399569,8.977258357,8.232268645,8.524904246,7.511206929,8.408409929,7.371962439,7.576534734,7.203940457,9.595276171,7.874065913,8.620203702,8.93065808,2.933278533,10.56577117,6.718391128,0.842904736];
let region5_trust = [3.031688503,4.91073998,2.446870978,1.658691641,1.839319424,2.712998592,4.39244489,3.263436677,2.344100613,5.273937262,4.969102489,2.498543069,1.303647973,3.873617152,2.21906757,4.080660053,4.402529518,1.238469143,3.574911077,4.558750499,13.57767946];
let region5_generosity = [1.41413461,1.23704123,1.674344494,0.905286986,2.018457185,2.758938226,1.196518114,1.100184787,0.734131555,0.145343964,2.152659856,2.332467533,1.498933254,1.038600833,0.823256093,1.657853859,1.040628551,1.228402343,2.178685518,1.415662029,2.771916515];

// Middle East and N. Africa
let region6_color = 'rgba(255, 165, 49, 0.7)';
let region6_countries = ['Israel','United Arab Emirates','Qatar','Saudi Arabia','Kuwait','Bahrain','Algeria','Libya','Turkey','Jordan','Morocco','Lebanon','Tunisia','Palestinian Territories','Egypt','Iran','Iraq','Yemen','Syria'];
let region6_rankings = [11,21,35,37,39,41,53,68,69,74,84,88,102,103,104,108,117,146,152];
let region6_change = [0,-1,-7,-2,0,8,15,-5,7,8,8,15,5,5,31,2,-5,-10,4];
let region6_happinessScore = [7.212999821,6.647999763,6.375,6.343999863,6.105000019,6.086999893,5.872000217,5.525000095,5.5,5.335999966,5.235000134,5.224999905,4.804999828,4.775000095,4.735000134,4.691999912,4.497000217,3.592999935,3.461999893];
let region6_economy = [19.0681056,24.46364962,29.34534409,24.12710574,26.74778783,24.45231292,18.59442143,19.94213656,21.7868068,18.57219641,16.77391707,20.57392441,20.96286872,14.99998353,20.90183271,24.65629004,24.52102361,16.46767208,22.44809815];
let region6_family = [19.08068762,19.04949274,19.98897067,20.2818037,20.63388608,21.73665984,19.52005148,24.57129967,24.32278504,23.22130624,14.80161252,21.61960323,18.07183124,24.20203426,21.06592109,15.16520167,21.76146655,26.03346128,11.44143903];
let region6_health = [11.62351339,10.93258517,11.13879354,9.302464419,10.35390182,10.72996626,10.5174493,9.41482373,11.59282924,11.33039846,11.41758651,14.06853761,12.76195777,11.84642854,10.98600305,13.6260273,11.14477309,8.630139761,14.45792483];
let region6_freedom = [5.628568059,9.15080162,9.476564439,7.089384958,8.130017878,8.817922268,3.973702305,8.429560579,5.468010909,7.841475856,7.796720565,5.521837134,6.028734659,5.334262972,5.95797565,5.313781174,6.416622617,6.94304833,2.355270003];
let region6_trust = [4.576218816,5.429331526,5.183903843,2.326860296,3.739390619,2.83667636,1.182504163,2.752464496,0.8489644,3.226582854,0.615280882,5.061258637,1.034201015,2.391061188,2.716609068,8.25325917,4.439342992,2.898001973,14.25949576];
let region6_generosity = [1.181784308,4.881010463,6.890968722,4.310092385,3.524316942,4.222805561,2.488012681,1.676202867,1.812210545,2.24518877,1.676469546,0.717968051,1.804852281,1.869792675,2.415657059,1.039238574,2.384161659,1.579945005,4.371667697];

// N. America
let region7_color = 'rgba(105, 255, 30, 0.7)';
let region7_countries = ['Canada','United States'];
let region7_rankings = [7,14];
let region7_change = [-2,1];
let region7_happinessScore = [7.315999985,6.993000031];
let region7_economy = [20.21875914,22.11152977];
let region7_family = [20.24807264,20.30488428];
let region7_health = [11.40729434,11.0723098];
let region7_freedom = [8.352937579,7.232096679];
let region7_trust = [5.953249356,5.613882157];
let region7_generosity = [3.927986831,1.939636599];

// Layout for all the scatters
let layout = {
  xaxis: {
    range: [0, 156],
    showgrid: false,
  },
  yaxis: {
    range: [-60, 60],
    showgrid: false,
  },
  width: 800,
  height: 200,
  margin: {
    l: 30,
    r: 30,
    b: 30,
    t: 30,
    pad: 10,
  },
};

// Drawing the initial charts
region1 = document.getElementById('region1');
let data1 = [
  {
    x: region1_rankings,
    y: region1_change,
    mode: 'markers',
    marker: {
      size: 10,
      color: region1_color,
    },
    type: 'scatter',
    text: region1_countries,
    hovertemplate: '<b>%{text}</b>' +
                   '<br>Rank: %{x}<br>' +
                   'Change: %{y}<br>' +
                   'Value: %{marker.size:.2f,}',
  }
];
Plotly.newPlot(region1, data1, layout);

region2 = document.getElementById('region2');
let data2 = [
  {
    x: region2_rankings,
    y: region2_change,
    mode: 'markers',
    marker: {
      size: 10,
      color: region2_color,
    },
    type: 'scatter',
    text: region2_countries,
    hovertemplate: '<b>%{text}</b>' +
                   '<br>Rank: %{x}<br>' +
                   'Change: %{y}<br>' +
                   'Value: %{marker.size:.2f,}',
  }
];
Plotly.plot(region2, data2, layout);

region3 = document.getElementById('region3');
let data3 = [
  {
    x: region3_rankings,
    y: region3_change,
    mode: 'markers',
    marker: {
      size: 10,
      color: region3_color,
    },
    type: 'scatter',
    text: region3_countries,
    hovertemplate: '<b>%{text}</b>' +
                   '<br>Rank: %{x}<br>' +
                   'Change: %{y}<br>' +
                   'Value: %{marker.size:.2f,}',
  }
];
Plotly.plot(region3, data3, layout);

region4 = document.getElementById('region4');
let data4 = [
  {
    x: region4_rankings,
    y: region4_change,
    mode: 'markers',
    marker: {
      size: 10,
      color: region4_color,
    },
    type: 'scatter',
    text: region4_countries,
    hovertemplate: '<b>%{text}</b>' +
                   '<br>Rank: %{x}<br>' +
                   'Change: %{y}<br>' +
                   'Value: %{marker.size:.2f,}',
  }
];
Plotly.plot(region4, data4, layout);

region5 = document.getElementById('region5');
let data5 = [
  {
    x: region5_rankings,
    y: region5_change,
    mode: 'markers',
    marker: {
      size: 10,
      color: region5_color,
    },
    type: 'scatter',
    text: region5_countries,
    hovertemplate: '<b>%{text}</b>' +
                   '<br>Rank: %{x}<br>' +
                   'Change: %{y}<br>' +
                   'Value: %{marker.size:.2f,}',
  }
];
Plotly.plot(region5, data5, layout);

region6 = document.getElementById('region6');
let data6 = [
  {
    x: region6_rankings,
    y: region6_change,
    mode: 'markers',
    marker: {
      size: 10,
      color: region6_color,
    },
    type: 'scatter',
    text: region6_countries,
    hovertemplate: '<b>%{text}</b>' +
                   '<br>Rank: %{x}<br>' +
                   'Change: %{y}<br>' +
                   'Value: %{marker.size:.2f,}',
  }
];
Plotly.plot(region6, data6, layout);

region7 = document.getElementById('region7');
let data7 = [
  {
    x: region7_rankings,
    y: region7_change,
    mode: 'markers',
    marker: {
      size: 10,
      color: region7_color,
    },
    type: 'scatter',
    text: region7_countries,
    hovertemplate: '<b>%{text}</b>' +
                   '<br>Rank: %{x}<br>' +
                   'Change: %{y}<br>' +
                   'Value: %{marker.size:.2f,}',
  }
];
Plotly.plot(region7, data7, layout);

// Buttons for factor switching
$('#total').click(function() {
  Plotly.restyle(region1, 'marker', {size: 10, color: region1_color,});
  Plotly.restyle(region2, 'marker', {size: 10, color: region2_color,});
  Plotly.restyle(region3, 'marker', {size: 10, color: region3_color,});
  Plotly.restyle(region4, 'marker', {size: 10, color: region4_color,});
  Plotly.restyle(region5, 'marker', {size: 10, color: region5_color,});
  Plotly.restyle(region6, 'marker', {size: 10, color: region6_color,});
  Plotly.restyle(region7, 'marker', {size: 10, color: region7_color,});
});

$('#economy').click(function() {
  Plotly.restyle(region1, 'marker', {size: region1_economy, color: region1_color,});
  Plotly.restyle(region2, 'marker', {size: region2_economy, color: region2_color,});
  Plotly.restyle(region3, 'marker', {size: region3_economy, color: region3_color,});
  Plotly.restyle(region4, 'marker', {size: region4_economy, color: region4_color,});
  Plotly.restyle(region5, 'marker', {size: region5_economy, color: region5_color,});
  Plotly.restyle(region6, 'marker', {size: region6_economy, color: region6_color,});
  Plotly.restyle(region7, 'marker', {size: region7_economy, color: region7_color,});
});

$('#family').click(function() {
  Plotly.restyle(region1, 'marker', {size: region1_family, color: region1_color,});
  Plotly.restyle(region2, 'marker', {size: region2_family, color: region2_color,});
  Plotly.restyle(region3, 'marker', {size: region3_family, color: region3_color,});
  Plotly.restyle(region4, 'marker', {size: region4_family, color: region4_color,});
  Plotly.restyle(region5, 'marker', {size: region5_family, color: region5_color,});
  Plotly.restyle(region6, 'marker', {size: region6_family, color: region6_color,});
  Plotly.restyle(region7, 'marker', {size: region7_family, color: region7_color,});
});

$('#health').click(function() {
  Plotly.restyle(region1, 'marker', {size: region1_health, color: region1_color,});
  Plotly.restyle(region2, 'marker', {size: region2_health, color: region2_color,});
  Plotly.restyle(region3, 'marker', {size: region3_health, color: region3_color,});
  Plotly.restyle(region4, 'marker', {size: region4_health, color: region4_color,});
  Plotly.restyle(region5, 'marker', {size: region5_health, color: region5_color,});
  Plotly.restyle(region6, 'marker', {size: region6_health, color: region6_color,});
  Plotly.restyle(region7, 'marker', {size: region7_health, color: region7_color,});
});

$('#freedom').click(function() {
  Plotly.restyle(region1, 'marker', {size: region1_freedom, color: region1_color,});
  Plotly.restyle(region2, 'marker', {size: region2_freedom, color: region2_color,});
  Plotly.restyle(region3, 'marker', {size: region3_freedom, color: region3_color,});
  Plotly.restyle(region4, 'marker', {size: region4_freedom, color: region4_color,});
  Plotly.restyle(region5, 'marker', {size: region5_freedom, color: region5_color,});
  Plotly.restyle(region6, 'marker', {size: region6_freedom, color: region6_color,});
  Plotly.restyle(region7, 'marker', {size: region7_freedom, color: region7_color,});
});

$('#generosity').click(function() {
  Plotly.restyle(region1, 'marker', {size: region1_generosity, color: region1_color,});
  Plotly.restyle(region2, 'marker', {size: region2_generosity, color: region2_color,});
  Plotly.restyle(region3, 'marker', {size: region3_generosity, color: region3_color,});
  Plotly.restyle(region4, 'marker', {size: region4_generosity, color: region4_color,});
  Plotly.restyle(region5, 'marker', {size: region5_generosity, color: region5_color,});
  Plotly.restyle(region6, 'marker', {size: region6_generosity, color: region6_color,});
  Plotly.restyle(region7, 'marker', {size: region7_generosity, color: region7_color,});
});

$('#trust').click(function() {
  Plotly.restyle(region1, 'marker', {size: region1_trust, color: region1_color,});
  Plotly.restyle(region2, 'marker', {size: region2_trust, color: region2_color,});
  Plotly.restyle(region3, 'marker', {size: region3_trust, color: region3_color,});
  Plotly.restyle(region4, 'marker', {size: region4_trust, color: region4_color,});
  Plotly.restyle(region5, 'marker', {size: region5_trust, color: region5_color,});
  Plotly.restyle(region6, 'marker', {size: region6_trust, color: region6_color,});
  Plotly.restyle(region7, 'marker', {size: region7_trust, color: region7_color,});
});
