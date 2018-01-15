function validateEmail( string ) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( string );
}


function returnRemainingSeconds( targetDate, originDate ) {
	if ( originDate ) {
		return targetDate - originDate;
	} else {
		return targetDate - new Date().getTime();
	}
}


function returnRemainingTime( targetDate, originDate ) {
	var remainingTime = ~~(returnRemainingSeconds( targetDate, originDate ) / 1000 );
	//returning D, H, M, S
	return [
		remainingTime / (60 * 60 * 24),
        (remainingTime % (60 * 60 * 24)) / (60 * 60),
        (remainingTime % (60 * 60)) / 60,
        remainingTime % 60
	]
}


function convertToTimestamp( dateString ) {
	var d = new Date( dateString );
	return d.getTime();
}

function replaceAll( str, find, replace ) {
	function escapeRegExp(str) {
		return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}
	return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}


function hashCleanURL( url ) {
	if ( !url ) {
		var url = window.location.href;
	}

	if ( url.indexOf('#') >= 0 ) {
		var position = url.indexOf('#');
	} else {
		return url; //is already clean
	}

	return url.substring( 0, position );
}