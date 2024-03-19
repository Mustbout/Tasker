<x-master title="Profiles">
    <h1>Profiles </h1>

    <div class=" container-fluid mx-auto w-50">
        <div class=" row">

            <div class="card my-2 py-3 ">
                <div class="card">
                    <img class="card-img-top image  mx-auto  " src="{{ asset('storage/' . $profile->image) }}"
                        alt="image" />
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title">#{{ $profile->id }} {{ $profile->name }} </h4>
                    <p class="card-text">created at {{ date($profile->created_at->format('d-m-y')) }}</p>
                    <p class="card-text"> Email : <a href="{{ $profile->email }}"> {{ $profile->email }} </a> </p>
                    <p class="card-text">
                        {{ $profile->description }}
                    </p>
                </div>
                <hr>


            </div>


        </div>

    </div>
    <div class="">
        <h3>Publcations</h3>
        @foreach ($profile->post as $publication)
            <x-post canDelete="{{ auth()->user()->id === $publication->profile_id }}" :publication='$publication' />
        @endforeach
    </div>


</x-master>
