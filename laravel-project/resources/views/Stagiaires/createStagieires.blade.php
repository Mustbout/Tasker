<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @vite(['resources/js/app.js'])
</head>

<body>

    <div class="container m-3  mx-auto p-2">
        <nav class="nav justify-content-center  ">
            <a class="nav-link" href="{{ route('index.stagieires') }}" aria-current="page">list stagiaires</a>
            <a class="nav-link" href="{{ route('create.stagieires') }}">Ajouter stagiare</a>
        </nav>
        <form action=" {{ route('store.stagieires') }} " method="POST" enctype="multipart/form-data">
            @csrf
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" name="name" class="form-control" />
            </div>
            <div class="mb-3">
                <label class="form-label">Age</label>
                <input type="numbrer" name="age" class="form-control" />
            </div>
            <div class="mb-3">
                <label class="form-label">image</label>
                <input type="file" name="data" class="form-control" />
            </div>
            <div class="mb-3">
                <button class="btn btn-primary w-100">Ajouter</button>
            </div>
        </form>



    </div>

</body>

</html>