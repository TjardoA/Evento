import ArtistCard from "./ArtistCard";

export default function PopularEvents() {
  return (
    <div className="py-12">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl"> Popular Events</h1>
      </div>
      <ArtistCard />;
    </div>
  );
}
