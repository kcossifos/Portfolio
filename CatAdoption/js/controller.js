'use strict';

angular.module('myApp', []).controller('controller', ['$scope', controller]);

function controller($scope) {


$scope.pet_name = "";
$scope.pet_location = "";
$scope.pet_breed = "";
$scope.pet_gender = "";
$scope.pet_age = "";
$scope.pet_image = "";    
$scope.pet_des = "";   
    
$scope.pets = [
  {
    "location": "Poughkeepsie, NY",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/35986289/1/?bust=1471481812&width=632&no_scale_up=1",
    "name": "Angelica",  
    "breed": "tabby",
    "gender": "female",
    "age": "Baby",
      "des": "On the wings of angels Angelica arrives, heaven-sent to bring joy, love and delight to her forever home. Angelica is inquisitive, playful and oh so very sweet. To snuggle with her is divine - those whispery soft whiskers are sure to bring a giggle when they caress your cheek. Please give this 14-week-old (as of 8/15/16) beauty the home she deserves!"
      
  }, {
    "location": "NYC, NY",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/35721561/1/?bust=1469030682&width=632&no_scale_up=1",
    "name": "Becca",  
    "breed": "Domestic Short Hair",
    "gender": "female",
    "age": "Baby",
      "des": "Becca and her littermate Benny are best buds. They roll together in a fluffy fur ball of entertainment. They are loving, cuddly and need a special person who will adore them! They would love to be paired as they are bonded. Both kitties are dog friendly, the love to play with the dogs and curl up for a nap by their side. Adopt today!"
      
  },  {
    "location": "NYC, NY",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/35998828/1/?bust=1471635062&width=632&no_scale_up=1",
    "name": "LaShaun",  
    "breed": "Tabby",
    "gender": "female",
    "age": "Young",
      "des": "LaShaun is a very sweet young kitten who has a lot of growing to do. She loves to play with toys and climb on things. Despite her small size and young age, she likes to play with the older kittens in foster care and does well holding her own. A tough cookie to have made it this far in her precarious life. Found in the middle of Forsyth Road by an OC firefighter who resuced her and placed her in foster care.LaShaun is a little shy around strangers but she will warm up if you give her a little patience. She likes to snuggle once she is comfortable with you."
      
  },  {
    "location": "Orlando, FL",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/35052584/1/?bust=1462512537&width=632&no_scale_up=1",
    "name": "Benji",  
    "breed": "Benjal Mix",
    "gender": "female",
    "age": "Young",
      "des": ".This very friendly Bengal mix was found in a feral colony, likely dumped there, she has been spayed and vaccinated. She is very social and gets along with the other cats in the colony. This sweet kitty was returned to her colony, but the caretaker would love to find her a forever home. She suffers from a calcified cornea in one eye. It will likely require some ongoing care."
      
  },  {
    "location": "Orlando, FL",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/35916352/1/?bust=1470847016&width=632&no_scale_up=1",
    "name": "Bernadette",  
    "breed": "Tabby",
    "gender": "female",
    "age": "Young",
      "des": "On the wings of angels Angelica arrives, heaven-sent to bring joy, love and delight to her forever home. Angelica is inquisitive, playful and oh so very sweet. To snuggle with her is divine - those whispery soft whiskers are sure to bring a giggle when they caress your cheek. Please give this 14-week-old (as of 8/15/16) beauty the home she deserves!"
  }, {
    "location": "Orlando, FL",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/35916352/1/?bust=1470847016&width=632&no_scale_up=1",
    "name": "Molly",  
    "breed": "Tabby",
    "gender": "female",
    "age": "Young" ,
      "des": "Hello, my name is Molly. Me and my 2 babies Mobley and Polly were rescue pulled by itsallaboutthecats.org from a local shelter to prevent euthinization. You can veiw our photo(s), bios, do online applicaions and make donations to itsallaboutthecats.org website to help them continue their goals. I also accepted Sissy as my baby that someone found abandoned and is about the same age as my two so she wouldn't be lonely"
      
  },{
    "location": "Orlando, FL",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/35538103/1/?bust=1467305189&width=632&no_scale_up=1",
    "name": "Guinevere",  
    "breed": "Domestic Short Hair",
    "gender": "female",
    "age": "Baby" ,
      "des": "Guinevere loves to play, but she would prefer human attention to toys. Guinevere’s foster says that this little kitten is the first to come to her. The foster mom uses the nick name of Gwen for this little bundle of joy. Gwen will cry to get her forester’s attention and she has already head bumped her once. If you seek a cat who will strive for attention, then Guinevere is definitely the cat for you. Guinevere does indeed play and she does well in wrestling matches with her 2 brothers. This little kitten may be the smallest of the three, but she has a lot of spunk. Guinevere enjoys both wet and dry food and always uses the litter box."
      
  },
    {
    "location": "Orlando, FL",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/35772972/1/?bust=1469486563&width=632&no_scale_up=1",
    "name": "Iris",  
    "breed": "Domestic Short Hair",
    "gender": "female",
    "age": "Adult"  ,
        "des": "Adopt me at the John Young PetSmart Adoption Center located at 8219 S John Young Parkway Orlando, FL** I am a beautiful longhair kitty with dark chocolate/black fur. I'm sweet, silly and playful! I love cat treats, cat toys and wet food. I have cute little mitten feet too! Adopt me today!!"
      
  },
    {
    "location": "Orlando, FL",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/35538103/1/?bust=1467305189&width=632&no_scale_up=1",
    "name": "Aruther",  
    "breed": "Domestic Short Hair Mix",
    "gender": "male",
    "age": "Young"  ,
        "des": "Aruther is a sweet, loving boy. He likes to observe before socializing because he is shy but once he feels comfortable he will join in the fun. He especially enjoys the companionship of his brother, Sequoia. He will most definitely keep your lap warm & hang out with you when he feels safe!"
      
  },
    {
    "location": "NYC, NY",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/35538103/1/?bust=1467305189&width=632&no_scale_up=1",
    "name": "Nixie",  
    "breed": "Domestic Short Hair",
    "gender": "male",
    "age": "Adult" ,
        "des": "Nixie is a fun, playful boy! He enjoys being center of attention and is very engaging with everyone when he feels safe and comfortable. He especially enjoys the companionship of his brother, Aruther. He also loves dogs! In between playing he loves to jump in your lap and give hugs and kisses."
      
  },
    {
    "location": "Orlando, FL",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/36027898/2/?bust=1471912467&width=632&no_scale_up=1",
    "name": "Mora",  
    "breed": "Siamese",
    "gender": "female",
    "age": "Adult"  ,
        "des": "On the wings of angels Mora arrives, heaven-sent to bring joy, love and delight to her forever home. Mora is inquisitive, playful and oh so very sweet. To snuggle with her is divine - those whispery soft whiskers are sure to bring a giggle when they caress your cheek. Please give this 14-week-old (as of 8/15/16) beauty the home she deserves!"
      
  },
    {
    "location": "Orlando, FL",
    "image": "https://drpem3xzef3kf.cloudfront.net/photos/pets/36281367/1/?bust=1474417971&width=632&no_scale_up=1",
    "name": "Midnight",  
    "breed": "Domestic Short Hair",
    "gender": "male",
    "age": "Adult"  ,
        "des": "Adopt me at the John Young PetSmart Adoption Center located at 8219 S John Young Parkway Orlando, FL** I am a beautiful longhair kitty with dark chocolate/black fur. I'm sweet, silly and playful! I love cat treats, cat toys and wet food. I have cute little mitten feet too! Adopt me today!!"
      
  }
];
    
}

    


