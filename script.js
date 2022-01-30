let map;
//var bounds = new google.maps.LatLngBounds();
const UF_Bounds = {
  north:29.652127882560325,
  south:29.63041832222747,
  east:-82.3393812215348,
  west:-82.37254046414034,
};

var DiningHoursString = `Au Bon Pain @ Newell Hall	7:00 AM ‑   6:00 PM	7:00 AM ‑   6:00 PM	7:00 AM ‑   6:00 PM	7:00 AM ‑   6:00 PM	7:00 AM ‑   5:00 PM	CLOSED	CLOSED
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
Gator Dining Business Office @ Stadium Gate 4	8:00 AM ‑   4:30 PM	8:00 AM ‑   4:30 PM	8:00 AM ‑   4:30 PM	8:00 AM ‑   4:30 PM	8:00 AM ‑   4:30 PM	CLOSED	CLOSED
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
We Proudly Serve Starbucks @ College of Medicine Harrell Medical Education Building	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	7:00 AM ‑   3:00 PM	CLOSED	CLOSED
We Proudly Serve Starbucks @ Little Hall Express	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	7:00 AM ‑   5:00 PM	CLOSED	CLOSED
 	 
REITZ UNION	 
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
var DiningLocations = DiningHoursString.split("\n");
var DiningLocationsInfo = [];
DiningLocations.forEach((element, index) => {
  DiningLocationsInfo[index] = element.split("\t");
});
console.log(DiningLocationsInfo);

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 29.6420106062, lng: -82.3559600555},
    zoom: 15,
    mapId: 'fdfa1f14231eb459'
  });

  const swBound = new google.maps.Marker({
    position: { lat: 29.631934118994096, lng: -82.37266732833172},
    map,
    icon: "Orange_Marker.png",
  });
  const testWindow1 = new google.maps.InfoWindow({
      content: "test",
  });
  testMarker1.addListener("click", () => {
      testWindow1.open({
          anchor: testMarker1,
          map,
          shouldFocus: false,
      });
  });

  const neBound = new google.maps.Marker({
    position: { lat: 29.652087093406017, lng: -82.33925278265161},
    map,
    icon: "Orange_Marker.png",
  });

}

var t = 'DiningHours.txt';
var r;
fetch(t).then( r => r.text() ).then( t => console.log(t) )