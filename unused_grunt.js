			css : {
				files : [ 'scss/**/*.scss', '*.html' ],
				tasks : [ 'sass', 'autoprefixer' ],
				options : {
					livereload : true,
					spawn : false,
				}
			}
		},

		sass : {
			dist : {
				options : {
					compass : false,
					style : 'nested',
				},
				files : {
					'css/build/style.css' : 'scss/pages/style.scss'
				}
			}
		},

		autoprefixer : {

			options : {
				browsers : [ 'last 4 versions' ]
			},
			multiple_files : {
				expand : true,
				flatten : true,
				src : 'css/build/*.css',
				dest : 'css/build/prefixed/'
			}
		},