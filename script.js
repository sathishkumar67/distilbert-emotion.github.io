async function query(data) {

	const response = await fetch(
		    "https://api-inference.huggingface.co/models/pt-sk/distilbert-base-uncased-finetuned-emotion",
		    {
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data)});

	const result = await response.json();

	return result;
}

function result() {

    var inputText = document.getElementById('textInput').value;

    query({"inputs": inputText}).then((response) => {
    var result = JSON.parse(JSON.stringify(response))
    highest_prob_label = result[0][0]["label"]
    var emotionsArray = ['sadness', 'joy', 'love', 'anger', 'fear', 'surprise'];
    
    var labelToEmotionMap = {
        'LABEL_0': emotionsArray[0],
        'LABEL_1': emotionsArray[1],
        'LABEL_2': emotionsArray[2],
        'LABEL_3': emotionsArray[3],
        'LABEL_4': emotionsArray[4],
        'LABEL_5': emotionsArray[5]
    };

    result_emotion = labelToEmotionMap[highest_prob_label];
    var resultContainer = document.getElementById("output");
    resultContainer.innerHTML = `You are Expression ${result_emotion}!...`;

});}
