// JavaScript Document

$('.navButton').click(function() {
	location.href='#'.concat($(this).data('link'));
});

$('.externalLink').click(function() {
	window.open($(this).data('link'),'_system');
});