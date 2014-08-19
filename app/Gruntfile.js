module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		mkdir: {
			all: {
				options: {
					create: ['template/', 'template/hbs', 'template/less', '../dist', '../dist/www', '../dist/www/css', '../dist/www/scripts']
				},
			},
		},
		less: {
		    default: {
		        files: {
		            "../dist/www/css/style.css": "template/less/style.less"
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
				'../dist/www/css/style.css': ['../dist/www/css/style.css']
				}
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: '../dist/www/css/',
				src: ['*.css', '!*.min.css'],
				dest: '../dist/www/css/',
				ext: '.min.css'
			}
		},
		browserSync: {
	     	default_options: {
		       bsFiles: {
		         src: [
		           "../dist/www/css/*.css",
		           "../dist/www/js/*.js",
		           "../dist/www/*.html"
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
				files: "template/less/*.less",
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