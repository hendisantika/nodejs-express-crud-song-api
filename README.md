# nodejs-express-crud-song-api

#### Things to do :

1. `git clone git@github.com:hendisantika/nodejs-express-crud-song-api.git`
2. `cd nodejs-express-crud-song-api`
3. `npm install`
4. `node index.js`

#### Screen shot

Add new Song data

`POST /song`

```json
{
	"title": "Pupus",
    "genre": "Pop",
    "singer": "Dewa19",
	"rating": 7
}
```

![Add new song data](img/add.png "Add New Song data")

Get all songs

`GET /songs`

![Get All songs](img/list.png "Get All songs")

Get song by Id

`GET /song/:songId`
```json
localhost:3000/song/5c5af6aec68704c39af3bc6a
```

![Get Song Id](img/find.png "Get Song by Id")

Update song by Id

`PUT /song/songId`

![Update Song by Id](img/update.png "Update Song by Id")

Delete Song

`DELETE /song/:songId `

![Delete Song by Id](img/delete.png "Delete Song Id")