
Twig.extendFilter('clean_class', function(value) {
	return value;
});

Twig.extendFunction('addClass', function(classes) {
  return 'class="' + classes.join(' ') + '"';
});