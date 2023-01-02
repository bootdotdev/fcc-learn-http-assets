# XML

We can't talk about JSON without mentioning [XML](https://en.wikipedia.org/wiki/XML#:~:text=Extensible%20Markup%20Language%20(XML)%20is,%2Dreadable%20and%20machine%2Dreadable.). Extensible Markup Language, or `XML` is a text-based format for representing structured information, just like JSON - it just looks a bit different.

## XML syntax

XML is a markup language like [HTML](https://en.wikipedia.org/wiki/HTML), but it's more generalized in that it does *not* use predefined tags. Just like how in JSON an objects' keys can be called anything, XML tags can also have any name.

### XML Example

```xml
<root>
  <id>1</id>
  <genre>Action</genre>
  <title>Iron Man</title>
  <director>Jon Favreau</director>
</root>
```

### The same data but in JSON form:

```json
{
  "id": "1",
  "genre": "Action",
  "title": "Iron Man",
  "director": "Jon Favreau"
}
```
