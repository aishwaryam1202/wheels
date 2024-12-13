function DataFetcher({ render }) {
  const data = ["React", "Angular", "Vue"]; // Example data
  return render(data);
}

const  Appo = ()=> {
  return (
    <DataFetcher
      render={(data) => (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    />
  );
}

export default Appo;
