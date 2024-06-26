// src/components/SeriesForm.tsx
import React, { useState } from 'react';
import { createBrowserSupabaseClient } from "../lib/supabase-ssr";

const STREAMING_SERVICES = [
    { value: 'netflix', label: 'Netflix' },
    { value: 'max', label: 'MAX' },
    { value: 'amazon', label: 'Amazon Prime' },
    { value: 'disney', label: 'Disney+' },
    { value: 'hulu', label: 'Hulu' },
    { value: 'paramount', label: 'Paramount+' },
    { value: 'apple', label: 'Apple TV+' },
]

const CATEGORIES = [
    { value: 'action', label: 'Action' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'drama', label: 'Drama' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'horror', label: 'Horror' },
    { value: 'mystery', label: 'Mystery' },
    { value: 'romance', label: 'Romance' },
    { value: 'sci_fi', label: 'Sci-Fi' },
    { value: 'thriller', label: 'Thriller' },
    { value: 'history', label: 'History' },
    { value: 'humor', label: 'Humor' },
]

const SeriesForm: React.FC = () => {
    const [name, setName] = useState('');
    const [streamingService, setStreamingService] = useState('');
    const [seasons, setSeasons] = useState(0);
    const [episodesPerSeason, setEpisodesPerSeason] = useState(0);
    const [longDescription, setLongDescription] = useState('');
    const [categories, setCategories] = useState<string[]>([]);
    const [imageUrl, setImageUrl] = useState('');
    const [averageRating, setAverageRating] = useState('');

    const supabase = createBrowserSupabaseClient();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { data, error } = await supabase.from('series').insert([
            {
                name,
                long_description: longDescription,
                streaming_service: streamingService,
                seasons: seasons,
                episodes_per_season: episodesPerSeason,
                categories,
                average_rating: parseFloat(averageRating),
                image_url: imageUrl,
            },
        ]);

        if (error) console.error('Error adding series:', error);
        else {
            setName('');
            setStreamingService('');
            setSeasons('');
            setEpisodesPerSeason('');
            setLongDescription('');
            setCategories([]);
            setImageUrl('');
            setAverageRating('');
            alert('Series added successfully!');
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold my-4">Add New Series</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                    className="input input-bordered w-full"
                />
                <select
                    value={streamingService}
                    onChange={(e) => setStreamingService(e.target.value)}
                    required
                    className="select select-bordered w-full"
                >
                    <option value="" disabled>Streaming Service</option>
                    {STREAMING_SERVICES.map((service) => (
                        <option key={service.value} value={service.value}>
                            {service.label}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    value={seasons}
                    onChange={(e) => setSeasons(e.target.value)}
                    placeholder="Number of Seasons"
                    required
                    className="input input-bordered w-full"
                />
                <input
                    type="number"
                    value={episodesPerSeason}
                    onChange={(e) => setEpisodesPerSeason(e.target.value)}
                    placeholder="Episodes per Season"
                    required
                    className="input input-bordered w-full"
                />
                <textarea
                    value={longDescription}
                    onChange={(e) => setLongDescription(e.target.value)}
                    placeholder="Description"
                    required
                    className="textarea textarea-bordered w-full"
                />
                <select
                    value={categories}
                    onChange={(e) => setCategories([e.target.value || 'drama'])}
                    required
                    className="select select-bordered w-full"
                >
                    <option value="" disabled />
                    {CATEGORIES.map((category) => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Image URL"
                    required
                    className="input input-bordered w-full"
                />
                <input
                    type="number"
                    value={averageRating}
                    onChange={(e) => setAverageRating(e.target.value)}
                    placeholder="Average Rating"
                    required
                    className="input input-bordered w-full"
                />
                <button type="button" className="btn btn-primary w-full" onClick={handleSubmit}> Add Series </button>
            </form>
        </div>
    );
};

export default SeriesForm;
