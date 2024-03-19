<x-master title="Publications">
    <h1>Publications</h1>
    @foreach ($publications as $publication)
        <x-post canDelete="{{ auth()->user()->id === $publication->profile_id }}" :publication='$publication' />
    @endforeach
</x-master>
