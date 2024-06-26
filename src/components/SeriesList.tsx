import SeriesCard from './SeriesCard';

interface SeriesItem {
  id: number;
  name: string;
  categories: string[];
  created_at: string;
  streaming_service: string;
  description: string;
  category: string;
  average_rating: number;
  seasons: number;
  episodes_per_season: number;
  image_url: string;
}

interface SeriesListProps {
  series?: SeriesItem[];
}

const SeriesList = ({series = []}: SeriesListProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {series.map((seriesItem) => (
          <SeriesCard key={seriesItem.id} series={seriesItem} />
        ))}
      </div>
    </div>
  );
};

export default SeriesList;

