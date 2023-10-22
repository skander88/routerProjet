import { v4 as uuidv4 } from "uuid";
const MovieData = [
  {
    id: uuidv4(),
    Title: "Annabelle",
    Description: "Horror",
    Filmdescription:
      "John Form (Ward Horton) thinks he's found the perfect gift for his expectant wife, Mia (Annabelle Wallis) : a vintage doll in a beautiful white dress. However, the couple's delight doesn't last long: One terrible night, devil worshippers invade their home and launch a violent attack against the couple.",
    PosterURL:
      "https://assets1.ignimgs.com/2019/05/28/annabelle-comes-home-ver2-poster-button-1559085417970.jpg",
    Rating: 7,
    Trailer: "https://www.youtube.com/watch?v=paFgQNPGlsg",
  },
  {
    id: uuidv4(),
    Title: "Spider-Man 3",
    Description: "Action",
    Filmdescription:
      "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",
    PosterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZnWQV-_lMvTFXrQbrgpu8y1j6qaeouFqKzQ&usqp=CAU",
    Rating: 9.5,
    Trailer: "https://www.youtube.com/watch?v=e5wUilOeOmg",
  },
  {
    id: uuidv4(),
    Title: "Ted",
    Description: "Comedy",
    Filmdescription:
      "The film tells the story of John Bennett, a Boston native whose childhood wish brings his teddy bear friend Ted to life. However, in adulthood, Ted and John's friendship begins to interfere with the progression of John's relationship with his girlfriend, Lori Collins.",
    PosterURL:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Ted_%28film%29.png",
    Rating: 8,
    Trailer: "https://www.youtube.com/watch?v=9fbo_pQvU7M",
  },
  {
    id: uuidv4(),
    Title: "Jumanji",
    Description: "Adventure",
    Filmdescription:
      "The story focuses on a group of teenagers who come across Jumanji, now transformed into a video game twenty-two years after the events of the 1995 film. They find themselves trapped inside the game as a set of adult avatars, seeking to complete a quest alongside another player who has been trapped since 1996.",
    PosterURL:
      "https://m.media-amazon.com/images/I/61KPF16khwS._AC_UF1000,1000_QL80_.jpg",
    Rating: 6,
    Trailer: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
  },
];
export default MovieData;
