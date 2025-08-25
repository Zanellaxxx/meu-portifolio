export default function Card({ image, title, description }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', margin: '1rem', width: '300px', textAlign: 'center' }}>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}