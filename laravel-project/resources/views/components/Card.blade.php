<div class="col-sm-4  ">
    <div class="card border-black shadow-lg mb-4">
        <div>
            <img class="card-img-top" src="{{'storage/'.$profile->image}}" alt="image">
        </div>
        <div class="card-body">
            <h4 class="card-title"> {{ $profile->name }} </h4>
            <p class="card-text"> {{ Str::limit($profile->description,80) }} </p>
            <a href=" {{ route('profiles.show',$profile->id) }} " class="stretched-link ">
            </a>
        </div>
        <div class="card-footer text-muted text-center  d-flex  " style="z-index: 1; ">
            <form class="" action="{{ route('profiles.destroy',$profile->id) }}" method="POST">
                @method("DELETE")
                @csrf
                <button class="btn btn-danger">Suppremer</button>
            </form>
            <form class="mx-2" action="{{ route('profiles.edit',$profile->id) }}" method="GET">
                @csrf
                <button class="btn btn-success">Modifier</button>
            </form>
        </div>
    </div>
</div>