// Create Zodiak program (ask user to enter the date, then evaluate the Zodiak sign)
let BirthdayDay = prompt("Enter your birthday day (1-31):", "16");
let BirthdayMonth = prompt("Enter your birthday month (1-12):", "6");

if (BirthdayMonth>12 || BirthdayMonth<1 || BirthdayDay<1){
    alert("Incorrect date!")  
    }
else if ((BirthdayMonth==1 && BirthdayDay <= 19)||(BirthdayMonth==12 && BirthdayDay >= 22 && BirthdayDay <= 31)){
    alert("Your zodiac is Capricornus")
    }
else if ((BirthdayMonth==1 && BirthdayDay >= 20 && BirthdayDay <= 31)||(BirthdayMonth==2 && BirthdayDay <= 18)){
    alert("Your zodiac is Aquarius")
    }
else if ((BirthdayMonth==2 && BirthdayDay >= 19 && BirthdayDay <= 29)||(BirthdayMonth==3 && BirthdayDay <= 20)){
    alert("Your zodiac is Pisces")
    }
else if ((BirthdayMonth==3 && BirthdayDay >= 21 && BirthdayDay <= 31)||(BirthdayMonth==4 && BirthdayDay <= 19)){
    alert("Your zodiac is Aries")
    }
else if ((BirthdayMonth==4 && BirthdayDay >= 20 && BirthdayDay <= 30)||(BirthdayMonth==5 && BirthdayDay <= 20)){
    alert("Your zodiac is Taurus")
    }
else if ((BirthdayMonth==5 && BirthdayDay >= 21 && BirthdayDay <= 31)||(BirthdayMonth==6 && BirthdayDay <= 21)){
    alert("Your zodiac is Gemini")
    }
else if ((BirthdayMonth==6 && BirthdayDay >= 22 && BirthdayDay <= 30)||(BirthdayMonth==7 && BirthdayDay <= 22)){
    alert("Your zodiac is Cancer")
    }
else if ((BirthdayMonth==7 && BirthdayDay >= 23 && BirthdayDay <= 31)||(BirthdayMonth==8 && BirthdayDay <= 22)){
    alert("Your zodiac is Leo")
    }
else if ((BirthdayMonth==8 && BirthdayDay >= 23 && BirthdayDay <= 31)||(BirthdayMonth==9 && BirthdayDay <= 22)){
    alert("Your zodiac is Virgo")
    }
else if ((BirthdayMonth==9 && BirthdayDay >= 23 && BirthdayDay <= 30)||(BirthdayMonth==10 && BirthdayDay <= 23)){
    alert("Your zodiac is Libra")
    }
else if ((BirthdayMonth==10 && BirthdayDay >= 24 && BirthdayDay <= 31)||(BirthdayMonth==11 && BirthdayDay <= 21)){
    alert("Your zodiac is Scorpius")
    }
else if ((BirthdayMonth==11 && BirthdayDay >= 22 && BirthdayDay <= 30)||(BirthdayMonth==12 && BirthdayDay <= 21)){
    alert("Your zodiac is Sagittarius")
    }
else {alert("Incorrect date!")}


