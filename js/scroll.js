// When the document is loaded...
$(document).ready(function () {
	// Scroll the whole document
	$('#home').localScroll({
		target: 'body',
		duration: 400
	});
})

$("a[href='#top']").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "400");
	return false;
  });