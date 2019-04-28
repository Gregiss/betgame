<?php if(isset($work)){?>
<html>
<head>
  <meta charset="UTF-8">
  <title><?php echo $title;?> - Ocorreu um erro</title>
  <meta name="description" content="<?php echo $title;?>">
  <meta name="keywords" content="<?php echo $keywords;?>">
  <meta name="author" content="kaway404">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/assets/css/style.css?version=1" rel="stylesheet" type="text/css">
  <link href="/assets/css/theme_<?php echo $theme;?>.css?version=1" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <script
  src="https://code.jquery.com/jquery-3.4.0.js"
  integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo="
  crossorigin="anonymous"></script>
</head>

<body>

<video src="/assets/body.webm" class="background_video" style="height: 100%;" autoplay loop></video>

<div class="trans" style="height: 100%;">

<div class="center" style="transform: translate(-50%, -50%);">
<h1>Estamos em manunteção</h1>
<h2><?php echo $errormessage;?></h2>
</div>

</div>


<script>
$("body").css("overflow", "hidden");
</script>

<div class="bottom"></div>

</body>

</html>

<?php } else{ ?>

<html>
<head>
<meta charset="UTF-8">
<title>404 NOT FOUND</title>
<meta name="author" content="kaway404">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="/assets/css/style.css?version=1" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
<script
src="https://code.jquery.com/jquery-3.4.0.js"
integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo="
crossorigin="anonymous"></script>
</head>

<body>

<video src="/assets/body.webm" class="background_video" style="height: 100%;" autoplay loop></video>

<div class="trans" style="height: 100%;">

<div class="center" style="transform: translate(-50%, -50%); color: #fff;">
<h1>404 NOT FOUND</h1>
<h2>Alguma coisa deu errado :/</h2>
</div>

</div>


<script>
$("body").css("overflow", "hidden");
</script>

<div class="bottom"></div>

</body>

</html>
<?php } ?>