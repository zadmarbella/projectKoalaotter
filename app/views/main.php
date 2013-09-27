<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" ng-app="projectMomoTestPage">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Koalaotter Test Page</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="description" content="Project Koalaotter Test Page">

    <script src="lib/js/angular.js"></script>
    <script src="lib/js/angular-resource.js"></script>
    <script src="lib/js/angular-sanitize.js"></script>
    <script src="lib/js/ui-bootstrap-tpls.js"></script>

    <script src="js/app.js"></script>
    <script src="js/directives.js"></script>
    <script src="js/services.js"></script>
    <script src="js/controllers.js"></script>


    <link href="lib/css/bootstrap.css" rel="stylesheet" />
    <link href="css/bootstrap-theme.css" rel="stylesheet" />
  </head>

  <body class="ng-cloak"ng-controller="MainCtrl" >

  <header class="navbar navbar-default navbar-fixed-top" >
    <ul class="nav navbar-nav">
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#"> Project Koalaotter <b class="caret"></b></a>
      <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
        <li><a href="#home">home</a></li>
        <li><a href="#apitest">apiTest</a></li>
        <li><a href="#login">login</a></li>
      </ul>
   </li>
  </header>

    <div style="margin: 64px;">

      <div class="row-fluid">
        <div class="span">
          <h1>Project Koalaotter</h1>
          <div ng-view></div>
        </div>
      </div>

    </div>
  </body>

</html>