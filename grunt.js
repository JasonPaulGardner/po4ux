/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-smushit');
  grunt.loadNpmTasks('grunt-contrib-mincss');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'YOUR_NAME; Licensed MIT */'
    },
    min: {
      dist: {
        src: 'src/js/impress.js',
        dest: 'dist/js/impress.js'
      }
    },
    uglify: {},
    copy: {
      dist: {
        files: {
          "dist/fonts/": "src/fonts/*",
          "dist/index.html": "src/index.html"
        }
      }
    },
    smushit: {
       dist:{
           src:'src/images',
           dest:'dist/images'
       }
    },
    mincss: {
       compress: {
          files: {
            "dist/css/po.css": "src/css/po.css"
          }
       }
    },
  });

  

  // Default task.
  grunt.registerTask('default', 'min mincss smushit copy');

};
