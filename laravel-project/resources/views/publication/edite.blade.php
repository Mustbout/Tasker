<x-master title="Profiles/create">
    <h3>Modifier Publication</h3>
    @if ($errors->any())
        <x-alert type='danger'>
            <h6>Errors : </h6>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }} </li>
                @endforeach
            </ul>
        </x-alert>
    @endif
    <form action="{{ route("publication.update", $publication->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="mb-3">
            <labelclass="form-label">Titre</label>
            <input type="text" name="titre" class="form-control" value="{{ old('titre', $publication->titre) }}" />
            <small id="helpId" class="text-danger">
                @error('titre')
                    {{ $message }}
                @enderror
            </small>

        </div>

        <div class="mb-3">
            <labelclass="form-label">Description</label>
            <textarea name="body" class="form-control" rows="4">{{ old('body', $publication->body) }}
                </textarea>
            <small id="helpId" class="text-danger">
                @error('body')
                    {{ $message }}
                @enderror
            </small>
        </div>

        <div class="mb-3">
            <label class="form-label">Image</label>
            <input type="file" name="image" class="form-control" value="{{ old('image', $publication->image) }}" />
            <small id="helpId" class="text-danger">
                @error('image')
                    {{ $message }}
                @enderror
            </small>
            <div class="card text-start container-fluid mx-auto w-50 m-2">
                <img class="card-img-top " src="{{ asset('storage/' . $publication->image) }}" alt="">
            </div>
        </div>
        <div class="mb-3 d-grid">
            <button class="btn btn-primary btn-block">
                Modifier
            </button>
        </div>
    </form>


</x-master>
