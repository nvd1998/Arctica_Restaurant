let nut = document.querySelectorAll("._nutslide ul li");
console.log(nut);
let slide = document.querySelectorAll(".slogan ul li.sl");
for(let i = 0; i< nut.length;i++){
	nut[i].onclick = function(){
		clearInterval(auto_run);
		for(let i = 0; i< nut.length; i++){
			nut[i].classList.remove("active_btn");
		}
		this.classList.add("active_btn");
		let stt = i;
		var nutkichhoat = this;
		for (var vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {
		}
		
		for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('activebot');
				slide[vitrinut].classList.add('activebot');
			}
		console.log(vitrinut);

	}
}
let x = 0;
let max = slide.length;
console.log(max);
auto_run = setInterval(() => {
	nut[x].classList.remove("active_btn");
	slide[x].classList.remove("activebot");
	x++;
	if(x==max){
		x=0;
		nut[max-1].classList.remove("active_btn");
		nut[0].classList.add("active_btn");
		slide[max-1].classList.remove("activebot");
		slide[0].classList.add("activebot");
	}
	else{
		nut[x].classList.add("active_btn");
		slide[x].classList.add("activebot");
		console.log(x);
	}
}, 4000)