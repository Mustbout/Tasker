<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite(['resources/js/app.js'])
</head>

<body>

    <div class="container m-3 card mx-auto p-2">
        <nav class="nav justify-content-center  ">
            <a class="nav-link" href="{{ route('index.stagieires') }}" aria-current="page">list stagiaires</a>
            <a class="nav-link" href="{{ route('create.stagieires') }}">Ajouter stagiare</a>
        </nav>


        <div class="table-responsive-sm">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">age</th>
                        <th scope="col">image</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($stagiaires as $stg)
                    <tr>
                        <td> {{ $stg->id }} </td>
                        <td> {{ $stg->name }} </td>
                        <td> {{ $stg->age }} </td>
                        <td> {{ $stg->data }} </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

</body>

</html>