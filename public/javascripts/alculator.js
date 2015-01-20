//  This should be the first file loaded because it has the namespace definition

Alculator = {}; 
// When there's lots of JS code, you can't guarantee this will be the first thing loaded, so you end up having to use requirejs / commonjs / the AMD pattern
// You end up with things like => Alculator = Alculator || {} ;

Alculator.chug = function chug() {
	// initialize code goes here.
	// What do you want to drink today?
};

Alculator.alculate = function alculate() {
	
}