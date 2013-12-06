//multidimensional array to store lists of notes available with each given tonic
var tonic_notes = []; 
//all notes available to scales with each possible tonic
tonic_notes['c_notes'] = ["C", "D&#9837", "D", "D&#9839", "E&#9837", "E", "E&#9839", "F&#9837", "F", "F&#9839", "G&#9837", "G", "G&#9839", "A&#9837", "A", "A&#9839", "B&#9837", "B"];
tonic_notes['c#_notes'] = ["C&#9839", "D", "D&#9839", "D&#119082", "E", "E&#9839", "E&#119082", "F", "F&#9839", "F&#119082", "G", "G&#9839", "G&#119082", "A", "A&#9839", "A&#119082", "B", "B&#9839"];
tonic_notes['db_notes'] = ["D&#9837", "E&#119083", "E&#9837", "E", "F&#9837", "F", "F&#9839", "G&#119083", "G&#9837", "G", "A&#119083", "A&#9837", "A", "B&#119083", "B&#9837", "B", "C&#9837", "C"];
tonic_notes['d_notes'] = ["D", "E&#9837", "E", "E&#9839", "F", "F&#9839", "F&#119082", "G&#9837", "G", "G&#9839", "A&#9837", "A", "A&#9839", "B&#9837", "B", "B&#9839", "C", "C&#9839"];
tonic_notes['d#_notes'] = ["D&#9839", "E", "E&#9839", "E&#119082", "F", "F&#119082", "F&#9839&#119082", "G", "G&#9839", "G&#119082", "A", "A&#9839", "A&#119082", "B", "B&#9839", "B&#119082", "C&#9839", "C&#119082"];
tonic_notes['eb_notes'] = ["E&#9837", "F&#9837", "F", "F&#9839", "G&#9837", "G", "G&#9839", "A&#119083", "A&#9837", "A", "B&#119083", "B&#9837", "B", "C&#9837", "C", "C&#9839", "D&#9837", "D"];
tonic_notes['e_notes'] = ["E", "F", "F&#9839", "F&#119082", "G", "G&#9839", "G&#119082", "A&#9837", "A", "A&#9839", "B&#9837", "B", "B&#9839", "C", "C&#9839", "C&#119082", "D", "D&#9839"];
tonic_notes['e#_notes'] = ["E&#9839", "F&#9839", "F&#119082", "F&#9839&#119082", "G&#9839", "G&#119082", "G&#9839&#119082", "A", "A&#9839", "A&#119082", "B", "B&#9839", "B&#119082", "C&#9839", "C&#119082", "C&#9839&#119082", "D&#9839", "D&#119082"];
tonic_notes['fb_notes'] = ["F&#9837", "G&#119083", "G&#9837", "G", "A&#119083", "A&#9837", "A", "B&#9837&#119083", "B&#119083", "B&#9837", "C&#119083", "C&#9837", "C", "D&#119083", "D&#9837", "D", "E&#119083", "E&#9837"];
tonic_notes['f_notes'] = ["F", "G&#9837", "G", "G&#9839", "A&#9837", "A", "A&#9839", "B&#119083", "B&#9837", "B", "C&#9837", "C", "C&#9839", "D&#9837", "D", "D&#9839", "E&#9837", "E"];
tonic_notes['f#_notes'] = ["F&#9839", "G", "G&#9839", "G&#119082", "A", "A&#9839", "A&#119082", "B&#9837", "B", "B&#9839", "C", "C&#9839", "C&#119082", "D", "D&#9839", "D&#119082", "E", "E&#9839"];
tonic_notes['gb_notes'] = ["G&#9837", "A&#119083", "A&#9837", "A", "B&#119083", "B&#9837", "B", "C&#119083", "C&#9837", "C", "D&#119083", "D&#9837", "D", "E&#119083", "E&#9837", "E", "F&#9837", "F"];
tonic_notes['g_notes'] = ["G", "A&#9837", "A", "A&#9839", "B&#9837", "B", "B&#9839", "C&#9837", "C", "C&#9839", "D&#9837", "D", "D&#9839", "E&#9837", "E", "E&#9839", "F", "F&#9839"];
tonic_notes['g#_notes'] = ["G&#9839", "A", "A&#9839", "A&#119082", "B", "B&#9839", "B&#119082", "C", "C&#9839", "C&#119082", "D", "D&#9839", "D&#119082", "E", "E&#9839", "E&#119082", "F&#9839", "F&#119082"];
tonic_notes['ab_notes'] = ["A&#9837", "B&#119083", "B&#9837", "B", "C&#9837", "C", "C&#9839", "D&#119083", "D&#9837", "D", "E&#119083", "E&#9837", "E", "F&#9837", "F", "F&#9839", "G&#9837", "G"];
tonic_notes['a_notes'] = ["A", "B&#9837", "B", "B&#9839", "C", "C&#9839", "C&#119082", "D&#9837", "D", "D&#9839", "E&#9837", "E", "E&#9839", "F", "F&#9839", "F&#119082", "G", "G&#9839"];
tonic_notes['a#_notes'] = ["A&#9839", "B", "B&#9839", "B&#119082", "C&#9839", "C&#119082", "C&#9839&#119082", "D", "D&#9839", "D&#119082", "E", "E&#9839", "E&#119082", "F&#9839", "F&#119082", "F&#9839&#119082", "G&#9839", "G&#119082"];
tonic_notes['bb_notes'] = ["B&#9837", "C&#9837", "C", "C&#9839", "D&#9837", "D", "D&#9839", "E&#119083", "E&#9837", "E", "F&#9837", "F", "F&#9839", "G&#9837", "G", "G&#9839", "A&#9837", "A"];
tonic_notes['b_notes'] = ["B", "C", "C&#9839", "C&#119082", "D", "D&#9839", "D&#119082", "E&#9837", "E", "E&#9839", "F", "F&#9839", "F&#119082", "G", "G&#9839", "G&#119082", "A", "A&#9839"];
tonic_notes['b#_notes'] = ["B&#9839", "C&#9839", "C&#119082", "C&#9839&#119082", "D&#9839", "D&#119082", "D&#9839&#119082", "E", "E&#9839", "E&#119082", "F&#9839", "F&#119082", "F&#9839&#119082", "G&#9839", "G&#119082", "G&#9839&#119082", "A&#9839", "A&#119082"];
tonic_notes['cb_notes'] = ["C&#9837", "D&#119083", "D&#9837", "D", "E&#119083", "E&#9837", "E", "F&#119083", "F&#9837", "F", "G&#119083", "G&#9837", "G", "A&#119083", "A&#9837", "A", "B&#119083", "B&#9837"];
//multidimensional array for scale notes needed from each tonic array
var scales = [];
//note array indexes needed for major scale
scales['major'] = [0, 2, 5, 8, 11, 14, 17];
scales['minor'] = [0, 2, 4, 8, 11, 13, 16];
//empty array for set of notes to choose scale from
var notes = [];
//empty array for set of indexes to form scale selected by user
var scale_indexes =[];
//empty array for scale chosen by user
var user_scale=[]; 


$('#button').click(function(){
	/*if note is natural, leave out accidental*/
	if(($('#accidental option:selected').text()) == 'natural'){
		//retrieve tonic note from user
		var tonic = ($('#root_note option:selected').text())
	}
	else
	//retrieve tonic note from user
	var tonic = $('#root_selector option:selected').text();
	//retrieve scale/mode selection from user
	var selected_scale = $('#scale_selector option:selected').text();
	console.log(tonic);
	//assign variable to match against tonic_notes indexes
	var tonic_array = tonic.toLowerCase() + "_notes";
	console.log(tonic_array);
	//get notes array to choose scale notes from
	for(i in tonic_notes){
		if(i == tonic_array)
		notes = tonic_notes[i];	
	}
	//get scales array to choose notes from notes array
	for(i in scales){
		if(i == selected_scale)
		scale_indexes = scales[i];	
	}
	console.log(scale_indexes);
	console.log(notes);	
	//find notes in notes array that match indexes for chosen scale and assign to new array
	for(var i = 0; i < scale_indexes.length; i++){
		user_scale[i] =  notes[scale_indexes[i]];		
	}
	//draw notes to grid:
	//first, start with scales to be started on spaces
	if((user_scale[0].charAt() == "B")){
		for(var i = 0; i < user_scale.length; i++){
			//get first letter of div for note to be drawn to
			var div_id = user_scale[i].charAt();
				if(i % 2 == 0){
					div_id = "#" + div_id.toLowerCase() + "_space";
				}
				else div_id = "#" + div_id.toLowerCase() + "_line";
				var img_str = "<div id='img_" + i +"'><img src='images/whole_note.png'/></div>";
				console.log(img_str);
				$(div_id).append(img_str);
				//create new class for each div with 
				//$(div_id).addClass('note_' + i);
				/*var number_px = (90 * i) +'px';
				console.log(number_px);
				$('#img_'+i +'').css('margin-left', 'number_px');*/
				div_id = '';
		}
		
		
	}
	/*$('#b_space').html("<img class = 'note' src='images/whole_note.png'/>");*/
	var message = tonic + ' ' + selected_scale +':<br><br>'; 
	for(i in user_scale){
		message = message + (user_scale[i] + ' ');
	}
	$('#scale_output').html(message);
});