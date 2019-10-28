img_path_root = "./asset/imgs/"

var app = new Vue({
  el: '#app',
  data: {
    title: "Learning Management System Occupational Health and Safety",

    priorities:"Priorities",
    concerns:"Concerns and Challenges",

    team:{
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
		          "investigation to ensure safe workplace"

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
    	},
    }
  }
})