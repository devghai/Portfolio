export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        
        name :'devghai. ',

        headerTagline: [//Line 1 For Header
                        'Hello. I am Dev. 🇸🇪🇮🇳',
                        //Line 2 For Header
                        'Junior at San Jose State University',
                        //Line 3 For Header
                        ''
    ],
        //Contact Email
        contactEmail:'dev.ghai@sjsu.edu',
        // Add Your About Text Here
        abouttext: "I am currently a third year mathematics and computer science student at San Jose State. I am 20 years old and currently live in Palo Alto, CA. I enjoy learning new technolgoies and pushing the boundaries of what's possible in the fields of Data Science and Artificial Intelligence. I am currently working on mastering Set Theory, Propability Theory and Formal Langauges in order to craft high value technologies for my future company.",
        aboutImage:'https://images.unsplash.com/photo-1710309881243-12bafba60e01?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)

       interests: [
        'I rock climb indoor v6 and 5.12.',
        'I enjoy learning about ethical AI and app development.',
        'I love to learn about cars and how they work',
        'I like to thrift for clothes and visit new places in the bay area in my free time',
        'I am new to Chess, I have a current blitz rating of <a href="https://www.chess.com/member/lambolvr" target="_blank">726</a>.',
        'I love to travel and have been to many different countries despite my young age. These include:'
    ],
      skills: [
        'Javascript',
        'Python',
        'Calculus',
        'React',
        'Probability Theory',
        'Aws', 
        'Html',
        'CSS'
      ],
    
    // Additional interests section
    additionalInterests: [
        'India',
        'France, Germany, Iceland, Ireland, Italy, Portugal, Spain, Sweden, U.K',
        'Canada,United States,',
        // Add more interests as needed
    ],
     
       // Change Projects Here 
       projects:[
           {
            id: 1,
            title:'MacroNutrient Tracker', //Project Title - Add Your Project Title Here
             service:'Business', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
             //Project URL - Add Your Project Url Here
             url:'https://github.com/Smalls141414/CS151-MacroTracker'
            },
            {
                id: 2,
                title: 'A.I Chatbot',
                service: 'Ongoing',
                imageSrc: "https://plus.unsplash.com/premium_photo-1681458713811-ccc94bbdc127?q=80&w=2857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                url: 'https://github.com/devghai/devAI'
            },
            { 
                id: 3,
                title: 'Playbook',
                service: 'Sports Managing App',
                imageSrc: "https://i.pinimg.com/564x/b9/0c/75/b90c758122a0738c902e96babc97c246.jpg",
                url: 'https://github.com/devghai/PlayBook'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Portfolio',
                service: 'Source Code',
                imageSrc: "https://assets-global.website-files.com/606a802fcaa89bc357508cad/61701b4e166c837543d8f0ce_2_How%20To%20a%20Create%20Personal%20Portfolio%20Website-p-1600.png",
                url: 'https://github.com/devghai/Portfolio'
           }

                    /*
                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/devghai'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/dev-ghai'
            },
            //{
                //name: 'Dribbble',
                //url: 'https://dribbble.com/chetanverma'
           // },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/devghai24/'
            },
        ]
    }