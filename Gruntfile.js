module.exports = function (grunt) {

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						width: 165,
						suffix: '_small',
						quality: 40
					}]
				},
				files: [{
					expand: true,
					src: ['pizza.png'],
					cwd: 'views/images/',
					dest: 'views/dist/'
				}]
			}
		},
		jsdoc : {
			dist: {
				src : ['views/js/*.js'],
				options: {
					destination: 'doc'
				}
			}
		}
	});

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.registerTask('default', ['responsive_images']);
};