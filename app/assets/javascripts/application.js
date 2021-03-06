// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bootstrap-datepicker
//= require bootstrap-datetimepicker
//= require locales/bootstrap-datetimepicker.ro
//= require_tree .

$(document).ready(function(){
  $('.date_input[data-calendar="datetime"]').datetimepicker({
    format: "dd/MM/yyyy - hh:mm"
  , language: 'ro'
  , pickSeconds: false
  });

  $('.date_input[data-calendar="date"]').datepicker({
    language: "ro"
  , orientation: "bottom right"
  , autoclose: true
  , todayHighlight: true
  });

  $('.date_input[data-calendar="year"]').datepicker({
    language: "ro"
  , orientation: "bottom right"
  , autoclose: true
  , todayHighlight: true
  , startView: 2
  });
})
