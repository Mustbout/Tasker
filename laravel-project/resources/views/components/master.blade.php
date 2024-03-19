<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social network | @yield('titre')</title>
</head>

<body style="font-family:Verdana, Geneva, Tahoma, sans-serif;">
    @include('partiels.nav')
    <main>
        @yield('main')
    </main>
    @include('partiels.footer')
</body>

</html> -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/js/app.js'])
    {{-- @vite('resources/css/app.css') --}}
    <title>Social network | {{ $title }}</title>

</head>

<body>
    <div class="container">
        @include('partiels.nav')
        <main>
            @if (session()->has('success'))
                <x-alert type='success'>
                    {{ session('success') }}
                </x-alert>
            @endif
            {{ $slot }}
        </main>
        @include('partiels.footer')
    </div>
</body>

</html>
