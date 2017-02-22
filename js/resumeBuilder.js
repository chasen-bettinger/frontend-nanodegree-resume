/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  name: 'Chasen Bettinger',
  role: 'Developer',
  contact: 'bettingerchasen@gmail.com',
  phone: '678-882-9122',
  picture: 'images/fry.jpg',
  welcome_message: 'Hello and welcome to my site!',
  skills: [
    "Programming", ' Storytelling', ' Building Businesses'
  ],
};

var education = {
  schools:[
    {
     name: "West Forsyth High School",
     years: "2011-2015",
     fav_teacher: "Robertson"
   }, {
     name: "Appalachian State University",
     years: "2015-2018",
     fav_teacher: "Hunsinger"
   }]
};

var projects = {
  projectDetails : [
    {
      title: "Rooibus",
      dates: "1/2017 - Forever",
      description: "Rooibus is a learning environment focused on the mastery of STEAM subjects",
      picture: "images/robotv2.jpg"
    },
    {
      title: "Club Connect",
      dates: "8/2016 - 1/2017",
      description: "Club Connect is a mobile POS that is easy to use with an emphasis on customer engagement",
      picture: "images/CLUBHOUSE.gif"
    }
  ]
};


var workExperience = {
  jobs:[
    {
      employer: "Appalachian State University",
      title: "IT Consultant",
      location: "Boone, NC",
      description: "Fix students hardware and software issues"
    },
    {
      employer: "Appalachian State University",
      title: "Rooibus",
      location: "Boone, NC",
      description: "Building a learning environment focused on the mastery of STEAM subjects"
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%",
  bio.name);

$("#header").prepend(formattedName);

if(bio.skills.length > 0) {
  var formattedSkill0 = HTMLskills.replace("%data%", bio.skills[0]);

  var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[1]);

  var formattedSkill2 = HTMLskills.replace("%data%", bio.skills[2]);

  $("#header").append(HTMLskillsStart).append(formattedSkill0)
  .append(formattedSkill1).append(formattedSkill2);
}

function displayWork() {
  for(job in workExperience.jobs) {

  $("#workExperience").append(HTMLworkStart);

  var employer = workExperience.jobs[job].employer;
  var title = workExperience.jobs[job].title;
  var workLocation = workExperience.jobs[job].location;
  var description = workExperience.jobs[job].description;

  var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", employer);

  var formattedWorkTitle = HTMLworkTitle.replace("%data%", title);

  var formattedWorkLocation = HTMLworkLocation.replace("%data%", workLocation);

  var formattedWorkDescription = HTMLworkDescription.replace("%data%", description);

  $(".work-entry:last").append(formattedWorkEmployer + " " + formattedWorkTitle)
  .append(formattedWorkLocation).append(formattedWorkDescription);
}
}

function inName(name) {
  var nameArray = name.trim().split(" ");
  nameArray[1] = nameArray[1].toUpperCase();

  var newName = nameArray.join(" ");

  return newName;

}

projects.display = function() {

  for (var project in projects.projectDetails) {

    $("#projects").append(HTMLprojectStart);

    var title = projects.projectDetails[project].title;
    var dates = projects.projectDetails[project].dates;
    var description = projects.projectDetails[project].description;
    var picture = projects.projectDetails[project].picture;

    var formmattedProjectTitle = HTMLprojectTitle.replace("%data%", title);
    var formmattedProjectDates = HTMLprojectDates.replace("%data%", dates);
    var formmattedProjectDescription = HTMLprojectDescription.replace("%data%", description);
    var formmattedProjectPicture = HTMLprojectImage.replace("%data%", picture);

    $(".project-entry:last").append(formmattedProjectTitle).append(formmattedProjectDates)
    .append(formmattedProjectDescription).append(formmattedProjectPicture);

  }
}

$("#main").append(internationalizeButton);
displayWork();
projects.display();
