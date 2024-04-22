let vid = document.querySelectorAll('.video-stream.html5-main-video')[0];
let lastVid = '';

let unlock = function(e){
	
	let delay = 1000;
	
	let elements = setTimeout(function func1() {  

		let popup = document.querySelectorAll('ytd-enforcement-message-view-model')[0];
		
		if(popup !== undefined)
		{
			popup.style.display = 'none';
			popup.style.visibility = 'hidden';
			
			let area = document.querySelectorAll('tp-yt-iron-overlay-backdrop')[0];
			area.style.display = 'none';
			area.style.visibility = 'hidden';
			
			clearTimeout(elements);
			return;
		}
			
		elements = setTimeout(func1, delay);
	
	}, delay);
		
	let listeners = setTimeout(function func2() {  
		
		document.addEventListener('scroll', (e) => {
		e.stopImmediatePropagation();
		e.stopPropagation();
		}, true);
		
		document.addEventListener('DOMMouseScroll', (e) => {
			e.stopImmediatePropagation();
			e.stopPropagation();
		}, true);
		
		document.addEventListener('wheel', (e) => {
			e.stopImmediatePropagation();
			e.stopPropagation();
		}, true);
		
		document.addEventListener('mousewheel', (e) => {
			e.stopImmediatePropagation();
			e.stopPropagation();
		}, true);
		
	}, delay*100);
	
	let playingNum = 0;
	let playing = setTimeout(function func3(){

		let vid = document.querySelectorAll('.video-stream.html5-main-video')[0];
	
		playingNum += delay;
		
		if(playingNum > 1000){
			clearTimeout(playing);
			return;
		}
		
		if(vid !== undefined)
			if(vid.paused === true)
				vid.play();
			
		playing = setTimeout(func3, delay);
		
	}, delay);
};

let watch = setTimeout(function func0(){

	let vid = document.querySelectorAll('.video-stream.html5-main-video')[0];
	
	if(vid !== undefined && vid.src !== undefined){
		if(vid.src !== lastVid){
			lastVid = vid.src;
			unlock(new Event('srcChange'));
		}
	}
	
	watch = setTimeout(func0, 100);
	
}, 100);

window.addEventListener('load', unlock);
window.addEventListener('popstate', unlock);
