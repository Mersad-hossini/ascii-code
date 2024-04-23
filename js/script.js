let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let heading = $.getElementById("heading")
let titleKeyCode = $.getElementById("keyCode")
let keyEvent = $.getElementById("key")
let locationEvent = $.getElementById("location")
let locantion_name = $.getElementById("locantion-name")
let whichEvent = $.getElementById("which")
let codeEvent = $.getElementById("code")
function keyCodesEvnt(e) {
	e.preventDefault()
	
	keyEvent.innerHTML = e.key
	heading.innerHTML = `SabzLearn KeyCode ${e.keyCode}`
	titleKeyCode.innerHTML = e.keyCode
	locationEvent.innerHTML = e.location
	whichEvent.innerHTML = e.which
	codeEvent.innerHTML = e.code

	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
}

document.body.addEventListener('keydown', keyCodesEvnt)	