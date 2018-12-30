<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">

	<title> Switch Game </title>

	<link rel="icon" type="images" href="app/assets/images/sg_icon.png">

	<!-- EXTERNAL CSS -->
	<link rel="stylesheet" type="text/css" href="app/assets/css/style.css">
</head>
<body>
	<main id="main_grid" class="main_box">
		<!-- RULES -->
		<section class="rules_box">
			<h1>SWITCH GAME</h1>
			<h4>RULES:</h4>
			<ul>
				<li>The goal of the game is to <em>switch</em> the color of the top box into <span class="green-text">green</span>.</li>
				<li>You can accomplish this by activating the lower boxes.</li>
				<li><strong><em>Box activation hint:</em></strong>
					<ul>
						<li><strong><u>AND</u></strong> - Two(2) <em>switches</em> are required to be <span class="green-text">ON</span></li>
						<li><strong><u>OR</u></strong> - Only one(1) <em>switch</em> is required to be <span class="green-text">ON</span></li>
						<li><strong><u>NOT</u></strong> - Two(2) <em>switches</em> are required to be <span class="red-text">OFF</span></li>
					</ul>
				</li>
			</ul>
		</section>

		<!-- TOP -->
		<section id="label_top">TOP BOX</section>
		<section id="top_box" class="switch_box">AND</section>

		<!-- MIDDLE -->
		<section id="label_middle_1"></section>
		<section id="label_middle_2">MIDDLE BOX</section>
		<section id="label_middle_3"></section>
		<section id="middle_box_1" class="switch_box">AND</section>
		<section id="middle_box_2" class="switch_box">AND</section>

		<!-- BOTTOM -->
		<section id="label_bottom_1"></section>
		<section id="label_bottom_2"></section>
		<section id="label_bottom_3">BOTTOM BOX</section>
		<section id="label_bottom_4"></section>
		<section id="label_bottom_5"></section>
		<section id="bottom_box_1" class="switch_box">AND</section>
		<section id="bottom_box_2" class="switch_box">OR</section>
		<section id="bottom_box_3" class="switch_box">NOT</section>
		<section id="bottom_box_4" class="switch_box">AND</section>

		<!-- BUTTON -->
		<section id="label_switch_1"></section>
		<section id="label_switch_2"></section>
		<section id="label_switch_3"></section>
		<section id="label_switch_4"></section>
		<section id="label_switch_5">SWITCHES</section>
		<section id="label_switch_6"></section>
		<section id="label_switch_7"></section>
		<section id="label_switch_8"></section>
		<section id="label_switch_9"></section>
		<section id="button_box_1" class="switch_box"> <button id="button_switch_1" class="switch_button">OFF</button> </section>
		<section id="button_box_2" class="switch_box"> <button id="button_switch_2" class="switch_button">OFF</button> </section>
		<section id="button_box_3" class="switch_box"> <button id="button_switch_3" class="switch_button">OFF</button> </section>
		<section id="button_box_4" class="switch_box"> <button id="button_switch_4" class="switch_button">OFF</button> </section>
		<section id="button_box_5" class="switch_box"> <button id="button_switch_5" class="switch_button">OFF</button> </section>
		<section id="button_box_6" class="switch_box"> <button id="button_switch_6" class="switch_button">OFF</button> </section>
		<section id="button_box_7" class="switch_box"> <button id="button_switch_7" class="switch_button">OFF</button> </section>
		<section id="button_box_8" class="switch_box"> <button id="button_switch_8" class="switch_button">OFF</button> </section>
	</main>

	<script type="text/javascript" src="app/assets/js/script.js"></script>
</body>
</html>