/* basic javascript form validation */
			function validateForm() {
			var form 	=  document.forms["commentForm"];
				x 		= form["author"].value,
				y 		= form["email"].value,
				z 		= form["comment"].value,
				flag 	= true,
				d1 		= document.getElementById("d1"),
				d2 		= document.getElementById("d2"),
				d3 		= document.getElementById("d3");
				
			if (x == null || x == "") {
				d1.innerHTML = "<?php echo esc_html__('Name is required', 'thebox' ); ?>";
				z = false;
			} else {
				d1.innerHTML = "";
			}
			
			if (y == null || y == "") {
				d2.innerHTML = "<?php echo esc_html__('Email is required', 'thebox' ); ?>";
				z = false;
			} else {
				d2.innerHTML = "";
			}
			
			if (z == null || z == "") {
				d3.innerHTML = "<?php echo esc_html__('Comment is required', 'thebox' ); ?>";
				z = false;
			} else {
				d3.innerHTML = "";
			}
			
			if (z == false) {
				return false;
			}
			
		}