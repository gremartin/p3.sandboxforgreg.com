<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content ="text/html;charset=utf-8">
<title>Javascript Scale/Mode Finder</title>
<link rel="stylesheet" href="css/scale-finder.css" type="text/css">
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"> </script> -->
<script src="js/jquery-1.10.2.min.js"> </script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
</head>
<body>
	<div id="page">
		<div id="user_input">
			<form id="root_selector">
				<p>Select your root note</p>
				<select id="root_note">
					<option>C</option>
					<option>D</option>
					<option>E</option>
					<option>F</option>
					<option>G</option>
					<option>A</option>
					<option>B</option>
				</select>
				<p>Accidental</p>
				<select id="accidental">
					<option>natural</option>
					<option>#</option>
					<option>b</option>
				</select>
			</form>
			<form id = "scale_selector">
				<p>Scale/Mode</p>
				<select name="scale">
					<option>major</option>
					<option>minor</option>
				</select>				
			</form>
			<div id="button">Get Scale</div> <!-- Div for action button-->
		</div> <!-- end of user_input div-->
		<div id="output">
			<div id="display">
				<div id="clef"><img src='images/treble_clef.png'/></div>
				<div id="g_space" class="staff"></div>
				<div id="f_line" class="staff" ></div>
				<div id="e_space"class="staff"></div>
				<div id="d_line"class="staff" ></div>
				<div id="c_space" class="staff"></div>
				<div id="b_line" class="staff" ></div>
				<div id="a_space" class="staff"></div>
				<div id="g_line" class="staff"></div>
				<div id="f_space"class="staff" ></div>
				<div id="e_line" class="staff" ></div>
				<div id="d_space" class="staff"></div>
				<div id="c_line" class="staff"></div>
				<div id="b_space" class="staff"><div id="ledger_line"></div></div>
				<div id="a_line" class="staff" ></div>			
				
			</div> <!--end display div-->
			<div id="scale_output"></div>
		</div> <!--end outputdiv-->
	</div> <!--end page div-->
<script src="js/scale-finder.js"></script>
<body>
</html>

