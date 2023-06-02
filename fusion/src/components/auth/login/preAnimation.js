// JQUERY
import { $ }  from 'react-jquery-plugin'


function preAnim(){
	// JQUERY
$(function () {
	

	

	setTimeout(function () {
		$(".logoContainer").animate({ scale: 1 }, 700);
		setTimeout(function () {
			$(".logoContainer .loginlogo").addClass("loadIn");
			setTimeout(function () {
				$(".logoContainer .text").addClass("loadIn");
				setTimeout(function () {
					$(".acceptContainer").animate({ height: "431.5px" });
					setTimeout(function () {
						$(".acceptContainer").addClass("loadIn");
						setTimeout(function () {
							$(".formDiv, form h1").addClass("loadIn");
						}, 500);
					}, 500);
				}, 500);
			}, 500);
		}, 500);
	}, 10);
});

}


export default preAnim