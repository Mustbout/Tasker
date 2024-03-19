<nav class="nav justify-content-center mt-2">
    <a class="nav-link" href="{{ route('homepage') }}" aria-current="page">Accuiel</a>
    <a class="nav-link" href="{{ route('profiles.index') }}">tout les profiles</a>
    <a class="nav-link" href="{{ route('setting.index') }}">mon informmations</a>
    <a class="nav-link" href="{{ route('profiles.create') }}">Ajouter profile</a>
    <a class="nav-link" href="{{ route('publication.create') }}">Ajouter publication</a>
    @guest
        <a class="btn btn-dark mx-2" href="{{ route('login.show') }}">se connecter</a>
    @endguest
    @auth
        <div class="btn-group">
        
            <a class="nav-link" href="{{ route('publication.index') }}"> publication</a>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                {{ auth()->user()->email }}
            </button>
            <div class="dropdown-menu dropdown-menu-start" aria-labelledby="triggerId">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="{{ route('logout.login') }}">Deconnection</a>
            </div>
        </div>
    @endauth

</nav>
