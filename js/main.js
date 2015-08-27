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

$(document).ready(function(e) {
	
});

function gotoPassPage(name,destination) {
	$('#passName').text(name);
	$('#passButton').data('link',destination);
	window.location.hash = "pagePass";
};

var numPlayers,
playerName,
curPlayer;
$('#dmSetupCommitButton').click(function() {
	numPlayers = parseInt($('#dmSetupNumPlayers').data('val'));
	playerName = []; //Wipe array
	var i;
	for (i=0;i<numPlayers;i++) {
		playerName[i] = "the next player";
	}
	playerName[0] = "the first player";
	curPlayer = 0;
	gotoPassPage(playerName[curPlayer],'pageSetupPnP2');
});

$('#playerSetupCommitButton').click(function() {
	curPlayer++;
	gotoPassPage(playerName[curPlayer],'pageSetupPnP2');
});

$(document).on('pagehide','pageSetupPnP2',function() {
	$('#pageSetupPnP2').scrollTop(0);
});

<!-- TODO: Use numerical staging for this. 0 = setup, 1 = revision, 2 = playing I guess? -->