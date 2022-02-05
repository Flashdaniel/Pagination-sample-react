import "./styles.css";

export default function App() {
  return (
    <>
      <h2>Pagination</h2>
      <p>Responsive pagination with hover effects:</p>

      <div className="pagination">
        <a href="#home">&laquo;</a>
        <a href="#home">1</a>
        <a href="#home" className="active">
          2
        </a>
        <a href="#home">3</a>
        <a href="#home">4</a>
        <a href="#home">5</a>
        <a href="#home">6</a>
        <a href="#home">7</a>
        <a href="#home">&raquo;</a>
      </div>
    </>
  );
}
