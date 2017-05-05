# Image Search Abstraction Layer - FreeCodeCamp

### Description:

1. `GET [project_url]/search/:searchTerm?offset=1`
    1. When the user passes a search term the API returns a JSON with the result of the abstract image search.
    2. The results are paginated and the navigation can be done trough the optional parameter `offset`. The API returns 10 results per page.
2. `GET [project_url]/history`
    1. Returns the search terms of the last 10 searches.

#### Search Example:
* [https://fcc-image-search.glitch.me/search/cats?offset=1](https://fcc-image-search.glitch.me/search/cats?offset=1)

#### Output:
```json
[{
    "url": "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg",
    "snippet": "Cat Behavior: 17 Things Your Cat Wants to Tell You | Reader's Digest",
    "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjPlK7k97vKZWvnvSXAKFErMI4mWXsHZ1goZbs-BSLAVDXtvLY3o_REn0",
    "context": "http://www.rd.com/advice/pets/how-to-depre-your-cats-behavior/"
}]
```
#### Consult History Example:
* [https://fcc-image-search.glitch.me/history](https://fcc-image-search.glitch.me/history)

#### Output:
```json
[{
    "term": "cats",
    "when": "2017-05-05T19:12:12.388Z"
}]
```