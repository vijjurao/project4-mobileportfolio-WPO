module.exports = function (grunt) {

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						width: widht 165,
						suffix: '_small',
						quality: 40
					},{
						height: 325,
						suffix: '_medium',
						quality: 60
					}]
				},
				files: [{
					expand: true,
					src: ['pizza.png'],
					cwd: 'images',
					dest: 'dist'
				}]
			}
		}
	});

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
};