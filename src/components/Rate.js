export default function Rate(setSearchRating) {
  const arrStar = [1, 2, 3, 4, 5];
  return (
    <div>
      {arrStar.map((el) =>
        el <= setSearchRating.rate ? (
          <i className="fas fa-star" key={el}></i>
        ) : (
          <i className="far fa-star" key={el}></i>
        )
      )}
    </div>
  );
}
