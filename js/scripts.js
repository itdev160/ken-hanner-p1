(function() {
            //package data array
    var data = [
        {
            name: 'Shorewood School District',
            descriptiona: 'Supervise K5-6th grade students during virtual learning',
            descriptionb: 'Track schedules and help students complete assigned tasks',
            descriptionc: 'Ensure proper sanitization habits and social distancing practices are being observed',
            title: 'Student Supervisor',
            start: 'August 2020',
            end: 'Present',
            selector: 'p1',
        },
        {
            name: 'Hanner Music',
            descriptiona: 'Organized recruitment events and reviewed audition tapes in order to fill over 150 onboard musician positions for Holland America Line cruise ships',
            descriptionb: 'Oversaw onboarding procedures for new musicians, including creating contracts, setting up payroll, and coordinating applicable visas and travel',
            descriptionc: 'Scheduled musicians to fill onboard positions on fifteen cruise ships in order to meet the cruise lines’ entertainment and budgetary needs',
            title: 'Owner',
            start: 'December 2018',
            end: 'Present',
            selector: 'p2'
        },
        {
            name: 'Holland America Line',
            descriptiona: 'Recruited, auditioned, and hired for over 200 onboard musician positions',
            descriptionb: 'Scheduled musicians to fill onboard positions on eighteen ships',
            descriptionc: 'Responded to onboard musicians and management regarding performance concerns',
            title: 'Hiring Manager',
            start: 'July 2013',
            end: 'December 2018',
            selector: 'p3'
        },
        {
            name: 'Holland America Line',
            descriptiona: 'Performed saxophone in a variety of settings onboard (cover bands, show bands, etc.)',
            descriptionb: 'Directed up to 12-piece bands on and off the stage',
            descriptionc: 'Communicated with sound, light, stage technicians, and other performers to rehearse shows and other entertainment events',
            title: 'Musician and Band Leader',
            start: 'August 2007',
            end: 'July 2013',
            selector: 'p4'
        },
        {
            name: 'Kashmir Music',
            descriptiona: 'Performed saxophone in a variety of settings onboard (cover bands, show bands, etc.)',
            descriptionb: 'Directed up to 12-piece bands on and off the stage',
            descriptionc: 'Communicated with sound, light, stage technicians, and other performers to rehearse shows and other entertainment events',
            title: 'Music Teacher',
            start: 'May 2003',
            end: 'August 2007',
            selector: 'p5'
        },
        {
            name: 'Milwaukee Area Technical College',
            descriptiona: 'Developed software that utilizes client and server processing, connects to databases, and will run simultaneously on multiple devices',
            descriptionb: 'Learned essential programming skills',
            descriptionc: 'Honed ability to concentrate on details for long periods of time, being able to work independently as well as on a team, analytical and problem-solving skills, effective communication skills, personal initiative, imagination, and curiosity',
            title: 'IT Web and Software Developer',
            start: 'Summer 2020',
            end: 'Fall 2021',
            selector: 'p6'
        },
        {
            name: 'University of Wisconsin - Milwaukee',
            descriptiona: 'Spent several hours a day in a practice room',
            descriptionb: 'Developed skills on the saxophone and learned essential music theory',
            descriptionc: 'Learned to play notes on the saxophone really fast',
            title: 'Music Performance - Saxophone',
            start: 'Fall 2005',
            end: 'Spring 2007',
            selector: 'p7'
        },
        {
            name: 'Mukwonago High School',
            descriptiona: '2005',
            descriptionb: '',
            descriptionc: '',
            title: '',
            start: '',
            end: '',
            selector: 'p8'
        },
    ];

            //Package constructor function
    function Package(data) {
        this.name = data.name;
        this.descriptiona = data.descriptiona;
        this.descriptionb = data.descriptionb;
        this.descriptionc = data.descriptionc;
        this.title = data.title;
        this.url = data.url;
        this.start = data.start;
        this.end = data.end;
        this.selector = data.selector; //add this if you added it to the data objects
    }

            //utility functions
    //today's date, formatted
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    //returns DOM element by id
    var getEl = function (id) {
        return document.getElementById(id);
    }

    //write package objects data
    var writePackageInfo = function(package) {
            //get reference to DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descaEl = getEl(selector + '-descriptiona');
            descbEl = getEl(selector + '-descriptionb');
            desccEl = getEl(selector + '-descriptionc');
            titleEl = getEl(selector + '-title');
            startEl = getEl(selector + '-start')
            endEl = getEl(selector + '-end');
    
    //write package data to DOM elements
            nameEl.textContent = package.name;
            descaEl.textContent = package.descriptiona;
            descbEl.textContent = package.descriptionb;
            desccEl.textContent = package.descriptionc;
            titleEl.textContent = package.title;
            startEl.textContent = package.start;
            endEl.textContent = package.end;
    }

//utilize package data and constructor objects to construct the packages
//add package data via DOM functions

//write package info
    //loop
    for (var i = 0; i < data.length; i++) {
        var package = new Package(data[i]);
        writePackageInfo(package);
    }

}())