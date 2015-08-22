// JavaScript Document

$('.navButton').click(function() {
	location.href='#'.concat($(this).data('link'));
});

$('.externalLink').click(function() {
	window.open($(this).data('link'),'_system');
});

$('#dmSetupSkill3Cost').hide();
$('#dmSetupSkill3Enable').change(function() {
	if($(this).is(':checked')) {
		$('#dmSetupSkill3Cost').show();
	} else {
		$('#dmSetupSkill3Cost').hide();
	}
});

