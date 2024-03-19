<x-master title="Log in">
    <h3 class="text-center">Autentifiaction</h3>
    <form class="row justify-content-center" action="{{ route('login') }}" method="post">

        <div class="card w-50 m-5">
            <div class="card-body">
                @csrf
                <div class="mb-6">
                    <label class="form-label">login</label>
                    <input type="text" name="login" class="form-control mb-3" value="{{ old('login') }}">
                </div>
                <div class="mb-3 text-danger">
                    @error("login")
                    {{ $message }}
                    @enderror
                </div>
                <div class="mb-6">
                    <label class="form-label">Mot de passe</label>
                    <input type="password" name="password" class="form-control mb-3">
                </div>
                <div class="d-grid mb-3">
                    <button class="btn btn-dark">Se conecter</button>
                </div>

            </div>
        </div>

    </form>



</x-master>