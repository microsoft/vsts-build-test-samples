
var gulp = require('gulp');

// takes in a callback so the engine knows when it'll be done
gulp.task('one', function(cb) {
	console.log('running task one...');
    setTimeout(function() {
    	console.log('done running task one');
    	cb();
    }, 500);
});

// identifies a dependent task must be complete before this one begins
gulp.task('two', ['one'], function(cb) {
	console.log('running task two...');
    setTimeout(function() {
    	console.log('done running task two');
    	cb();
    }, 500);
});

gulp.task('default', ['one', 'two']);