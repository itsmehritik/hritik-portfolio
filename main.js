// Load About page content
$('#about-link').click(function(e) {
	e.preventDefault();
	$('#about-content').load('about.html');
});

// Load Contact page content
$('#contact-link').click(function(e) {
	e.preventDefault();
	$('#contact-content').load('contact.html');
});
