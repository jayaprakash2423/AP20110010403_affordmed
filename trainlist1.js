

const Train = ({ train }) => {
    return (
      <div>
        <h2>{train.trainName}</h2>
        <p>Train Number: {train.trainNumber}</p>
        {}
      </div>
    );
  };
  
  const TrainList = () => {
    
  
    return (
      <div>
        {trains.map(train => (
          <Train key={train.trainNumber} train={train} />
        ))}
      </div>
    );
  };
  
  export default TrainList;
  