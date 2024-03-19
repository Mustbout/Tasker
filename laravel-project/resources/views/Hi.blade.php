<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
@extends("layouts.master")

@section("titre")
    Home
@endsection
@section("main")
    <h1>Hello my friend {{ $firstName ." ". $lastName }} </h1>
    <!-- @foreach($cours as $coure)
        <li>{{ $coure }}</li>
    @endforeach -->
    <!-- @if (count($cours) > 0)
        <table border="1" width="100%">
            <tr>
                <th>Cours</th>
            </tr>
@foreach($cours as $coure)
            <tr>
                <td>{{ $coure }}</td>
        </tr>
        @endforeach
        </tr>
    </table>
    @else
        pas de coure pour l'instant
@endif -->

    @unless (count($cours) > 0)
        pas de coure pour l'instant

    @else
        <table border="1" width="100%">
            <tr>
                <th>Cours</th>
            </tr>
            @foreach($cours as $coure)
                <tr>
                    <td>{{ $coure }}</td>
                </tr>
                @endforeach
                </tr>
        </table>
    @endunless

    @isset($firstName)
        Yesssss
    @endisset

    @empty($firstName)
        firstName is null
    @else
        firstName is {{ $firstName }}
    @endempty

    /////////////////////////////////////////////////// <br>
    @switch($color)
        @case("red")
            Rouge
            @break
        @case("black")
            Noire
            @break
        @default
            color is not founde
    @endswitch
    ///
    <br>
    @php
        $n3 = $n1 + $n2
    @endphp
    {{ $n3 }}
@endsection
</body>

</html>
