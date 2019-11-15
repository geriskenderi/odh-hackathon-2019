(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{210:function(e,t,o){"use strict";o.r(t);var a=o(0),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"alexa-skill-development"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alexa-skill-development"}},[e._v("#")]),e._v(" Alexa Skill Development")]),e._v(" "),o("p",[e._v("As mentioned in our presentation, a voice interface like Alexa would make for a very interesting way of querying a Virtual Knowledge Graph (VKG). In this section we will explore how to get started with this idea.")]),e._v(" "),o("p",[e._v("In the odh-alexa folder we can distinguish the two main components that make up an Alexa Skill:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("models")]),e._v(" "),o("p",[e._v("The models folder contains inside a .json file named after the locale specification. This file is the interaction model of our skill, basically where we define the skill logic and also the VI (voice interface). You can edit the .json file to make changes to the model but we highly suggest using the Alexa developer console and loading the file there so that you can rely on the GUI, it makes the process much simpler. More on skill models can be found "),o("a",{attrs:{href:"https://developer.amazon.com/docs/custom-skills/create-the-interaction-model-for-your-skill.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://developer.amazon.com/docs/devconsole/create-a-skill-and-choose-the-interaction-model.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("lambda")]),e._v(" "),o("p",[e._v("This directory contains the code which handles how Alexa responds to intents defined in the interaction model explained above. You can see that there are four files inside:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("data.py:")]),e._v(" "),o("p",[e._v("Contains static variables and the queries that the main code file (lambda_function.py) will use")])]),e._v(" "),o("li",[o("p",[e._v("lambda_function.py:")]),e._v(" "),o("p",[e._v('This is the "main code file" that will contain all the functions which will dictate how Alexa responds and also how we handle user intent. Inside this file you are essentially deciding how your skill will operate. It is the most important part of skill development along with the interaction model so read more about the actual technology '),o("a",{attrs:{href:"https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" and more about the actual coding by following "),o("a",{attrs:{href:"https://developer.amazon.com/en-US/alexa/alexa-skills-kit/resources/training-resources/cake-walk/cake-walk-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("this Amazon tutorial"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("utils.py:")]),e._v(" "),o("p",[e._v("This file is created when you initially create the skill in the Alexa developer console as a Python project and it is basically needed to generate a presigned URL to share an S3 object (which is where you can persist memory changes for Alexa hosted skills). You can see how your Alexa hosted S3 bucket can help the skill "),o("a",{attrs:{href:"https://developer.amazon.com/en-US/alexa/alexa-skills-kit/resources/training-resources/cake-walk/cake-walk-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("requirements.txt:")]),e._v(" "),o("p",[e._v("Contains all the external python modules we want to install for the skill to run. All of the module installation is handled by Lambda so all we do here is just specify the module names. If you have worked with Python before then you will be quite familiar with this file.")])])]),e._v(" "),o("h2",{attrs:{id:"amazon-ask-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#amazon-ask-cli"}},[e._v("#")]),e._v(" Amazon ASK CLI")]),e._v(" "),o("p",[e._v("This project was downloaded from the Alexa development console using the ASK CLI from amazon. To understand how to use it in regard to a skill and how it helps development and testing you can check "),o("a",{attrs:{href:"https://developer.amazon.com/docs/hosted-skills/build-a-skill-end-to-end-using-an-alexa-hosted-skill.html#askcli",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v('.\nWe highly reccomend reading through all the links provided here since the Alexa skill building workflow is not "the most typical". Hopefully after reading the Amazon tutorials and guides you will have a clearer idea of how the whole process works and be able to contribute or create your own skills.')]),e._v(" "),o("h2",{attrs:{id:"development-ideas"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-ideas"}},[e._v("#")]),e._v(" Development Ideas")]),e._v(" "),o("p",[e._v("The first step towards developing a new skill would be to create a new one from the Alexa developer console. We suggest using the console to build and edit the model but after creating the new skill you can either copy paste the code in models/ and lambda/ in the respesctively the Build and Code tabs inside the developer console or use the ask cli to clone the skill on your computer and copy paste the code there. Afterwards you can deploy the skill to the developer console using the cli. If you wish to use the ask cli then your workflow could follow roughly the following pattern:")]),e._v(" "),o("ol",[o("li",[e._v("Initialize the ASK-CLI with your Amazon developer account credentials using "),o("code",[e._v("ask init")])]),e._v(" "),o("li",[e._v("Clone the skill you created in the developer console: "),o("code",[e._v("ask clone")])]),e._v(" "),o("li",[e._v("Add and commit the changes made in dev and then merge dev to master by using "),o("code",[e._v("ask deploy")])]),e._v(" "),o("li",[e._v("My suggestion: edit the model using the developer console and you can edit the code locally. You can then work on the code on your favourite edit and deploy only the code by using "),o("code",[e._v("ask deploy -t lambda")]),e._v(" so that the deployment only affects the model")])]),e._v(" "),o("h2",{attrs:{id:"useful-links"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[e._v("#")]),e._v(" Useful links")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://developer.amazon.com/docs/custom-skills/steps-to-build-a-custom-skill.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alexa: Skill building basics"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.amazon.com/en-US/alexa/alexa-skills-kit/resources/training-resources/cake-walk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alexa: Skill building tutorial from scratch"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.amazon.com/docs/custom-skills/create-custom-skill-from-quick-start-template.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alexa: Skill building from a template"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/alexa/skill-sample-python-quiz-game",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alexa: Template for a skill on Github"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://rdflib.github.io/sparqlwrapper/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python SPARQL"),o("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=l.exports}}]);