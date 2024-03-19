<x-master title="Profiles">
    <h1>Profiles</h1>

    <!-- <table class="table">
        <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Email</th>
            <th>description</th>
            <th>Action</th>
        </tr>
        @foreach ($profiles as $profile)
        <tr>
            <td>{{ $profile->id }}</td>
            <td>{{ $profile->name }}</td>
            <td>{{ $profile->email }}</td>
            <td>{{ Str::limit($profile->description,50) }}</td>
            <td><a name="" id="" href=" {{ route('profiles.show',$profile->id) }} " role="button" class="btn btn-dark">Afficher plus</a>
            </td>
        </tr>
        @endforeach
    </table>
    {{ $profiles->links() }} -->
    <div class="row">
        @foreach ($profiles as $profile)
        <x-card :profile="$profile" />
        @endforeach
    </div>
</x-master>