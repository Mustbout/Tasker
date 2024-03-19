<x-master title="Profiles">
    <h1>Request / Responsse </h1>

    <div>
        <form method="post" action=" {{ route('form') }} ">
            @csrf
            <input type="date" name="input_field" class=" form-control my-5">
            <input type="submit" value="Envoyer" class="btn btn-primary btn-sm w-100">
        </form>
    </div>
</x-master>
