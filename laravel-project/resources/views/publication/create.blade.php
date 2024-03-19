<x-master title="Profiles/create">
    <h3>Ajouter Publication</h3>
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
    <form action="{{ route('publication.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="mb-3">
            <labelclass="form-label">Titre</label>
            <input type="text" name="titre" class="form-control" value="{{ old('titre') }}" />
            <small id="helpId" class="text-danger">
                @error('titre')
                    {{ $message }}
                @enderror
            </small>

        </div>

        <div class="mb-3">
            <labelclass="form-label">Description</label>
            <textarea name="body" class="form-control" rows="4">{{ old('body') }}
                </textarea>
            <small id="helpId" class="text-danger">
                @error('body')
                    {{ $message }}
                @enderror
            </small>
        </div>

        <div class="mb-3">
            <label class="form-label">Image</label>
            <input type="file" name="image" class="form-control" value="{{ old('image') }}" />
            <small id="helpId" class="text-danger">
                @error('image')
                    {{ $message }}
                @enderror
            </small>
        </div>
        <div class="mb-3 d-grid">
            <button class="btn btn-primary btn-block">
                Ajouter
            </button>
        </div>
    </form>


</x-master>
