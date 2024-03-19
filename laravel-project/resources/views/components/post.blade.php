<div class=" container mx-auto w-75">
    <div class="card  my-2 bg-light">
        <div class="card-body">
            <blockquote class="blockquote mb-0 ">
                <div class=" card card-header flex ">

                    <div class=" position-relative"> <img src="{{ asset('storage/' . $publication->profile->image) }}"
                            alt="" width="50px" height="50px" class=" rounded-circle">

                        <span class="badge bg-dark">{{ $publication->profile->name }}</span>
                        <a href="{{ route('profiles.show', $publication->profile->id) }}" class=" stretched-link"></a>
                    </div>
                </div>
                <hr>
                <div>
                    <h5 class=" text-center">
                        <div>{{ 'titre : ' . $publication->titre }}</div>
                        <div class="">
                            @auth
                                @if ($canDelete)
                                    <span class=" z-50">
                                        <a class="btn btn-dark float-end btn-sm mx-2"
                                            href="{{ route('publication.edit', $publication->id) }}">
                                            Modifier
                                        </a>
                                    </span>
                                    <span class=" z-50">
                                        <form action="{{ route('publication.destroy', $publication->id) }}" method="post"
                                            onsubmit="return confirm('voulez vous vraiment supprimer cette publication ')">
                                            @csrf
                                            @method('DELETE')
                                            <button class="btn btn-danger float-end btn-sm mx-2">suppremer</button>

                                        </form>

                                    </span>
                                @endif
                            @endauth
                        </div>
                    </h5>
                    <hr>

                    <p>
                        {{ $publication->body }}</p>
                    @empty(!$publication->image)
                        <footer class="">
                            <img class=" img-fluid w-100" width="400px" src="{{ asset('storage/' . $publication->image) }}"
                                class="img-fluid rounded-top" alt="" />
                        </footer>
                    @endempty
                </div>
            </blockquote>
        </div>
    </div>
</div>
