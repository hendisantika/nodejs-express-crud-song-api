# nodejs-express-crud-song-api

#### Things to do :

1. `git clone git@github.com:hendisantika/nodejs-express-crud-song-api.git`
2. `cd nodejs-express-crud-song-api`
3. `npm install`
4. `node index.js`

#### Screen shot

Add new Song

`POST /song`

```json
{
	"title": "Pupus",
    "genre": "Pop",
    "singer": "Dewa19",
	"rating": 7
}
```

![Add new song]()

Get all songs

`GET /songs`

![Get All songs](img/)

Get song by Id

`GET /song/:songId`

![Get Song Id](img)

Update song by Id

`PUT /song/songId`

![Update Song by Id]()