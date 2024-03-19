@props(["users"])
<div>

    <table class="table">
        <tr>
            <th>#Id</th>
            <th>Nom</th>
            <th>Age</th>
        </tr>
        @foreach($users as $user)
        <tr>
            <td>{{$user["id"]}}</td>
            <td>{{$user["nom"]}}</td>
            <td>{{$user["age"]}}</td>
        </tr>
        @endforeach
    </table>
</div>