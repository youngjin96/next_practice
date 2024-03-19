import { URL } from "../app/(home)/page";

async function getVideos(id: string) {
    const response = await fetch(`${URL}/${id}/videos`);
    return await response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    
    return <h6>{JSON.stringify(videos)}</h6>
}