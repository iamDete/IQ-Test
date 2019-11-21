import wordQuestions from '../api/wordQuestions.js'


pagination({
	startNo: 0,
	pageNo: wordQuestions.length,
	id: "#pagination"
})


const letter = ["A", "B", "C", "D", "E", "F"]


for (let i = 0; i < wordQuestions.length; i++) {

	let question = wordQuestions[i].question
	let isImage = getFileType(question)

	let dispQues = (isImage) ? `<img class="img-ques" src="${ question }"/>` : `<h5>${ question }</h5>`

	$("#questions").append(`
	
	<div class="row" id="question-${i+1}">

		<div class="col-md-12">
			${ dispQues }

			<div id="ans${i}">`)

			choices(i)

			$("#questions").append(`

			</div>

		</div>
	</div>`)

}


function getFileType(question) {

	let quesType = question.substring(question.length-4, question.length)
	var isImage = false
	if ([".img",".png",".jpg",".gif",".svg"].indexOf(quesType) > -1) {
		isImage = true
	}
	return isImage
}

function choices(i) {
	
	for(let j = 0; j < wordQuestions[i].answers.length; j++) {

		var choices = wordQuestions[i].answers[j];

		$(`#ans${ i }`).append(`<div>

			<input type="radio" id="${ choices }" name="${ i }" value="${ letter[j] }">
			<label for="${ choices }">${ choices }</label>

		</div>`) 
	}
}


function pagination({
	startNo: startNo,
	pageNo: pageNo,
	id: id	
}) {

	for (let i = startNo; i < pageNo; i++) {

		$(id).append(`
		
		<div class="page-item ">
			<a class="page-link border-0 border-0 text-center" href="#">${ i+1 }<span></span></a>
		</div>`)
	
	}

}