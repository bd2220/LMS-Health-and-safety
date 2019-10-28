img_path_root = "./asset/imgs/";

nav_title = "Learning Management System Occupational Health and Safety";

nav_home_page_text = "Home";

nav_test_page_text = "Test";

priorities_title = "Priorities";

concerns_title = "Concerns and Challenges";

footer_text = "All rights reserved &copy; to Learning Management System 2019."

all_members = {
    	"ill_worker" : {
    		"title"      : "Injured/Ill Worker",
		    "img"       : img_path_root+"injured_ill_worker.png",
		    "priorities": [
		          "Recovery",
		          "Pain/symptom management",
		          "Ensuring benefits received/paid",
		          "Ensuring claim continues ",
		          "Communication with all parties: family, doctor, employer, insurer"
		    ],
		    "concerns"  : [
		          "Fear of re-injury",
		          "Being pushed to return to work before feeling ready",
		          "Uncertainty with what is happening at work while away",
		          "Concern with what employer and co-workers think",
		          "Claim eligibility and continuing to prove need for benefits"
		    ]
    	},

    	"direct_supervisor" : {
    		"title"      : "Direct Supervisor",
		    "img"       : img_path_root+"direct_supervisor.png",
		    "priorities": [
		          "Productivity",
		          "Replacement of absent worker",
		          "Training replacement workers",
		          "Containing costs associated with absence",
		          "Communication with union, absent worker and co-workers"
		    ],
		    "concerns"  : [
		          "Creating return to work opportunities",
		          "Cost of supporting return to work",
		          "Co-worker complaints",
		          "Administration time to manage the absent worker’s claim",
		          "Work slow down or disruption caused by absence and then return to work"
		    ]
    	},

    	"union_representative" : {
    		"title"      : "Union Representative",
		    "img"       : img_path_root+"union_representative.png",
		    "priorities": [
		          "Worker receiving benefits to which they are entitled",
		          "Advocating for rights of absent worker and co-workers",
		          "Protecting Collective Agreement",
		          "Participating in incident ",
		          "Investigation to ensure safe workplace"

		    ],
		    "concerns"  : [
		          "Ensuring member is paid appropriately and in a timely manner",
		          "Members being injured",
		          "Members being re-injured",
		          "Ensuring overtime, training opportunities are assigned by seniority",
		          "Members being supported in return to work efforts(supported by management, insurer and co-workers)"
		    ]
    	},

    	"physician" : {
    		"title"      : "Physician",
		    "img"       : img_path_root+"physician.png",
		    "priorities": [
		          "Recovery",
		          "Symptom management",
		          "Referrals for diagnostic tests or specialists are done in a timely manner",
		          "Confidentiality of patient’s information",
		          "Being a patient advocate"

		    ],
		    "concerns"  : [
		          "Seeing the patient for follow up at an appropriate time",
		          "Understanding the patient’s job and return to work opportunities",
		          "Completing paperwork in a timely manner",
		          "Communicating with employer and insurer on claim and return to work",
		          "Supporting return to work in a timely and appropriate manner"
		    ]
    	},

    	"insurance_provider" : {
    		"title"      : "Insurance Provider",
		    "img"       : img_path_root+"insurance_provider.png",
		    "priorities": [
		          "Contain costs of claim",
		          "Validate eligibility for claim",
		          "Conclude claim quickly"

		    ],
		    "concerns"  : [
		          "Communication with worker",
		          "Explaining insurance process to worker",
		          "Obtaining medical documentation to support claim",
		          "Working with employer, worker and physician on return to work opportunities"
		    ]
    	},

    	"co_workers" : {
    		"title"      : "Co-workers",
		    "img"       : img_path_root+"co-worker.png",
		    "priorities": [
		          "Doing their own job well",
		          "Maintaining health and wellness at work",
		          "Avoiding injury"
		    ],
		    "concerns"  : [
		          "Working harder because of the absent worker",
		          "Training for a new job to cover the absence",
		          "Fear of injury",
		          "Increased overtime",
		          "Less recovery time or shortened breaks",
		          "Doing a job they are not accustomed to",
		          "Not having their rights violated under the collective agreement"
		    ]
    	},

    	"disability_case" : {
    		"title"      : "Disability Case Management Professional",
		    "img"       : img_path_root+"disability_case_management_professional.png",
		    "priorities": [
		          "Communicating with all stakeholders on absence duration",
		          "Communicating with absent worker in a timely and regular manner",
		          "Ensuring worker receiving appropriate medical treatment",
		          "Ensuring worker receiving benefits they are entitled to",
		          "Understanding the worker’s job and how the job demands might impact return to work efforts",
		          "Exploring temporary accommodation measures to support return to work"

		    ],
		    "concerns"  : [
		          "Health and wellness of worker – potential for delay in recovery or re-injury",
		          "Adequate medical intervention starting with correct diagnosis",
		          "Trust and cooperation of the physician or healthcare team",
		          "Cooperation and support from insurance provider",
		          "Understanding worker’s progress in rehabilitation",
		          "Cooperation with supervisors, union, co-workers on return to work opportunities",
		          "Managing a large case load",
		          "Safe and sustainable return to work plans implemented at the right time"
		    ]
    	}
    };




question_text= "Which member matches the following Priorities, Concerns and Challenges?"

submit_buttom_text = "Submit";

next_question_buttom_text = "Next Question";

correct_text = "Yes! Your Are Correct!";

incorrect_text = "Incorrect, but don't give up! Try again!";






/*app for index.html*/
var app = new Vue({
  el: '#app',
  data: {
    title: nav_title,
    nav_home_text: nav_home_page_text,
    nav_test_text: nav_test_page_text,
    priorities: priorities_title,
    concerns: concerns_title,
    team: all_members,
    footer: footer_text
  }
});










var get_random_int = function (max) {
  return Math.floor(Math.random() * max);
};

var get_random_int_and_exclude_num = function (max, exclude_num) {
	temp = Math.floor(Math.random() * max);
	while (temp == exclude_num) {
		temp = Math.floor(Math.random() * max);
	}
    return temp;
};

var get_3_random_int = function (max, exclude_num) {
	result = []
	temp = Math.floor(Math.random() * max);
	if (temp != exclude_num) {
			result.push(temp)
		}
	while (result.length < 3) {
		temp = Math.floor(Math.random() * max);
		if (temp != exclude_num && !result.includes(temp)) {
			result.push(temp)
		}
	}
    return result;
};

function shuffle(arr) {
    var i,j,temp
    for(let i = arr.length - 1; i > 0; i--){
		  const j = Math.floor(Math.random() * i)
		  const temp = arr[i]
		  arr[i] = arr[j]
		  arr[j] = temp
		}
    return arr
};

/*app for test.html*/
var app2 = new Vue({
  el: '#test',
  data: {
    title: nav_title,
    nav_home_text: nav_home_page_text,
    nav_test_text: nav_test_page_text,
    priorities: priorities_title,
    concerns: concerns_title,
    team: all_members,
    team_keys:[],
    selected: "",
    correct: "",
    question:{
              priorities:[],
              concerns:[],
              members_names:[],
              correct_option:-1
          },
    ready: 0,
    question_text: question_text,
    submit_buttom_text: submit_buttom_text,
    next_question_buttom_text: next_question_buttom_text,
    correct_text: correct_text,
    incorrect_text: incorrect_text,
    footer: footer_text
  },

  methods: {
    check_answer: function() {
    	if ( this.selected !== "" && this.selected === this.question.correct_option) {
    		this.correct = 1
    	} else {
    		this.correct = 0
    	}
    },

    create_question: function() {
    	this.ready=0
    	this.correct = ""
    	this.selected = ""
    	this.question = {
              priorities:[],
              concerns:[],
              members_names:[],
              correct_option:-1
          }

        length = this.team_keys.length

        correct_member_index = get_random_int(length)

        correct_member_title = this.team[this.team_keys[correct_member_index]].title
        this.question.correct_title = correct_member_title

        priorities_list =  this.team[this.team_keys[correct_member_index]].priorities
        concerns_list =  this.team[this.team_keys[correct_member_index]].concerns

        temp_index = get_random_int(priorities_list.length)
        this.question.priorities[0] = priorities_list[temp_index]
        temp_index = get_random_int_and_exclude_num(priorities_list.length, temp_index)
        this.question.priorities[1] = priorities_list[temp_index]

        temp_index = get_random_int(concerns_list.length)
        this.question.concerns[0] = concerns_list[temp_index]
        temp_index = get_random_int_and_exclude_num(concerns_list.length, temp_index)
        this.question.concerns[1] = concerns_list[temp_index]

        temp_index_list = get_3_random_int(length, correct_member_index)
        for (i = 0 ; i < temp_index_list.length; i++ ) {
        	this.question.members_names.push(this.team[this.team_keys[temp_index_list[i]]].title)
        }
        this.question.members_names.push(correct_member_title)
        this.question.members_names=shuffle(this.question.members_names)

        this.question.correct_option = String(this.question.members_names.indexOf(correct_member_title)+1)

        // console.log(JSON.stringify( this.question,null,2))

         this.ready=1;
    },

    reset_correct: function() {
    	if (this.correct === 0 || this.correct === 1) {
    		this.correct = "";
    	}
    },

    new_question:  function() {
        this.create_question()
    }

},

created: function(){
	    this.team_keys = Object.keys(this.team); 
        this.create_question()
    }

});