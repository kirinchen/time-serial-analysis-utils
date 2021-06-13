const rMap = {
    "2021-06-11T05:47:59.162451+00:00": 3.407808059693602,
    "2021-06-11T05:52:59.177424+00:00": 3.67370255004001,
    "2021-06-11T05:57:59.168030+00:00": 3.900694760084093,
    "2021-06-11T06:02:59.202301+00:00": 3.95759213553449,
    "2021-06-11T06:07:59.178723+00:00": 3.8596856507747694,
    "2021-06-11T06:12:59.157590+00:00": 3.6041310515343876,
    "2021-06-11T06:17:59.186745+00:00": 3.184295412953903,
    "2021-06-11T06:22:59.154995+00:00": 2.9141288837986594,
    "2021-06-11T06:27:59.172459+00:00": 2.6913796762316555,
    "2021-06-11T06:32:59.289525+00:00": 2.217253477854029,
    "2021-06-11T06:37:59.179458+00:00": 2.0319620235988434,
    "2021-06-11T06:42:59.148177+00:00": 1.821053488717568,
    "2021-06-11T06:47:59.157814+00:00": 1.5254365703279662,
    "2021-06-11T06:52:59.264979+00:00": 1.234359140286388,
    "2021-06-11T06:57:59.168054+00:00": 0.8994438221170201,
    "2021-06-11T07:02:59.274244+00:00": 0.5574869805664202,
    "2021-06-11T07:07:59.170141+00:00": 0.30567306954152773,
    "2021-06-11T07:12:59.163240+00:00": 0.17053165448735816,
    "2021-06-11T07:17:59.180277+00:00": 0.1818684504172661,
    "2021-06-11T07:22:59.925353+00:00": 0.24380676457322062,
    "2021-06-11T07:27:59.168698+00:00": 0.35214466763553126,
    "2021-06-11T07:32:59.326673+00:00": 0.5353973349423591,
    "2021-06-11T07:37:59.201922+00:00": 0.667815354797075,
    "2021-06-11T07:42:59.183819+00:00": 0.8124534684824422,
    "2021-06-11T07:47:59.160057+00:00": 0.9396031799452936,
    "2021-06-11T07:52:59.226107+00:00": 1.0218024436913178,
    "2021-06-11T07:57:59.162622+00:00": 1.1940264499438906,
    "2021-06-11T08:02:59.196627+00:00": 1.6035213792575675,
    "2021-06-11T08:07:59.187784+00:00": 2.1877834770910924,
    "2021-06-11T08:12:59.171156+00:00": 2.746112243268708,
    "2021-06-11T08:17:59.159196+00:00": 3.3301718241906912,
    "2021-06-11T08:22:59.205044+00:00": 3.892880876950267,
    "2021-06-11T08:27:59.180683+00:00": 4.420682789555837,
    "2021-06-11T08:32:59.698360+00:00": 4.842153737550266,
    "2021-06-11T08:37:59.937017+00:00": 5.25999052609901,
    "2021-06-11T08:42:59.209598+00:00": 5.633961616545407,
    "2021-06-11T08:47:59.191179+00:00": 5.9488870667784814,
    "2021-06-11T08:52:59.163329+00:00": 6.236089918425829,
    "2021-06-11T08:57:59.150816+00:00": 6.424362861233554,
    "2021-06-11T09:02:59.197023+00:00": 6.481090343136635,
    "2021-06-11T09:07:59.967537+00:00": 6.464499135659306,
    "2021-06-11T09:12:59.148623+00:00": 6.486007242845582,
    "2021-06-11T09:17:59.540681+00:00": 6.403018435391327,
    "2021-06-11T09:22:59.249395+00:00": 6.1925989668911505,
    "2021-06-11T09:27:59.151138+00:00": 5.917960296406339,
    "2021-06-11T09:32:59.907356+00:00": 5.69318427437848,
    "2021-06-11T09:37:59.182334+00:00": 5.367118404651762,
    "2021-06-11T09:42:59.950754+00:00": 5.1095794908334655,
    "2021-06-11T09:47:59.193973+00:00": 4.819067889667806,
    "2021-06-11T09:52:59.155269+00:00": 4.628825933238009,
    "2021-06-11T09:57:59.479362+00:00": 4.471675991647021,
    "2021-06-11T10:02:59.423393+00:00": 4.400993737557503,
    "2021-06-11T10:07:59.171249+00:00": 4.4258749054474755,
    "2021-06-11T10:12:59.244639+00:00": 4.295612418710977,
    "2021-06-11T10:17:59.172929+00:00": 3.961234219991334,
    "2021-06-11T10:22:59.187428+00:00": 3.889541272770357,
    "2021-06-11T10:27:59.151544+00:00": 3.8570671509089802,
    "2021-06-11T10:32:59.275425+00:00": 3.8335527845590676,
    "2021-06-11T10:37:59.166249+00:00": 3.9648578679893975,
    "2021-06-11T10:42:59.176519+00:00": 4.169155581426386,
    "2021-06-11T10:47:59.186577+00:00": 4.345863103821597,
    "2021-06-11T10:52:59.968732+00:00": 4.487515327065262,
    "2021-06-11T10:57:59.185928+00:00": 4.628487103064065,
    "2021-06-11T11:02:59.258668+00:00": 4.6752827637548435,
    "2021-06-11T11:07:59.183560+00:00": 4.538446133943809,
    "2021-06-11T11:12:59.155934+00:00": 4.491596917874199,
    "2021-06-11T11:17:59.200090+00:00": 4.718054391063706,
    "2021-06-11T11:22:59.180899+00:00": 4.681238249705801,
    "2021-06-11T11:27:59.171267+00:00": 4.544719764380049,
    "2021-06-11T11:32:59.389154+00:00": 4.390713808015746,
    "2021-06-11T11:37:59.182828+00:00": 4.173758841046609,
    "2021-06-11T11:42:59.157901+00:00": 3.8889382230102285,
    "2021-06-11T11:47:59.182929+00:00": 3.7913488598254474,
    "2021-06-11T11:52:59.243585+00:00": 3.6950441159252776,
    "2021-06-11T11:57:59.150573+00:00": 3.6839967607557598,
    "2021-06-11T12:02:59.344172+00:00": 3.9074941437087762,
    "2021-06-11T12:07:59.187488+00:00": 3.9150914570124193,
    "2021-06-11T12:12:59.256410+00:00": 3.527172374032457,
    "2021-06-11T12:17:59.179188+00:00": 3.151831065221739,
    "2021-06-11T12:22:59.179561+00:00": 2.9016801666286156,
    "2021-06-11T12:27:59.194268+00:00": 2.8254293141817697,
    "2021-06-11T12:32:59.427511+00:00": 2.9644969685702356,
    "2021-06-11T12:37:59.222215+00:00": 3.134356914790379,
    "2021-06-11T12:42:59.226296+00:00": 3.275580858887301,
    "2021-06-11T12:47:59.163532+00:00": 3.3216703549045845,
    "2021-06-11T12:52:59.166274+00:00": 3.4545683787650017,
    "2021-06-11T12:57:59.171091+00:00": 3.4961507805476706,
    "2021-06-11T13:02:59.206727+00:00": 3.481698025152364,
    "2021-06-11T13:07:59.192712+00:00": 3.7462040605671194,
    "2021-06-11T13:12:59.186354+00:00": 4.513069979417286,
    "2021-06-11T13:17:59.175317+00:00": 5.18331259400799,
    "2021-06-11T13:22:59.181269+00:00": 5.795250204400499,
    "2021-06-11T13:27:59.245406+00:00": 6.3878522170738385,
    "2021-06-11T13:32:59.401343+00:00": 6.713644338725555,
    "2021-06-11T13:37:59.303344+00:00": 7.036727378599129,
    "2021-06-11T13:42:59.215950+00:00": 7.365428620101468,
    "2021-06-11T13:47:59.253576+00:00": 7.63910733777761,
    "2021-06-11T13:52:59.206343+00:00": 7.933022813982867,
    "2021-06-11T13:57:59.186594+00:00": 8.21436065141623,
    "2021-06-11T14:03:00.862393+00:00": 8.39678253999614,
    "2021-06-11T14:07:59.202325+00:00": 8.48842827899278,
    "2021-06-11T14:12:59.877513+00:00": 8.46312650801698,
    "2021-06-11T14:17:59.239982+00:00": 8.46703982978601,
    "2021-06-11T14:22:59.210083+00:00": 8.446791886841208,
    "2021-06-11T14:27:59.245245+00:00": 8.32481320473317,
    "2021-06-11T14:32:59.317365+00:00": 8.191519243754174,
    "2021-06-11T14:37:59.225763+00:00": 8.065434848512021,
    "2021-06-11T14:42:59.196600+00:00": 7.994602366113914,
    "2021-06-11T14:47:59.186100+00:00": 7.942161444871513,
    "2021-06-11T14:52:59.210077+00:00": 7.811372419254144,
    "2021-06-11T14:57:59.193535+00:00": 7.696328682652752,
    "2021-06-11T15:02:59.249743+00:00": 7.285600663503696,
    "2021-06-11T15:07:59.254952+00:00": 6.746500018429572,
    "2021-06-11T15:12:59.314942+00:00": 6.169298512965099,
    "2021-06-11T15:17:59.212937+00:00": 5.571107224914333,
    "2021-06-11T15:22:59.200660+00:00": 5.0309295510884535,
    "2021-06-11T15:27:59.240768+00:00": 4.51773020153764,
    "2021-06-11T15:32:59.413119+00:00": 4.133917217685808,
    "2021-06-11T15:37:59.906974+00:00": 3.690415219303395,
    "2021-06-11T15:42:59.917873+00:00": 3.2352169635470047,
    "2021-06-11T15:47:59.212134+00:00": 2.790078636617356,
    "2021-06-11T15:52:59.265863+00:00": 2.2627904568142463,
    "2021-06-11T15:57:59.231930+00:00": 1.7793137425113519,
    "2021-06-11T16:02:59.234605+00:00": 1.4794929331612543,
    "2021-06-11T16:07:59.190949+00:00": 1.385460103089504,
    "2021-06-11T16:12:59.217045+00:00": 1.2911814669878383,
    "2021-06-11T16:17:59.186338+00:00": 1.2301327041444174,
    "2021-06-11T16:22:59.234676+00:00": 1.168532913926269,
    "2021-06-11T16:27:59.204080+00:00": 1.010994100037504,
    "2021-06-11T16:32:59.419073+00:00": 0.7565789771256376,
    "2021-06-11T16:37:59.907691+00:00": 0.42737972609667024,
    "2021-06-11T16:42:59.177489+00:00": 0.03800106170381053,
    "2021-06-11T16:47:59.162099+00:00": -0.26025402388222424,
    "2021-06-11T16:52:59.284012+00:00": -0.4631537020630396,
    "2021-06-11T16:57:59.201091+00:00": -0.7598424941724313,
    "2021-06-11T17:02:59.257170+00:00": -1.0738805934583417,
    "2021-06-11T17:07:59.206464+00:00": -1.4439733314553873,
    "2021-06-11T17:12:59.167919+00:00": -1.7762279598239765,
    "2021-06-11T17:17:59.205096+00:00": -2.103195391649692,
    "2021-06-11T17:22:59.198016+00:00": -2.3164304206642483,
    "2021-06-11T17:27:59.198408+00:00": -2.4467477075615176,
    "2021-06-11T17:32:59.314859+00:00": -2.5813658968590243,
    "2021-06-11T17:37:59.157638+00:00": -2.520017248137188,
    "2021-06-11T17:42:59.182025+00:00": -2.439298376596061,
    "2021-06-11T17:47:59.202864+00:00": -2.426942897452699,
    "2021-06-11T17:52:59.193110+00:00": -2.4622932586927546,
    "2021-06-11T17:57:59.178357+00:00": -2.345683013069808,
    "2021-06-11T18:02:59.225760+00:00": -2.040338252437431,
    "2021-06-11T18:07:59.182645+00:00": -1.7119573440131495,
    "2021-06-11T18:12:59.379992+00:00": -1.4437716212330152,
    "2021-06-11T18:17:59.317009+00:00": -1.0577094259621993,
    "2021-06-11T18:22:59.169730+00:00": -0.7956536305767928,
    "2021-06-11T18:27:59.161081+00:00": -0.5280901711130722,
    "2021-06-11T18:32:59.369558+00:00": -0.31465631829523316,
    "2021-06-11T18:37:59.176992+00:00": -0.15599162666303742,
    "2021-06-11T18:42:59.166905+00:00": 0.0449599360302293,
    "2021-06-11T18:47:59.169810+00:00": 0.2445084835054907,
    "2021-06-11T18:52:59.160539+00:00": 0.5519755270035606,
    "2021-06-11T18:57:59.771356+00:00": 0.9038297852100822,
    "2021-06-11T19:02:59.876184+00:00": 1.2011696099478137,
    "2021-06-11T19:07:59.161014+00:00": 1.5749352844527758,
    "2021-06-11T19:12:59.183249+00:00": 1.9737781238473142,
    "2021-06-11T19:17:59.209537+00:00": 2.1922990572188032,
    "2021-06-11T19:22:59.177673+00:00": 2.4393834120510136,
    "2021-06-11T19:27:59.176812+00:00": 2.631997058223879,
    "2021-06-11T19:32:59.317218+00:00": 2.863934409615965,
    "2021-06-11T19:37:59.303704+00:00": 2.9645214574599272,
    "2021-06-11T19:42:59.240565+00:00": 3.058645437391572,
    "2021-06-11T19:47:59.272177+00:00": 3.1714500022000807,
    "2021-06-11T19:52:59.267732+00:00": 3.1645480030793878,
    "2021-06-11T19:57:59.247282+00:00": 3.0511242431300585,
    "2021-06-11T20:02:59.321676+00:00": 2.772767507131226,
    "2021-06-11T20:07:59.235328+00:00": 2.4141156610892867,
    "2021-06-11T20:12:59.273220+00:00": 2.080240007485268,
    "2021-06-11T20:18:00.011827+00:00": 1.9386106915210821,
    "2021-06-11T20:22:59.244194+00:00": 1.6882891678353655,
    "2021-06-11T20:27:59.230796+00:00": 1.4729241927411298,
    "2021-06-11T20:32:59.397068+00:00": 1.3966604465409154,
    "2021-06-11T20:53:52.043417+00:00": 1.3487199698207182,
    "2021-06-11T20:53:52.046863+00:00": 1.346980759879453,
    "2021-06-11T20:53:52.077576+00:00": 1.325637637990066,
    "2021-06-11T20:57:59.246032+00:00": 1.3067290758284331,
    "2021-06-11T21:02:59.326266+00:00": 1.2817196339509072,
    "2021-06-11T21:07:59.235483+00:00": 1.360317391765274,
    "2021-06-11T21:12:59.951410+00:00": 1.3824182777206337,
    "2021-06-11T21:17:59.239138+00:00": 1.378511885735521,
    "2021-06-11T21:22:59.950771+00:00": 1.1945053136258998,
    "2021-06-11T21:27:59.237987+00:00": 1.1224994176170944,
    "2021-06-11T21:32:59.403558+00:00": 0.9225101836076934,
    "2021-06-11T21:42:59.292975+00:00": 0.46789152429014663,
    "2021-06-11T21:47:59.248476+00:00": 0.15004502086823737,
    "2021-06-11T21:52:59.318037+00:00": -0.15188531430679217,
    "2021-06-11T21:57:59.385263+00:00": -0.379701523775447,
    "2021-06-11T22:02:59.256444+00:00": -0.569932573756987,
    "2021-06-11T22:07:59.280972+00:00": -0.6598382693195978,
    "2021-06-11T22:12:59.245044+00:00": -0.8540960177736828,
    "2021-06-11T22:17:59.268535+00:00": -1.180403750806122,
    "2021-06-11T22:22:59.356851+00:00": -1.4039383041555429,
    "2021-06-11T22:27:59.280677+00:00": -1.4082306697924996,
    "2021-06-11T22:32:59.345863+00:00": -1.4744361105671462,
    "2021-06-11T22:41:02.124806+00:00": -1.407669802478481,
    "2021-06-11T22:42:59.277355+00:00": -1.1364849602932812,
    "2021-06-11T22:47:59.247992+00:00": -1.0288598353021219,
    "2021-06-11T22:52:59.233107+00:00": -0.9833283588976564,
    "2021-06-11T22:57:59.225487+00:00": -0.9451614716919833,
    "2021-06-11T23:02:59.249312+00:00": -0.9105042756047609,
    "2021-06-11T23:07:59.400345+00:00": -1.029409658584974,
    "2021-06-11T23:12:59.243732+00:00": -1.0898818981209517,
    "2021-06-11T23:17:59.258896+00:00": -0.9590035329549152,
    "2021-06-11T23:22:59.263743+00:00": -1.0382188388158335,
    "2021-06-11T23:27:59.231873+00:00": -1.248803781748047,
    "2021-06-11T23:33:00.184020+00:00": -1.4031479860652272,
    "2021-06-12T02:10:44.785461+00:00": -1.890929306686951,
    "2021-06-12T02:15:44.801497+00:00": -2.5351129636937153,
    "2021-06-12T02:20:44.793259+00:00": -3.2247793548976826,
    "2021-06-12T02:25:44.728362+00:00": -4.03528233156637,
    "2021-06-12T02:30:44.726326+00:00": -4.905844146316107,
    "2021-06-12T02:35:44.801148+00:00": -5.7682083095673145,
    "2021-06-12T02:40:44.745113+00:00": -6.507465707205863,
    "2021-06-12T02:45:45.456168+00:00": -7.205873098604283,
    "2021-06-12T02:50:44.756927+00:00": -7.822582867339389,
    "2021-06-12T02:55:44.754483+00:00": -8.329776932118792,
    "2021-06-12T03:00:44.702654+00:00": -9.099140189303593,
    "2021-06-12T03:05:44.788817+00:00": -9.659243910585358,
    "2021-06-12T03:10:44.712636+00:00": -9.978987300877913,
    "2021-06-12T03:15:44.696192+00:00": -10.182018079744662,
    "2021-06-12T03:20:44.744657+00:00": -10.209978968143233,
    "2021-06-12T03:25:44.709398+00:00": -10.165434539091846,
    "2021-06-12T03:30:44.686027+00:00": -10.108543150913114,
    "2021-06-12T03:35:44.738625+00:00": -10.173508376382834,
    "2021-06-12T03:40:44.714273+00:00": -10.302219592523526,
    "2021-06-12T03:45:44.746370+00:00": -10.528854321679654,
    "2021-06-12T03:50:45.458869+00:00": -10.932885409971275,
    "2021-06-12T03:55:45.465703+00:00": -11.313339859650789,
    "2021-06-12T04:00:45.643930+00:00": -11.439927311565517,
    "2021-06-12T04:05:44.806497+00:00": -11.851382892336344,
    "2021-06-12T04:10:44.753562+00:00": -12.167665131042162,
    "2021-06-12T04:15:44.723380+00:00": -12.36033697789763,
    "2021-06-12T04:20:44.791769+00:00": -12.744232531225778,
    "2021-06-12T04:25:44.695361+00:00": -13.06494807609048,
    "2021-06-12T04:30:45.435448+00:00": -13.361384217918541,
    "2021-06-12T04:35:44.781008+00:00": -13.65174054350266,
    "2021-06-12T04:40:44.713353+00:00": -13.979792400323198,
    "2021-06-12T04:45:44.714193+00:00": -14.223971706523649,
    "2021-06-12T04:50:44.697504+00:00": -14.288699251431671,
    "2021-06-12T04:55:44.706130+00:00": -14.448964549143021,
    "2021-06-12T05:00:44.702241+00:00": -14.51045702041426,
    "2021-06-12T05:05:45.508310+00:00": -14.533628526017084,
    "2021-06-12T05:10:44.826108+00:00": -14.496002648494404,
    "2021-06-12T05:15:44.697292+00:00": -14.51158613077002,
    "2021-06-12T05:20:44.777384+00:00": -14.43202176167823,
    "2021-06-12T05:25:44.770876+00:00": -14.371258237305403,
    "2021-06-12T05:30:44.730205+00:00": -14.302181344846623,
    "2021-06-12T05:35:44.774733+00:00": -14.10232330144794,
    "2021-06-12T05:40:44.694522+00:00": -13.925235760390954,
    "2021-06-12T05:45:44.691330+00:00": -13.758096104547603,
    "2021-06-12T05:50:44.705982+00:00": -13.625942075072677,
    "2021-06-12T05:55:44.727007+00:00": -13.436593360363895,
    "2021-06-12T06:00:44.904418+00:00": -13.332173165433348,
    "2021-06-12T06:05:45.482016+00:00": -13.199737901992757,
    "2021-06-12T06:10:44.743579+00:00": -13.049102804258053,
    "2021-06-12T06:15:44.688193+00:00": -12.927656805445373,
    "2021-06-12T06:20:44.727213+00:00": -12.770580868483384,
    "2021-06-12T06:25:44.698998+00:00": -12.602484348992895,
    "2021-06-12T06:30:44.713335+00:00": -12.478778626482935,
    "2021-06-12T06:35:44.779789+00:00": -12.35666666396539,
    "2021-06-12T06:40:44.689476+00:00": -12.170383547814723,
    "2021-06-12T06:45:45.214175+00:00": -11.987872246654257,
    "2021-06-12T06:50:44.733092+00:00": -11.858003194641993,
    "2021-06-12T06:55:44.711257+00:00": -11.707486144946815,
    "2021-06-12T07:00:44.746077+00:00": -11.540490835469404,
    "2021-06-12T07:05:44.850322+00:00": -11.277706437693157,
    "2021-06-12T07:10:45.651313+00:00": -10.95540117255616,
    "2021-06-12T07:15:44.738940+00:00": -10.71783672369046,
    "2021-06-12T07:20:44.708041+00:00": -10.475665825241222,
    "2021-06-12T07:25:44.720617+00:00": -10.213156162209478,
    "2021-06-12T07:30:44.716120+00:00": -9.967379431472422,
    "2021-06-12T07:35:44.771118+00:00": -9.773516859793906,
    "2021-06-12T07:40:44.713785+00:00": -9.481069966677529,
    "2021-06-12T07:45:45.406926+00:00": -9.179051082028272,
    "2021-06-12T07:50:45.513300+00:00": -8.96281263037465,
    "2021-06-12T07:55:44.680273+00:00": -8.784340449561753,
    "2021-06-12T08:00:44.701896+00:00": -8.803674680941361,
    "2021-06-12T08:05:44.740088+00:00": -8.987613673009891,
    "2021-06-12T08:10:44.720568+00:00": -9.223943991466955,
    "2021-06-12T08:15:45.444495+00:00": -9.326528905320032,
    "2021-06-12T08:20:44.752437+00:00": -9.514768927160377,
    "2021-06-12T08:25:44.700846+00:00": -9.678470411359278,
    "2021-06-12T08:30:45.423094+00:00": -9.871127361485817,
    "2021-06-12T08:35:44.798657+00:00": -10.027698022605863,
    "2021-06-12T08:40:44.691048+00:00": -10.281340996269412,
    "2021-06-12T08:45:44.763115+00:00": -10.547080681888142,
    "2021-06-12T08:50:44.736813+00:00": -10.775998981339933
};

module.exports = {
    data: rMap
};