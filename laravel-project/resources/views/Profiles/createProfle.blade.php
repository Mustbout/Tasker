<x-master title="Profiles/create">
    <h3>Ajouter Profile</h3>
    @if($errors->any())
    <x-alert type='danger'>
        <h6>Errors : </h6>
        <ul>
            @foreach ($errors->all() as $error)
            <li>{{ $error  }} </li>
            @endforeach
        </ul>
    </x-alert>
    @endif
    <form action="{{ route('profiles.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="mb-3">
            <labelclass="form-label">Name</label>
                <input type="text" name="name" class="form-control" value="{{ old('name') }}" />
                <small id="helpId" class="text-danger">
                    @error("name")
                    {{ $message }}
                    @enderror
                </small>

        </div>
        <div class="mb-3">
            <labelclass="form-label">Email</label>
                <input type="text" name="email" class="form-control" placeholder="ExempleName@gmail.com" value="{{ old('email') }}" />
                <small id="helpId" class="text-danger">
                    @error("email")
                    {{ $message }}
                    @enderror
                </small>
        </div>
        <div class="mb-3">
            <labelclass="form-label">password</label>
                <input type="password" name="password" class="form-control" value="123456789" value="{{ old('password') }}" />
                <small id="helpId" class="text-danger">
                    @error("password")
                    {{ $message }}
                    @enderror
                </small>
        </div>

        <div class="mb-3">
            <labelclass="form-label">Confirmation password</label>
                <input type="password" name="password_confirmation" class="form-control" value="123456789" value="{{ old('password_confirmation') }}" />
        </div>
        <div class="mb-3">
            <labelclass="form-label">description</label>
                <textarea name="description" class="form-control" rows="4">{{ old('description') }}
                </textarea>
                <small id="helpId" class="text-danger">
                    @error("description")
                    {{ $message }}
                    @enderror
                </small>
        </div>

        <div class="mb-3">
            <label class="form-label">Image</label>
            <input type="file" name="image" class="form-control" value="{{ old('image') }}" />
        </div>
        <div class="mb-3 d-grid">
            <button class="btn btn-primary btn-block">
                Submit
            </button>
        </div>
    </form>


</x-master>