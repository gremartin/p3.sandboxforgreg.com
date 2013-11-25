$('#button').click(function(){
	/*if note is natural, leave out accidental*/
	if(($('#accidental option:selected').text()) == 'natural'){
		var tonic = ($('#root_note option:selected').text())
	}
	else
	var tonic = $('#root_selector option:selected').text() ;
	console.log(tonic);
});