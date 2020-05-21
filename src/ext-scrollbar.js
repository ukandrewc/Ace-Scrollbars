function AceScrollbars(e) {

	// Add CSS scrollbars
	e.container.insertAdjacentHTML("beforeend", "<div id='ace_pre-v' class='ace_scroll-v'></div><div id='ace_bar-v' class='ace_scroll-v ace_thumb-v'></div>")
	e.container.insertAdjacentHTML("beforeend", "<div id='ace_pre-h' class='ace_scroll-h'></div><div id='ace_bar-h' class='ace_scroll-h ace_thumb-h'></div>")

	// Ace scrollbars
	let gutter = 34
	let sc = document.getElementsByClassName("ace_scrollbar")

	let ro = new MutationObserver(function () {
		resizeScroll()
	})

	// Resize
	ro.observe(e.container, { characterData: true })
	for (s of sc) {
		ro.observe(s.firstElementChild, { attributes: true })
	}

	// Vertical
	let vScale = 1
	let vStart = -1

	let vs = sc[0]
	let tv = document.getElementById("ace_bar-v")

	vs.addEventListener("scroll", function () {
		tv.style.top = vs.scrollTop * vScale + "px"
	})

	// Drag events
	tv.addEventListener("pointerdown", function (e) {
		tv.setPointerCapture(e.pointerId)
		vStart = e.clientY
	})

	tv.addEventListener("pointermove", function (e) {
		if (vStart != -1) {
			vs.scrollTop += (e.clientY - vStart) / vScale
			vStart = e.clientY
		}
	})

	tv.addEventListener("pointerup", function (e) {
		tv.releasePointerCapture(e.pointerId)
		vStart = -1
	})

	tv.previousElementSibling.addEventListener("mousedown", function (e) {
		vs.scrollTop = e.clientY / vScale
	})

	// Horizontal
	let hScale = 1
	let hStart = -1

	let hs = sc[1]
	let th = document.getElementById("ace_bar-h")

	hs.addEventListener("scroll", function () {
		th.style.left = (hs.scrollLeft * hScale) + gutter + "px"
	})

	// Drag events
	th.addEventListener("pointerdown", function (e) {
		th.setPointerCapture(e.pointerId)
		hStart = e.clientX
	})

	th.addEventListener("pointermove", function (e) {
		if (hStart != -1) {
			hs.scrollLeft += (e.clientX - hStart) / hScale
			hStart = e.clientX
		}
	})

	th.addEventListener("pointerup", function (e) {
		th.releasePointerCapture(e.pointerId)
		hStart = -1
	})

	th.previousElementSibling.addEventListener("mousedown", function (e) {
		hs.scrollTop = e.clientX / yScale
	})

	resizeScroll = function () {
		if (vs.clientHeight) {
			vScale = vs.clientHeight / vs.scrollHeight
			tv.style.height = (vs.clientHeight * vScale) + "px"
		}
		else {
			tv.style.height = 0
		}
		if (hs.clientWidth) {
			hScale = hs.clientWidth / hs.scrollWidth
			th.style.width = (hs.clientWidth * hScale) + "px"
			th.style.left = (hs.scrollLeft * hScale) + gutter + "px"
		}
		else {
			th.style.width = 0
		}
		gutter = e.container.getElementsByClassName("ace_gutter")[0].clientWidth
		th.previousElementSibling.style.left = gutter + "px"
	}
}
