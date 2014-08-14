module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		less:{
			compile:{
				files:{
					'css/style.css' : 'less/style.less'
				},
				options:{
					compress: true
				}
			}
		},
		cmq: {
			options: {
			  log: false
			},
			your_target: {
			  files: {
			    'css/style.css': ['css/style.css']
			  }
			}
		},
		cssmin: {
		  minify: {
		    expand: true,
		    cwd: 'css/',
		    src: ['*.css', '!*.min.css'],
		    dest: 'css/',
		    ext: '.min.css'
		  }
		},
		browserSync: {
	     	default_options: {
		       bsFiles: {
		         src: [
		           "css/*.css",
		           "js/*.js",
		           "*.html"
		         ]
	       		},
		       options: {
		         watchTask: true,
		         server:{
		         	baseDir: "./"
		         }
		       }
	     	}
   		},
   		watch: {
			less: {
				files: "less/*.less",
				tasks: [
				 "less",
				 "cssmin"
				]
			}
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less', 'cmq', 'cssmin', 'browserSync', 'watch']);


}