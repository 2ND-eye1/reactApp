interface ReviewProps {
  name: string;
}

function Review({ name }: ReviewProps) {
  return (
    <div>
      <p>Anime: {name}</p>
    </div>
  );
}

export default Review;
