calendar notes

bottom of leadmain
<!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <title>@title</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

    <!--Table Sorter-->
    <script src="@routes.Assets.at("javascripts/sortable.js")" type="text/javascript"></script>

    <script src="@routes.Assets.at("javascripts/moment.min.js")" type="text/javascript"></script>

    <script src="@routes.Assets.at("javascripts/fullcalendar.min.js")" type="text/javascript"></script>



    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <link rel="stylesheet" media="screen" href="@routes.Assets.at("bootstrap/css/bootstrap.min.css")">
    <link rel="stylesheet" media="screen" href="@routes.Assets.at("stylesheets/main.css")">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link rel="stylesheet" media="screen" href="@routes.Assets.at("stylesheets/dashboard.css")">

    <link rel="stylesheet" media="screen" href="@routes.Assets.at("bootstrap/css/intakeleaddetails2.css")">
    <link rel="stylesheet" media="screen" href="@routes.Assets.at("stylesheets/fullcalendar.css")">


    <script type="text/javascript">


    $(document).ready(function() {

		$('#calendar2').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultDate: '2015-02-12',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '2015-09-01'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2015-09-28'
				}
			]
		});
	});

    </script>


</head>





took this out of div id=calendar: style="max-width: 900px; margin: 0 auto;"

out of leadmain:  <style type="text/css">
                      .bs-example{
                      margin: 20px;
                      }
                  </style>

                  <!-- in top script tag -->
                  <!-- also took this out of leadmaincalendar -->

                  $(document).ready(function () {
                      $('.dropdown-toggle').dropdown();
                  });


                  $(document).ready(function () {
    $('.dropdown-toggle').dropdown();

});



<select name="mobility" value='@intakeLeadForm("mobility").value' id="mobilityPicker">
            <option value=""></option>
            <option value="without Help" @if(intakeLeadForm("mobility").value.equals("without Help")) { selected }>w/o Help</option>
            <option value="without Cane" @if(intakeLeadForm("mobility").value.equals("without Cane")) { selected }>w/ Cane</option>
            <option value="with Walker" @if(intakeLeadForm("mobility").value.equals("with Walker")) { selected }>w/ Walker</option>
            <option value="with Wheelchair" @if(intakeLeadForm("mobility").value.equals("with Wheelchair")) { selected }>w/ Wheelchair</option>
            <option value="with Personal Assist" @if(intakeLeadForm("mobility").value.equals("with Personal Assist")) { selected }>w/ Personal Assist</option>
            <option value="with Crutches" @if(intakeLeadForm("mobility").value.equals("with Crutches")) { selected }>w/ Crutches</option>
            <option value="Ambulate Indoors" @if(intakeLeadForm("mobility").value.equals("Ambulate Indoors")) { selected }>Ambulate Indoors</option>
            <option value="Ambulate Indoors & Outdoors" @if(intakeLeadForm("mobility").value.equals("Ambulate Indoors & Outdoors")) { selected }>Ambulate Indoors & Outdoors</option>
        </select>
@if(intakeLeadForm("mobility").value.equals("with Wheelchair")) { selected }
@if(intakeLeadForm("service_req_type").value.equals("Private Pay Check Medicaid")) { selected }
@if(intakeLeadForm("payment_method").value.equals("Private Pay Check Medicaid")) { selected }

admin Calendar best place to test jquery versions
put minified versions at bottom

from leadmain
        <style type="text/css">
               .bs-example{
               margin: 20px;
               }


               <!--Will's CSS for Schedule table-->

               #willsTable tr th {
               border:1px solid black;
               padding:10px;
               }
               #willsTable tr th {
               background-color:#C2E0FF;
               border:1px solid black;
               padding:10px;
               }
               #willsTable tr:nth-child(odd) {
               background:lightgrey;
               }
               #willsTable td {
               text-align: center;
               vertical-align: middle;
               border:1px solid black;
               padding:5px;
               }


           </style>




        <select name="nearest_transport" value='@intakeLeadForm("nearest_transport").value' id="transport">
                    <option value=""></option>
                    <option value="LIRR" @if(intakeLeadForm("nearest_transport").value.equals("LIRR") { selected }>LIRR-Train</option>
                    <option value="MetroNorth" @if(intakeLeadForm("nearest_transport").value.equals("MetroNorth") { selected }>MetroNorth-Train</option>
                    <option value="MTA-Subway" @if(intakeLeadForm("nearest_transport").value.equals("MTA-Subway") { selected }>MTA-Subway</option>
                    <option value="Bus" @if(intakeLeadForm("nearest_transport").value.equals("Bus") { selected }>Bus</option>
                </select>
