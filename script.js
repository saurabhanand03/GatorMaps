let map;
// Information gathered from https://www.bsd.ufl.edu/dining/Hours/RegularHours.aspx
var HoursString = `Au Bon Pain @ Newell Hall	7:00 AM ‑   6:00 PM	7:00 AM ‑   6:00 PM	7:00 AM ‑   6:00 PM	7:00 AM ‑   6:00 PM	7:00 AM ‑   5:00 PM	CLOSED	CLOSED
Boar's Head @ Little Hall Express	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	CLOSED	CLOSED
Camellia Court Café @ Harn Museum of Art	CLOSED	10:00 AM ‑   4:00 PM	10:00 AM ‑   4:00 PM	10:00 AM ‑   4:00 PM	10:00 AM ‑   4:00 PM	10:00 AM ‑   4:00 PM	CLOSED
Chick-fil-A @ Broward Dining Center	10:00 AM ‑   8:00 PM	10:00 AM ‑   8:00 PM	10:00 AM ‑   8:00 PM	10:00 AM ‑   8:00 PM	10:00 AM ‑   8:00 PM	10:00 AM ‑   4:00 PM	CLOSED
Chick-fil-A @ Sun Terrace Café	6:00 AM ‑   4:00 PM	6:00 AM ‑   4:00 PM	6:00 AM ‑   4:00 PM	6:00 AM ‑   4:00 PM	6:00 AM ‑   4:00 PM	CLOSED	CLOSED
Chick-fil-A @ The Hub	7:00 AM ‑   8:00 PM	7:00 AM ‑   8:00 PM	7:00 AM ‑   8:00 PM	7:00 AM ‑   8:00 PM	7:00 AM ‑   6:00 PM	CLOSED	CLOSED
Chomp & Go @ Cancer and Genetics Research Center	7:30 AM ‑   3:30 PM	7:30 AM ‑   3:30 PM	7:30 AM ‑   3:30 PM	7:30 AM ‑   3:30 PM	7:30 AM ‑   3:30 PM	CLOSED	CLOSED
Chomp & Go @ Hough Hall	8:00 AM ‑   3:00 PM	8:00 AM ‑   3:00 PM	8:00 AM ‑   3:00 PM	8:00 AM ‑   3:00 PM	CLOSED	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM
Chomp & Go @ UF Health Orthopaedics and Sports Medicine	7:30 AM ‑   3:30 PM	7:30 AM ‑   3:30 PM	7:30 AM ‑   3:30 PM	7:30 AM ‑   3:30 PM	7:30 AM ‑   3:30 PM	CLOSED	CLOSED
Chomp It @ Graham Area	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	9:00 AM ‑   3:00 AM	9:00 AM ‑   3:00 AM
Chomp It @ Levin College of Law	10:30 AM ‑   2:30 PM	10:30 AM ‑   2:30 PM	10:30 AM ‑   2:30 PM	10:30 AM ‑   2:30 PM	CLOSED	CLOSED	CLOSED
Einstein Bros Bagels @ College of Veterinary Medicine	7:15 AM ‑   3:30 PM	7:15 AM ‑   3:30 PM	7:15 AM ‑   3:30 PM	7:15 AM ‑   3:30 PM	7:15 AM ‑   3:30 PM	CLOSED	CLOSED
Einstein Bros Bagels @ Sun Terrace Café	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	CLOSED	CLOSED
Firehouse Subs @ Turlington Plaza	10:00 AM ‑   6:00 PM	10:00 AM ‑   6:00 PM	10:00 AM ‑   6:00 PM	10:00 AM ‑   6:00 PM	10:00 AM ‑   4:00 PM	CLOSED	CLOSED
Fresh Food Company @ Broward Dining Hall	7:00 AM ‑  11:00 PM	7:00 AM ‑  11:00 PM	7:00 AM ‑  11:00 PM	7:00 AM ‑  11:00 PM	7:00 AM ‑  10:00 PM	8:30 AM ‑  10:00 PM	8:30 AM ‑  11:00 PM
Freshens @ Little Hall Express	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	CLOSED	CLOSED
Gator Corner Dining Center @ Corner of Gale Lemerand Dr. and Stadium Rd.	7:00 AM ‑  11:00 PM	7:00 AM ‑  11:00 PM	7:00 AM ‑  11:00 PM	7:00 AM ‑  11:00 PM	7:00 AM ‑  10:00 PM	8:30 AM ‑  10:00 PM	8:30 AM ‑  11:00 PM
Jamba Juice @ Turlington Plaza	10:00 AM ‑   6:00 PM	10:00 AM ‑   6:00 PM	10:00 AM ‑   6:00 PM	10:00 AM ‑   6:00 PM	10:00 AM ‑   4:00 PM	CLOSED	CLOSED
Java City @ New Engineering Building	8:00 AM ‑   3:00 PM	8:00 AM ‑   3:00 PM	8:00 AM ‑   3:00 PM	8:00 AM ‑   3:00 PM	8:00 AM ‑   3:00 PM	CLOSED	CLOSED
KFC @ Little Hall Express	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	CLOSED	CLOSED
Little Hall Express @ Little Hall Express	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	CLOSED	CLOSED
P.O.D. Market @ Beaty Towers	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	9:00 AM ‑   3:00 AM	9:00 AM ‑   3:00 AM
P.O.D. Market @ Graham Area	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	8:00 AM ‑   3:00 AM	9:00 AM ‑   3:00 AM	9:00 AM ‑   3:00 AM
P.O.D. Market @ Little Hall Express	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	CLOSED	CLOSED
P.O.D. Market @ Rawlings Plaza	7:00 AM ‑   1:00 AM	7:00 AM ‑   1:00 AM	7:00 AM ‑   1:00 AM	7:00 AM ‑   1:00 AM	7:00 AM ‑   1:00 AM	10:00 AM ‑   1:00 AM	10:00 AM ‑   1:00 AM
P.O.D. Market @ The Hub	7:00 AM ‑   7:00 PM	7:00 AM ‑   7:00 PM	7:00 AM ‑   7:00 PM	7:00 AM ‑   7:00 PM	7:00 AM ‑   6:00 PM	CLOSED	CLOSED
Panda Express @ Health Science Center	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	CLOSED	CLOSED
Salad Creations @ Sun Terrace Café	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	CLOSED	CLOSED
Shake Smart @ Southwest Recreation Center	8:00 AM ‑  10:30 PM	8:00 AM ‑  10:30 PM	8:00 AM ‑  10:30 PM	8:00 AM ‑  10:30 PM	8:00 AM ‑  10:30 PM	8:30 AM ‑   8:30 PM	8:30 AM ‑   8:30 PM
Starbucks @ College of Education Norman Hall	7:00 AM ‑   4:00 PM	7:00 AM ‑   4:00 PM	7:00 AM ‑   4:00 PM	7:00 AM ‑   4:00 PM	7:00 AM ‑   4:00 PM	CLOSED	CLOSED
Starbucks @ Health Science Center	6:00 AM ‑   4:00 PM	6:00 AM ‑   4:00 PM	6:00 AM ‑   4:00 PM	6:00 AM ‑   4:00 PM	6:00 AM ‑   4:00 PM	CLOSED	CLOSED
Starbucks @ Levin College of Law	7:30 AM ‑   4:00 PM	7:30 AM ‑   4:00 PM	7:30 AM ‑   4:00 PM	7:30 AM ‑   4:00 PM	7:30 AM ‑   3:00 PM	CLOSED	CLOSED
Starbucks @ Library West	7:00 AM ‑  MIDNIGHT	7:00 AM ‑  MIDNIGHT	7:00 AM ‑  MIDNIGHT	7:00 AM ‑  MIDNIGHT	7:00 AM ‑  11:00 PM	10:00 AM ‑   6:00 PM	10:00 AM ‑  10:00 PM
Starbucks @ Marston Science Library	7:00 AM ‑  10:00 PM	7:00 AM ‑  10:00 PM	7:00 AM ‑  10:00 PM	7:00 AM ‑  10:00 PM	7:00 AM ‑  10:00 PM	10:00 AM ‑   6:00 PM	10:00 AM ‑   6:00 PM
Starbucks @ The Hub	7:30 AM ‑   6:00 PM	7:30 AM ‑   6:00 PM	7:30 AM ‑   6:00 PM	7:30 AM ‑   6:00 PM	7:30 AM ‑   4:30 PM	CLOSED	CLOSED
Subway @ Rawlings Plaza	10:00 AM ‑   1:00 AM	10:00 AM ‑   1:00 AM	10:00 AM ‑   1:00 AM	10:00 AM ‑   1:00 AM	10:00 AM ‑   1:00 AM	10:00 AM ‑   1:00 AM	10:00 AM ‑   1:00 AM
The Market @ College of Education Norman Hall	8:00 AM ‑   2:00 PM	8:00 AM ‑   2:00 PM	8:00 AM ‑   2:00 PM	8:00 AM ‑   2:00 PM	8:00 AM ‑   2:00 PM	CLOSED	CLOSED
Starbucks @ College of Medicine Harrell Medical Education Building	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	CLOSED	CLOSED
Starbucks @ Little Hall Express	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	CLOSED	CLOSED
Arredondo Café @ Reitz Union	11:00 AM ‑   1:30 PM	11:00 AM ‑   1:30 PM	11:00 AM ‑   1:30 PM	11:00 AM ‑   1:30 PM	11:00 AM ‑   1:30 PM	CLOSED	CLOSED
P.O.D. Market @ Reitz Union	9:00 AM ‑  10:00 PM	9:00 AM ‑  10:00 PM	9:00 AM ‑  10:00 PM	9:00 AM ‑  10:00 PM	9:00 AM ‑   8:00 PM	1:00 PM ‑   6:00 PM	1:00 PM ‑   6:00 PM
Panda Express @ Reitz Union	10:30 AM ‑   7:00 PM	10:30 AM ‑   7:00 PM	10:30 AM ‑   7:00 PM	10:30 AM ‑   7:00 PM	10:30 AM ‑   5:00 PM	CLOSED	CLOSED
Papa John's @ Reitz Union	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	10:30 AM ‑   3:00 PM	CLOSED	CLOSED
Pollo Tropical @ Reitz Union	10:30 AM ‑   6:00 PM	10:30 AM ‑   6:00 PM	10:30 AM ‑   6:00 PM	10:30 AM ‑   6:00 PM	10:30 AM ‑   6:00 PM	CLOSED	CLOSED
Shake Smart @ Reitz Union	9:00 AM ‑   8:00 PM	9:00 AM ‑   8:00 PM	9:00 AM ‑   8:00 PM	9:00 AM ‑   8:00 PM	9:00 AM ‑   8:00 PM	1:00 PM ‑   6:00 PM	1:00 PM ‑   6:00 PM
Starbucks @ Reitz Union	7:00 AM ‑   8:00 PM	7:00 AM ‑   8:00 PM	7:00 AM ‑   8:00 PM	7:00 AM ‑   8:00 PM	7:00 AM ‑   6:00 PM	8:00 AM ‑   6:00 PM	8:00 AM ‑   6:00 PM
Subway @ Reitz Union	8:00 AM ‑   9:00 PM	8:00 AM ‑   9:00 PM	8:00 AM ‑   9:00 PM	8:00 AM ‑   9:00 PM	8:00 AM ‑   9:00 PM	8:00 AM ‑   8:00 PM	8:00 AM ‑   8:00 PM
Wendy's @ Reitz Union	10:30 AM ‑   7:00 PM	10:30 AM ‑   7:00 PM	10:30 AM ‑   7:00 PM	10:30 AM ‑   7:00 PM	10:30 AM ‑   7:00 PM	11:00 AM ‑   6:00 PM	11:00 AM ‑   6:00 PM
Wing Zone @ Reitz Union	11:00 AM ‑   6:00 PM	11:00 AM ‑   6:00 PM	11:00 AM ‑   6:00 PM	11:00 AM ‑   6:00 PM	11:00 AM ‑   6:00 PM	CLOSED	CLOSED`;
// Information gathered from Google Maps at each restaurant's relative location
var LocationsString = `Au Bon Pain, 29.649089900388773, -82.34512855118298
Boar's Head, 29.648680515162162, -82.34136222661243
Camellia Court Café, 29.637051082253908, -82.3701569258102
Chick-fil-A @ Broward Dining Center, 29.647087674603277, -82.34154223188705
Chick-fil-A @ Sun Terrace Café, 29.64070571771634, -82.3444118955877
Chick-fil-A @ The Hub, 29.64832252135153, -82.34510994136558
Chomp & Go @ Cancer and Genetics Research Center, 29.637942369623197, -82.3516204852996
Chomp & Go @ Hough Hall, 29.650379037288175, -82.34067315975805
Chomp & Go @ UF Health Orthopaedics and Sports Medicine, 29.638373535954653, -82.37403409341995
Chomp It @ Graham Area, 29.645837497828094, -82.35116587453388
Chomp It @ Levin College of Law, 29.649211009501816, -82.35914814775307
Einstein Bros Bagels @ College of Veterinary Medicine, 29.63327453655172, -82.34969399014479
Einstein Bros Bagels @ Sun Terrace Café, 29.64065053873743, -82.34445974236776
Firehouse Subs @ Turlington Plaza, 29.648776791581188, -82.34443277558803
Fresh Food Company @ Broward Dining Hall, 29.647065229375354, -82.3412286968073
Freshens @ Little Hall Express, 29.648676998363843, -82.34127140053229
Gator Corner Dining Center @ Corner of Gale Lemerand Dr. and Stadium Rd., 29.64807750540336, -82.3500286547186
Jamba Juice @ Turlington Plaza, 29.648817815711052, -82.34453058866514
Java City @ New Engineering Building, 29.64233228152023, -82.34680757686263
KFC @ Little Hall Express, 29.648677884410148, -82.34141814447621
Little Hall Express @ Little Hall Express, 29.64874373628747, -82.34129342176715
P.O.D. Market @ Beaty Towers, 29.64409957464373, -82.34047664486907
P.O.D. Market @ Graham Area, 29.645840594430556, -82.35121056222478
P.O.D. Market @ Little Hall Express, 29.6486814188897, -82.34125924492183
P.O.D. Market @ Rawlings Plaza, 29.646316444356213, -82.34326477857223
P.O.D. Market @ The Hub, 29.648225380611578, -82.34531330771509
Panda Express @ Health Science Center, 29.639843330328574, -82.34348193265157
Salad Creations @ Sun Terrace Café, 29.640180507514028, -82.34390483135701
Shake Smart @ Southwest Recreation Center, 29.638176765078057, -82.36836659473002
Starbucks @ College of Education Norman Hall, 29.647077911452147, -82.33781840613547
Starbucks @ Health Science Center, 29.640032453110486, -82.34266377836119
Starbucks @ Levin College of Law, 29.6497884330279, -82.35962508236713
Starbucks @ Library West, 29.65119420152412, -82.34260529526226
Starbucks @ Marston Science Library, 29.64800874899528, -82.3441085719015
Starbucks @ The Hub, 29.64823879749731, -82.34553108817745
Subway @ Rawlings Plaza, 29.646268474538363, -82.34322802237322
The Market @ College of Education Norman Hall, 29.6470310757984, -82.33792732377141
Starbucks @ College of Medicine Harrell Medical Education Building, 29.641074843120247, -82.34486467259308
Starbucks @ Little Hall Express, 29.648687967574645, -82.34128263905794
Arredondo Café @ Reitz Union, 29.646553923676635, -82.34787201333204
P.O.D. Market @ Reitz Union, 29.646601695137356, -82.34815708995968
Panda Express @ Reitz Union, 29.646181600094465, -82.34789750024919
Papa John's @ Reitz Union, 29.646211321595622, -82.3477895413451
Pollo Tropical @ Reitz Union, 29.64587492200597, -82.34781788616786
Shake Smart @ Reitz Union, 29.64659756214632, -82.34808342484496
Starbucks @ Reitz Union, 29.645941541966536, -82.34785692194987
Subway @ Reitz Union, 29.646604377030123, -82.34832559576564
Wendy's @ Reitz Union, 29.64627616502043, -82.34774311904995
Wing Zone @ Reitz Union, 29.64629624569304, -82.34751660389628`;
// Creating array of days of week
var days = "Monday\tTuesday\tWednesday\tThursday\tFriday\tSaturday\tSunday".split("\t");
// Creating nested array to house hour information for each restaurant
var HoursArray = HoursString.split("\n");
var HoursInfo = [];
HoursArray.forEach((element, index) => {
  HoursInfo[index] = element.split("\t");
});
// Creating nested array to house location information for each restaurant
var LocationsArray = LocationsString.split("\n");
var LocationsInfo = [];
LocationsArray.forEach((element, index) => {
  LocationsInfo[index] = element.split(", ");
});


// Function to check if restaurant is open
function isOpen(HourInfo){
  
  // Get current date/time information
  let today = new Date();
  const currentDay = today.getDay();
  if(currentDay == 0) {
    currentDay = 7;
  }

  // Returns false if restaurant is closed
  if(HourInfo[currentDay]=="CLOSED") {
    return false;
  }
  
  // Gets opening and closing hours for each restaurant
  const dateStr = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate() + " ";
  var todayHours = HourInfo[currentDay].split(" ‑  ");
  var openTime = new Date(dateStr + todayHours[0]);
  var closeTime = new Date(dateStr + todayHours[1]);
  if(closeTime.getHours() < 12){
    closeTime.setDate(closeTime.getDate()+1);
  }
  
  // Gets closing hours for yesterday
  const yesterdayDateStr = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + (today.getDate()-1) + " ";
  var yesterdayHours = HourInfo[currentDay-1].split(" ‑  ");
  var yesterdayCloseTime = new Date(yesterdayDateStr + yesterdayHours[1]);
  if(yesterdayCloseTime.getHours() < 12){
    yesterdayCloseTime.setDate(yesterdayCloseTime.getDate()+1);
  }

  // Debugging
  // console.log(todayHours);
  // console.log(yesterdayHours);
  // console.log("\t\t\t\t"+today);
  // console.log("yesterday close\t" + yesterdayCloseTime);
  // console.log("open\t\t\t" + openTime);
  // console.log("close\t\t\t" + closeTime);
  // console.log("Restaurant " + ((today <= yesterdayCloseTime || (openTime <= today && today <= closeTime)) ? "open" : "closed"));
  // console.log("\n\n");
  
  // Checks if current time is within open hours of restaurant and returns value
  return today <= yesterdayCloseTime || (openTime <= today && today <= closeTime);
}


// Initialize Maps
function initMap() {
  // Settings bounds of the map
  const UF_Bounds = {
    north:29.656627882560325,
    south:29.62653832222747,
    east:-82.3353812215348,
    west:-82.37654046414034,
  };

  // Implement the map
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.6516344, lng: -82.3248262 },
    restriction:{
      latLngBounds: UF_Bounds,
      strictBounds: false,
    },
    zoom: 15,
    mapId: 'fdfa1f14231eb459'
  });
  if (screen.width <= 480) {
      var markerIcon = {
        url: "assets/Orange_Marker.png",
        scaledSize: new google.maps.Size(screen.width * .18, screen.width * .18)
      }
  }
  else {
      var markerIcon = {
          url: "assets/Orange_Marker.png",
      }
  }
  console.log(screen.width);
  console.log(window.width);

  // Add markers for each dining location
  const markers = [];
  const markerInfos = [];
  var markerInfo = new google.maps.InfoWindow({
  });

  // Setting the text in the info windows
  for (let i = 0; i < LocationsInfo.length; i++) {
    if(isOpen(HoursInfo[i])){
      // Creating hour menus
      let text = "<b><font size='+1'>" + LocationsInfo[i][0] + "</b></font><br><p  style='text-align: center'>";
      for (var j = 1; j < (HoursInfo[i]).length; j++) {
        text += "<b>" + days[j - 1] + "</b>: " + HoursInfo[i][j] + "<br>";
      }
      // Special case: GCDC
      if (i == 16) {
        text +=  "<a href='https://gatordining.com/gator-corner-dining-center-menu/' target='_blank' rel='noopener noreferrer'><b>Gator Corner Dining Center Menu</b></a>";
      }
      // Special case: Broward Dining Center
      if (i == 14) {
        text +=  "<a href='https://gatordining.com/fresh-food-company-menu/' target='_blank' rel='noopener noreferrer'><b>Broward Dining Center Menu</b></a>";
      }  
      text += "</p>";

      // Makes a new marker in each iteration at the restaurant's location
      markers[i] = new google.maps.Marker({
        position: {lat: parseFloat(LocationsInfo[i][1]), lng: parseFloat(LocationsInfo[i][2])},
        map,
        icon: markerIcon,
        content: text,
      });
      // On click on marker, set content of the info window to the marker's unique text
      google.maps.event.addListener(markers[i], 'click', function() {
        markerInfo.setContent(this.content);
        markerInfo.setOptions(markerInfo.minWidth = screen.width*.9);
        markerInfo.open(map, this);
      });
      // On click away from markers, close info window
      map.addListener("click", () => {
        markerInfo.close({
          anchor: map,
          map,
          shouldFocus: true,
        });
      });
    }
  }
}