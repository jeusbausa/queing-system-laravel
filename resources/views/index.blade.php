<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf_token" content="{{csrf_token()}}">
    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('css/app.css')}}">

    </style>
</head>

<body>
    <div id="app">

    </div>

    <script src="{{asset('js/app.js')}}"></script>
    <script src="https://kit.fontawesome.com/ce89e23db9.js" crossorigin="anonymous"></script>
</body>

</html>