export default function PostMetadata({
    title,
    standfirst,
    date_created,
    date_modified,
    path}) {
    
    return (
        <div>
            <h2>{title}</h2>
            <h3>{standfirst}</h3>
            <p>{date_created}</p>
            <p>{date_modified}</p>
            <p>{path}</p>
        </div>
    )
}