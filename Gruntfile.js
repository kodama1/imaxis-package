module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		mkdir: {
			all: {
				options: {
					create: ['www', 'www/less', 'www/css', 'www/js']
				},
			},
		},
		less: {
		    default: {
		        files: {
		            "www/css/style.css": "www/less/style.less"
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
				'www/css/style.css': ['www/css/style.css']
				}
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'www/css/',
				src: ['*.css', '!*.min.css'],
				dest: 'www/css/',
				ext: '.min.css'
			}
		},
		browserSync: {
	     	default_options: {
		       bsFiles: {
		         src: [
		           "www/css/*.css",
		           "www/js/*.js",
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
				files: "www/less/*.less",
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
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.registerTask('init', ['mkdir']);
	grunt.registerTask('default', ['less', 'cmq', 'cssmin', 'browserSync', 'watch']);


}