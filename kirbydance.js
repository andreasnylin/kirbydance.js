(function() {
	var a = "(>'.')>;<('.'<);^( '.' )^;v( '.' )v;<('.'<);(>'.')>;^( '.' )>;<( '.' )^;<( '.' )>;(>'.'<)".split(";"),
		l = a.length,
		d = document,
		t = document.title,
		i = 0;
	
	window.setInterval(function() {
		d.title = a[i++] + " " + t;
		i >= l&&(i = 0);
	}, 1E3);
})();